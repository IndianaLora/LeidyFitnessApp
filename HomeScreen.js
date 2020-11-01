import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Card } from "react-native-elements";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
// import { constant } from "async";
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          //   marginTop:Constant.statusBarHeight,
          backgroundColor: "#008080",
          flexDirection: "row",
        }}
      >
        <Entypo name="menu" size={50} color="black" style={styles.icon} />
        <Text style={styles.text}>Leidy Fitness</Text>
      </View>
      <View style={styles.card}>
        <Card>
          <Card.Title style={{ backgroundColor: "#ffa500", color: "white" }}>
            Ejercicios
          </Card.Title>
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
          <Card.Title style={{ backgroundColor: "#b22222", color: "white" }}>
            Alimentacion
          </Card.Title>
          <Card.Image
            source={{
              uri:
                "https://previews.123rf.com/images/sonulkaster/sonulkaster1711/sonulkaster171100122/90690890-fitness-alimentos-y-deportes-productos-de-nutrici%C3%B3n-dieta-saludable-suplementos-vector-iconos-poster.jpg",
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
