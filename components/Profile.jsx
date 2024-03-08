import {useContext} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  StatusBar,
  Pressable,
} from "react-native";
import AntiDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ChangeIntoDarkMode } from "../context/themeContext";
import { FIREBASE_AUTH } from "../FirebaseConfig";


const Profile = ({navigation}) => {
  const {dark,changeIntoDark} = useContext(ChangeIntoDarkMode);

  const handleLogout = async () => {
    try {
      await FIREBASE_AUTH.signOut();
      navigation.navigate("Dashboard");
    } catch (error) {
      console.error('Error during logout:', error.message);
    }
  };
  return (
    <View style={[styles.container, {backgroundColor:dark?'#202123':'white'}]}>
      <StatusBar
        color="#fff"
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
      <View style={{backgroundColor:dark?'#2b2d30':'white', height: "100%" }}>
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
        <View
        style={{
          flexDirection: "row",
          paddingLeft: 20,
          paddingTop: 20,
          marginBottom: 10,
        }}
        >
          <Text style={{color: "#848686", marginTop: 12, fontSize: 16}}>Change Mode</Text>
          <Entypo
              name="switch"
              type="font-awesome"
              color= "#848686"
              paddingLeft= {25}
              size={40}
              onPress={()=>{changeIntoDark()}}
            />
        </View>
        <Pressable onPress={handleLogout}>
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
    height: "100%"
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
    paddingTop: 30,
    paddingBottom: 30,
  },
});
