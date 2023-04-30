import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AddCart from "./components/AddCart";
import Payment from "./components/Payment";
import Shopping from "./components/Shopping";

export default function App() {
  return (
    <View>
      <Shopping />
      {/* <AddCart /> */}
      {/* <Payment /> */}
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
