
import * as React from 'react'

import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Detail from '../Screens/Detail';
import Home from '../Screens/Home';
import Search from '../Screens/Search';
import Profile from '../Screens/Profile'
import Review from '../Screens/Review';
import Video from '../Screens/Video';
const Stack = createNativeStackNavigator();

const HomeStack=()=> {
    return (
       <Stack.Navigator  initialRouteName='Cineture' screenOptions={{ headerShown: false}} >     
          <Stack.Screen  name='Cineture' component={Home}  options={{ title: 'Home '  }} />
          <Stack.Screen name='Detail' component={Detail}  options={{ title: 'Movie Details'  }} />
          <Stack.Screen name='Search' component={Search}  options={{ title: 'Movie Search'  }} />
          <Stack.Screen name='Profile' component={Profile}  options={{ title: 'Review '  }} />
          <Stack.Screen name='Review' component={Review}  options={{ title: 'Review '  }} />
          {/* <Stack.Screen name='Video' component={Video}  options={{ title: 'Review '  }} /> */}


        </Stack.Navigator>
    )
  }



export  default HomeStack
