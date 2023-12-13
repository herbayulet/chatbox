import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Layout = ({ children }) => {
  return (
    <View className="pt-10">
      <Text className="text-center my-5 text-lg text-green-500 font-semibold">
        Open WhatsApp chat box from React-native App
      </Text>
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  );
};
export default Layout;
