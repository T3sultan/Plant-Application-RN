import { StyleSheet, Text as RNText } from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";
import { Colors, Fonts } from "../theme";

const CustomText = props => {
  const {
    children,
    small,
    body,
    caption,
    title,
    header,
    headLine,
    display,
    jumbo,
    mega,
    nunitoBlack,
    nunitoBold,
    primaryColor,
    antiquewhite,
    aqua,
    deeppink,
    black,
    underLine,
    centered,
    alginRight,
    alginLeft,
    fwNormal,
    fw500,
    fw600,
    fwBold,
    style,
    lh,
    numberOfLines,
    white,
  } = props;
  return (
    <RNText
      style={[
        styles.textStyle,
        //fonts size
        small && { fontSize: moderateScale(Fonts.size.small) },
        body && { fontSize: moderateScale(Fonts.size.body) },
        caption && { fontSize: moderateScale(Fonts.size.caption) },
        header && { fontSize: moderateScale(Fonts.size.header) },
        title && { fontSize: moderateScale(Fonts.size.title) },
        headLine && { fontSize: moderateScale(Fonts.size.headLine) },
        display && { fontSize: moderateScale(Fonts.size.display) },
        jumbo && { fontSize: moderateScale(Fonts.size.jumbo) },
        mega && { fontSize: moderateScale(Fonts.size.mega) },
        //fonts
        nunitoBlack && { fontFamily: Fonts.type.nunitoBlack },
        nunitoBold && { fontFamily: Fonts.type.nunitoBold },

        //color
        black && { color: Colors.black },
        deeppink && { color: Colors.deeppink },
        primaryColor && { color: Colors.primaryColor },
        antiquewhite && { color: Colors.antiquewhite },
        aqua && { color: Colors.aqua },
        white && { color: Colors.white },

        //position
        underLine && { textDecorationLine: "underline" },
        centered && { textAlign: "center" },
        alginRight && { textAlign: "right" },
        alginLeft && { textAlign: "left" },
        fwNormal && { fontWeight: "normal" },
        fw500 && { fontWeight: "500" },
        fw600 && { fontWeight: "600" },
        fwBold && { fontWeight: "bold" },
        lh && { lineHeight: 2 },
        style,
      ]}
      numberOfLines={numberOfLines}
    >
      {children}
    </RNText>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: Fonts.size.body,
    fontFamily: Fonts.type.nunitoBlack,
    color: Colors.black,
  },
});
