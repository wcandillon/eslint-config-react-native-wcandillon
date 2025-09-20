import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const PrettierTest = () => {
  const longString =
    "This is a very long string that should trigger prettier's line length formatting when it exceeds the maximum allowed character limit per line";
  return (
    <View style={styles.container}>
      <Text>Testing Prettier Integration!</Text>
    </View>
  );
};
