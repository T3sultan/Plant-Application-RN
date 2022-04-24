import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Box = () => {
  return (
    <View style={styles.container}>
      <Text>Box</Text>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
