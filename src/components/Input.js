import { TextInput } from "react-native";

const Input = ({ value, style, onChange, placeholder }) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      multiline
      style={style}
    />
  );
};
export default Input;
