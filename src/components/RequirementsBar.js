import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Colors, Images, Metrics } from "../theme";
import CustomText from "../common/CustomText";

const Requirement = ({ icon, berPercentage }) => {
  return (
    <View style={styles.requirements}>
      <View style={styles.wrapper1}>
        <Image
          source={icon}
          resizeMode="cover"
          style={styles.requirementStyle}
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          //     right: 0,

          width: "100%",
          height: Metrics.starter,
          marginBottom: -Metrics.halfBase,
          backgroundColor: Colors.gray,
        }}
      ></View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: Metrics.starter,
          marginBottom: -Metrics.halfBase,
          backgroundColor: Colors.primaryColor,
          width: berPercentage,
        }}
      ></View>
    </View>
  );
};

const RequirementsBar = () => {
  return (
    <View style={styles.container}>
      <Requirement icon={Images.sun} berPercentage="80%" />
      <Requirement icon={Images.drop} berPercentage="30%" />
      <Requirement icon={Images.temperature} berPercentage="70%" />
      <Requirement icon={Images.garden} berPercentage="30%" />
      <Requirement icon={Images.seed} berPercentage="20%" />
    </View>
  );
};

export default RequirementsBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: Metrics.base,
    //     paddingHorizontal: Metrics.base,
    justifyContent: "space-between",
  },
  requirements: {
    height: Metrics.regular,
    alignItems: "center",
  },
  requirementStyle: {
    tintColor: Colors.silver,
    width: Metrics.doubleBase,
    height: Metrics.doubleBase,
  },
  wrapper1: {
    width: Metrics.regular,
    height: Metrics.regular,
    borderRadius: 10,
    borderColor: Colors.lavender,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
