import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { iconSize } from "@styles/size";
import colors from "@constants/colors";
import styles from "@styles/styles";

const CategoryCard = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
      }}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 999,
          borderWidth: 1,
          borderColor: colors.light,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="shirt-outline" size={iconSize} color={colors.primary} />
      </View>
      <View style={{ marginTop: 8 }}>
        <Text
          style={[styles.mediumTextRegularCaption, { color: colors.grey }]}
          numberOfLines={1}
        >
          Man Shirt
        </Text>
      </View>
    </View>
  );
};

export default CategoryCard;
