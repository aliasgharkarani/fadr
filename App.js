/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import { Root } from 'native-base';
const {height,width,fontScale} =Dimensions.get("window")
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Root>
        <View>
          <Text onPress={() => navigate('Profile')}>navigate to profile</Text>
        </View>
      </Root>
    )
  }
}

class ProfileScreen extends React.Component {
  static snavigationOptions = {
    title: "Profile"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text onPress={() => navigate('Home')}>navigate to profile</Text>
      </View>
    )
  }
}

const NavigationApp = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen }
}
)

export default class App extends Component {
  render() {
    return (
      <Root>
        <NavigationApp />
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   height,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
