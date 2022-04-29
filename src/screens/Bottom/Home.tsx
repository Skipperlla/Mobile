import {
  View,
  Text,
  Button,
  TextInput,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import BottomTabContainer from "src/containers/BottomTabContainer";
import { Ionicons } from "@expo/vector-icons";
import colors from "@constants/colors";
import { globalPadding, iconSize } from "@styles/size";
import styles from "@styles/styles";
import { SetupPageType } from "@constants/pages";
import Swiper from "react-native-swiper";
import CountDown from "react-native-countdown-component";
import CategoryCard from "@components/CategoryCard";
import ProductCard from "@components/ProductCard";

const Home = ({ navigation }) => {
  const [isFocused, setFocused] = useState<boolean>(false);
  const inputRef = useRef<TextInput>(null);

  const onFocusInput = useCallback(() => {
    inputRef?.current?.focus();
    setFocused(true);
  }, [isFocused]);
  return (
    <SafeAreaView>
      {/* Nav */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomWidth: 1,
          padding: globalPadding,
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
      {/* Main */}
      <View
        style={{
          paddingHorizontal: globalPadding,
          paddingTop: globalPadding + 8,
        }}
      >
        {/* Slider */}
        <View
          style={{
            width: "100%",
            maxHeight: 206,
            borderRadius: 5,
            position: "relative",
          }}
        >
          <Image
            source={require("assets/images/shoe.png")}
            resizeMode="cover"
            style={{ width: "100%", height: "100%", borderRadius: 5 }}
          />
          <View
            style={{
              position: "absolute",
              margin: globalPadding * 2,
            }}
          >
            <View>
              <Text style={[styles.h2, { color: "#ffffff" }]} numberOfLines={2}>
                Super Flash Sale{"\n"}50% Off
              </Text>
            </View>
            <CountDown
              until={360000}
              size={18}
              style={{
                position: "absolute",
                top: "100%",
              }}
              digitStyle={{ backgroundColor: "#FFF" }}
              digitTxtStyle={[styles.h4, { color: "#000", lineHeight: 24 }]}
              timeToShow={["H", "M", "S"]}
              timeLabels={{ h: undefined, m: undefined, s: undefined }}
              showSeparator
            />
          </View>
        </View>

        {/* Category */}
        <View
          style={{
            paddingTop: globalPadding + 8,
          }}
        >
          {/* Header */}
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text style={[styles.h5, { lineHeight: 21, color: colors.dark }]}>
              Category
            </Text>
            <TouchableWithoutFeedback onPress={() => {}}>
              <Text style={[styles.linkMediumText, { lineHeight: 21 }]}>
                More Category
              </Text>
            </TouchableWithoutFeedback>
          </View>
          {/* Header */}
          <ScrollView
            style={{ marginTop: 12 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </ScrollView>
        </View>

        {/* Products */}
        <View
          style={{
            paddingTop: globalPadding + 8,
          }}
        >
          {/* Header */}
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View>
              <Text style={[styles.h5, { lineHeight: 21, color: colors.dark }]}>
                Flash Sale
              </Text>
            </View>
            <TouchableWithoutFeedback onPress={() => {}}>
              <Text style={[styles.linkMediumText, { lineHeight: 21 }]}>
                See More
              </Text>
            </TouchableWithoutFeedback>
          </View>
          {/* Product */}
          <ScrollView
            style={{ marginTop: 12 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <ProductCard />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
