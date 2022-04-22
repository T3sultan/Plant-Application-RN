import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomText from "./src/common/CustomText";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/screens/app";
import AppNavigation from "./src/navigation/AppNavigation";
import PlantDetails from "./src/screens/app/PlantDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoBlack: require("./assets/static/Nunito-Black.ttf"),
    NunitoBold: require("./assets/static/Nunito-Bold.ttf"),
  });
  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="AppNavigation"
          component={AppNavigation}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="PlantDetails"
          component={PlantDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
