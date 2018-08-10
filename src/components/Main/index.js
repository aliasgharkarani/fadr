import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableNativeFeedback,
  ViewPagerAndroid,
  ToolbarAndroid,
  TextInput,
  ListView,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, List, ListItem, } from 'native-base';
import { Card } from 'react-native-elements';
import { Drawer } from 'native-base';
import SideBar from '../SideBar/index';
// import * as firebase from 'firebase';
const { height, width, fontScale, } = Dimensions.get('window');

const fake = [
  {
    "id": "Beauty & SPA",
    "space": "25 near you",
    "img": require('../../assets/logo.png'),
    "img2": require('../../assets/logo.png'),
    "img3": require('../../assets/logo.png'),
  },
  {
    "id": "Home Repairs",
    "space": "25 near you",
    "img": require('../../assets/logo.png'),
    "img2": require('../../assets/logo.png'),
    "img3": require('../../assets/logo.png')
  },
  {
    "id": "Home Cleaning",
    "space": "25 near you",
    "img": require('../../assets/logo.png'),
    "img2": require('../../assets/logo.png'),
    "img3": require('../../assets/logo.png')
  },
  {
    "id": "Gardening",
    "space": "25 near you",
    "img": require('../../assets/logo.png'),
    "img2": require('../../assets/logo.png'),
    "img3": require('../../assets/logo.png')
  },
  {
    "id": "Electronics",
    "space": "25 near you",
    "img": require('../../assets/logo.png'),
    "img2": require('../../assets/logo.png'),
    "img3": require('../../assets/logo.png')
  },
  {
    "id": "Donctor",
    "space": "25 near you",
    "img": require('../../assets/logo.png'),
    "img2": require('../../assets/logo.png'),
    "img3": require('../../assets/logo.png')
  },
  {
    "id": "Gardening",
    "space": "25 near you",
    "img": require('../../assets/logo.png'),
    "img2": require('../../assets/logo.png'),
    "img3": require('../../assets/logo.png')
  },
  {
    "id": "Electronics",
    "space": "25 near you",
    "img": require('../../assets/logo.png'),
    "img2": require('../../assets/logo.png'),
    "img3": require('../../assets/logo.png')
  },
  {
    "id": "Donctor",
    "space": "25 near you",
    "img": require('../../assets/logo.png'),
    "img2": require('../../assets/logo.png'),
    "img3": require('../../assets/logo.png')
  }
]
class Main extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    console.warn(this.props)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(fake),
      data: true,
      boolean: true
    };
  }
  static navigationOptions = {
    title: "App"
  };

  gotoOptions = () => {
    this.props.navigation.navigate("Optionss")
  }
  gotoCalender = () => {
    this.props.navigation.navigate("Calender")
  }

  operations = () => {
    this.setState({ data: false, boolean: false })
  }
  noOperations = () => {
    this.setState({ data: true, boolean: true })
  }
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };

  render() {

    return (
      <Drawer
        navigation={this.props.navigation}
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} navigation={this.props.navigation} onclose={this.closeDrawer} />}
        onClose={() => this.closeDrawer()} >

        {Platform.OS === 'ios' ? <View style={{ height: "2.5%", backgroundColor: "#9f80d3" }}> </View> : null}
        <View style={{ flexDirection: "row", backgroundColor: "#9f80d3", alignItems: "center", height: width / 6, width }}>
          <TouchableOpacity onPress={this.openDrawer} style={{ width: "20%" }} activeOpacity={1}>
            <View style={{ margin: 1, alignItems: "center" }}>
              {/* <Image style={{ width: width / 10, height: width / 10, color: "gainsboro" }} source={require('../../assets/logo.png')} /> */}
              <Icon name="menu" style={{ color: "#ffffff" }} />
            </View>
          </TouchableOpacity>

          {/* Drawer */}

          <View style={{ width: "60%", margin: 3, alignItems: "center" }}>
            <View style={styles.inputs1}>

              <View style={{ width: width / 25, height: width / 25, textAlign: "center", alignSelf: "center" }} >
                <Image source={require('../../assets/logo.png')} style={{ height: "100%", width: "100%" }} />
              </View>

              <TextInput
                underlineColorAndroid="white"
                style={{ height: 35, width: "90%", borderColor: "white", textAlign: "center", alignSelf: "center" }}
                placeholder="Search service"
              />
            </View>
          </View>
          <View style={{ width: "20%", alignItems: "center" }}>
            <Image style={{ width: width / 12, height: width / 12, color: "gainsboro" }} resizeMode="contain" source={require('../../assets/logo.png')} />
          </View>
        </View>


        <ScrollView>
          <View>
            <ScrollView style={{ backgroundColor: "white" }} horizontal={true} >
              {
                fake.map((val, ind) => {
                  return <View style={{ height: width / 3.4, padding: 15 }} >
                    <View style={{ width: width / 2.4, height: width / 4.3, }} >
                      <Image style={{ width: "100%", height: "100%", borderRadius: 8 }} source={val.img2} />
                      <View style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        justifyContent: "flex-end"
                      }} >
                        <View style={{
                          position: "absolute",
                          // bottom: 20,
                          // left: 20,
                          borderRadius: 10,
                          width: "100%",
                          height: "100%",
                          backgroundColor: "rgba(0,0,0,0.6)",
                          justifyContent: "flex-end",
                          paddingLeft: 15,
                        }}>
                          <Text style={{ fontSize: 19, color: "white", fontWeight: "bold" }} >{val.id}</Text>
                          <Text style={{ fontSize: 15, paddingTop: 1, color: "#9f80d3", fontWeight: "bold" }} >{val.space}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                })
              }
            </ScrollView>
          </View>

          <ListView contentContainerStyle={styles.list}
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
              <View style={styles.card}>
                <View style={{ borderRadius: 20, width: width / 7, height: width / 7 }} >
                  <Image resizeMode="contain" style={{ width: "100%", height: "100%" }} source={rowData.img} />
                </View>
                <Text style={[styles.item, { fontSize: fontScale * 13 }]}>{rowData.id}</Text>
              </View>
            }
          />

        </ScrollView>

        <View>
          {(this.state.boolean) ?
            <Footer style={{ bottom: 0, backgroundColor: "green", color: "orange", paddingBottom: 0, marginBottom: 0, paddingTop: 0, marginTop: 0 }}>
              <FooterTab style={{ backgroundColor: "#ffffff", paddingBottom: 0, marginBottom: 0, color: "black" }}>

                <Button style={{ backgroundColor: "#ffffff", borderBottomWidth: 5, borderBottomColor: "#9f80d3" }} onPress={() => this.setState({ data: false, boolean: false })}>
                  <Image resizeMode="contain" style={{ padding: 0, margin: 0, width: width / 15, height: width / 15 }} source={require("../../assets/logo.png")} />
                </Button>
                <Button style={{ backgroundColor: "#ffffff" }} onPress={() => this.props.navigation.navigate("Page")}>
                  <Image resizeMode="contain" style={{ padding: 0, margin: 0, width: width / 15, height: width / 15 }} source={require("../../assets/logo.png")} />
                </Button>
                <Button style={{ backgroundColor: "#ffffff" }}>
                  <Image resizeMode="contain" style={{ padding: 0, margin: 0, width: width / 15, height: width / 15 }} source={require("../../assets/logo.png")} />
                </Button>
                <Button style={{ backgroundColor: "#ffffff" }}>
                  <Image resizeMode="contain" style={{ padding: 0, margin: 0, width: width / 15, height: width / 15 }} source={require("../../assets/logo.png")} />
                </Button>
                <Button style={{ backgroundColor: "#ffffff" }} onPress={() => this.props.navigation.navigate("Responses")}>
                  <Image resizeMode="contain" style={{ padding: 0, margin: 0, width: width / 15, height: width / 15 }} source={require("../../assets/logo.png")} />
                </Button>

              </FooterTab>
            </Footer>
            : null
          }
        </View>

      </Drawer>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f2',
  }
  ,
  toolbar: {
    backgroundColor: '#2196F3',
    height: 56,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  inputs1: {
    width: "100%",
    height: "70%",
    borderRadius: 8,
    marginLeft: "auto",
    marginRight: "auto",
    // marginTop: "1%",
    marginBottom: 0,
    backgroundColor: "white",
    padding: 10,
    flexDirection: 'row',

  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    width,
    height: width / 0.9,
    backgroundColor: "red",
    // height:width/3,
    justifyContent: "center"
  },
  item: {
    color: "#6d575a",
    // fontSize:15
  },
  card: {
    backgroundColor: "white",
    // backgroundColor:"blue",
    borderRadius: 8,
    // width: "30%",
    // height: "30%",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    padding: 5,
    // flex:1,
    width: width / 3.6,
    height: width / 3
  },
  contentContainer: {
    paddingVertical: 20
  },
  full: {
    height,
    position: 'absolute',
    width: "100%",
    backgroundColor: "rgba(159, 128, 211,0.9)"
    // backgroundColor:"red"
  },
  imageDiv: {
    height,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  listItems: {
    textAlign: "center",
    paddingTop: "1%",
    fontSize: fontScale * 18,
    color: "white",
    fontWeight: "bold"
  },
  CrossSign: {
    fontWeight: "bold",
    borderWidth: 2,
    width: "100%",
    padding: 40,
    borderRadius: 100,
    borderColor: "white"
  }
});

export default Main;
