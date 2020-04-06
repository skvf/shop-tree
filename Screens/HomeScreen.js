import { Navbar, UserSession } from "../Components/Navbar";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import Ad from "../Components/Ad";
import Body from "../Components/Body";
import Menu from "../Components/Menu";
import ProductList from "../Components/ProductList";
import React from "react";
import Search from "../Components/Search";
import UsersList from "../Components/UsersList";

export default function HomeScreen() {
  return (
    <>
      <Navbar />
      <UserSession />
      <Menu />
      <Search />
      <ScrollView>
        <Ad />
        <ProductList />
      </ScrollView>
    </>
  );
}
