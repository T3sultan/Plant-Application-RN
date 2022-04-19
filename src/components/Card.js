import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useState } from "react";
import { Images, Metrics } from "../theme";
import { SIZES } from "../theme/fonts";

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
  container: {
    // marginTop: Metrics.base,
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    // marginHorizontal: Metrics.base,
  },
  imageContainer: {
    // borderRadius: Metrics.halfBase,
    // padding: Metrics.base,
    // width: Metrics.screenWidth * 0.4,
    // margin: Metrics.start,
    // height: Metrics.re,
    height: "85%",
    width: SIZES.width * 0.23,
    borderRadius: 15,
    margin: Metrics.starter,
  },
});
