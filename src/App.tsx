import MainNavigator from "./navigation/MainNavigator";
import { Provider } from "react-redux";
import store from "@store/store";
import AppLoading from "expo-app-loading";
import moment from "moment";
import "moment/locale/tr"; // without this line it didn't work
moment.locale("tr");
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "@utils/context/AuthContext";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";
export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AuthProvider>
          <MainNavigator />
        </AuthProvider>
      </SafeAreaProvider>
    </Provider>
  );
}
