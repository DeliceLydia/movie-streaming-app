import React, { useState } from "react";
import styles from "../styles/authentication";
import { View, Image, Text, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import { Icon } from "react-native-elements";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import FlashMessage, { showMessage } from "react-native-flash-message";

const Register = ({ navigation }) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

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

    if (confirmPassword.trim() == "") {
      setConfirmPasswordError("confirm password is required!");
      valid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Password do not match");
      valid = false;
    } else {
      setConfirmPasswordError("");
    }
    return valid;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const response = await createUserWithEmailAndPassword(
          FIREBASE_AUTH,
          email,
          password
        );
        showMessage({
           message: "User created successfully",
           type: "success",
           duration: 3600,
        });
        setTimeout(()=> {
          navigation.navigate("Signin");
        }, 3000)
        
      } catch (error) {
        showMessage({
          message: "Failed",
          type: "danger",
          duration: 1800,
        });
      }
    }
  };

  return (
    <View style={styles.container}>
      <FlashMessage position="top" />
      <Pressable onPress={() => navigation.navigate("Home")} style={styles.img}>
        <Image
          source={require("../assets/lg.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </Pressable>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Signup to discover all our movies and enjoy
        </Text>
        <Text style={styles.text}>our features</Text>
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
        textColor="#868889"
        placeholder="email"
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
        secureTextEntry={showPassword}
        value={password}
        label="Password"
        placeholder="password"
        textColor="#868889"
        right={
          <TextInput.Icon
            icon={showPassword ? 'eye-off-outline' : 'eye-outline'}
            onPress={togglePasswordVisibility}
            color="#d4b547"
            backgroundColor="#26282c"
          />
        }
        onChangeText={(text) => {
          setPassword(text);
          setPasswordError('');
        }}
        error={passwordError}
      />
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
      <TextInput
        theme={{
          colors: {
            primary: "#FCD130",
          },
        }}
        style={styles.input}
        secureTextEntry={showConfirmPassword}
        value={confirmPassword}
        label="Confirm Password"
        placeholder="Confirm Password"
        textColor="#868889"
        right={
          <TextInput.Icon
            icon={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'}
            onPress={toggleConfirmPasswordVisibility}
            color="#d4b547"
            backgroundColor="#26282c"
          />
        }
        onChangeText={(text) => {
          setConfirmPassword(text);
          setConfirmPasswordError('');
        }}
        error={passwordError}
      />
      {confirmPasswordError ? (
        <Text style={styles.error}>{confirmPasswordError}</Text>
      ) : null}
      <Text>
        <Text style={{ color: "#fff", marginTop: 20 }}>
          By signing up I accept
        </Text>
        <Text style={{ color: "#ae9a53" }}> terms of use </Text>
        <Text style={{ color: "#fff" }}> and </Text>
        <Text style={{ color: "#ae9a53" }}>privacy policy</Text>
      </Text>
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
        <Pressable onPress={() => navigation.navigate("Signin")}>
          <Text style={{ color: "#eac866" }}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;
