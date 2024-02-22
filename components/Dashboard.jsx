import { View, Image, StyleSheet } from "react-native";
import Types  from './types';
import Trending from "./Trending";
import New from "./New";
import Title from "./Title";
import Title2 from "./Title2";
import Title3 from "./Title3";
import MadeForYou from "./Made";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Image source={require("../assets/muvi.png")} style={styles.image} />
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
      <MadeForYou />
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
    marginTop: 20,
    flexDirection: "row",
    marginLeft: 30,
    marginRight: 30,
    justifyContent: "space-between",
  },
  icons: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 29
  }
});
