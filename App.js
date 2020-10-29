import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Octicons';
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

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.toggleDrawer() }
        title="Menu"
      />
    </View>
  );
}
function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <Button onPress={() => navigation.goBack()} title="Go Back Home" />
      <Button onPress={navigation.toggleDrawer() } title="hey"/>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
   
      <NavigationContainer style={styles.container}>
        <Drawer.Navigator initialRouteName="Home">
        
        <Drawer.Screen name="Rutinas" component={HomeScreen} />
        <Drawer.Screen name="Alimetacion" component={NotificationsScreen} />
        </Drawer.Navigator>
       
      </NavigationContainer>
       
     
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "antiquewhite",
    alignItems: "left",
    justifyContent: "left",
  },
});
