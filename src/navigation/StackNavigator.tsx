import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthContext from "@utils/context/AuthContext";
import { SetupPageType } from "@constants/pages";
import { IStackNavigator } from "types/navigation";
import Login from "@screens/Login";
import Register from "@screens/Register";
import BottomTabNavigator from "./BottomTabNavigator";
import Notification from "@screens/Notification";
import Favorite from "@screens/Favorite";

const RootStack = createStackNavigator<IStackNavigator>();

const AppStackNavigator = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <RootStack.Navigator>
      {false ? (
        // Auth Screens
        <RootStack.Group
          screenOptions={{ headerShown: false, gestureEnabled: false }}
        >
          <RootStack.Screen name={SetupPageType.LOGIN} component={Login} />
          <RootStack.Screen
            name={SetupPageType.REGISTER}
            component={Register}
          />
        </RootStack.Group>
      ) : (
        <>
          <RootStack.Screen
            options={{ headerShown: false }}
            name={SetupPageType.HOME}
            component={BottomTabNavigator}
          />
          <RootStack.Screen
            name={SetupPageType.NOTIFICATION}
            component={Notification}
          />
          <RootStack.Screen
            name={SetupPageType.FAVORITE}
            component={Favorite}
          />
        </>
      )}
    </RootStack.Navigator>
  );
};

export default AppStackNavigator;
