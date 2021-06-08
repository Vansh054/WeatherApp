import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Header, Icon, Badge } from "react-native-elements";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WeatherScreen from "./screens/WeatherScreen";
import HomeScreen from "./screens/HomeScreen";
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const StackNavigator = createStackNavigator({
  Home: { screen: HomeScreen ,  navigationOptions: {
    headerShown: false,
  },},
  Weather: { screen: WeatherScreen },
});
const AppContainer = createAppContainer(StackNavigator);

const styling = StyleSheet.create({
  header: {
    fontSize: 30,
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  image: {
    height: 250,
    width: 250,
    alignSelf: "center",
  },
  report: {
    marginTop: 20,
    alignSelf: "center",
    fontSize: 20,
    fontFamily: "'Times New Roman', serif;",
  },
});
