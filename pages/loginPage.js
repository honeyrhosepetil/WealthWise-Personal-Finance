import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Icons in UI

const LoginScreen = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);  

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // For Passwords Visibility
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/images/WealthWise-Logo.png')} style={styles.logo} />

      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        placeholderTextColor="#aaa"
      />

      {/* Password Input */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
          <Icon name={passwordVisible ? 'eye' : 'eye-slash'} size={20} color="#aaa" />
        </TouchableOpacity>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Recovery Password</Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('Dashboard')}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      {/* OR Text */}
      <Text style={styles.orText}>Or continue with</Text>

      {/* Social Login Buttons */}
      <View style={styles.socialIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="google" size={20} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="apple" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="facebook" size={20} color="#3b5998" />
        </TouchableOpacity>
      </View>

      {/* Register Link */}
      <Text style={styles.registerText}>
        Not a member?{' '}
        <Text style={styles.registerLink} onPress={() => navigation.navigate('Register')}>
          Register now
        </Text>
      </Text>
    </View>
  );
};

// Styles Section
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  logo: { // Logo Image
    width: 150,
    height: 150,
    marginBottom: 20,
    marginTop: 130,
  },
  input: { // Style for Input Email/Username and Password
    width: '90%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 30,
    marginBottom: 15,
  },
  passwordContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 15,
    color: '#333',
  },
  eyeIcon: { 
    padding: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#007bff',
    marginLeft: 130,
    marginBottom: 20,
    //paddingRight: 20,
  },
  signInButton: {
    backgroundColor: '#265CBD',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '90%',
    marginBottom: 20,
  },
  signInText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  orText: {
    marginBottom: 15,
    color: '#777',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginBottom: 20,
  },
  iconButton: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 100,
    elevation: 2,
  },
  registerText: {
    marginTop: 60,
    color: '#555',
  },
  registerLink: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
