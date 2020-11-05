import React from "react";

import { Entypo } from "@expo/vector-icons";
import { Card } from "react-native-elements";
import { StyleSheet, Text, View, SafeAreaView,Component } from "react-native";
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View
      
        style={{
          //   marginTop:Constant.statusBarHeight,
          backgroundColor: "#4682b4",
          flexDirection: "row",
        }}
      >
        <Entypo name="menu" size={50} color="black" style={styles.icon} onPress={()=>{navigation.openDrawer()}} />
        <Text style={styles.text}>Leidy Fitness</Text>
      </View>
      <View style={styles.card}>
        <Card>
          <Card.Title style={styles.tittle1}>Ejercicios</Card.Title>
          <Card.Image
            source={{
              uri:
                "https://image.freepik.com/free-vector/people-gym_52683-4075.jpg",
            }}
            style={{ width: 200, height: 200, borderRadius: 20 }}
          ></Card.Image>
        </Card>
      </View>
      <View style={styles.card}>
        <Card style={styles.card}>
          <Card.Title style={styles.tittle2}>Alimentacion</Card.Title>
          <Card.Image
            source={{
              uri:
                "https://cdn4.vectorstock.com/i/1000x1000/72/03/healthy-food-and-fitness-icons-vector-21787203.jpg",
            }}
            style={{ width: 200, height: 200, borderRadius: 20 }}
          ></Card.Image>
        </Card>
        
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
    fontSize: 16,
  },
  tittle1: {
    backgroundColor: "#ffa500",
    color: "white",
  },
  tittle2: {
    backgroundColor: "#8fbc8f",
    color: "white",
  },
  icon: {
    color: "white",
  },
  card: {
    marginTop: 50,
    borderRadius: 20,
    elevation: 20,
    shadowColor: "#008080",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
export default HomeScreen;
