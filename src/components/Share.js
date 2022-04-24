import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Metrics, Images, Colors } from "../theme";

const Share = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            navigation.navigate("PlantDetails");
          }}
        >
          <Image
            source={Images.plant1}
            resizeMode="cover"
            style={styles.shareImage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1, marginTop: Metrics.starter }}
          onPress={() => {
            console.log("clicked");
            navigation.navigate("PlantDetails");
          }}
        >
          <Image
            source={Images.plant2}
            resizeMode="cover"
            style={styles.shareImage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1, marginTop: Metrics.starter }}
          onPress={() => {
            console.log("clicked");
            navigation.navigate("PlantDetails");
          }}
        >
          <Image
            source={Images.plant4}
            resizeMode="cover"
            style={styles.shareImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper1}>
        <TouchableOpacity
          style={{ flex: 1, marginLeft: Metrics.starter }}
          onPress={() => {
            console.log("clicked");
            navigation.navigate("PlantDetails");
          }}
        >
          <Image
            source={Images.plant3}
            resizeMode="cover"
            style={styles.shareImage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1, marginTop: Metrics.starter }}
          onPress={() => {
            console.log("clicked");
            navigation.navigate("PlantDetails");
          }}
        >
          <Image
            source={Images.plant5}
            resizeMode="cover"
            style={styles.shareImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Share;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "88%",
    marginTop: Metrics.base,
  },
  wrapper: {
    flex: 1,
  },
  wrapper1: {
    flex: 1,
  },
  shareImage: {
    width: "100%",
    height: "100%",
    borderRadius: Metrics.base,
    borderColor: Colors.gainsboro,
    borderWidth: 0.6,
  },
});
