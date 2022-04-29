import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AppStackNavigator from "./StackNavigator";
import { useEffect } from "react";
import { Alert } from "react-native";
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
  },
};
const MainNavigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <AppStackNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
