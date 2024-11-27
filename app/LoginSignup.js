import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const LoginSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Login and Sign Up
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  const handleToggle = () => {
    setIsSignUp(!isSignUp); // Toggle between Login and Sign Up
  };

  const handleProceed = () => {
    if (isSignUp) {
      // Proceed with sign-up logic
      console.log('Signing up...');
      // Example: Validate and push to another screen or API call
      router.push('Dashboard/Tabs');
    } else {
      // Proceed with login logic
      console.log('Logging in...');
      router.push('Dashboard/Tabs');
    }
  };
  
  const handleForgotPassword = () => {
    router.push('/app/ForgotPassword'); // Navigate to ForgotPassword page
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Icon and Welcome text */}
      <View style={styles.headerContainer}>
        <MaterialIcons name="pets" size={80} color="#87986A" style={styles.icon} />
        <Text style={styles.welcomeText}>
          {isSignUp ? 'Create Your Account' : 'Welcome to ADOPTABLE!'}
        </Text>
      </View>

      {/* Input fields */}
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          {isSignUp && (
            <>
              <Text style={styles.labelText}>First Name:</Text>
              <TextInput style={styles.emailInput} placeholder="Enter your first name" />
              <Text style={styles.labelText}>Last Name:</Text>
              <TextInput style={styles.emailInput} placeholder="Enter your last name" />
            </>
          )}
          <Text style={styles.labelText}>Email:</Text>
          <TextInput style={styles.emailInput} placeholder="Enter your email" />
          <Text style={styles.labelText}>Password:</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter your password"
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <Ionicons
                name={passwordVisible ? 'eye' : 'eye-off'}
                size={24}
                color="#718355"
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>

          {!isSignUp && (
            <TouchableOpacity style={styles.forgotButton} onPress={handleForgotPassword}>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.loginButton} onPress={handleProceed}>
            <Text style={styles.loginText}>{isSignUp ? 'Sign Up' : 'Login'}</Text>
          </TouchableOpacity>
        </View>

        {/* Toggle between Login and Sign Up */}
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>
            {isSignUp ? 'Already have an account?' : "Don't have an account yet?"}
          </Text>
          <TouchableOpacity onPress={handleToggle}>
            <Text style={styles.toggleButtonText}>{isSignUp ? 'Login' : 'Sign Up'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#E9F5DB",
    alignItems: 'center',
    paddingTop: 50,
  },
  icon: {
    marginTop: 10,
    alignSelf: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 10,
    textAlign: 'center',
    color: '#718355',
  },
  formContainer: {
    width: '90%',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  labelText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#87986A',
  },
  emailInput: {
    borderColor: '#CFE1B9',
    borderWidth: 1,
    color: 'gray',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#B5C99A',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#CFE1B9',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#B5C99A',
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 10,
    color: '#718355',
  },
  eyeIcon: {
    paddingLeft: 10,
  },
  forgotButton: {
    marginBottom: 10,
    marginTop: 10,
  },
  forgotText: {
    fontSize: 18,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: '#718355',
    alignSelf: 'center',
  },
  loginButton: {
    backgroundColor: '#718355',
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: "white",
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 1,
  },
  toggleText: {
    fontSize: 18,
    color: '#87986A',
  },
  toggleButtonText: {
    fontSize: 18,
    marginLeft: 5,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#718355',
  },
});

export default LoginSignUp;
