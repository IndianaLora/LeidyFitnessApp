import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
function Rutinas() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{ title: "Welcome" }} />
      <Stack.Screen name="Profile" />
    </Stack.Navigator>
  );
}
export default Rutinas;
