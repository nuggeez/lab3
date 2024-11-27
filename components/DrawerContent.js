import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function Drawer(props) {
  const router = useRouter();
  const { top, bottom } = useSafeAreaInsets(); 
  

  const handleLogout = async () => {
    router.replace('/'); 
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#E9F5DB' }}> 
      <DrawerContentScrollView
        {...props}
        scrollEnabled={true}
        contentContainerStyle={{ paddingTop: top }}
      >
        {/* Drawer Items */}
        <DrawerItemList 
          {...props} 
          labelStyle={{ color: '#718355' }}  
          itemStyle={{ backgroundColor: '#CFE1B9' }}  
        />

        {/* Logout Button */}
        <DrawerItem
          label="Logout"
          icon={({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="logout"
              color={focused ? '#E9F5DB' : '#97A97C'}
              size={size}
            />
          )}
          labelStyle={{ marginLeft: 0 }}  
          onPress={handleLogout}
        />
      </DrawerContentScrollView>
    </View>
  );
}
