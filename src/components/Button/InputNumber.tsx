import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React, { useCallback, useState } from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Colors, Styles } from "@assets/styles";

const InputNumber = () => {
  const [count, setCount] = useState(0);
  const increase = useCallback(() => {
    setCount((c) => c + 1);
  }, [count]);
  const decrease = useCallback(() => {
    if (count) setCount((c) => c - 1);
  }, [count]);
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: Colors.Neutral.light,
        width: 104,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <TouchableWithoutFeedback onPress={decrease}>
        <View
          style={[
            styles.iconContainer,
            {
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              opacity: count ? 1 : 0.5,
            },
          ]}
        >
          <Ionicons name="ios-remove" size={16} color={Colors.Neutral.grey} />
        </View>
      </TouchableWithoutFeedback>
      <View>
        <Text
          style={[
            Styles.captionLargeRegular,
            { color: Colors.Neutral.dark, opacity: 0.5 },
          ]}
        >
          {count}
        </Text>
      </View>
      <TouchableWithoutFeedback onPress={increase}>
        <View
          style={[
            styles.iconContainer,
            { borderTopRightRadius: 5, borderBottomRightRadius: 5 },
          ]}
        >
          <AntDesign name="plus" size={16} color={Colors.Neutral.grey} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#ffffff",
    borderWidth: 1,

    borderColor: Colors.Neutral.light,
  },
});

export default InputNumber;
