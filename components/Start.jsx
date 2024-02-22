import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const Start = ({navigation}
  ) => {
  return (
    <ImageBackground
      source={{
        uri: "https://media.gq-magazine.co.uk/photos/5d9b129fa07a4d0008ccd074/16:9/w_2240,c_limit/20191007-Red-Suit-04.jpg",
      }}
      style={styles.backgroundImage}
    >
      <Text style={styles.text}>
        <Text>Enjoy your favorite{"\n"}</Text>
        <Text>movie everywhere</Text>
      </Text>
      <Text style={styles.info}>
        Browse through our collections and {"\n"}discover hundreds of movies and
        series that {"\n"}you'll love!
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("welcome")}
        style={styles.get}
      >
        <Text
          style={{
            color: "#000",
            backgroundColor: "#fdd12f",
            textAlign: "center",
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: 8,
            paddingTop: 10,
            paddingBottom: 10
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Start;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "contain",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 400,
    paddingLeft: 20,
  },
  info: {
    color: "white",
    fontSize: 16,
    paddingLeft: 20,
    marginTop: 10,
  },
  get: {
    marginTop: 190,
  },
});
