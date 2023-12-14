import { useState } from "react";
import { Alert, Linking } from "react-native";

export const openWhatsApp = () => {
  const [mobileNo, setMobileNo] = useState("");
  const [message, setMessage] = useState("");

  const chatWhatsapp = () => {
    if (mobileNo) {
      if (message) {
        const url = `whatsapp://send?text=${message}&phone=62${mobileNo}`;
        Linking.openURL(url)
          .then((data) => {
            console.log(`WhatsApp Opened successfully ${data}`);
          })
          .catch(() => {
            Alert.alert("Make sure WhatsApp installed on your device");
          });
      } else {
        Alert.alert("Please enter message to send");
      }
    } else {
      Alert.alert("Please enter the number to send");
    }
  };

  return {
    message,
    setMessage,
    mobileNo,
    setMobileNo,
    chatWhatsapp,
  };
};
