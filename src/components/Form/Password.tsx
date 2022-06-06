import { TextInput, View, Text } from "react-native";
import React, { useState, useCallback } from "react";
import { Colors, Size, Styles } from "@assets/styles";
import { Ionicons } from "@expo/vector-icons";
const Password = ({ isError = " Oops! Your Password Is Not Correct" }) => {
  const [text, setText] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [onSecureText, setOnSecureText] = useState(false);
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
  const onSecureTextEntry = useCallback(() => {
    setOnSecureText(!onSecureText);
  }, [onSecureText]);
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
          <Ionicons
            name="ios-lock-closed-outline"
            size={24}
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
          placeholder="•••••••••••••••••"
          secureTextEntry={onSecureText}
          autoCorrect={false}
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
        <View
          style={{
            paddingLeft: Size.padding,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons
            name={!onSecureText ? "ios-eye-outline" : "ios-eye-off-outline"}
            size={24}
            style={{ paddingRight: Size.padding }}
            onPress={onSecureTextEntry}
            color={
              isError
                ? Colors.Primary.red
                : isActive
                ? Colors.Primary.blue
                : Colors.Neutral.grey
            }
          />
        </View>
      </View>
      {isError && (
        <View style={{ marginTop: 8 }}>
          <Text style={[Styles.bodyNormalBold, { color: Colors.Primary.red }]}>
            {isError}
          </Text>
        </View>
      )}
    </React.Fragment>
  );
};

export default Password;
