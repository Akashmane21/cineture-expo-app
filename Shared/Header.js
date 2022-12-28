import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react'
import { StyleSheet, Text,Alert, Modal ,View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header(props) {
    const createThreeButtonAlert = () =>
    Alert.alert(
      "About Search",
      "This Feature is Comming soon ...",
      [
       
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { 
            text: "OK", 
            onPress: () => console.log("OK Pressed") }
      ]
    );

  const { navigation } = props
const [openmodal, setopenmodal] = useState(false)
  
  return (

<>

<Modal visible={openmodal}>
         <View style={styles.modalstyle}  >
        <MaterialCommunityIcons  name="shield-cross" style={styles.hicon} onPress={()=>setopenmodal(false)} />
        <Text>Hellow from the Modal !</Text>
        </View>
 </Modal>


    <View style={styles.header}>
    <TouchableOpacity onPress={() => navigation.openDrawer()} >
    <MaterialCommunityIcons style={styles.icon} name="menu"  /></TouchableOpacity>

    <View>

    <Text  style={styles.headerText}>   A-Flix</Text>
   
    
    </View>
    <View style={styles.right} >
    {/* <MaterialCommunityIcons style={styles.ricon} name="movie-search-outline" onPress={createThreeButtonAlert} /> */}
    <MaterialCommunityIcons style={styles.hicon} name="account-circle" onPress={()=>setopenmodal(true)} />
</View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
      paddingTop:30,
      paddingLeft:10,
      width:"100%",
      height:80,
      flexDirection:"row",
      alignItems:"center",
      backgroundColor:"#20232a",
    
    // justifyContent:"center",
  },

  headerText :{
      fontWeight:"bold",
      fontSize:20,
      color:"tomato",
      letterSpacing:1,
      justifyContent:"center",
      alignItems:"center"
      

},
  icon:{
      color:"gray",
      fontSize:32
  },
  ricon:{
    color:"gray",
    paddingLeft:10,
    fontSize:22
  },
  hicon:{
    color:"gray",
    paddingLeft:10,
    fontSize:28
  },

  right:{
      display:"flex",
      flexDirection:"row",
      position:"relative",
      right:-180,
     marginRight:20,

  },
  modalstyle :{
      height:'50%',
      justifyContent:"center",
      color:"red",
      backgroundColor:"green",

      
  }
});
