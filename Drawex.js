import React from "react";
import Alimentacion from "./Alimentacion";
import HomeScreen from "./HomeScreen";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const Drawer = createDrawerNavigator();

function Drawex() {
  return (
    <NavigationContainer style={styles.container}>

      <Drawer.Navigator
        initialRouteName="Home"
        name="Home"
        drawerStyle={{
          backgroundColor: "#faebd7",
          width: 240,
        }}
        drawerContentOptions={{
          activeTintColor: '#4682b4',
          itemStyle: { marginVertical: 2 },
        }}
      >
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
export default Drawex;
