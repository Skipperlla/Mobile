import { View, TextInput, Button } from "react-native";
import React, { useState, useCallback } from "react";
import { Colors, Styles } from "@assets/styles";

const Default = ({ isError }) => {
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
    <TextInput
      placeholder="Placeholder"
      placeholderTextColor={Colors.Neutral.grey}
      onChangeText={onChangeText}
      onBlur={onPassive}
      onFocus={onActive}
      onSubmitEditing={onPassive}
      style={[
        isError
          ? Styles.captionLargeRegular
          : text
          ? Styles.captionLargeBold
          : Styles.captionLargeRegular,
        {
          backgroundColor: "#ffffff",
          color: Colors.Neutral.grey,
          borderWidth: 1,
          borderColor: isError
            ? Colors.Primary.red
            : isActive
            ? Colors.Primary.blue
            : Colors.Neutral.light,
          borderRadius: 5,
          paddingVertical: 12,
          paddingHorizontal: 16,
        },
      ]}
    />
  );
};

export default Default;
