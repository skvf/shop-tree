import { Button, ScrollView, TextInput, View } from "react-native";

import React from "react";
import StyledText from '../Components/Text'

//  <3

function Register() {
  return (
    <ScrollView style={{ padding: 60 }}>
      <View>
        <View style={{ flexDirection: "row" }}>
          <StyledText>Name: </StyledText>
          <TextInput placeholder="Insert your name"> </TextInput>
        </View>
        <View style={{ flexDirection: "row" }}>
          <StyledText>Email: </StyledText>
          <TextInput placeholder="Insert your email"> </TextInput>
        </View>
        <View style={{ flexDirection: "row" }}>
          <StyledText>Password: </StyledText>
          <TextInput placeholder="Insert a password"> </TextInput>
        </View>
      </View>
    </ScrollView>
  );
}

export default Register;
