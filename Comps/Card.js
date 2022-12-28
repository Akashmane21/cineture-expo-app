import React , { useState} from 'react'
import { View,Text , Image,TouchableOpacity, StyleSheet } from 'react-native';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    setTestDeviceIDAsync,
     AdMobRewarded, 
  } from 'expo-ads-admob';

const styles = StyleSheet.create({
    Card1:{
        width:130,
        margin:10,
        alignItems:"center",
        backgroundColor:"gray",
        borderRadius:10,
      
        elevation: 10,
        borderColor:"black",
        margin:14,
        backgroundColor:"gray",
        marginRight:0

        
    },
    poster :{
        height:180,
        width:"100%",
        borderRadius:10

    },
    title:{
        fontSize:18,
        padding:4
    }
})
export default function Card(props) {


    const { navigation } = props

    
function Send(){


    props.navigation.navigate('Detail' , {item :
        { 
          
          Name :`${props.Name}`,
          id:`${props.id}`,
          Trend :`${props.Trend}`,
          Type :`${props.Type}`,
          Poster:`${props.Poster}`,
          Language:`${props.Language}`,
      
          Plot:`${props.Plot}`,
          Dlink :`${props.Dlink}`,
          Slink :`${props.Slink}`,
          Link:`${props.Link}`,
          Size:`${props.Size}`,
      
          Ott:`${props.Ott}`,
          Actors:`${props.Actors}`,
          Country:`${props.Country}`,
          Genre:`${props.Genre}`,
          Released:`${props.Released}`,
          Runtime:`${props.Runtime}`,
          Year:`${props.Year}`,
          ImdbRating:`${props.ImdbRating}`,
          Director:`${props.Director}`,
          }} )


}
  const [isPreloading, setisPreloading] = React.useState()


    return (
        <>
        <TouchableOpacity  
 onPress={Send}  >

        <View  style={styles.Card1}>

        {isPreloading &&
            <ActivityIndicator
                animating
                color={"#1e9ef3"}
                size="large"
                style={{ flex: 1, position:"absolute", top:"30%", left:"45%" }}
            />
        }

             <Image
        style={styles.poster}
        source={{
          uri: `${props.Poster}`,
        }}
      />
     
        </View>
        </TouchableOpacity>
</>
    )
}
