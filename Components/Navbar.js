import { Image, StyleSheet, Text, View } from "react-native";

import React from "react";

// componente de navegaçao que não é uma função pq tem propiedades
export function Navbar() {
  return (
    <View style={styles.container}>
      {<Text style={styles.textTitulo}>Brecho do amor</Text>}
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
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: "white",
  },
  text: {
    color: "#333",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  textTitulo: {
    color: "green",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
  },
  containerUserSession: {
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
    backgroundColor: "white",
  },
});
