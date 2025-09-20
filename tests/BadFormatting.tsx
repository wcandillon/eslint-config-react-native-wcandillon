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

export const BadFormatting = () => {
  const message = "This is poorly formatted";
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
    </View>
  );
};
