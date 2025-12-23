import { Stack } from "expo-router";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: "#000", paddingVertical: 1 }}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
          <Stack screenOptions={{ headerShown: false }} />
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
};

export default RootLayout;
