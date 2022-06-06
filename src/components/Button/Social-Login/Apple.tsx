import { View, Text, TouchableWithoutFeedback } from "react-native";
import { Size, Styles, Colors } from "@assets/styles/index";
import { Ionicons } from "@expo/vector-icons";
import LoadingIndicator from "@components/LoadingIndicator";
interface IApple {
  isLoading: boolean;
}
const Apple = ({ isLoading }: IApple) => {
  return (
    <TouchableWithoutFeedback>
      <View
        style={{
          padding: Size.padding,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          borderRadius: 5,
          borderWidth: 1,
          borderColor: Colors.Neutral.light,
        }}
      >
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
            }}
          >
            <View>
              <Ionicons name="ios-logo-apple" size={24} color="black" />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={[Styles.bodyMediumBold, { color: Colors.Neutral.grey }]}
              >
                Login with Apple
              </Text>
            </View>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Apple;
