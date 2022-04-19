import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Colors, Images, Metrics } from "../../theme";

const Home = () => {
  return (
    <View style={styles.container}>
      {/* new plant */}
      <View style={styles.wrapper}>
        <View style={styles.wrapperStyle}>
          <View style={styles.headerStyle}>
            <View>
              <Text>plant App</Text>
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
          </View>
        </View>
      </View>
      {/* my plant share */}
      <View style={styles.wrapperContainer}></View>
      {/* add my new friend */}
      <View style={styles.wrapperContainer1}></View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    backgroundColor: Colors.white,
    height: "20%",
  },
  wrapperContainer: {
    backgroundColor: Colors.white,
    height: "50%",
  },
  wrapperContainer1: {
    backgroundColor: Colors.bisque,
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
    marginTop: Metrics.halfBase,
  },
});
