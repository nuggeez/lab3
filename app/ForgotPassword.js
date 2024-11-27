import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

const ForgotPassword = () => {
  const [recoveryEmail, setRecoveryEmail] = useState('');
  const router = useRouter();

  const handleRecover = () => {
    // Handle password recovery logic
    router.push('/ResetPassword');
  };

  const handleBackToLogin = () => {
    router.push('/LoginSignUp'); 
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Icon and Welcome text */}
      <View style={styles.headerContainer}>
        <MaterialIcons name="pets" size={80} color="#87986A" style={styles.icon} />
        <Text style={styles.welcomeText}>Welcome to ADOPTABLE!</Text>
      </View>

      {/* Forgot password form */}
      <View style={styles.formContainer}>
        <Text style={styles.resetText}>Forgot Password</Text>

        {/* Email input */}
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Email:</Text>
          <TextInput
            style={styles.emailInput}
            placeholder="Enter your email address"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={recoveryEmail}
            onChangeText={setRecoveryEmail}
          />
        </View>

        {/* Recover password button */}
        <TouchableOpacity style={styles.recoverButton} onPress={handleRecover}>
          <Text style={styles.recoverButtonText}>Recover Password</Text>
        </TouchableOpacity>

        {/* "or" text */}
        <Text style={styles.orText}>or</Text>

        {/* Create account button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleBackToLogin}>
          <Text style={styles.loginButtonText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#E9F5DB",
    alignItems: 'center',
    paddingTop: 20,
  },
  headerContainer: {
    marginTop: 50,
    alignItems: 'center',
    marginBottom: 50,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#87986A',
    textAlign: 'center',
    marginTop: 10,
  },
  formContainer: {
    width: '90%',
    alignItems: 'center',
  },
  resetText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#718355',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  labelText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#97A97C',
  },
  emailInput: {
    borderWidth: 1,
    borderColor: '#B5C99A',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    color: 'gray',
    backgroundColor: '#FFF',
  },
  recoverButton: {
    backgroundColor: '#87986A',
    padding: 14,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  recoverButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  orText: {
    fontSize: 16,
    color: '#718355',
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: '#87986A',
    padding: 14,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backButton: {
    marginTop: 20,
  },
  backButtonText: {
    color: '#718355',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default ForgotPassword;
