/* eslint-disable import/no-unresolved */
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const white = "#fff";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: "center",
    justifyContent: "center"
  }
});
