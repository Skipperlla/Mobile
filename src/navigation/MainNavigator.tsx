import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AppStackNavigator from "./StackNavigator";
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
