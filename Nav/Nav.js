
import * as React from 'react'

import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomNav from './BottonNav'

import Download from '../Screens/Download'

const Stack = createNativeStackNavigator();

const Nav=()=> {
    return (
       <Stack.Navigator  initialRouteName='Cineture' screenOptions={{ headerShown: false}} >     
          <Stack.Screen  name='Cineture' component={BottomNav}  options={{ title: 'Home '  }} />
          <Stack.Screen name='Download' component={Download}  options={{ title: 'Video'  }} />
         
        </Stack.Navigator>
    )
  }



export  default Nav
