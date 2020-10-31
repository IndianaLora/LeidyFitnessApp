import React from "react";
import Alimentacion from "./Alimentacion"
import HomeScreen from "./HomeScreen"
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Octicons";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Alert,
  Button,
  prompt,
} from "react-native";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Drawer.Navigator initialRouteName="Home" style={styles.navigator}>
        <Drawer.Screen name="Rutinas" component={HomeScreen} />
        <Drawer.Screen name="Alimetacion" component={Alimentacion} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}










const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "antiquewhite",
    marginTop: 30,
  },
  menu: {
    flex: 1,
    backgroundColor: "antiquewhite",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  text: {
    textAlign: "center",
    color: "white",
    backgroundColor: "rosybrown",
    height: 50,
    fontSize: 30,
  },
  vieX: {
    backgroundColor: "blue",
  },
  image: {
    alignItems: "center",
    marginLeft: 100,
    marginTop: 200,
    width: 200,
    height: 300,
  },
  navigator: {
    backgroundColor: "#e9967a",
  },
});
