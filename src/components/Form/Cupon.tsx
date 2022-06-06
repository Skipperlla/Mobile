import { View, Text, TextInput, TouchableWithoutFeedback } from "react-native";
import React, { useState, useCallback } from "react";
import { Colors, Size, Styles } from "@assets/styles";
import { LoadingIndicator } from "@components/index";
interface ICuponProps {
  isError: string;
  isLoading: boolean;
}
const Cupon = ({ isError, isLoading }: ICuponProps) => {
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
        }}
      >
        <TextInput
          style={[
            !isActive ? Styles.captionLargeRegular : Styles.captionLargeBold,
            {
              flex: 1,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderLeftWidth: 1,
              borderColor: isError
                ? Colors.Primary.red
                : isActive
                ? Colors.Primary.blue
                : Colors.Neutral.light,
              // paddingLeft: Size.padding,
              // paddingHorizontal: Size.padding + 1,
              paddingHorizontal: Size.padding + 1,
              paddingVertical: Size.padding + 8,
              color: Colors.Neutral.grey,
            },
          ]}
          placeholderTextColor={Colors.Neutral.light}
          placeholder="Enter Cupon Code"
          onChangeText={onChangeText}
          onBlur={onPassive}
          onFocus={onActive}
          onSubmitEditing={onPassive}
        />
        <TouchableWithoutFeedback onPress={() => {}}>
          <View
            style={{
              backgroundColor: Colors.Primary.blue,
              // paddingHorizontal: Size.padding + 1,
              // paddingVertical: Size.padding + 8,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              minWidth: 85,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isLoading ? (
              <LoadingIndicator color={"#fff"} />
            ) : (
              <Text style={[Styles.bodyNormalBold, { color: "#ffffff" }]}>
                Apply
              </Text>
            )}
          </View>
        </TouchableWithoutFeedback>
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

export default Cupon;
