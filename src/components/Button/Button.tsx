import {
  View,
  Text,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import React, { FC, useState } from "react";
import colors from "@constants/colors";
import styles from "@styles/styles";
interface IButtonProps {
  title: string;
  onPress: () => void;
}
const Button: FC<IButtonProps> = ({ title, onPress }) => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          padding: 16,
          backgroundColor: colors.primary,
          marginTop: 16,
          width: "100%",
          height: 57,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          shadowColor: "rgba(64, 191, 255, 0.24)",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,

          elevation: 24,
        }}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text
            style={[
              styles.h5,
              {
                color: "#ffffff",
              },
            ]}
          >
            {title}
          </Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
