import {
  View,
  StyleSheet,
  Pressable,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Icons = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AntDesign
        style={styles.iconStyle}
        name="home"
        type="font-awesome"
        size={20}
        color="#e0c03f"
      />
      <Pressable
        onPress={() => navigation.navigate("Search")}
        style={styles.img}
      >
      <EvilIcons
        style={styles.iconStyle}
        name="search"
        type="font-awesome"
        size={30}
        color="#fff"
      />
      </Pressable>
      <FontAwesome
        style={styles.iconStyle}
        name="folder-o"
        type="font-awesome"
        size={20}
        color="#fff"
      />
      <AntDesign
        style={styles.iconStyle}
        name="appstore-o"
        type="font-awesome"
        size={20}
        color="#fff"
      />
    </View>
  );
};
export default Icons;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingTop: 10,
    paddingBottom: 10,
  },
});
