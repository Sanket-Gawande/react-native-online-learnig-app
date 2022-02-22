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

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


export default function App() {
  let [fontLoaded] = useFonts({ Padauk_400Regular, Padauk_700Bold });

  if (!fontLoaded) return <AppLoading />;
const Stack = createNativeStackNavigator()
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
       <Stack.Screen name="Home" >
         {(props) => <Home {...props} user="Sanket Gawande" />}

       </Stack.Screen>
     </Stack.Navigator>
   </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Padauk_400Regular",
  },
});
