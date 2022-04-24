import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Metrics, Images } from "../theme";

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image source={Images.back} style={styles.headerImage} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("sdfsdfkj");
        }}
      >
        <Image
          source={Images.focus}
          resizeMode="contain"
          style={styles.imageStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: Metrics.base,
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerImage: {
    height: Metrics.oneThirdBase,
    width: Metrics.oneThirdBase,
  },
  imageStyle: {
    width: Metrics.base,
    height: Metrics.base,
  },
});
