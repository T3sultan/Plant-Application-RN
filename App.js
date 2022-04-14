import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomText from "./src/common/CustomText";

export default function App() {
  return (
    <View style={styles.container}>
      <CustomText>Plant Application</CustomText>
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
