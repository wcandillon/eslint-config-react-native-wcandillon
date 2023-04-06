import React from "react";
import { StyleSheet, Text, View } from "react-native";
type RGB = readonly [red: number, green: number, blue: number];

type Color = { value: RGB | string };

const myColor = { value: "red" } satisfies Color; // works

myColor.value.toUpperCase(); // valid operation as myColor is a string

const white = "#fff";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: "center",
    justifyContent: "center",
  },
});

export const App = () => (
  <View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
  </View>
);
