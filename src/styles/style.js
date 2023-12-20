import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  inputHp: {
    width: 255,
    height: 50,
    padding: 10,
    margin: 10,
    backgroundColor: "#FFF",
    borderColor: "#000",
    borderRadius: 5,
    borderWidth: 0.5,
    justifyContent: "flex-start",
  },
  button: {
    backgroundColor: "#25D366", // Ubah nilai warna latar belakang menjadi hijau WhatsApp
    borderRadius: 20,
    width: 200, // Sesuaikan lebar tombol sesuai kebutuhan
    padding: 10, // Sesuaikan padding tombol sesuai kebutuhan
    alignItems: "center", // Pusatkan teks di dalam tombol
    justifyContent: "center", // Pusatkan teks di dalam tombol
  },
  buttonTitle: {
    color: "#FFFFFF",
    textAlign: "center",
  },
});
