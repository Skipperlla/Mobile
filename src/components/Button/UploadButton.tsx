import {
  View,
  Text,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Size, Styles, Colors } from "@assets/styles/index";
interface IUploadButton {
  onPress: () => void;
  text: string;
  isLoading: boolean;
}
const UploadButton = ({ onPress, text, isLoading }: IUploadButton) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          backgroundColor: "#ffffff",
          width: 72,
          height: 72,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          borderRadius: 5,
          borderWidth: 1,
          borderColor: Colors.Neutral.light,
        }}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <AntDesign name="plus" size={24} color={Colors.Neutral.grey} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default UploadButton;
