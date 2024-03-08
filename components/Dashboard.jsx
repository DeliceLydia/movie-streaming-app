import {useContext} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  StatusBar,
} from "react-native";
import New from "./New";
import Title from "./Title";
import Title2 from "./Title2";
import Title3 from "./Title3";
import MadeForYou from "./Made";
import PopularMovies from "./popular";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { ChangeIntoDarkMode } from "../context/themeContext";

const Dashboard = ({ navigation }) => {
  const {dark,changeIntoDark} = useContext(ChangeIntoDarkMode);
  return (
    <View style={[styles.container, {backgroundColor:dark?'#202123':'white'}]}>
      <ScrollView>
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              source={require("../assets/muvi.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <View style={styles.icons}>
            <Text style={{color: "#848686", marginTop: 10, fontSize: 16}}>Change Mode</Text>
            <Entypo
              style={styles.iconStyle}
              name="switch"
              type="font-awesome"
              marginTop={8}
              size={30}
              color="#959798"
              onPress={()=>{changeIntoDark()}}
            />
          </View>
        </View>
        <Title />
        <New />
        <Title2 />
        <MadeForYou />
        <Title3 />
        <PopularMovies />
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    height: "100%"
  },
  nav: {
    flexDirection: "row",
    marginLeft: 30,
    marginRight: 30,
    justifyContent: "space-between",
  },
  icons: {
    flexDirection: "row",
    gap: 20,
    marginTop: 29,
  },
});
