import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import { styles } from "../styles/style";
import { Text, View } from "react-native";

export const SelectNumber = ({ setMobileNo, mobileNo }) => {
  const nomor = ["81383931804", "81296404834", "88214068401"];
  const placeholder = "Pilih Nomor"; // Ganti dengan teks placeholder yang diinginkan

  return (
    <SelectDropdown
      data={nomor}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
        setMobileNo(selectedItem);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem;
      }}
      defaultValue={mobileNo}
      defaultButtonText={placeholder}
      buttonTextStyle={{ color: "#000" }}
      rowTextForSelection={(item, index) => {
        return item;
      }}
      buttonStyle={styles.inputHp}
      renderCustomizedButtonChild={(selectedItem, index) => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 14, marginRight: 8 }}>{selectedItem}</Text>
        </View>
      )}
    />
  );
};
