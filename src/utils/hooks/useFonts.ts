import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
// import * as Font from "expo-font";

// const useFonts = async () =>
//   await Font.loadAsync({
//     VarelaRound: require("../../assets/fonts/VarelaRound-Regular.ttf"),
//     RobotoRegular: require("../../assets/fonts/Roboto-Regular.ttf"),
//   });
//   const [IsReady, SetIsReady] = useState(false);

// export default async () => await useFonts();
// if (!IsReady) {
//   return (
//     <AppLoading
//       startAsync={useFonts}
//       onFinish={() => SetIsReady(true)}
//       onError={() => {}}
//     />
//   );
// }

export default () => {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });
  return fontsLoaded
}

