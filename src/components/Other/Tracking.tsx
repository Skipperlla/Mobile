import { Colors, Size } from "@assets/styles";
import React, { useState } from "react";
import StepIndicator from "react-native-step-indicator";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
const secondIndicatorStyles = {
  stepIndicatorSize: 24,
  currentStepIndicatorSize: 24 * 2,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: Colors.Primary.blue,
  stepStrokeWidth: 2,
  separatorStrokeFinishedWidth: 2,
  stepStrokeFinishedColor: Colors.Primary.blue,
  stepStrokeUnFinishedColor: Colors.Primary.blue,
  separatorFinishedColor: Colors.Primary.blue,
  separatorUnFinishedColor: Colors.Neutral.light,
  stepIndicatorFinishedColor: Colors.Primary.blue,
  stepIndicatorUnFinishedColor: Colors.Neutral.light,
  stepIndicatorCurrentColor: Colors.Primary.blue,
  stepIndicatorLabelFontSize: Size.heading.h6,
  currentStepIndicatorLabelFontSize: Size.heading.h6,
  stepIndicatorLabelCurrentColor: Colors.Primary.blue,
  stepIndicatorLabelFinishedColor: Colors.Primary.blue,
  stepIndicatorLabelUnFinishedColor: Colors.Neutral.grey,
  labelColor: Colors.Primary.blue,
  labelSize: Size.heading.h6,
  currentStepLabelColor: Colors.Primary.blue,
};

const Tracking = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const onStepPress = (position: number) => {
    setCurrentPage(position);
  };

  return (
    <StepIndicator
      customStyles={secondIndicatorStyles}
      currentPosition={2}
      renderStepIndicator={({ position, stepStatus }) => {
        return stepStatus === "current" ? (
          <Ionicons name="ios-checkmark-circle" size={24} color={"white"} />
        ) : (
          <MaterialCommunityIcons
            name="timer-sand-empty"
            size={15}
            color={"white"}
          />
        );
      }}
      stepCount={4}
      onPress={onStepPress}
      labels={["Packing", "Shipping", "Arriving", "Success"]}
    />
  );
};

export default Tracking;
