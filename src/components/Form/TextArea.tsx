import { TextInput, View, Text, TouchableWithoutFeedback } from "react-native";
import React, { useState, useCallback } from "react";
import { Colors, Styles } from "@assets/styles";
import { Ionicons } from "@expo/vector-icons";
const TextArea = ({ isError = " Oops! Your Password Is Not Correct" }) => {
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
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: isError
            ? Colors.Primary.red
            : isActive
            ? Colors.Primary.blue
            : Colors.Neutral.light,
          borderRadius: 5,
          paddingTop: 12,
          paddingHorizontal: 16,
        }}
      >
        <TextInput
          autoCorrect={false}
          placeholder="Write your review here"
          placeholderTextColor={Colors.Neutral.grey}
          onChangeText={onChangeText}
          onBlur={onPassive}
          onFocus={onActive}
          onSubmitEditing={onPassive}
          multiline={true}
          numberOfLines={4}
          maxLength={250}
          style={[
            text ? Styles.captionLargeBold : Styles.captionLargeRegular,
            {
              flex: 1,
              color: Colors.Neutral.grey,
              height: 160,
              textAlignVertical: "top",
            },
          ]}
        />
      </View>
      {isError && (
        <View style={{ marginTop: 8 }}>
          <Text style={[Styles.bodyNormalBold, { color: Colors.Primary.red }]}>
            {isError}
          </Text>
        </View>
      )}
    </View>
  );
};

export default TextArea;
