import React, { useState } from "react";
import RangeSlider from "react-native-range-slider-expo";
import { Colors } from "@assets/styles";

const SliderPrice = () => {
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <RangeSlider
      min={0}
      max={100}
      step={1}
      styleSize="small"
      fromKnobColor={Colors.Primary.blue}
      toKnobColor={Colors.Primary.blue}
      inRangeBarColor={Colors.Primary.blue}
      outOfRangeBarColor={Colors.Neutral.light}
      valueLabelsBackgroundColor={Colors.Primary.blue}
      rangeLabelsTextColor={Colors.Primary.blue}
      showRangeLabels={false}
      showValueLabels={false}
      fromValueOnChange={(value) => setFromValue(value)}
      toValueOnChange={(value) => setToValue(value)}
      barHeight={4}
      //   initialFromValue={11}
    />
  );
};

export default SliderPrice;
