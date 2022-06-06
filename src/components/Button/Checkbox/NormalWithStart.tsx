import {
  View,
  Text,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Size, Styles, Colors } from "@assets/styles/index";
import LoadingIndicator from "@components/LoadingIndicator";
interface INormalWithStart {
  onPress: () => void;
  text: string;
  isLoading: boolean;
}
const NormalWithStart = ({ onPress, text, isLoading }: INormalWithStart) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          backgroundColor: "#ffffff",
          padding: Size.padding,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          borderRadius: 5,
          borderWidth: 1,
          borderColor: Colors.Neutral.light,
        }}
      >
        {isLoading ? (
          <LoadingIndicator  />
        ) : (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="ios-star"
              size={16}
              color={Colors.Primary.yellow}
              style={{ marginRight: Size.margin - 6 }}
            />
            <Text
              style={[
                Styles.captionLargeRegular,
                { color: Colors.Neutral.grey },
              ]}
            >
              {text}
            </Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NormalWithStart;
