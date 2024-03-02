import {
  View,
  StyleSheet,
  Image,
  Text,
  StatusBar,
  Pressable,
} from "react-native";
import AntiDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Profile = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        color="#fff"
        backgroundColor="#202123"
        barStyle="light-content"
      />
      <View style={styles.info}>
        <Image source={require("../assets/ly.jpg")} style={styles.image} />
        <Text
          style={{
            marginBottom: 4,
            color: "#9c9c9e",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Lydia Ingabire
        </Text>
        <Text style={{ marginBottom: 4, color: "#3f4144" }}>
          Delydia84@gmail.com
        </Text>
        <Text style={{ color: "#897231" }}>Edit Profile</Text>
      </View>
      <View style={{ backgroundColor: "#2b2d30", height: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 20,
            gap: 15,
            paddingTop: 20,
            marginBottom: 10,
          }}
        >
          <AntiDesign name="inbox" size={25} style={{ color: "#848686" }} />
          <Text style={{ color: "#848686", fontSize: 18 }}>Inbox</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 20,
            gap: 15,
            paddingTop: 20,
            marginBottom: 10,
          }}
        >
          <MaterialCommunityIcons
            name="account-outline"
            size={25}
            style={{ color: "#848686" }}
          />
          <Text style={{ color: "#848686", fontSize: 18 }}>
            Account settings
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingLeft: 20,
            gap: 15,
            paddingTop: 20,
            marginBottom: 10,
          }}
        >
          <Feather name="globe" size={25} style={{ color: "#848686" }} />
          <Text style={{ color: "#848686", fontSize: 18 }}>Languages</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 20,
            gap: 15,
            paddingTop: 20,
            marginBottom: 10,
          }}
        >
          <Feather name="help-circle" size={25} style={{ color: "#848686" }} />
          <Text style={{ color: "#848686", fontSize: 18 }}>Help, FAQ</Text>
        </View>
        <Pressable>
          <Text
            style={{
              textAlign: "center",
              marginTop: 70,
              borderWidth: 1,
              borderColor: "#3a3e42",
              marginLeft: 'auto',
              marginRight: 'auto',
              paddingTop: 10,
              paddingBottom: 10,
              color: '#784c48',
              width: "80%",
            }}
          >
            Log Out
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#202123",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginTop: 8,
    marginBottom: 10,
  },
  info: {
    alignItems: "center",
    backgroundColor: "#25272a",
    paddingTop: 30,
    paddingBottom: 30,
  },
});
