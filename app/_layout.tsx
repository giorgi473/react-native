import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
};

export default RootLayout;
