import { SafeAreaView } from "react-native";
import React, { FC, ReactNode } from "react";

const BottomTabContainer: FC<ReactNode> = ({ children }) => {
  return (
    <SafeAreaView style={{ marginHorizontal: 16 }}>{children}</SafeAreaView>
  );
};

export default BottomTabContainer;
