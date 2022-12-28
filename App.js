
import React ,{useEffect} from 'react'
import { NavigationContainer,DefaultTheme   } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Nav from './Nav/Nav';



const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
  },
};

export default function App() {
  

  return (
    <>
           <StatusBar style="light" />

    <NavigationContainer theme={MyTheme} >
    <Nav />
   </NavigationContainer> 
   </>
  )
}