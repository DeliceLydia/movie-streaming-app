import { TextInput } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const Input = ({
  mode,
  label,
  color,
  theme,
  secureTextEntry,
  placeholder,
  iconName,
  onChange,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={{backgroundColor: "", color: "red"}}
        mode={"outlined"}
        label={label}
        placeholder={placeholder}
        color={color}
        theme={theme}
        secureTextEntry={secureTextEntry}
        onChange={onChange}
        left={<TextInput.Icon name="home" size={24} color={"white"}/>}
      />
      <Icon name={iconName} size={20} color="#caac3e" style={styles.icon}/>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: "#26282c",
  },
  icon: {
    marginTop: 20,
  }
})
