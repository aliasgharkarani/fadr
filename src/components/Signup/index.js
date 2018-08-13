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
  ImageBackground
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
    // height: Platform.OS === 'ios' ? 200 : 100
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/signinlogo.jpeg')} style={{ width: '100%', height: '100%', }}  >
          <View style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
            <ScrollView  contentContainerStyle={{ height: Platform.OS === 'ios' ? height : height, opacity: 1 }}>
              <View style={styles.imageDiv}>
                <View style={{ height: width / 2, width: width / 3, opacity: 1 }}>
                  <Image
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="contain"
                    source={require('../../assets/logo.png')}
                  /></View>
              </View>

              <View style={styles.mainCenter}>
                <View style={styles.input1}>
                  <View style={{ justifyContent: "center", height: width / 15, width: width / 20 }}>
                    <Image
                      source={require('../../assets/name.png')}
                      style={{ width: '100%', height: '100%' }}
                      resizeMode='contain'
                    />
                  </View>
                  <TextInput
                    underlineColorAndroid="white"
                    style={{ height:Platform.OS === 'ios' ? width / 10:width /8, color: 'rgb(180,180,180)', width: "90%",borderColor: "white", fontSize: fontScale * 20, paddingRight: "2%", paddingLeft: "2%" }}
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                    placeholder="Username"
                    placeholderTextColor="#CFCFD0"
                    autoCapitalize='none'
                  />
                </View>
                <View style={styles.input1}>
                  <View style={{ justifyContent: "center", height: width / 18, width: width / 20 }}>
                    <Image
                      source={require('../../assets/mail.png')}
                      style={{ width: '100%', height: '100%' }}
                      resizeMode='contain'
                    />
                  </View>
                  <TextInput
                    underlineColorAndroid="white"
                    style={{ height:Platform.OS === 'ios' ? width / 10:width /8, color: 'rgb(180,180,180)', width: "90%", borderColor: "white", fontSize: fontScale * 20, paddingRight: "2%", paddingLeft: "2%" }}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                    placeholder="Email"
                    placeholderTextColor="#CFCFD0"
                    autoCapitalize='none'
                  />
                </View>
                <View style={styles.input2}>
                  <View style={{ justifyContent: "center", height: width / 18, width: width / 20 }}>
                    <Image
                      source={require('../../assets/lock.png')}
                      style={{ width: '100%', height: '100%' }}
                      resizeMode='contain'
                    />
                  </View>
                  <TextInput
                    secureTextEntry={true}
                    underlineColorAndroid="white"
                    style={{ height:Platform.OS === 'ios' ? width / 10:width /8, color: 'rgb(180,180,180)', width: "80%", borderColor: "white", fontSize: fontScale * 20, paddingRight: "2%", paddingLeft: "2%" }}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    placeholder="Password"
                    placeholderTextColor="#CFCFD0"
                    autoCapitalize='none'
                  />
                  <View style={{ justifyContent: "center" }}>
                    <Image
                      source={require('../../assets/eye.png')} resizeMode="contain" style={{ width: width / 15, height: width / 18 }} />
                  </View>
                </View>

                <View>
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
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F8F9',
  },
  imageDiv: {
    alignItems: 'center',
    justifyContent: "center",
    paddingTop: "5%",
  },
  input1: {
    marginTop: '3%',
    backgroundColor: "white",
    padding: 10,
    width: width / 1.3,
    flexDirection: 'row',
    alignItems: "center",
    borderRadius: 10,
    zIndex: 5,
    elevation: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
  },
  input2: {
    marginTop: '3%',
    marginBottom: '6%',
    backgroundColor: "white",
    padding: 10,
    width: width / 1.3,
    flexDirection: 'row',
    alignItems: "center",
    borderRadius: 10,
    zIndex: 5,
    elevation: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
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
    zIndex: 15,
    elevation: 15,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    shadowColor: 'blue',
  },
  mainCenter: {
    alignItems: "center",
    width,
    height: width / 1.4,

  }
});

export default Signup;