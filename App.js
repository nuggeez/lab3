import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [activeForm, setActiveForm] = useState("login");

  // login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  // signup
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // password recovery
  const [recoveryEmail, setRecoveryEmail] = useState("");

  const handleRegister = () => {
    console.log("Registering with:", firstName, lastName, password);
  };

  const handleRecovery = () => {
    console.log("Recovering password for:", recoveryEmail);
  };

  const renderLogin = () => (
    <View style={styles.content}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <View style={styles.icon}>
          <Feather name="mail" size={22} color="#7C808D" />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#7C808D"
          selectionColor="#3662AA"
          onChangeText={setEmail}
          value={email}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.icon}>
          <Feather name="lock" size={22} color="#7C808D" />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!passwordIsVisible}
          placeholderTextColor="#7C808D"
          selectionColor="#3662AA"
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity
          style={styles.passwordVisibleButton}
          onPress={() => setPasswordIsVisible(!passwordIsVisible)}
        >
          <Feather
            name={passwordIsVisible ? "eye" : "eye-off"}
            size={20}
            color="#7C808D"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.forgotPasswordButton}
        onPress={() => setActiveForm("forgotPassword")}
      >
        <Text style={styles.forgotPasswordButtonText}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.orContainer}>
        <View style={styles.orLine} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.orLine} />
      </View>
      <TouchableOpacity style={styles.googleButton}>
        <Image
          style={styles.googleLogo}
          source={require("./assets/google-logo.png")} // Adjust path as needed
        />
        <Text style={styles.googleButtonText}>Login with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => setActiveForm("signup")}
      >
        <Text style={styles.registerButtonText}>
          Not have an account yet?{" "}
          <Text style={styles.registerButtonTextHighlight}>Register now!</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderSignup = () => (
    <View style={styles.content}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          onChangeText={setFirstName}
          value={firstName}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          onChangeText={setLastName}
          value={lastName}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!passwordIsVisible}
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity
          style={styles.passwordVisibleButton}
          onPress={() => setPasswordIsVisible(!passwordIsVisible)}
        >
          <Feather
            name={passwordIsVisible ? "eye" : "eye-off"}
            size={20}
            color="#7C808D"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
        <Text style={styles.loginButtonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => setActiveForm("login")}
      >
        <Text style={styles.backButtonText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );

  const renderForgotPassword = () => (
    <View style={styles.content}>
      <Text style={styles.title}>Forgot Password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your Email Address"
          placeholderTextColor="#7C808D"
          selectionColor="#3662AA"
          onChangeText={setRecoveryEmail}
          value={recoveryEmail}
        />
      </View>
      <TouchableOpacity style={styles.recoveryButton} onPress={handleRecovery}>
        <Text style={styles.recoveryButtonText}>Recover Password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => setActiveForm("login")}
      >
        <Text style={styles.backButtonText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {activeForm === "login" && renderLogin()}
        {activeForm === "signup" && renderSignup()}
        {activeForm === "forgotPassword" && renderForgotPassword()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingHorizontal: 30,
    width: "100%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
    position: "relative",
  },
  icon: {
    marginRight: 15,
  },
  input: {
    borderBottomWidth: 1.5,
    borderBottomColor: "#ddd",
    paddingVertical: 10,
    fontSize: 16,
  },
  passwordVisibleButton: {
    position: "absolute",
    right: 0,
    top: 10,
  },
  forgotPasswordButton: {
    alignSelf: "flex-end",
  },
  forgotPasswordButtonText: {
    color: "#3662AA",
    fontSize: 16,
    fontWeight: "500",
  },
  recoveryButton: {
    backgroundColor: "#d6b4fc",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  recoveryButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#d6b4fc",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  loginButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  orLine: {
    height: 1,
    backgroundColor: "#eee",
    flex: 1,
  },
  orText: {
    color: "#7C808D",
    marginRight: 10,
    marginLeft: 10,
    fontSize: 14,
  },
  googleButton: {
    backgroundColor: "#F2F6F2",
    padding: 14,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  googleButtonText: {
    color: "#3662AA",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
  googleLogo: {
    width: 20,
    height: 20,
  },
  registerButton: {
    marginTop: 20,
  },
  registerButtonText: {
    color: "#7C808D",
    textAlign: "center",
    fontSize: 16,
  },
  registerButtonTextHighlight: {
    color: "#3662AA",
  },
  backButton: {
    marginTop: 20,
    alignSelf: "center",
  },
  backButtonText: {
    color: "#3662AA",
    fontSize: 16,
  },
});
