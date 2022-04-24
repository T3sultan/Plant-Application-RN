import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Favourite = () => {
  return (
    <View style={styles.container}>
      <Text>Favourite</Text>
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
