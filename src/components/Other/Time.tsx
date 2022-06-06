import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Colors, Size, Styles } from "@assets/styles";
import { useTimer } from "@utils/hooks/useTimer";
const formatTime = (timer: number) => {
  const second = `0${timer % 60}`.slice(-2);
  const minute = `0${Math.floor(timer / 60) % 60}`.slice(-2);
  const hour = `0${Math.floor(timer / 3600)}`.slice(-2);
  return {
    hour,
    minute,
    second,
  };
};
const Time = () => {
  const { timer, handleStart } = useTimer(140);
  useEffect(() => {
    handleStart();
  }, []);
  const { hour, minute, second } = formatTime(timer);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 42,
          height: 42,
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <Text style={{ ...Styles.h4, color: Colors.Neutral.dark }}>{hour}</Text>
      </View>
      <View style={{ marginHorizontal: Size.margin / 4 }}>
        <Text style={{ ...Styles.bodyMediumBold, color: "#ffffff" }}>:</Text>
      </View>
      <View
        style={{
          width: 42,
          height: 42,
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <Text style={{ ...Styles.h4, color: Colors.Neutral.dark }}>
          {minute}
        </Text>
      </View>
      <View style={{ marginHorizontal: Size.margin / 4 }}>
        <Text style={{ ...Styles.bodyMediumBold, color: "#ffffff" }}>:</Text>
      </View>
      <View
        style={{
          width: 42,
          height: 42,
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <Text style={{ ...Styles.h4, color: Colors.Neutral.dark }}>
          {second}
        </Text>
      </View>
    </View>
  );
};

export default Time;
