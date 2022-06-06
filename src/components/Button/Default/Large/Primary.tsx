import { View, Text, TouchableWithoutFeedback } from "react-native";
import { Size, Colors } from "@assets/styles/index";
import styles from "@assets/styles/styles";
import LoadingIndicator from "@components/LoadingIndicator";
interface IPrimary {
  text: string;
  onPress: () => void;
  isLoading: boolean;
}
const Primary = ({ text, onPress, isLoading }: IPrimary) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          backgroundColor: Colors.Primary.blue,
          padding: Size.padding,
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
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <Text style={[styles.bodyMediumBold, { color: "#ffffff" }]}>
            {text}
          </Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Primary;
