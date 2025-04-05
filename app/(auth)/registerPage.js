import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the Icon component
import {useFocusEffect, router } from "expo-router";
import { auth, db } from '../../config/FirebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const RegisterScreen = () => {
  const [user, setUser] = useState({
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
  })

  useFocusEffect(
      React.useCallback(() => {
          setUser({userName: "", email: "", password: "", confirmPassword: ""})
      }, [])
  );

  const handleRegister = async () => {
    if (user.password !== user.confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
  }

    try {
        await createUserWithEmailAndPassword(auth, user.email, user.password);
        const currentUser = auth.currentUser;
        console.log(currentUser);
        if (currentUser) {
            await setDoc(doc(db, "Users", currentUser.uid), {
                email: currentUser.email,
                userName: user.userName,
            })
        };
        Alert.alert("Registration Successful!");
        router.push("/dashboardPage")
    } catch(error) {
      if (error instanceof Error) {
          Alert.alert("Registration Error", error.message);
      } else {
          console.error("Unknown registration:", error);
      }
    };
  }


  return (
    <View style={styles.container}>
      {/* Logo at the top */}
      <Image source={require('../../assets/images/WealthWise-Logo.png')} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor="#aaa"
        onChangeText={(text) => setUser((prev) => ({ ...prev, userName: text }))}
        value={user.userName}
        autoCapitalize='none'
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#aaa"
        onChangeText={(text) => setUser((prev) => ({ ...prev, email: text }))}
        value={user.email}
        keyboardType="email-address"
        autoCapitalize='none'
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        onChangeText={(text) => setUser((prev) => ({ ...prev, password: text }))}
        value={user.password}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#aaa"
        onChangeText={(text) => setUser((prev) => ({ ...prev, confirmPassword: text }))}
        value={user.confirmPassword}
      />

      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or continue with</Text>

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

      <Text style={styles.loginText}>
        Already have an account?{' '}
        <Text style={styles.loginLink} onPress={() => router.push('/auth/loginPage')}>
          Login now
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  logo: {
    width: 230,
    height: 120,
    marginTop: 85,
    marginBottom: 20,
  },
  input: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 30,
    marginBottom: 15,
  },
  registerButton: {
    backgroundColor: '#265CBD',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '90%',
  },
  registerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    marginVertical: 20,
    color: '#777',
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 20,
  },
  iconButton: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 100,
    elevation: 2,
  },
  loginText: {
    marginTop: 20,
    color: '#555',
  },
  loginLink: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default RegisterScreen;
