import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Colors, Metrics, Images } from "../theme";
import CustomText from "../common/CustomText";

const Footer = () => {
  const [friendList, setFriendList] = useState([
    {
      id: 0,

      img: Images.profile1,
    },
    {
      id: 1,
      img: Images.profile2,
    },
    {
      id: 2,
      name: "Plant 3",
      img: Images.profile3,
      favourite: false,
    },
    {
      id: 3,
      name: "Plant 4",
      img: Images.profile4,
      favourite: true,
    },
    {
      id: 4,
      name: "Plant 5",
      img: Images.profile5,
      favourite: false,
    },
    {
      id: 5,

      img: Images.profile1,
    },
    {
      id: 6,
      img: Images.profile2,
    },
    {
      id: 7,
      name: "Plant 3",
      img: Images.profile3,
      favourite: false,
    },
    {
      id: 8,
      name: "Plant 4",
      img: Images.profile4,
      favourite: true,
    },
    {
      id: 9,
      name: "Plant 5",
      img: Images.profile5,
      favourite: false,
    },
  ]);

  const renderFriendComponent = () => {
    if (friendList.length == 0) {
      return <View></View>;
    } else if (friendList.length <= 3) {
      return friendList.map((item, index) => (
        <View
          key={`friends-${index}`}
          style={index == 0 ? {} : { marginLeft: -Metrics.base }}
        >
          <Image
            source={item.img}
            resizeMode="cover"
            style={styles.coverImage}
          />
        </View>
      ));
    } else {
      return (
        <View style={styles.elseContainer}>
          {friendList.map((item, index) => {
            if (index <= 2) {
              return (
                <View
                  key={`friends-${index}`}
                  style={index == 0 ? {} : { marginLeft: -Metrics.base }}
                >
                  <Image
                    source={item.img}
                    resizeMode="cover"
                    style={styles.otherImage}
                  />
                </View>
              );
            }
          })}
          <CustomText grey>+{friendList.length - 3} More</CustomText>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <CustomText dodgerblue>Added Friends</CustomText>
        <CustomText grey>{friendList.length} Total</CustomText>
        <View style={styles.friendList}>
          <View style={styles.friend}>{renderFriendComponent()}</View>
          <View style={styles.friend1}>
            <CustomText grey>Add New</CustomText>
            <TouchableOpacity
              onPress={() => {
                console.log("add friend");
              }}
              style={styles.addIconButton}
            >
              <Image
                resizeMode="contain"
                source={Images.plus}
                style={styles.addIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gainsboro,
  },
  wrapper: {
    marginTop: Metrics.starter,
    marginHorizontal: Metrics.base,
  },
  friendList: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Metrics.base,
  },
  friend: {
    flexDirection: "row",
    alignItems: "center",
  },
  friend1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: Metrics.starter,
  },
  coverImage: {
    width: Metrics.regular,
    height: Metrics.regular,
    borderRadius: Metrics.doubleBase,
    borderWidth: 3,
    borderColor: Colors.primaryColor,
  },
  elseContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  otherImage: {
    width: Metrics.regular,
    height: Metrics.regular,
    borderRadius: Metrics.doubleBase,
    borderWidth: 3,
    borderColor: Colors.primaryColor,
  },
  addIcon: {
    width: Metrics.base,
    height: Metrics.base,
    color: Colors.black,
  },
  addIconButton: {
    width: Metrics.doubleBase,
    height: Metrics.doubleBase,
    backgroundColor: Colors.lightsteelblue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Metrics.starter,
    marginLeft: Metrics.base,
  },
});
