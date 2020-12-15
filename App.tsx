import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import ReaderView from "./components/ReaderView";

const logo = require("./images/ramuh.png");

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={logo} />
      <Text>Welcome!</Text>
      <StatusBar style="auto" />
      <ReaderView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 500,
    height: 500,
  },
});
