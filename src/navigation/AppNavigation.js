import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Home from "../screens/app";
import Camera from "../screens/app/Camera";
import Search from "../screens/app/Search";
import Favourite from "../screens/app/Favourite";
import { Images, Metrics } from "../theme";
import Box from "../screens/app/Box";
import Home from "../screens/app/Home";

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? Images.homeActive : Images.homeInActive;
          } else if (route.name === "Box") {
            iconName = focused ? Images.BoxInActive : Images.BoxActive;
          } else if (route.name === "Camera") {
            iconName = focused ? Images.CameraActive : Images.CameraInActive;
          } else if (route.name === "Favourite") {
            iconName = focused
              ? Images.favouriteActive
              : Images.favouriteInActive;
          } else if (route.name === "Search") {
            iconName = Images.search;
          }

          return (
            <Image
              style={{ width: Metrics.base, height: Metrics.base }}
              resizeMode="contain"
              source={iconName}
            />
          );
        },
        tabBarLabel: () => null,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Box" component={Box} options={{ headerShown: false }} />
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
