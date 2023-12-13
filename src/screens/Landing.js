import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Layout from "../components/Layout";
import { openWhatsApp } from "../utils";
import { tw } from "nativewind";

const Landing = () => {
  const { message, setMessage, mobileNo, setMobileNo, chatWhatsapp } =
    openWhatsApp();

  return (
    <Layout>
      <View className="flex-1 items-center space-y-8">
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Enter message"
          multiline
          style={[styles.input, { height: 90 }]}
        />
        <TextInput
          value={mobileNo}
          onChangeText={setMobileNo}
          placeholder="Enter Mobile"
          style={styles.input}
          keyboardType="numeric"
        />
        <TouchableOpacity
          onPress={chatWhatsapp}
          className="bg-green-500 b-2 rounded-xl w-52 p-6"
        >
          <Text className="text-white text-center text-base">
            Open WhatsApp message
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 255,
    height: 90,
    padding: 10,
    margin: 10,
    backgroundColor: "#FFF",
    borderColor: "#000",
    borderRadius: 5,
    borderWidth: 0.5,
  },
});

export default Landing;
