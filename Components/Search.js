import React from "react";

import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, View } from "react-native";

function Search() {
  const message = `Busque "Zara"`;

  return (
    <View style={styles.container}>
      <FontAwesome5 name="search" size={18} />
      <TextInput placeholder={message} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#f5f5f5",
    borderRadius: 4
  }
});

export default Search;
