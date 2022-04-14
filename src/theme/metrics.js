import { Dimensions, Platform } from "react-native";
import { scale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window");

const metrics = {
  small: scale(3),
  starter: scale(5),
  halfBase: scale(10),
  oneThirdBase: scale(15),
  base: scale(20),
  doubleBase: scale(30),
  doubleDoubleBase: scale(40),
  regular: scale(50),
  screenWidth: width,
  screenHight: height,
  btnHeight: scale(40),
  btnBorderRadius: scale(20),
  splashWidth: scale(300),
  splashHeight: scale(300),
};
export default metrics;
