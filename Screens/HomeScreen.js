import React from "react";

import { Navbar, UserSession } from "../Components/Navbar";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Ad from "../Components/Ad";
import Body from "../Components/Body";
import Menu from "../Components/Menu";
import Search from "../Components/Search";
import UsersList from "../Components/UsersList";
import ProductList from "../Components/ProductList";

export default function HomeScreen() {
  return (
    <>
      <Navbar />
      <Menu />
      <Search />
      <ScrollView>
        <Ad />
        <ProductList />
      </ScrollView>
      <UserSession />
    </>
  );
}
