import   React , { useState , useEffect , useRef } from 'react';


// import MaterialCommunityIcons from 'react-native-  

import HomeStack from './StackNav'
import Detail from '../Screens/Detail';
import Home from '../Screens/Home';
import Search from '../Screens/Search';
import Profile from '../Screens/Profile'
import Ionicons from '@expo/vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function BottomNav() {

  return (
      <Tab.Navigator  
         screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
      height: 60,
      paddingHorizontal: 5,
      paddingTop: 10,
      backgroundColor: 'rgba(34,36,40,1)',
      position: 'absolute',
      borderTopWidth: 0,
      paddingBottom:10
  },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home-outline'
                : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search-outline' : 'search-outline';
            }
            else if(route.name === 'Profile') {
              iconName = focused ? 'people-outline' : 'people-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
}