import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

export default class App extends React.Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: "AIzaSyAGde8BY3k3JIg2ktes7OvmZuKOFXI0R1Y",
    authDomain: "authentication-for-reactnative.firebaseapp.com",
    databaseURL: "https://authentication-for-reactnative.firebaseio.com",
    projectId: "authentication-for-reactnative",
    storageBucket: "",
    messagingSenderId: "311397383975"
  });

  firebase.auth().onAuthStateChange((user) => {
    if(user){
      this.setState({ loggedIn: true });
    }else{
      this.setState({ loggedIn: false });
    }
  });
  }

  renderContent(){
    switch(this.state.loggedIn){
      case true:
      return(
        <Button onPress={() => firebase.auth().signOut()}>
          Log Out
        </Button>
      );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return(
      <View style={{ flex: 1 }}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
// });

// //App.js- Place code here for android
//
// //import a library to help create a Component
// import React frpm 'react';
// import { Text, AppRegistry } from 'react-native';
//
// //Create a Component
// const App = () => {
//   return(
//     <Text>Some Text</Text>
//   );
// };
//
// //Render it to a device
// AppRegistry.registerComponent('albums', () => App);
