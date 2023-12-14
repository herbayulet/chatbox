import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export const ButtonWhatsapp = ({ title }) => {
  const [active, setActive] = useState(false);
  return (
    <View className="flex-row ">
      <TouchableOpacity
        onPress={() => {
          setActive(!active);
        }}
        className={`bg-green-500 b-2 rounded-xl w-40 p-6 mb-3 ${
          active && "bg-green-800"
        }`}
      >
        <Text className="text-white text-center text-base">{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const Button = ({ onPress }) => {
  return (
    <View className="flex-row ">
      <TouchableOpacity
        onPress={onPress}
        className="bg-slate-500 b-2 rounded-xl w-40 mt-3 p-3 mb-3"
      >
        <Text className="text-white text-center text-base">Kirim</Text>
      </TouchableOpacity>
    </View>
  );
};
