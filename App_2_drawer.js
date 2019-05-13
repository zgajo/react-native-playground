// In App.js in a new project

import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={{
          uri:
            "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjFk5axrpniAhUHa1AKHevfD6QQjRx6BAgBEAU&url=http%3A%2F%2Fwww.iconarchive.com%2Ftag%2Fchat&psig=AOvVaw0o9OxjSZDY_GgBgDZ6EsBf&ust=1557866308904656"
        }}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  render() {
    return (
      <Button
        onPress={() => {
          this.props.navigation.navigate("Notifications");
          this.props.navigation.openDrawer();
        }}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Notifications",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={{
          uri:
            "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiU7ae-rpniAhUELVAKHWNQB0EQjRx6BAgBEAU&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F2579384%2Falarm_bell_notification_notify_icon&psig=AOvVaw3Pji6rUiipmi18CYUEUl4u&ust=1557866332242207"
        }}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
});

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen
  },
  Notifications: {
    screen: MyNotificationsScreen
  }
});

export default createAppContainer(MyDrawerNavigator);
