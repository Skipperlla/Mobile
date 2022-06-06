import { ActivityIndicator } from "react-native";
import { Colors } from "@assets/styles";

const LoadingIndicator = ({
  color = Colors.Primary.blue,
}: {
  color?: string;
}) => {
  return <ActivityIndicator size="small" color={color} />
};

export default LoadingIndicator;
