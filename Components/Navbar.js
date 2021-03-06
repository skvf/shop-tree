import { Image, StyleSheet, View } from "react-native";

import COLORS from "../constants/colors.json";
import React from "react";
import StyledText from './Text';

// componente de navegaçao que não é uma função pq tem propiedades
export function Navbar() {
  return (
    <View style={styles.container}>
      <StyledText>Brecho do amor</StyledText>
    </View>
  );
}

export function UserSession() {
  const [message, setMessage] = React.useState("Hello");
  const [profileImage, setProfileImage] = React.useState("");

  React.useEffect(() => {
    const URL = `https://us-south.functions.cloud.ibm.com/api/v1/web/f19f97b8-2d24-4766-8b00-eff976949b2f/default/soma`;

    fetch(URL)
      .then((response) => response.json())
      .then((response) => {
        setMessage(response.greetings);
        setProfileImage(response.profile);
      });
  });

  return (
    <View style={styles.containerUserSession}>
      <Image
        source={{
          uri: profileImage,
        }}
        style={{ width: 50, height: 50, borderRadius: 25, marginRight: 6 }}
      />
      <StyledText>{message}</StyledText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  containerUserSession: {
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
  },
});
