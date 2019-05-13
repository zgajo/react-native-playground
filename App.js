// In App.js in a new project

import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  Button,
  View,
  Text,
  SafeAreaView
} from "react-native";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";

class Screen1 extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: "#6a51ae" }]}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <Text style={[styles.paragraph, { color: "#fff" }]}>Light Screen</Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate("Screen2")}
          color="blue"
        />
      </SafeAreaView>
    );
  }
}

class Screen2 extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: "#ecf0f1" }]}>
        <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
        <Text style={styles.paragraph}>Dark Screen</Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate("Screen1")}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

export default createAppContainer(
  createDrawerNavigator({
    Screen1: {
      screen: Screen1
    },
    Screen2: {
      screen: Screen2
    }
  })
);
