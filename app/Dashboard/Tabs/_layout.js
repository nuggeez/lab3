import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function DashboardLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, 
        tabBarActiveTintColor: 'white',
        tabBarActiveBackgroundColor: '#718355', 
        tabBarLabelStyle: {
          fontSize: 12,
          color: '#333', 
        },
        tabBarStyle: {
          backgroundColor: '#E9F5DB', 
        },
        tabBarShowLabel: true,
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={focused ? 'white' : '#87986A'} 
            />
          ),
        }}
      />

      {/* User Profile Tab */}
      <Tabs.Screen
        name="MyProfile"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'account' : 'account-outline'}
              size={24}
              color={focused ? 'white' : '#87986A'} 
            />
          ),
        }}
      />

      {/* Settings Tab */}
      <Tabs.Screen
        name="Settings"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'cog' : 'cog-outline'}
              size={24}
              color={focused ? 'white' : '#87986A'} 
            />
          ),
        }}
      />
    </Tabs>
  );
}
