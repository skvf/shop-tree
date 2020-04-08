import React from "react";
import { Navbar, UserSession } from "./Components/Navbar";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { Ionicons,AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // https://reactnavigation.org/docs/tab-based-navigation/
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-information-circle': 'ios-information-circle-outline';
          } else if (route.name === 'Login') {
            iconName = focused ? 'eye' : 'eyeo';
          }else if (route.name === 'Register') {
            iconName = focused ? 'user' : 'user';}
            else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';}

          return <Ionicons name={iconName} size={size} color={color} />
        }
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray', 
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