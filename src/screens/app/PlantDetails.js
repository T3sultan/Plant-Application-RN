import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";
import { Colors, Images, Metrics } from "../../theme";
import CustomText from "../../common/CustomText";
import RequirementsBar from "../../components/RequirementsBar";
import RequirementDetails from "../../components/RequirementDetails";
import Header from "../../components/Header";

const PlantDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* banner image */}
      <View style={{ height: "35%" }}>
        <ImageBackground
          resizeMode="cover"
          style={styles.bannerImageStyle}
          source={Images.bannerBg}
        >
          <View>
            <Header navigation={navigation} />
          </View>
          <View style={styles.headerTitle}>
            <CustomText mega white>
              Natural{" "}
            </CustomText>
          </View>
        </ImageBackground>
      </View>
      {/* requirement */}
      <View style={styles.wrapper}>
        <View style={styles.requirement}>
          <CustomText dodgerblue nunitoBold>
            Requirements
          </CustomText>
          <Image />
        </View>
        <RequirementsBar />
        <View>
          <RequirementDetails />
        </View>
      </View>
    </View>
  );
};

export default PlantDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerImageStyle: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    flex: 1,
    marginTop: -Metrics.regular,
    borderTopLeftRadius: Metrics.doubleBase,
    borderTopRightRadius: Metrics.doubleBase,
    backgroundColor: Colors.white,
    padding: Metrics.base,
  },
  requirement: {
    // padding: Metrics.base,
  },
  headerTitle: {
    marginLeft: Metrics.doubleBase,
    marginTop: Metrics.base,
    justifyContent: "center",
    alignItems: "center",
  },
});
