import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Images, Metrics, Colors } from "../theme";
import { SIZES } from "../theme/fonts";
import CustomText from "./../common/CustomText";

const Card = () => {
  const [newPlats, setNewPlants] = useState([
    {
      id: 0,
      name: "Plant 1",
      img: Images.plant1,
      favourite: false,
    },
    {
      id: 1,
      name: "Plant 2",
      img: Images.plant2,
      favourite: true,
    },
    {
      id: 2,
      name: "Plant 3",
      img: Images.plant3,
      favourite: false,
    },
    {
      id: 3,
      name: "Plant 4",
      img: Images.plant4,
      favourite: true,
    },
    {
      id: 4,
      name: "Plant 5",
      img: Images.plant1,
      favourite: false,
    },
    {
      id: 5,
      name: "Plant 6",
      img: Images.plant2,
      favourite: true,
    },
    {
      id: 6,
      name: "Plant 7",
      img: Images.plant3,
      favourite: true,
    },
    {
      id: 7,
      name: "Plant 8",
      img: Images.plant4,
      favourite: false,
    },
  ]);

  const renderNewPlants = (item, index) => {
    return (
      <View style={styles.wrapper}>
        <Image
          source={item.img}
          resizeMode="cover"
          style={styles.imageContainer}
        />
        <View style={styles.textContainer}>
          <CustomText white nunitoBold>
            {item.name}
          </CustomText>
        </View>
        <TouchableOpacity
          style={styles.heartIcon}
          onPress={() => {
            console.log("heart");
          }}
        >
          <Image
            source={
              item.favourite ? Images.favouriteActive : Images.favouriteInActive
            }
            resizeMode="contain"
            style={styles.iconContainer}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={newPlats}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, index }) => renderNewPlants(item, index)}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {},
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height: "85%",
    width: SIZES.width * 0.23,
    borderRadius: 15,
    margin: Metrics.starter,
  },
  textContainer: {
    position: "absolute",
    bottom: "13%",
    right: 0,
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: Metrics.starter,
    borderTopLeftRadius: Metrics.halfBase,
  },
  iconContainer: {
    width: Metrics.base,
    height: Metrics.base,
  },
  heartIcon: {
    position: "absolute",
    top: "16%",
    left: Metrics.halfBase,
  },
});
