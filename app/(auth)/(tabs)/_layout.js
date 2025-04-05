import React from 'react';
import { Tabs } from 'expo-router';
// import { HomeHeader } from './home';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 5,
          width: "100%",
          alignSelf: "center",
        }
      }}>
        <Tabs.Screen
            name="dashboardPage"
            options={{
            headerShown: true,
            // headerTitle: () => <HomeHeader/> ,
            
            headerStyle: { 
              backgroundColor: "#E5E3D4", 
              height: 70,
              elevation: 0
          },
          headerTitleContainerStyle: {
              position: "absolute", 
              left: -5, 
              right: 0, 
              width: "100%",
              bottom: 0, 
              alignItems: "flex-start",
          }, 
            tabBarIcon: ({color, focused}) => <TabBarIcon size={28} name={focused? "home" : "home-outline"} color={color} style={{ marginTop: 5}}/>
            }}
        />
    </Tabs>
  );
}
