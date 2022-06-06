import { View, Text } from "react-native";
import React from "react";
import { Colors, Size, Styles } from "@assets/styles";

const Mark = ({ count = "99" }: { count: string }) => {
  return (
    <View
      style={{
        backgroundColor: Colors.Primary.red,
        width: 25,
        height: 25,
        borderWidth: 2,
        borderColor: "#ffffff",
        borderRadius: 999,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ ...Styles.captionMediumBold, color: "#ffffff" }}>
        {count}
      </Text>
    </View>
  );
};

export default Mark;
