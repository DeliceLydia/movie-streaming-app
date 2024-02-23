import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image source={require("../assets/lg.png")} style={styles.image} />
      </View>
      <View style={styles.background}>
        <Image source={require("../assets/bc.png")} style={styles.bc} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Welcome to Muvi</Text>
      </View>
      <View style={styles.textContainer1}>
        <Text style={styles.text1}>
          Free movie streaming all your needs {"\n"} everytime and everywhere
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Signin")} style={styles.get}>
        <Text
          style={{
            color: "#000",
            backgroundColor: "#fdd12f",
            textAlign: "center",
            borderRadius: 8,
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          Watch Movie
        </Text>
        </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Text style={styles.signin}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#26282c",
  },
  img: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1f2123",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginTop: 8,
  },
  background: {
    width: 300,
    marginTop: 150,
  },
  bc: {
    width: "100%",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  textContainer: {
    marginTop: 10,
    marginBottom: 8,
  },
  text1: {
    fontSize: 16,
    color: "#5f6163",
  },
  get: {
    marginTop: 220,
    width: "70%",
  },
  signin: {
    marginTop: 20,
    color: '#fff'
  },
});
