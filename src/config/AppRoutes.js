import React from 'react'
// import {
//   App,
//   Signup
// } from './../components/index';
import Signin from './../container/Signin/index';
import Signup from './../container/Signup/index';
import Main from './../container/Main/index'
import Orders from './../container/Orders/index'
import Addproducts from './../container/Addproducts/index'
import { StackNavigator, DrawerNavigator, NavigationActions } from "react-navigation";
// import history from '../components/History'

const NavigationApp = StackNavigator({
  Signup: {
    screen: Signup,
    navigationOptions: {
      header: null,
    }
  },
  Signin: {
    screen: Signin,
    navigationOptions: {
      header: null,
    }
  },
  Main: {
    screen: Main,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    }
  },
  Orders: {
    screen: Orders,
    navigationOptions: {
      header: null,
    }
  },
  Addproducts: {
    screen: Addproducts,
    navigationOptions: {
      header: null,
    }
  },
}
)

export default NavigationApp;