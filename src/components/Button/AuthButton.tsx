import { View, Text, TouchableOpacity } from "react-native";
import React, { FC, ReactNode } from "react";
import colors from "@constants/colors";
import styles from "@styles/styles";

const AuthButton: FC<{ title: string; icon: ReactNode }> = ({
  title,
  icon,
}) => {
  return (
    <TouchableOpacity
      style={{
        padding: 16,
        marginTop: 16,
        width: "100%",
        height: 57,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: colors.Light,
      }}
    >
      {icon}
      <View style={{ flex: 1 }}>
        <Text
          style={[
            styles.h5,
            {
              textAlign: "center",
              color: colors.grey,
              lineHeight: 25.2,
            },
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AuthButton;
