import { Navbar, UserSession } from "./Components/Navbar";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import COLORS from "./constants/colors.json";
import { FontAwesome } from "@expo/vector-icons";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import RegistrationScreen from "./Screens/RegistrationScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // https://reactnavigation.org/docs/tab-based-navigation/
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "Login") {
              iconName = focused ? "user" : "user";
            } else if (route.name === "Register") {
              iconName = focused ? "envelope" : "envelope";
            } else if (route.name === "Settings") {
              iconName = focused ? "gear" : "gear";
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: COLORS.primary,
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Register" component={RegistrationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
