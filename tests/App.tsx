/* eslint-disable import/no-unresolved */
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const white = "#fff";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default () => (
  <View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
  </View>
);
