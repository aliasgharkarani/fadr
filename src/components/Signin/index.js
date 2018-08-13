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
  ImageBackground,
  TouchableOpacity
} from 'react-native';
// import { CheckBox } from 'react-native-elements';
import { Button, CheckBox, ListItem } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import * as firebase from 'firebase';
const { height, width, fontScale } = Dimensions.get('window');

class Signin extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    console.warn(this.props)
    this.state = {
      email: "",
      email2: "",
      password: "",
      forgotpasswordpage: true,
    }
    // this.signup = this.signup.bind(this);
  }

  static navigationOptions = {
    title: "App"
  };
  signup = () => {
    let user = {
      email: this.state.email,
      password: this.state.password
    }
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then((studentcreatedUser) => {
        // delete user.password;
        // delete user.confirmPassword;
        // alert("aaaa")
        // user.uid = studentcreatedUser.uid;
        //Database Work
        // firebase.database().ref(`user/${firebase.auth().currentUser.uid}`).set(user)
        // alert("nbhfbh")
        // alert(this.state.password)
        this.props.navigation.navigate("Main")
      }).catch(
      (Error) => { alert(Error.message) }
      )
  }

  handleResetPassword(auth, actionCode, continueUrl, lang) {
    // Localize the UI to the selected language as determined by the lang
    // parameter.
    var accountEmail;
    // Verify the password reset code is valid.
    auth.verifyPasswordResetCode(actionCode).then(function (email) {
      var accountEmail = email;

      // TODO: Show the reset screen with the user's email and ask the user for
      // the new password.

      // Save the new password.
      auth.confirmPasswordReset(actionCode, newPassword).then(function (resp) {
        // Password reset has been confirmed and new password updated.

        // TODO: Display a link back to the app, or sign-in the user directly
        // if the page belongs to the same domain as the app:
        // auth.signInWithEmailAndPassword(accountEmail, newPassword);

        // TODO: If a continue URL is available, display a button which on
        // click redirects the user back to the app via continueUrl with
        // additional state determined from that URL's parameters.
      }).catch(function (error) {
        // Error occurred during confirmation. The code might have expired or the
        // password is too weak.
      });
    }).catch(function (error) {
      // Invalid or expired action code. Ask user to try to reset the password
      // again.
    });
  }
  resetPassword = () => {
    // let usern = {
    //   email: this.state.email2
    // }
    // firebase.auth().sendPasswordResetEmail('aakproductionpk@gmail.com').then(function () {
    firebase.auth().sendPasswordResetEmail(this.state.email2).then(function () {      
      // Email sent.
      alert("Email sent");
      // alert(usern.email)
    }).catch(function (error) {
      alert("An error happened");
      // alert(user.email)
      {/* alert(this.state.email) */ }
      // An error happened.
    })
  }
  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View>
        {(this.state.forgotpasswordpage) ?
          <View style={styles.container}>
            <ImageBackground source={require('../../assets/signinlogo.jpeg')} style={{ width: '100%', height: '100%', }}  >
              <View style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
                <ScrollView  contentContainerStyle={{ height: Platform.OS === 'ios' ? height : height }}>
                  <View style={styles.imageDiv}>
                    <View style={{ height: width / 1.8, width: width / 3 }}>
                      <Image
                        style={{ width: '100%', height: '100%' }}
                        resizeMode="contain"
                        source={require('../../assets/logo.png')}
                      /></View>
                  </View>
                  <View style={styles.mainCenter}>
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
                        style={{ height:Platform.OS === 'ios' ? width/10 : width /8, width: "90%", borderColor: "white", color: 'rgb(180,180,180)', fontSize: fontScale * 20, paddingRight: "2%", paddingLeft: "2%" }}
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
                        style={{ height:Platform.OS === 'ios' ? width/10 : width /8, width: "80%", color: 'rgb(180,180,180)', borderColor: "white", fontSize: fontScale * 20, paddingRight: "2%", paddingLeft: "2%" }}
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
                    <TouchableOpacity onPress={() => { this.setState({ forgotpasswordpage: false }) }}><Text style={{ color: "#ffffff", fontSize: fontScale * 14 }}>Forgot Password</Text></TouchableOpacity>

                    <View>
                      <Button style={styles.buttonSignUp} title="Press Me" full info onPress={() => this.signup()} >
                        <Text style={styles.buttonFont}>LOGIN</Text>
                      </Button>
                    </View>
                  </View>

                  <View style={{ justifyContent: "flex-end", height: width / 2.7 }}>
                    <Text style={{ textAlign: 'center', color: "black", fontSize: fontScale * 15 }}>Don't have an account yet? <Text style={{ color: 'blue', fontSize: fontScale * 18, fontWeight: 'bold' }} onPress={() => { this.props.navigation.navigate("Signup") }}>Register</Text></Text>
                  </View>
                </ScrollView>
              </View>
            </ImageBackground>
          </View> :
          <View style={styles.container}>
            <ImageBackground source={require('../../assets/signinlogo.jpeg')} style={{ width: '100%', height: '100%', }}  >
              <View style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
                <ScrollView contentContainerStyle={{ height: Platform.OS === 'ios' ? height : height }}>
                  <View style={styles.imageDiv1}>
                    <View style={{ height: width / 1.8, width: width / 3 }}>
                      <Image
                        style={{ width: '100%', height: '100%' }}
                        resizeMode="contain"
                        source={require('../../assets/logo.png')}
                      /></View>
                  </View>

                  <View style={styles.mainCenter}>
                    <View><Text style={{ color: 'black', fontSize: fontScale *27, fontWeight: 'bold' }}>Forgot Password ?</Text></View>
                    <View style={{ marginBottom: '5%' }}><Text style={{ color: "grey", fontSize: fontScale * 14 }}>Please insert your email address so we can{"\n"} send you a reset email link</Text></View>
                    <View>
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
                          style={{ height:Platform.OS === 'ios' ? width/10 : width /8, width: "90%", borderColor: "white", color: 'rgb(180,180,180)', fontSize: fontScale * 20, paddingRight: "2%", paddingLeft: "2%" }}
                          onChangeText={(email2) => this.setState({ email2 })}
                          value={this.state.email2}
                          placeholder="Email"
                          placeholderTextColor="#CFCFD0"
                          autoCapitalize='none'
                        />
                      </View>

                      <View style={styles.button}>
                         <Button style={styles.buttonSignUp} title="Press Me" full info onPress={() => this.resetPassword()}>
                        
                        {/* <Button style={styles.buttonSignUp} title="Press Me" full info onPress={() => alert(this.state.email2)}> */}
                          
                          <Text style={styles.buttonFont}>SEND</Text>
                        </Button>
                      </View>
                    </View>

                    <View style={{ justifyContent: "flex-end", height: width / 2.7 }}>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </ImageBackground>
          </View>}
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
    // backgroundColor:'green',
    // height:width/3,
  },
  imageDiv1: {
    alignItems: 'center',
    justifyContent: "center",
    paddingTop: "5%",
    // backgroundColor:'green',
    height: width / 2,
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
    shadowOpacity: 0.6,
    shadowRadius: 2,
    shadowOffset: { width: 2, height: 2 },
  },
  input2: {
    marginTop: '3%',
    marginBottom: '8%',
    backgroundColor: "white",
    padding: 10,
    width: width / 1.3,
    flexDirection: 'row',
    alignItems: "center",
    borderRadius: 10,
    zIndex: 5,
    elevation: 5,
    shadowOpacity: 0.6,
    shadowRadius: 2,
    shadowOffset: { width: 2, height: 2 },
  },
  buttonFont: {
    fontSize: fontScale * 28,
    fontWeight: "bold",
    color: "white"
  },
  button: {
    marginTop: '5%'
  },
  buttonSignUp: {
    width: width / 1.9,
    height: width / 7.4,
    alignSelf: 'center',
    backgroundColor: "#3963FB",
    borderRadius: 12,
    // backgroundColor:'red',
    zIndex: 15,
    elevation: 15,
    shadowColor: 'blue',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
  },
  mainCenter: {
    alignItems: "center",
    width,
    height: width / 1.4,
  }
});

export default Signin;