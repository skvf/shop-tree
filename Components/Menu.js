import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

import React from "react";

function Menu() {
  return (
    <View style={styles.container}>
      <Text>Moças</Text>
      <Text>Rapazes</Text>
      <Text>Kids</Text>
      <Text>Casa&tal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Menu;
