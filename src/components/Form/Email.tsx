import { TextInput, View, Text } from "react-native";
import React, { useState, useCallback } from "react";
import { Colors, Size, Styles } from "@assets/styles";
import { AntDesign } from "@expo/vector-icons";
const Email = ({ isError = "Oops! Your Email Is Not Correct" }) => {
  const [text, setText] = useState("");
  const [isActive, setIsActive] = useState(false);
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
    <React.Fragment>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#ffffff",
          borderWidth: 1,
          borderColor: isError
            ? Colors.Primary.red
            : isActive
            ? Colors.Primary.blue
            : Colors.Neutral.light,
          borderRadius: 5,
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
          <AntDesign
            name="mail"
            size={Size.iconSize}
            color={
              isError
                ? Colors.Primary.red
                : isActive
                ? Colors.Primary.blue
                : Colors.Neutral.grey
            }
          />
        </View>
        <TextInput
          keyboardType="email-address"
          placeholder="Your Email"
          placeholderTextColor={Colors.Neutral.grey}
          onChangeText={onChangeText}
          onBlur={onPassive}
          onFocus={onActive}
          onSubmitEditing={onPassive}
          style={[
            text ? Styles.captionLargeBold : Styles.captionLargeRegular,
            {
              flex: 1,
              height: "100%",
              paddingVertical: Size.padding - 4,
              paddingHorizontal: Size.padding,
              color: Colors.Neutral.grey,
            },
          ]}
        />
      </View>
      {isError && (
        <View style={{ marginTop: Size.margin / 2 }}>
          <Text style={{ ...Styles.bodyNormalBold, color: Colors.Primary.red }}>
            {isError}
          </Text>
        </View>
      )}
    </React.Fragment>
  );
};

export default Email;
