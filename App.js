import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./scr/screens/Home";
import AppLoading from "expo-app-loading";
import { SafeAreaView } from "react-native-web";

import {
  useFonts,
  Padauk_400Regular,
  Padauk_700Bold,
} from "@expo-google-fonts/padauk";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Faculty from "./scr/screens/Faculty";
import Courses from "./scr/screens/Courses";
import Account from "./scr/screens/Account";

export default function App() {
  let [fontLoaded] = useFonts({ Padauk_400Regular, Padauk_700Bold });

  if (!fontLoaded) return <AppLoading />;
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => <Home {...props} user="Sanket Gawande" />}
        </Stack.Screen>
        <Stack.Screen name="Faculties">
          {(props) => <Faculty {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Courses">
          {(props) => <Courses {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Account">
          {(props) => <Account {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
