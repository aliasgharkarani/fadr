import { AppRegistry } from 'react-native';
import App from './App';
import * as firebase from 'firebase';
import Signup from './src/index'
var config = {
    apiKey: "AIzaSyCjgjZC1v1d_fqDemBBGzd05Hl5lzrOqps",
    authDomain: "sugarandspice-34c66.firebaseapp.com",
    databaseURL: "https://fadr-27b86.firebaseio.com",
    projectId: "fadr-27b86",
    storageBucket: "gs://fadr-27b86.appspot.com",
    messagingSenderId: "925829288265"
  };
  firebase.initializeApp(config);
  console.disableYellowBox=true;
  
AppRegistry.registerComponent('fadr', () => Signup);
