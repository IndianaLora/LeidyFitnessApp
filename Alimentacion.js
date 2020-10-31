import React from "react"
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
function Alimentacion({ navigation })
{
    return (
        <SafeAreaView>
          <Button onPress={() => navigation.goBack()} title="Go Back Home" />
          <Button onPress={navigation.toggleDrawer()} title="hey" />
        </SafeAreaView>
      );

}



export default Alimentacion