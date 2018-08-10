import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableNativeFeedback,
  Dimensions,
  ScrollView,
  TextInput,
} from 'react-native';
// import { CheckBox } from 'react-native-elements';
import { Button, CheckBox, ListItem } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import * as firebase from 'firebase';
const { height, width, fontScale } = Dimensions.get('window');

class Signup extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    console.warn(this.props)
    this.state = {
      name: "",
      accountType: "user",
      email: "",
      password: "",
    }

    if (firebase.auth().currentUser) {
      console.log(firebase.auth().currentUser)
      this.props.navigation.navigate("Main")
    }
    else {
      console.log("firebase.auth().currentUser", firebase.auth().currentUser)
    }
    // this.signup = this.signup.bind(this);
  }

  // static navigationOptions = {
  //   title: "App"
  // };
  // console.log();
  signup = () => {
    let user = {
      name: this.state.name,
      accountType: this.state.accountType,
      email: this.state.email,
      password: this.state.password
    }
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((studentcreatedUser) => {
        // delete user.password;
        // delete user.confirmPassword;
        // user.uid = studentcreatedUser.uid;
        firebase.database().ref(`user/${firebase.auth().currentUser.uid}`).set(user)
        this.props.navigation.navigate("Signin")
        // alert("nbhfbh")
        // alert(this.state.password)
      }).catch(
      (Error) => { alert(Error.message) }
      )
    // alert("cbvbvb");
    // alert();
  }
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <ScrollView keyboardDismissMode='on-drag' contentContainerStyle={{ height: height / 1.035 }}>
          {/* <ScrollView keyboardDismissMode='on-drag'> */}
          {/* <View style={{ height }}> */}
          <View style={styles.imageDiv}>
            <View style={{ height: width / 2, width: width / 3 }}>
              <Image
                style={{ width: '100%', height: '100%' }}
                resizeMode="contain"
                source={require('../../assets/logo.png')}
              /></View>
          </View>

          <View style={styles.mainCenter}>
            <View style={styles.input1}>
              <View style={{ justifyContent: "center", height: width / 15, width: width / 15 }}>
                <Image
                  source={require('../../assets/name.png')} />
              </View>
              <TextInput
                underlineColorAndroid="white"
                style={{ height: width / 10, width: "90%", borderColor: "white", fontSize: fontScale * 20, paddingRight: "2%", paddingLeft: "2%" }}
                onChangeText={(name) => this.setState({ name })}
                value={this.state.name}
                placeholder="Username"
                placeholderTextColor="#CFCFD0"
                autoCapitalize='none'
              />
            </View>
            <View style={styles.input1}>

              <View style={{ justifyContent: "center", height: width / 15, width: width / 15 }}>
                <Image
                  source={require('../../assets/mail.png')} />
              </View>
              <TextInput
                underlineColorAndroid="white"
                style={{ height: width / 10, width: "90%", borderColor: "white", fontSize: fontScale * 20, paddingRight: "2%", paddingLeft: "2%" }}
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email}
                placeholder="Email"
                placeholderTextColor="#CFCFD0"
                autoCapitalize='none'
              />
            </View>
            <View style={styles.input2}>
              <View style={{ justifyContent: "center", height: width / 15, width: width / 15 }}>
                <Image
                  source={require('../../assets/lock.png')} />
              </View>
              <TextInput
                secureTextEntry={true}
                underlineColorAndroid="white"
                style={{ height: width / 10, width: "80%", borderColor: "white", fontSize: fontScale * 20, paddingRight: "2%", paddingLeft: "2%" }}
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
                placeholder="Password"
                placeholderTextColor="#CFCFD0"
                autoCapitalize='none'
              />
              <View style={{ justifyContent: "center" }}>
                <Image
                  source={require('../../assets/eye.png')} resizeMode="contain" style={{ width: width / 15 }} />
              </View>
            </View>

            <View style={styles.button}>
              <Button style={styles.buttonSignUp} title="Press Me" full info onPress={() => this.signup()}>
                <Text style={styles.buttonFont}>Register</Text>
              </Button>
            </View>
          </View>

          <View style={{ justifyContent: "flex-end", height: width / 2.7 }}>
            <Text style={{ textAlign: 'center', color: "black", fontSize: fontScale * 15 }}>Already have an account? <Text style={{ color: 'blue', fontSize: fontScale * 18, fontWeight: 'bold' }} onPress={() => { this.props.navigation.navigate("Signin") }} >Login</Text></Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#F7F8F9',
  },
  imageDiv: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    paddingTop: "5%",
    backgroundColor: "#F7F8F9"
  },
  input1: {
    marginTop: '3%',
    backgroundColor: "white",
    padding: 10,
    width: width / 1.3,
    flexDirection: 'row',
    alignItems: "center",
    borderRadius: 10,
    // borderTopRightRadius: 10,
    // borderTopLeftRadius: 10,
  },
  input2: {
    marginTop: '3%',
    marginBottom: '6%',
    backgroundColor: "white",
    padding: 10,
    width: width / 1.3,
    flexDirection: 'row',
    alignItems: "center",
    // borderTopWidth: 0.5,
    borderRadius: 10,
    // borderColor: 'grey'
  },
  buttonFont: {
    fontSize: fontScale * 28,
    fontWeight: "bold",
    color: "white"
  },
  buttonSignUp: {
    width: width / 1.9,
    height: width / 7.4,
    backgroundColor: "#3963FB",
    borderRadius: 12,
    // borderWidth: 1,
    zIndex: 20,
    elevation: 20,
    shadowColor: 'blue',
    shadowOffset: { width: 35, height: 35 },
    shadowOpacity: 9,
    shadowRadius: 2,
  },
  button: {
    // borderWidth: 1,
    // borderRadius: 2,
    // borderColor: '#ddd',
    // borderBottomWidth: 0,
    // elevation: 1,
    // marginLeft: 5,
    // marginRight: 5,
    // marginTop: 10,
  },
  mainCenter: {
    // flex: 1,
    alignItems: "center",
    width,
    height: width / 1.4,
    // backgroundColor: "blue"
    // marginBottom: '10%'
  }
});

export default Signup;