import React from "react";
import { Entypo } from "@expo/vector-icons";
// import Constant from "expo-constants";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
// import { constant } from "async";
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          //   marginTop:Constant.statusBarHeight,
          backgroundColor: "#71bceb",
          flexDirection: "row",
          
        }}
      >
        <Entypo name="menu" size={50} color="black" style={styles.icon} />
        <Text style={styles.text}>Leidy Fitness</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "antiquewhite",
    marginTop: 28,
    alignItems: "center",
  },
  text: {
    marginTop: 14,
    marginRight: 250,
    color: "white",
    fontSize:16,
    
  },
  icon: {
    color: "white",
  },
});
export default HomeScreen;
