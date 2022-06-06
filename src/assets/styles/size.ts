import { Dimensions } from "react-native";

const heading = {
  h1: 32,
  h2: 24,
  h3: 20,
  h4: 16,
  h5: 14,
  h6: 12,
};
const bodyText = {
  Large: 16,
  Medium: 14,
  Normal: 12,
};
const captionText = {
  Large: 12,
  Medium: 10,
};
const linkText = {
  Large: 12,
};
const letterSpacing = 0.5;
const iconSize = 24;
const padding = 16;
const margin = 16;
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default {
  windowWidth,
  iconSize,
  letterSpacing,
  windowHeight,
  heading,
  bodyText,
  captionText,
  padding,
  linkText,
  margin,
};
