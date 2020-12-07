import React from "react";
import data from "./data";
import { Entypo } from "@expo/vector-icons";
import { Icon } from 'react-native-elements'
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { sub } from "react-native-reanimated";

function Alimentacion({ navigation }) {
  const[currentIndex,setCurrentIndex]=React.useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          //marginTop:Constant.statusBarHeight,
          backgroundColor: "#4682b4",
          flexDirection: "row",
        }}
      >
        <Entypo
          name="menu"
          size={50}
          color="black"
          style={styles.icon}
          onPress={() => {
            navigation.openDrawer();
          }}
        />
        <Text style={styles.text}>Leidy Fitness</Text>
      </View>
      <View>
        {data.map(({ bg, color, category, subCategories ,icox}) => {
          return (
            <TouchableOpacity
              key={category}
              onPress={() => {}}
              style={styles.card}
              activeOpacity={0.9}
            >
              <View
                style={{
                  backgroundColor: bg,
                  height: 40,
                  borderBottomEndRadius: 20,
                }}
              >
                <Text style={styles.text2}>{category}
                <Icon
                name={icox}
                type="material-icons"
                color="white"
                style={{marginLeft:20}}
                />
                </Text>
              </View>
              <View>
                {subCategories.map(subCategories=>(
                  <Text key={subCategories} style={styles.bodyText}>{subCategories} </Text>
                ))}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow:1,
    backgroundColor: "antiquewhite",
    marginTop: 40,
    alignItems: "center",
    justifyContent:"center"
  },
  text: {
    marginTop: 15,
    marginRight: 250,
    color: "white",
    fontSize: 16,
  },
  text2: {
    color: "white",
    fontSize: 25,
    fontWeight:'900',

  },
  icon: {
    color: "white",
  },
  card: {
    
    marginTop: 4,
    color: "white",
    borderRadius: 60,
    elevation: 20,
    shadowColor: "#008080",
    shadowOpacity: 0.6,
    shadowRadius: 10.84,
  },
  bodyText:{
    fontSize:15,
    textAlign:"center"
  }
});

export default Alimentacion;
