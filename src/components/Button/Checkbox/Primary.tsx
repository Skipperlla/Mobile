import {
  View,
  Text,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { Size, Styles, Colors } from "@assets/styles/index";
interface IPrimary {
  onPress: () => void;
  text: string;
  isLoading: boolean;
  isActive: boolean;
}
const Primary = ({ onPress, text, isLoading, isActive }: IPrimary) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          backgroundColor: isActive ? "rgba(64, 191, 255, 0.1)" : "#ffffff",
          padding: Size.padding,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          borderRadius: 5,
          borderWidth: isActive ? 0 : 1,
          borderColor: isActive ? "transparent" : Colors.Neutral.light,
        }}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text
            style={[
              isActive ? Styles.captionLargeBold : Styles.captionLargeRegular,
              { color: isActive ? Colors.Primary.blue : Colors.Neutral.grey },
            ]}
          >
            {text}
          </Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Primary;
