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

class Signin extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    console.warn(this.props)
    this.state = {
      email: "",
      password: "",
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
  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView keyboardDismissMode='on-drag' contentContainerStyle={{ height:Platform.OS === 'ios'? height: height/ 1.035}}>
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
                <Text style={styles.buttonFont}>LOGIN</Text>
              </Button>
            </View>
          </View>

          <View style={{ justifyContent: "flex-end", height: width / 2.7 }}>
            <Text style={{ textAlign: 'center', color: "black", fontSize: fontScale * 15 }}>Don't have an account yet? <Text style={{ color: 'blue', fontSize: fontScale * 18, fontWeight: 'bold' }} onPress={() => { this.props.navigation.navigate("Signup") }}>Register</Text></Text>
          </View>
        </ScrollView>
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
  buttonSignUp: {
    width: width / 1.9,
    height: width / 7.4,
    backgroundColor: "#3963FB",
    borderRadius: 12,
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