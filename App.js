import React from "react";
import Alimentacion from "./Alimentacion"
import HomeScreen from "./HomeScreen"
import Drawex from "./Drawex"
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
    <Drawex/>
  );
}

