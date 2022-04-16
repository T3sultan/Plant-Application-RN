import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomText from "./src/common/CustomText";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoBlack: require("./assets/static/Nunito-Black.ttf"),
    NunitoBold: require("./assets/static/Nunito-Bold.ttf"),
  });
  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <View style={styles.container}>
      <CustomText nunitoBold primaryColor>
        Plant Application
      </CustomText>
      <StatusBar style="auto" />
    </View>
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
