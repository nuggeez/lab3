import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DrawerContent from '../../components/DrawerContent'; 

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={DrawerContent}
        screenOptions={{
          drawerActiveTintColor: 'white',  
          drawerActiveBackgroundColor: '#555',  
          drawerInactiveTintColor: 'black',  
          drawerInactiveBackgroundColor: 'transparent', 
        }}
      >
        {/* Tab Layout Screen (Home, UserProfile, Settings) */}
        <Drawer.Screen
          name="Tabs" 
          options={{
            drawerLabel: 'Home',
            title: 'Home',
            drawerIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={focused ? 'home' : 'home-outline'}
                color={focused ? 'white' : color}
                size={size}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="About"
          options={{
            drawerLabel: 'About',
            title: 'About',
            drawerIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={focused ? 'information' : 'information-outline'}
                color={focused ? 'white' : color}
                size={size}
              />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
