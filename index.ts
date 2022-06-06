import { registerRootComponent } from "expo";
import "react-native-gesture-handler";
import moment from "moment";
import "moment/locale/tr"; // without this line it didn't work
moment.locale("tr");
import App from "./src/App";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
