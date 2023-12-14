import React from "react";
import { Text, View } from "react-native";
import Layout from "../components/Layout";
import { openWhatsApp } from "../utils";
import Input from "../components/Input";
import { styles } from "../styles/style";
import { Button, ButtonWhatsapp } from "../components/Button";

const Landing = () => {
  const { message, setMessage, mobileNo, setMobileNo, chatWhatsapp } =
    openWhatsApp();

  return (
    <Layout>
      <View className="flex-1 items-center space-y-5">
        <Input
          value={message}
          onChange={setMessage}
          placeholder="Enter Message"
          style={[styles.input, { height: 90 }]}
        />
        <Input
          value={mobileNo}
          onChange={setMobileNo}
          placeholder="Enter Phone Number"
          style={styles.inputHp}
        />
        <Button onPress={chatWhatsapp} />
        <View className="flex-col">
          <ButtonWhatsapp title="Herbayu" />
          <ButtonWhatsapp title="Yusuf" />
          <ButtonWhatsapp title="Gunawan" />
        </View>
      </View>
    </Layout>
  );
};

export default Landing;
