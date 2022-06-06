import {
  View,
  Text,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { Size, Styles, Colors } from "@assets/styles/index";
interface IPrimary {
  text: string;
  onPress: () => void;
  isLoading: boolean;
}
const Primary = ({ text, onPress, isLoading }: IPrimary) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          backgroundColor: Colors.Primary.blue,
          paddingVertical: Size.padding,
          paddingHorizontal: Size.padding + 8,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          borderRadius: 5,
          shadowColor: "rgba(64, 191, 255, 0.24)",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,

          elevation: 24,
        }}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text style={[Styles.bodyMediumBold, { color: "#ffffff" }]}>
            {text}
          </Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Primary;
