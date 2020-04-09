import React from "react";
import StyledText from '../Components/Text'
import { View } from "react-native";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StyledText>Settings!</StyledText>
    </View>
  );
}

export default SettingsScreen;