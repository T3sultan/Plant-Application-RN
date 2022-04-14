import { StyleSheet, Text as RNText } from "react-native";
import React from "react";

const CustomText = props => {
  const { children } = props;
  return <RNText>{children}</RNText>;
};

export default CustomText;

const styles = StyleSheet.create({});
