import { View, TextInput } from "react-native";
import React, { useState, useCallback } from "react";
import { Colors, Size, Styles } from "@assets/styles";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
const SearchBar = () => {
  const [text, setText] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const onActive = useCallback(() => {
    setIsActive(true);
  }, [isActive]);
  const onPassive = useCallback(() => {
    setIsActive(false);
  }, [isActive]);
  const onChangeText = useCallback(
    (text) => {
      setText(text);
      setIsActive(text && true);
    },
    [text]
  );
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: isActive ? Colors.Primary.blue : Colors.Neutral.light,
        // paddingLeft: Size.padding,
        // paddingRight: isActive ? Size.padding : 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          paddingLeft: Size.padding,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons
          name="ios-search-outline"
          size={Size.iconSize / 2 + 4}
          color={Colors.Primary.blue}
        />
      </View>

      <TextInput
        onChangeText={onChangeText}
        onBlur={onPassive}
        placeholder="Search Product"
        value={text}
        onFocus={onActive}
        onSubmitEditing={onPassive}
        style={[
          isActive ? Styles.h6 : Styles.captionLargeRegular,
          {
            flex: 1,
            color: Colors.Neutral.grey,
            paddingHorizontal: Size.padding,
            paddingVertical: Size.padding - 4,
          },
        ]}
      />
      {isActive ? (
        <View
          style={{
            paddingRight: Size.padding,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome5
            name="times"
            size={Size.iconSize - 4}
            onPress={() => {
              setText("");
              setIsActive(false);
            }}
            color={Colors.Neutral.grey}
          />
        </View>
      ) : null}
    </View>
  );
};

export default SearchBar;
