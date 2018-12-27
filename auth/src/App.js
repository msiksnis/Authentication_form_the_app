import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header, Button, Spinner } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyC9Mze19gJCk4wjTktNkze17I0hoSL1qDo",
      authDomain: "authenticationreactnativ-4f899.firebaseapp.com",
      databaseURL: "https://authenticationreactnativ-4f899.firebaseio.com",
      projectId: "authenticationreactnativ-4f899",
      storageBucket: "authenticationreactnativ-4f899.appspot.com",
      messagingSenderId: "898569020779"
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
