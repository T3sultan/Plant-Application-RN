import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Colors, Images, Metrics } from "../../theme";
import CustomText from "../../common/CustomText";
import Card from "../../components/Card";
import Share from "../../components/Share";
import Footer from "../../components/Footer";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* new plant */}
      <View style={styles.wrapper}>
        <View style={styles.wrapperStyle}>
          <View style={styles.headerStyle}>
            <View style={styles.headerContainer}>
              <CustomText style={styles.textContainer}>New Plants</CustomText>
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
            <View style={styles.newPlantsContainer}>
              <Card />
            </View>
          </View>
        </View>
      </View>
      {/* my plant share */}
      <View style={styles.wrapperContainer}>
        <View style={styles.myPlantContainer}>
          <View>
            <View style={styles.titleStylingContainer}>
              <CustomText dodgerblue>Today's Share</CustomText>
              <TouchableOpacity onPress={() => {}}>
                <CustomText gainsboro>See All</CustomText>
              </TouchableOpacity>
            </View>
          </View>
          <Share navigation={navigation} />
        </View>
      </View>
      {/* add my new friend */}
      <View style={styles.wrapperContainer1}>
        <Footer />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gainsboro,
  },
  wrapper: {
    backgroundColor: Colors.white,
    height: "30%",
  },
  wrapperContainer: {
    backgroundColor: Colors.white,
    height: "50%",
    borderBottomEndRadius: Metrics.doubleBase,
    borderBottomLeftRadius: Metrics.doubleBase,
  },
  wrapperContainer1: {
    // backgroundColor: Colors.white,
    height: "30%",
  },
  wrapperStyle: {
    flex: 1,
    borderBottomLeftRadius: Metrics.doubleBase,
    borderBottomRightRadius: Metrics.doubleBase,
    backgroundColor: Colors.primaryColor,
  },
  headerStyle: {
    marginTop: Metrics.doubleBase,
    marginHorizontal: Metrics.base,
  },
  imageStyle: {
    width: Metrics.base,
    height: Metrics.base,
  },
  textContainer: {
    color: Colors.white,
    fontSize: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  newPlantsContainer: {},
  myPlantContainer: {
    flex: 1,
    borderBottomLeftRadius: Metrics.regular,
    borderBottomRightRadius: Metrics.regular,
    backgroundColor: Colors.white,
    padding: Metrics.base,
  },
  titleStylingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
