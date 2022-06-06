import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { Size, Styles, Colors } from "@assets/styles/index";
import GoogleIcon from "@assets/icons/Google";
import LoadingIndicator from "@components/LoadingIndicator";
interface IGoogle {
  isLoading: boolean;
}
const Google = ({ isLoading }: IGoogle) => {
  return (
    <TouchableWithoutFeedback>
      <View
        style={{
          padding: Size.padding,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          borderRadius: 5,
          borderWidth: 1,
          borderColor: Colors.Neutral.light,
        }}
      >
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
            }}
          >
            <View>
              <GoogleIcon />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={[Styles.bodyMediumBold, { color: Colors.Neutral.grey }]}
              >
                Login with Google
              </Text>
            </View>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Google;
