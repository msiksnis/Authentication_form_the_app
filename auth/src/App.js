import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyC9Mze19gJCk4wjTktNkze17I0hoSL1qDo",
      authDomain: "authenticationreactnativ-4f899.firebaseapp.com",
      databaseURL: "https://authenticationreactnativ-4f899.firebaseio.com",
      projectId: "authenticationreactnativ-4f899",
      storageBucket: "authenticationreactnativ-4f899.appspot.com",
      messagingSenderId: "898569020779"
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
