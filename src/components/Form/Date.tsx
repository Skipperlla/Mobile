import { View, TextInput, TouchableWithoutFeedback, Text } from "react-native";
import React, { useState, useCallback } from "react";
import { Colors, Size, Styles } from "@assets/styles";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Date = () => {
  const [text, setText] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isCurrentDate, setIsCurrentDate] = useState<string>(
    moment().format("L")
  );
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
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
    setIsActive(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
    setIsActive(false);
  };

  const handleConfirm = (date: Date) => {
    setIsCurrentDate(moment(date).format("L"));
    // console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  return (
    <View>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 5,
          borderColor: isActive ? Colors.Primary.blue : Colors.Neutral.light,
          flexDirection: "row",
          alignItems: "center",
          //   paddingRight: Size.padding,
          justifyContent: "center",
        }}
      >
        <TouchableWithoutFeedback onPress={showDatePicker}>
          <View
            style={[
              {
                flex: 1,
                paddingVertical: Size.padding - 4,
                paddingLeft: Size.padding,
              },
            ]}
          >
            <Text
              style={{
                ...Styles.captionLargeRegular,
                color: Colors.Neutral.grey,
              }}
            >
              {isCurrentDate}
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: Size.padding / 2,
          }}
        >
          <Ionicons
            name="ios-calendar-outline"
            size={Size.iconSize}
            onPress={showDatePicker}
            color={isActive ? Colors.Primary.blue : Colors.Neutral.grey}
          />
        </View>
        {/* // * Date Picker */}
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          locale="tr"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    </View>
  );
};

export default Date;
