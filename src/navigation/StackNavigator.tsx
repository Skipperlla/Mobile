import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SetupPageType } from "@utils/pages";
import { IStackNavigator } from "types/navigation";
// * Screens
import { Auth } from "@screens/index";

const RootStack = createStackNavigator<IStackNavigator>();

const AppStackNavigator = () => {
  const { LOGIN, REGISTER } = SetupPageType;
  return (
    <RootStack.Navigator>
      {true ? (
        // Auth Screens
        <RootStack.Group
          screenOptions={{ headerShown: false, gestureEnabled: false }}
        >
          <RootStack.Screen name={LOGIN} component={Auth.Login} />
          <RootStack.Screen name={REGISTER} component={Auth.Register} />
        </RootStack.Group>
      ) : (
        <>
          {/* <RootStack.Screen
            options={{ headerShown: false }}
            name={SetupPageType.BOTTOMHOME}
            component={BottomTabNavigator}
          />
          <RootStack.Screen
            name={SetupPageType.NOTIFICATION}
            component={Notification}
          />
          <RootStack.Screen
            name={SetupPageType.FAVORITE}
            component={Favorite}
          /> */}
        </>
      )}
    </RootStack.Navigator>
  );
};

export default AppStackNavigator;
