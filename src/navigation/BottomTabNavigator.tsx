import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "@constants/colors";

import { SetupPageType } from "@constants/pages";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Home from "@screens/Home";
import Explore from "@screens/Explore";
import Cart from "@screens/Cart";
import Offer from "@screens/Offer";
import Account from "@screens/Account";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        // headerStyle: {
        //   backgroundColor: colors.background,
        // },
        // tabBarStyle: {
        //   backgroundColor: colors.background,
        // },
        tabBarIcon: ({ focused, size }) => {
          let iconName: any;

          if (route.name === SetupPageType.HOME) {
            iconName = "home-outline";
          } else if (route.name === SetupPageType.EXPLORE) {
            iconName = "search-outline";
          } else if (route.name === SetupPageType.CART) {
            iconName = "cart-outline";
          } else if (route.name === SetupPageType.OFFER) {
            iconName = "pricetag-outline";
          } else if (route.name === SetupPageType.ACCOUNT) {
            iconName = "user-o";
          }

          // You can return any component that you like here!
          return iconName === "user-o" ? (
            <FontAwesome
              name={iconName}
              size={24}
              color={focused ? colors.primary : colors.grey}
            />
          ) : (
            <Ionicons
              name={iconName}
              size={24}
              color={focused ? colors.primary : colors.grey}
            />
          );
        },
      })}
    >
      <Tab.Screen name={SetupPageType.HOME} component={Home} />
      <Tab.Screen name={SetupPageType.EXPLORE} component={Explore} />
      <Tab.Screen name={SetupPageType.CART} component={Cart} />
      <Tab.Screen name={SetupPageType.OFFER} component={Offer} />
      <Tab.Screen name={SetupPageType.ACCOUNT} component={Account} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
