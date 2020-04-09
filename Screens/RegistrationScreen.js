import { Button, ScrollView, Text, TextInput, View } from "react-native";

import React from "react";

//  <3

function Register() {
  return (
    <ScrollView style={{ padding: 60 }}>
      <View>
        <View style={{ flexDirection: "row" }}>
          <Text>Name: </Text>
          <TextInput placeholder="Insert your name"> </TextInput>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text>Email: </Text>
          <TextInput placeholder="Insert your email"> </TextInput>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text>Password: </Text>
          <TextInput placeholder="Insert a password"> </TextInput>
        </View>
      </View>
    </ScrollView>
  );
}

export default Register;
