import React from "react";
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
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.text} type="static">
            Leidy Fitness
          </Text>
          <Image
            style={styles.image}
            source={{
              uri:
                "https://image.freepik.com/vector-gratis/dibujos-animados-fitness-salud_24640-25738.jpg",
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
  export default HomeScreen