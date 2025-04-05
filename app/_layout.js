import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

// Prevent the splash screen from auto-hiding before the app is ready
SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    // Once everything is ready, hide the splash screen
    SplashScreen.hideAsync();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <Stack>
        {/* This will redirect to the "(auth)" layout */}
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
}
