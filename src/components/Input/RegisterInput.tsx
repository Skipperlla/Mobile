import {
  View,
  TextInput,
  KeyboardTypeOptions,
  Keyboard,
  StyleSheet,
} from "react-native";
import React, { FC, memo, useCallback, useRef, useState } from "react";
import colors from "@constants/colors";

import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import styles from "@styles/styles";
import { IRegisterProps } from "@screens/Register";
export interface InputProps {
  iconName: any;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  index: number;
  name: string;
  setForm: React.Dispatch<React.SetStateAction<IRegisterProps>>;
}
const RegisterInput: FC<InputProps> = ({
  iconName,
  placeholder,
  keyboardType,
  index,
  name,
  setForm,
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [isSecure, setIsSecure] = useState<boolean>(true);
  const [error, setError] = useState("");
  const inputRef = useRef<TextInput>(null);
  const onFocusInput = useCallback(() => {
    inputRef?.current?.focus();
  }, [focused]);
  const IconCase = useCallback(() => {
    switch (iconName) {
      case "user":
        return (
          <FontAwesome5
            name={iconName}
            style={{ paddingHorizontal: 17 }}
            size={24}
            color={
              error ? colors.error : focused ? colors.primary : colors.grey
            }
            onPress={onFocusInput}
          />
        );
      case "email-outline":
        return (
          <MaterialCommunityIcons
            name={iconName}
            size={24}
            style={style.iconPadding}
            color={
              error ? colors.error : focused ? colors.primary : colors.grey
            }
            onPress={onFocusInput}
          />
        );
      case "lock-outline":
        return (
          <MaterialIcons
            name={iconName}
            size={24}
            style={style.iconPadding}
            color={
              error ? colors.error : focused ? colors.primary : colors.grey
            }
            onPress={onFocusInput}
          />
        );

      default:
        return null;
    }
  }, [focused, error]);
  return (
    <View>
      <View
        style={{
          width: "100%",
          borderWidth: 1,
          borderColor: error
            ? colors.error
            : focused
            ? colors.primary
            : colors.Light,
          borderRadius: 5,
          height: 48,
          flexDirection: "row",
          alignItems: "center",
          position: "relative",
          marginTop: index === 0 ? 28 : 8,
        }}
      >
        {IconCase()}
        <TextInput
          secureTextEntry={
            (name === "password" || name === "passwordAgain") && isSecure
          }
          ref={inputRef}
          onChangeText={(text) => {
            setForm((prev) => ({ ...prev, [name]: text }));
          }}
          onSubmitEditing={Keyboard.dismiss}
          onFocus={() => {
            setFocused(true);
          }}
          keyboardType={keyboardType}
          onBlur={() => {
            setFocused(false);
          }}
          style={[
            styles.normalTextBoldBody,
            {
              flex: 1,
              color: colors.grey,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              width: "100%",
              height: "100%",
              paddingVertical: 12,
              paddingRight: 16,
            },
          ]}
          placeholder={placeholder}
          placeholderTextColor={colors.grey}
        />
        {iconName === "lock-outline" && (
          <Ionicons
            style={{
              paddingRight: 16,
            }}
            onPress={() => {
              setIsSecure((prev) => !prev);
            }}
            name={!isSecure ? "ios-eye-outline" : "ios-eye-off-outline"}
            color={
              error ? colors.error : focused ? colors.primary : colors.grey
            }
            size={24}
          />
        )}
      </View>
      {/* Error */}
      {/* <View style={{ marginTop: 8 }}>
          <Text
            style={[
              styles.normalTextBoldBody,
              {
                color: colors.error,
                lineHeight: 18,
              },
            ]}
          >
            Oops! Your Password Is Not Correct
          </Text>
        </View> */}
      {/* Error */}
    </View>
  );
};

const style = StyleSheet.create({
  iconPadding: {
    paddingHorizontal: 16,
  },
});

export default memo(RegisterInput);
