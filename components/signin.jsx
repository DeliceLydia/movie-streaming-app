import React, { useState } from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import { Icon } from "react-native-elements";

const Signin = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateForm = () => {
    let valid = true;

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    // Validate email
    if (!email.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email format");
      valid = false;
    } else {
      setEmailError("");
    }
    // Validate password
    if (!password.trim()) {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }
    return valid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      navigation.navigate("Dashboard");
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Home")} style={styles.img}>
      <Image
          source={require("../assets/lg.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </Pressable>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Please Login to enjoy more benefits and we
        </Text>
        <Text style={styles.text}>won't let You go</Text>
      </View>
      <TextInput
        theme={{
          colors: {
            primary: "#FCD130",
          },
        }}
        style={styles.input}
        mode="flat"
        label="Email Address"
        placeholder="email"
        textColor="#868889"
        right={
          <TextInput.Icon
            icon="email-outline"
            color="#d4b547"
            backgroundColor="#26282c"
          />
        }
        onChangeText={setEmail}
        error={emailError}
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
      <TextInput
       theme={{
        colors: {
          primary: "#FCD130",
        },
      }}
        style={styles.input}
        label="Password"
        textColor="#868889"
        placeholder="password"
        right={
          <TextInput.Icon
            icon="lock-outline"
            color="#d4b547"
            backgroundColor="#26282c"
          />
        }
        onChangeText={setPassword}
        error={passwordError}
      />
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
      <Text style={{ color: "#ae9a53", left: 130 }}>Forgot Password?</Text>
      <Pressable onPress={handleSubmit} style={styles.get}>
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
      </Pressable>
      <Text style={{ color: "#8d8e92", marginTop: 20 }}>
        Or simply login with
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
        <Text style={{ color: "#fff" }}>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={{ color: "#eac866" }}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    backgroundColor: "#26282c",
  },
  image: {
    marginTop: 100,
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
  error: {
    color: 'red'
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
    backgroundColor: "#ffffff",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    width: "65%",
    marginTop: 30,
    gap: 10,
  },
  link: {
    flexDirection: "row",
    marginTop: 160,
    gap: 10,
  },
});
