import {
  View,
  Text,
  Button,
  TextInput,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import BottomTabContainer from "src/containers/BottomTabContainer";
import { Ionicons } from "@expo/vector-icons";
import colors from "@constants/colors";
import { iconSize } from "@styles/size";
import styles from "@styles/styles";
import { SetupPageType } from "@constants/pages";

const Home = ({ navigation }) => {
  const [isFocused, setFocused] = useState<boolean>(false);
  const inputRef = useRef<TextInput>(null);

  const onFocusInput = useCallback(() => {
    inputRef?.current?.focus();
    setFocused(true);
  }, [isFocused]);
  return (
    <SafeAreaView style={{ paddingHorizontal: 16 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomWidth: 1,
          paddingHorizontal: 16,
          paddingVertical: 16,
          borderColor: colors.light,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            width: "80%",
            borderColor: isFocused ? colors.primary : colors.light,
            height: 46,
            flexDirection: "row",
            borderRadius: 5,
            marginTop: StatusBar.currentHeight,
          }}
        >
          <View
            style={{
              paddingLeft: 8,
              justifyContent: "center",
              alignItems: "center",

              height: "100%",
            }}
          >
            <Ionicons
              name="search-outline"
              onPress={onFocusInput}
              size={(iconSize / 2) * 1.5}
              color={colors.primary}
            />
          </View>
          <TextInput
            placeholder="Search Product"
            ref={inputRef}
            placeholderTextColor={colors.grey}
            onFocus={() => {
              setFocused(true);
            }}
            onBlur={() => {
              setFocused(false);
            }}
            style={[
              styles.largeTextRegularCaption,
              {
                flex: 1,
                paddingVertical: 12,
                color: colors.grey,
                paddingHorizontal: 16,
              },
            ]}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="heart-outline"
            size={iconSize}
            color={colors.grey}
            style={{ marginLeft: 16 }}
            onPress={() => navigation.navigate(SetupPageType.FAVORITE)}
          />
          <View style={{ position: "relative" }}>
            <Ionicons
              name="notifications-outline"
              size={iconSize}
              color={colors.grey}
              onPress={() => navigation.navigate(SetupPageType.NOTIFICATION)}
            />
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: colors.error,
                borderRadius: 999,
                position: "absolute",
                top: 1,
                right: 3,
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
// <View
//   style={{
//     flexDirection: "row",
//     backgroundColor: "red",
//     height: StatusBar.currentHeight,
//   }}
// >
//   <Ionicons
//     name="notifications-outline"
//     size={24}
//     color={colors.grey}
//   />
//   <Ionicons name="heart-outline" size={24} color={colors.grey} />
// </View>
