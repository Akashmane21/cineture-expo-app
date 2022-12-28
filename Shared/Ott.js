
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,TouchableOpacity,ScrollView, Text,Image ,  View } from 'react-native';

export default function Ott( props ) {
  const { navigation } = props
  const {route} = props
  console.log(props);

  return (
      <>
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false} >
    <View style={styles.container}>




    <TouchableOpacity onPress={()=> navigation.navigate('Review' , {item : { Type : "Ott" ,   Name : "Netflix" }} )  } style={styles.buttonContainer}>
<View style={styles.box}>
      <Image style={styles.poster} source={{
          uri: 'https://assets.brand.microsites.netflix.io/assets/fbd0c908-b388-11e7-9274-06c476b5c346_cm_800w.png?v=30',
        }} />
    {/* <Text style={styles.name}>Netflix</Text>        */}
</View>
</TouchableOpacity>




<TouchableOpacity  style={styles.buttonContainer}
onPress={()=> navigation.navigate('Review' , {item : { Type : "Ott" ,   Name : "Prime" }} )  }
>

<View style={styles.box}>
<Image style={styles.poster} source={{          uri: 'https://www.androidcentral.com/sites/androidcentral.com/files/styles/w1600h900crop/public/article_images/2021/02/prime-video-logo.jpg',
        }} />
    {/* <Text style={styles.name}>Prime</Text> */}
</View>
</TouchableOpacity>

<TouchableOpacity  style={styles.buttonContainer}
onPress={()=> navigation.navigate('Review' , {item : { Type : "Ott" ,   Name : "Disney" }} )  }
>

<View style={styles.box}>
<Image style={styles.poster} source={{          uri: 'https://i.gadgets360cdn.com/large/disney_plus_hotstar_logo_1583901149861.jpg?downsize=950:*&output-quality=80',
        }} />
    {/* <Text style={styles.name}>Disney + </Text> */}
</View>

</TouchableOpacity>



<TouchableOpacity  style={styles.buttonContainer}
onPress={()=> navigation.navigate('Review' , {item : { Type : "Ott" ,   Name : "Marvel" }} )  }
>

<View style={styles.box}>
<Image style={styles.poster} source={{          uri: 'https://wallpaperaccess.com/full/342031.png',
        }} />
    {/* <Text style={styles.name}>Marvel</Text> */}
</View>
</TouchableOpacity>





<TouchableOpacity  style={styles.buttonContainer}
onPress={()=> navigation.navigate('Review' , {item : { Type : "Ott" ,   Name : "DC" }} )  }
>

<View style={styles.box}>
<Image style={styles.poster} source={{          uri: 'https://bpando.org//wp-content/uploads//2012/01/dc-comics-06.jpeg',
        }} />
    {/* <Text style={styles.name}>DC</Text> */}
</View>

</TouchableOpacity>



<TouchableOpacity  style={styles.buttonContainer}
onPress={()=> navigation.navigate('Review' , {item : { Type : "Type" ,   Name : "Bollywood" }} )  }
>

<View style={styles.box}>
<Image style={styles.poster} source={{          uri: 'https://image.shutterstock.com/image-vector/bollywood-neon-sign-bright-signboard-260nw-1351338800.jpg',
        }} />
    {/* <Text style={styles.name}>Bollywood</Text> */}
</View>

</TouchableOpacity>





<TouchableOpacity  style={styles.buttonContainer}
onPress={()=> navigation.navigate('Review' , {item : { Type : "Type" ,   Name : "Tollywood" }} )  }
>

<View style={styles.box}>
<Image style={styles.poster} source={{          uri: 'https://static10.tgstat.ru/channels/_0/13/134e8dc93b4f18f1cc924c99213e6834.jpg',
        }} />
    {/* <Text style={styles.name}>South</Text> */}
</View>

</TouchableOpacity>




<TouchableOpacity  style={styles.buttonContainer}
onPress={()=> navigation.navigate('Review' , {item : { Type : "Type" ,   Name : "Hollywood" }} )  }
>

<View style={styles.box}>
<Image style={styles.poster} source={{          uri: 'https://images-platform.99static.com/tcjZX7Xwd2UVKCxucdEjcPjKO5U=/0x0:1110x1110/500x500/top/smart/99designs-contests-attachments/111/111820/attachment_111820351',
        }} />
    {/* <Text style={styles.name}>Hollywood</Text> */}
</View>

</TouchableOpacity>





<TouchableOpacity  style={styles.buttonContainer}
onPress={()=> navigation.navigate('Review' , {item : { Type : "Type" ,   Name : "Cartoon" }} )  }
>

<View style={styles.box}>
<Image style={styles.poster} source={{          uri: 'https://1000logos.net/wp-content/uploads/2016/10/Cartoon-Network-Logo.png',
        }} />
    {/* <Text style={styles.name}>Cartoon</Text> */}
</View>

</TouchableOpacity>






    </View>
    </ScrollView>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'black',
    display:"flex",
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:0,
    // borderBottomWidth:1,
    // borderBottomColor:"black",
    // borderRadius:2,
    // borderWidth:1
  },
  ott:{
      // backgroundColor:"white",
      fontSize:13,
      color:"white",
      paddingLeft:10,
      paddingTop:10,
      borderLeftWidth:2,
      // borderLeftColor:"red"
  },
  name:{
      paddingTop:9,
      color:"gray",
      fontSize:10
     
  },
  box:{
      alignItems:"center",
      justifyContent:"center",
      padding:12
    //   marginLeft:28


  },
  image:{
    shadowColor: '#470000',
shadowOffset: {width: 0, height: 1},
shadowOpacity: 0.2,
elevation: 1,
},
poster:{
  width:100,
  height:45,
  borderRadius:20
}
});









