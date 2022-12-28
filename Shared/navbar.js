import React, { Component } from 'react'
import {Text, View, StyleSheet }

from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Navbar = ( props ) => {
 
    const { navigation } = props
    console.log(navigation);

   return (
      <View style = {styles.container}>
  
{/* <Text style={styles.text}>.</Text> */}
<View style={styles.nav}>
    <View style={styles.box}>
        <MaterialCommunityIcons onPress={()=> navigation.navigate("A - FLix")} name="home" style={{fontSize:24 , color:"black"}}  />
        <Text  style={{...styles.icontext , color:"black"}}>Home</Text>
     </View>

     <View style={styles.box}>
        <MaterialCommunityIcons onPress={()=> navigation.navigate("Settings")} name="movie-search" style={{fontSize:24 , color:"black"}}  />
        <Text style={{...styles.icontext , color:"black"}}>Search</Text>
     </View>

     <View style={styles.box}>
        <MaterialCommunityIcons  onPress={()=> navigation.navigate("Request")}  name="android-messages" style={{fontSize:24 , color:"black"}}  />
        <Text style={{...styles.icontext , color:"black"}}>Request</Text>
     </View>


     <View style={styles.box}>
        <MaterialCommunityIcons onPress={()=> navigation.navigate("Stream")} name="video-wireless" style={{fontSize:24 , color:"black"}}  />
        <Text style={{...styles.icontext , color:"black"}}>Stream</Text>
     </View>


     <View style={styles.box}>
        <MaterialCommunityIcons onPress={()=> navigation.navigate("Contact")} name="menu" style={{fontSize:24 , color:"black"}}  />
        <Text style={{...styles.icontext , color:"black"}}>more</Text>
     </View>
</View>
      </View>
   )
}
export default Navbar;

const styles = StyleSheet.create({
   container: {
    
      height:60,
      borderRadius:20,
      margin:20,
      justifyContent:"center",
      marginBottom:10,
    //   backgroundColor:"orange",
      position:"relative",
      top:-30,
      
    //   paddingLeft:20
   },
   text:{

    color:"white",
    textAlign:"center",
    backgroundColor:"black",
    height:4,
    width:50,
    borderRadius:20,
    marginLeft:150,
    marginTop:10
    // fontSize:20
   },
   box:{
       alignItems:"center",
       marginLeft:10,
    //    backgroundColor:"gray",
       width:"17%",
       borderRadius:10,
       padding:2
    //    width:"10%"
   },
   nav:{
       flexDirection:"row"
   },
   icontext:{
fontSize:10
   }

})