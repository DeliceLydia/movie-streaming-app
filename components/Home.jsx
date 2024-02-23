import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("start")}>
        <Image source={require("../assets/lg.png")} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1f2123',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});
