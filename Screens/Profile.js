import { View, Button,TextInput,Linking,Share, Input ,FlatList,Animated,Platform,ActivityIndicator,Image,Text,Modal,SafeAreaView ,TouchableOpacity,ImageBackground,TouchableOpacityBase , StyleSheet, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import showTimeDB from '../db/showTimeDB'
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
const image = { uri: 'https://firebasestorage.googleapis.com/v0/b/reactcrud-7b0fc.appspot.com/o/Image%2FCineture%20dp.png?alt=media&token=b91a7ca2-ca34-4298-b6df-06d83525854e' };
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  setTestDeviceIDAsync,
   AdMobRewarded, 
} from 'expo-ads-admob';

export default function Profile(props) {

  AdMobRewarded.setAdUnitID('ca-app-pub-7650197599014997/8154445081'); // Test ID, Replace with your-admob-unit-id
  AdMobRewarded.requestAdAsync();
  AdMobRewarded.showAdAsync();
 
 
  AdMobInterstitial.setAdUnitID('ca-app-pub-7650197599014997/8653122627');
  AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
 AdMobInterstitial.showAdAsync();
 
 AdMobRewarded.setAdUnitID('ca-app-pub-7650197599014997/7032935107'); // Test ID, Replace with your-admob-unit-id
 AdMobRewarded.requestAdAsync();
 AdMobRewarded.showAdAsync();
 
 
  const video = React.useRef(null);
  
  const [name, setname] = React.useState('')
  
  const [email, setemail] = React.useState('')
  const [movie, setmovie] = React.useState('')
  const [phone, setphone] = React.useState('')
  const [iscontact, setiscontact] = React.useState(false)
   React.useEffect(() => {
      },)
   
   
      
  function submit(){
  
    
   const Request = showTimeDB.database().ref('Contact/');
   const data = { 
    UserName : name,
    Email  : email,
    Phone : phone,
    Movie  : movie
  }
  
  
  console.log(data);
  // Request.push(data , error => {
  //   if (error) {
  //     Alert.alert(
  //       "Error 🚫",
  //       `Check your internet Connection and Try again.`,
  //       [
         
  //         { 
  //             text: "OK", 
  //             onPress: () => console.log("OK Pressed") }
  //       ]
  //     );  }
    
  //    else {
  
  //     Alert.alert(
  //       "Success ✨",
  //       `Thank you Contacting me . I will Contact you soon `,
  //       [
         
  //         { 
  //             text: "OK", 
  //             onPress: () => console.log("OK Pressed") }
  //       ]
  //     );  }
  // });
  
  
  }
  
  return (
    <>
    <ScrollView>
               <StatusBar style="none" />

    <View style={styles.container}>
    
    

<ImageBackground source={image} resizeMode="cover" style={styles.image}>

<View style={styles.child}>

     
      </View>
      
      </ImageBackground>


{/* <View  style={styles.block}> */}
<LinearGradient
        colors={['#00000000','#0d1117' , '#0d1117']}
        style={{
          position:"relative",
          top:-50,
          height:50,
          borderRadius:10
        }}>
<Text style={{color:"lightblue" ,paddingLeft:10 }}>Made with 💖 by Mane Akash</Text>
</LinearGradient>


{/* <View style={{backgroundColor:"red" , height:2 , width:300, borderRadius:20 , position:'relative' , top:-40}}></View> */}

<AdMobBanner
bannerSize="smartBannerPortrait"
adUnitID="ca-app-pub-7650197599014997/3536543221" 
servePersonalizedAds 
onDidFailToReceiveAdWithError={()=>{console.log("err white Loading Adds")}}
 />

<View style={{flexDirection:"row" , justifyContent:"space-around" , margin:5 , position:"relative",top:-30}}>
          <View style={styles.iconbgg}>
         
          <TouchableOpacity style={styles.icobg} onPress={()=> setiscontact(!iscontact)} >
         
            <Ionicons name='chatbubbles-outline'  color='yellow' style={styles.icons} />

          </TouchableOpacity>


               <Text style={styles.title}>Contact</Text>
          
          </View>

          <View style={styles.iconbgg}>
         
          <TouchableOpacity style={styles.icobg} >
           
            <Ionicons name='barcode-outline'  color='violet'  style={styles.icons} />

          </TouchableOpacity>

        <Text style={styles.title}>My list</Text>
          </View>

          <View style={styles.iconbgg}  >
          <TouchableOpacity style={styles.icobg}  onPress={()=> {
            Share.share({
          message: `Hey ! Hii , Now I am Watching the  Movie on Cineture App , This App is Very Best for watching All Movie's Free of Cost . So , Download Now Click on the below Link  https://cineture.netlify.app/`,
          })
          }} >


          <Ionicons name='share-social-outline'  color='green'  style={styles.icons} />

          </TouchableOpacity>
          
          <Text style={styles.title}>Share</Text>
          </View>


          <View style={styles.iconbgg}>
         
          <TouchableOpacity style={styles.icobg} >
           
            <Ionicons name='flame-outline'  color='red'  style={styles.icons} />

          </TouchableOpacity>

        <Text style={styles.title}>Wishlist</Text>
          </View>


        </View>

        {/* <View style={{backgroundColor:"red" , height:2 , width:300,marginLeft:100, borderRadius:20 , position:'relative' , top:-20}}></View> */}



    

    <View style={styles.contact}>

{iscontact && (
  
  
  <>
  <Text></Text>
  <Text style={styles.label}>Name : </Text>
    <TextInput
      placeholder="Enter your Name ...  "
      style={styles.input}
      selectionColor="red"
      onChangeText={(text) => setname(text)}
    />
    <Text style={styles.label}>E-mail : </Text>

     <TextInput
      placeholder="Enter your  Email ..."
      style={styles.input}
      email
      onChangeText={(text) => setemail(text)}

    />
    
        <Text style={styles.label}>Message. : </Text>

<TextInput
multiline={true}
 placeholder="Type message here ..."
 style={styles.msg}
 outlined  
 tel
 color="white"
 onChangeText={(text) => setmovie(text)}

   />
   
  <TouchableOpacity style={{...styles.join , ...styles.send}}  onPress={submit} >
  <Ionicons name='paper-plane'  color='black' style={styles.icons} />

    <Text style={{...styles.now , color:"black"}}>
      Submit
    </Text>
  </TouchableOpacity>

  </>)
  }

 


    </View>

    <View style={styles.reqbox}>
  <View style={styles.reqinfo}>
    <Text style={styles.hello}>hello Akash ,
</Text>
    <Text style={styles.msggg}>For Requested Movies & Series Join Telegram Now </Text>
    <TouchableOpacity style={styles.join}>
    <Ionicons name='paper-plane'  color='blue' style={styles.icons} />

    <Text style={styles.now}>
    Join Now

    </Text></TouchableOpacity>
  </View>

  
            
      <Image
        style={styles.req}
        resizeMode='cover'
        source={{
          uri: `https://techvines.in/assets/images/3D%201MB.png`,
        }}
      />
</View>


    <View style={styles.app}>


<TouchableOpacity  style={styles.appbox}>
<View style={styles.telegram}>
<Ionicons name='bonfire-outline'  color='green'  style={styles.icons} />

<Text style={styles.tel}>Version (V 1.0) </Text>

</View> 
</TouchableOpacity>





<TouchableOpacity style={styles.appbox}>
<View style={styles.telegram}>
<Ionicons name='alarm-outline'  color='gray'  style={styles.icons} />

<Text style={styles.tel}>Check Update </Text>
</View> 
</TouchableOpacity>
<Text></Text>

    </View>
    <AdMobBanner
bannerSize="smartBannerPortrait"
adUnitID="ca-app-pub-7650197599014997/3536543221" 
servePersonalizedAds 
onDidFailToReceiveAdWithError={()=>{console.log("err white Loading Adds")}}
 />

<AdMobBanner
bannerSize="smartBannerPortrait"
adUnitID="ca-app-pub-7650197599014997/3536543221" 
servePersonalizedAds 
onDidFailToReceiveAdWithError={()=>{console.log("err white Loading Adds")}}
 />

    <Text></Text>
<Text></Text>
    </View>

    
    </ScrollView>
  
 </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1117',
  },
  icons:{
fontSize:25
  },
  icobg:{
 padding:7 , borderRadius:10
  },
  app:{
    display:'flex',
    flexDirection:"row",
    paddingTop:20,
    paddingBottom:20
    

  },
  appbox:{
    backgroundColor:'black',
    padding:2,
    margin:5,
    borderRadius:10
  },
  iconbgg:{
    justifyContent:"center", alignItems:"center" ,
  backgroundColor:"rgba(34,36,40,1)" , borderRadius:10,padding:10 , paddingLeft:20,paddingRight:20},
  image: {
    // flex: 1,
    // resizeMode: "cover",
    justifyContent: "center",
    height:150,
    width:"100%",
  },
  poster :{
    height:200,
    width:"50%",
    position:"relative",
   left:"25%",
   top:60,
   borderRadius:10,
justifyContent:"center",
alignItems:"center"
    
},
req:{
  height:200,
    width:200
},
reqbox:{
  display:'flex',
  flexDirection:'row',
  backgroundColor:'orange',
  margin:10,
  borderRadius:10,
  padding:10,
  elevation:20

},
reqinfo:{
  width:'40%'
},
hello:{
  color:"black",
  fontSize:20,
    textTransform:'uppercase',
    fontWeight:'bold'
},
msggg:{
  color:'white',
  paddingTop:10,
  fontSize:18
},
join:{
display:"flex",
flexDirection:"row",
padding:10,
justifyContent:"space-between",
backgroundColor:"white",
marginRight:10,
borderRadius:40,
elevation:10,
marginTop:20

},
send:{
  width:100,
  marginLeft:20,
  marginBottom:20,
  padding:10,
  backgroundColor:'orange'
},
now:{
  fontSize:15,
  paddingTop:2
},
input:{
  margin:20,
  height:40,
  paddingLeft:10,
  backgroundColor:'gray',
  borderRadius:10,
  color:'white'

},
msg:{
  margin:20,
  height:100,
  paddingLeft:10,
  backgroundColor:'gray',
  borderRadius:10,
  color:'white'

},
  child: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    height:800,
  
  },
  
  dev:{
    color:"white",
    fontSize:17,


  },
  name:{
    color:"white",
    fontSize:20,

  },
  block:{
    backgroundColor:"gray",
    margin:10,
    borderLeftWidth:2,
    borderColor:"red",
    borderRadius:10,
    padding:10,
    borderRightWidth:2,


  },
  ticon:{
    color:"#1e9ef3",
    fontSize:20
  },
  iicon:{
    color:"#cd486b",
    fontSize:30
  },

  tel:{
    color:"gray",
    fontSize:15,
paddingLeft:20
  },
  telegram:{
    flexDirection:"row",
    marginTop:10,
    alignItems:"center",
    // backgroundColor:"rgba(108, 112, 112, 0.226)",
    padding:10,
    borderRadius:10
  },
  instagram:{
    flexDirection:"row",
    marginTop:10,
    alignItems:"center",
    // backgroundColor:"rgba(108, 112, 112, 0.226)",
    padding:10,
    borderRadius:10
  },
  contact:{
    margin:10,
    backgroundColor:"black",
    // padding:10,
    borderRadius:10
  },
  label:{
    color:"white",
    fontSize:17,
    paddingLeft:20
  },
  contactlabel:{
    color:"lightblue",
    fontSize:20,
    paddingBottom:30,
    paddingLeft:20
  },
  submit:{
    backgroundColor:"#cd486b",
    width:100,
    marginLeft:120
  },
  sicon:{
    fontSize:27,
    color:"black",
    
  },
  title:{
    color:"gray",
    paddingTop:10
  }

})