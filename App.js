import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './pages/loginPage'; // Log in 
import RegisterPage from './pages/registerPage'; // Register

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="Login" component={LoginPage} /> 
        <Stack.Screen name="Register" component={RegisterPage} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
