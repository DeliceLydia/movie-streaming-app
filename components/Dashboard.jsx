import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import Types from "./types";
import Trending from "./Trending";
import New from "./New";
import Title from "./Title";
import Title2 from "./Title2";
import Title3 from "./Title3";
import MadeForYou from "./Made";
import PopularMovies from "./popular";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              source={require("../assets/muvi.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <View style={styles.icons}>
            <Feather
              style={styles.iconStyle}
              name="bookmark"
              type="font-awesome"
              size={15}
              color="#959798"
            />
            <AntDesign
              style={styles.iconStyle}
              name="bells"
              type="font-awesome"
              size={15}
              color="#959798"
            />
          </View>
        </View>
        <Types />
        <Trending />
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
    height: "100%",
    backgroundColor: "#1f2123",
  },
  nav: {
    flexDirection: "row",
    marginLeft: 30,
    marginRight: 30,
    justifyContent: "space-between",
  },
  icons: {
    flexDirection: "row",
    gap: 15,
    marginTop: 29,
  },
});
