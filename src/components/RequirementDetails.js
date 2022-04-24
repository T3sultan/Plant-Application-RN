import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Colors, Images, Metrics } from "../theme";
import CustomText from "../common/CustomText";

export const RequirementDetail = ({ icon, label, detail }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.mainContainer}>
        <View style={styles.upContainer}>
          <Image source={icon} resizeMode="cover" style={styles.imageStyle} />
          <CustomText grey>{label}</CustomText>
        </View>

        <View>
          <CustomText gainsboro>{detail}</CustomText>
        </View>
      </View>
    </View>
  );
};

const RequirementDetails = () => {
  return (
    <View style={styles.container}>
      <RequirementDetail icon={Images.sun} label="Sunlight" detail="15°C" />
      <RequirementDetail
        icon={Images.drop}
        label="Water"
        detail="250 ML Daily"
      />
      <RequirementDetail
        icon={Images.temperature}
        label="Room Temp"
        detail="25°C"
      />
      <RequirementDetail icon={Images.garden} label="Soil" detail="3 Kg" />
      <RequirementDetail
        icon={Images.seed}
        label="Fertilizer"
        detail="150 Mg"
      />
    </View>
  );
};

export default RequirementDetails;

const styles = StyleSheet.create({
  container: {
    marginTop: Metrics.doubleBase,
  },
  wrapper: {
    flexDirection: "row",
    marginTop: Metrics.base,
  },
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageStyle: {
    tintColor: Colors.silver,
    width: 30,
    height: 30,
    marginRight: Metrics.halfBase,
  },
  upContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
