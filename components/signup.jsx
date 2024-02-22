import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { Icon } from "react-native-elements";

const Signup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image source={require("../assets/lg.png")} style={styles.image} resizeMode="cover"/>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Signup to discover all our movies and enjoy
        </Text>
        <Text style={styles.text}>our features</Text>
      </View>
      <TextInput
        style={styles.input}
        mode="flat"
        label="Email Address"
        placeholder="email"
        right={
          <TextInput.Icon
            icon="email-outline"
            color="#d4b547"
            backgroundColor="#26282c"
          />
        }
      />
      <TextInput
        style={styles.input}
        label="Password"
        placeholder="password"
        right={
          <TextInput.Icon
            icon="lock-outline"
            color="#d4b547"
            backgroundColor="#26282c"
          />
        }
      />
       <TextInput
        style={styles.input}
        label="Confirm Password"
        placeholder="Confirm Password"
        right={
          <TextInput.Icon
            icon="lock-outline"
            color="#d4b547"
            backgroundColor="#26282c"
          />
        }
      />
      <Text>
      <Text style={{ color: "#fff", }}>By signing up I accept</Text>
      <Text style={{ color: "#ae9a53", }}> terms of use </Text>
      <Text style={{ color: "#fff", }}> and </Text>
      <Text style={{ color: "#ae9a53", }}>privacy policy</Text>
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Signup")}
        style={styles.get}
      >
        <Text
          style={{
            color: "#000",
            backgroundColor: "#fdd12f",
            textAlign: "center",
            width: "100%",
            borderRadius: 8,
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
      <Text style={{ color: "#8d8e92", marginTop: 20 }}>
        Or simply sign up with
      </Text>
      <View style={styles.buttonIcon}>
        <Icon
          style={styles.iconStyle}
          name="apple"
          type="font-awesome"
          size={15}
          color="#fff"
        />
        <Text style={{ color: "#fff" }}>Login with Apple</Text>
      </View>
      <View style={styles.bg}>
        <Image source={require("../assets/google.png")} style={styles.google} />
        <Text style={{ color: "#636363" }}>Login with Google</Text>
      </View>
      <View style={styles.link}>
        <Text style={{ color: "#fff" }}>Arleady have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
          <Text style={{ color: "#eac866" }}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    backgroundColor: "#26282c",
  },
  image: {
    marginTop: 60
  },
  textContainer: {
    alignItems: "center",
  },
  text: {
    color: "#868889",
    fontSize: 16,
  },
  input: {
    height: 50,
    borderRadius: 20,
    marginTop: 20,
    width: "65%",
    color: "white",
    borderWidth: 0,
    backgroundColor: "#26282c",
    marginBottom: 12,
  },
  get: {
    width: 380,
    marginTop: 30,
  },
  buttonIcon: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#000",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    width: "65%",
    gap: 10,
    marginTop: 30,
  },
  iconStyle: {
    marginTop: 2,
  },
  google: {
    width: 18,
    height: 18,
    marginTop: 3,
  },
  bg: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: '#ffffff',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    width: "65%",
    marginTop: 30,
    gap: 10
  },
  link: {
    flexDirection: 'row',
    marginTop: 120,
    gap: 10
  }
});
