import { Text, TouchableOpacity, View, SafeAreaView } from "react-native";

const Layout = ({ children }) => {
  return (
    <View className="flex-1 pt-10">
      <Text className="text-center my-5 text-lg text-green-500 font-semibold">
        Open WhatsApp chat box from React-native App
      </Text>
      <View className="flex-1">{children}</View>
    </View>
  );
};
export default Layout;
