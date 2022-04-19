import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const type = {
  nunitoBlack: "NunitoBlack",
  nunitoBold: "NunitoBold",
};
const size = {
  small: 10,
  caption: 12,
  body: 14,
  header: 16,
  title: 18,
  headLine: 20,
  display: 22,
  jumbo: 26,
  mega: 30,
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  // app dimensions
  width,
  height,
};
export default { type, size };
