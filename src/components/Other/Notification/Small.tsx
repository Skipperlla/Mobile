import { View, Text } from "react-native";
import React from "react";
import { Colors } from "@assets/styles";

const Small = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.Primary.red,
        width: 8,
        height: 8,
        borderRadius: 999,
      }}
    />
  );
};

export default Small;
