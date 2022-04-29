import { Dimensions, } from "react-native";

const windowWidth = Dimensions.get("window").width;
const heading = {
    h1: 32,
    h2: 24,
    h3: 20,
    h4: 16,
    h5: 14,
    h6: 10,
}
const bodyText = {
    large: 16,
    medium: 14,
    normal: 12
}
const captionText = {
    large: 12,
    medium: 10,
}
const letterSpacing = 0.5
const iconSize = 24
const globalPadding = 16
const windowHeight = Dimensions.get("window").height;

export { windowWidth, iconSize, letterSpacing, windowHeight, heading, bodyText, captionText, globalPadding };
