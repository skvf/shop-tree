import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

import React from "react";
import StyledText from './Text'

function Menu() {
  return (
    <View style={styles.container}>
      <StyledText>Moças</StyledText>
      <StyledText>Rapazes</StyledText>
      <StyledText>Kids</StyledText>
      <StyledText>Casa&tal</StyledText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Menu;
