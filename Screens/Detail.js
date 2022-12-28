import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Alert,
  SafeAreaView,
  ActivityIndicator,
  Linking,
  FlatList,
  Image,
  Text,
  View,
  ImageBackground,
  TouchableNativeFeedbackBase,
  Modal,
  Share,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import showTimeDB from "../db/showTimeDB";
import { LinearGradient } from "expo-linear-gradient";

import { Video, AVPlaybackStatus } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";

import Card from "../Comps/Card";
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  setTestDeviceIDAsync,
   AdMobRewarded, 
} from 'expo-ads-admob';

export default function Detail(props) {

  
  AdMobRewarded.setAdUnitID('ca-app-pub-7650197599014997/8154445081'); // Test ID, Replace with your-admob-unit-id
  AdMobRewarded.requestAdAsync();
  AdMobRewarded.showAdAsync();
 
 
  AdMobInterstitial.setAdUnitID('ca-app-pub-7650197599014997/8653122627');
  AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
 AdMobInterstitial.showAdAsync();
 
 AdMobRewarded.setAdUnitID('ca-app-pub-7650197599014997/7032935107'); // Test ID, Replace with your-admob-unit-id
 AdMobRewarded.requestAdAsync();
 AdMobRewarded.showAdAsync();


  const linklist = [];

  // const video = React.useRef(null);

  const { navigation } = props;
  const { route } = props;
  const { item } = route.params;

  const { Type } = item;

  const { Ott } = item;
  const { Slink } = item;

  var url = Slink;
  var tid = url.substr(32);
  console.log(Slink);
  console.log(tid);

  const [Likeno, setLikeno] = useState(0);
  const [Linklist, setLinklist] = useState([]);
  //  const [Site, setSite] = useState("")
  //  const [ismodalopen, setismodalopen] = useState(false)
  const [allData, setallData] = useState([]);
  const [isaddtopl, setisaddtopl] = useState(false);
  const [isaddfav, setisaddfav] = useState(false);
  const [isyoutube, setisyoutube] = useState();
  const [Tid, setTid] = useState("");

  const { id } = item;

  const image = { uri: `${item.Poster}` };

  const [type, settype] = useState([]);
  const [ott, setott] = useState([]);
  const [links, setlinks] = useState([]);
  const [islike, setislike] = useState(false);

  useEffect(() => {
    ScreenOrientation.unlockAsync();
    showTimeDB
      .database()
      .ref(`Movies/${id}/Link`)
      .once("value", (snapshot) => {
        const Moviesdblist = [];
        const todos = snapshot.val();
        for (let id in todos) {
          Moviesdblist.push({ id, ...todos[id] });
        }
        // const reversed = Moviesdblist.reverse();

        setLinklist(Moviesdblist);
      });

    showTimeDB
      .database()
      .ref(`Movies/${id}/`)
      .once("value", (snapshot) => {
        const Moviesdblist = [];
        const todos = snapshot.val();
        for (let id in todos) {
          Moviesdblist.push({ id, ...todos[id] });
        }
        // const reversed = Moviesdblist.reverse();

        setallData(todos);

        setTid(todos.Tid);
        setLikeno(todos.Likes);
        console.log(todos.Slink);
        var str = todos.Slink;
        var n = str.includes("youtu");
        setisyoutube(n);
        console.log(isyoutube);
      });

    showTimeDB
      .database()
      .ref(`Movies/`)
      .orderByChild("Type")
      .equalTo(Type)
      .once("value", (snapshot) => {
        const south = [];
        const todos = snapshot.val();
        for (let id in todos) {
          south.push({ id, ...todos[id] });
        }
        const reversed = south.reverse();

        setott(south);
      });

    showTimeDB
      .database()
      .ref(`Movies/`)
      .orderByChild("Ott")
      .equalTo(Ott)
      .once("value", (snapshot) => {
        const byott = [];
        const todos = snapshot.val();
        for (let id in todos) {
          byott.push({ id, ...todos[id] });
        }
        const reversed = byott.reverse();

        settype(byott);
      });
  }, []);

  function Liked() {
    console.log("Liked");
    setislike(!islike);

    if (islike == true) {
      setLikeno(Likeno - 1);
    } else {
      setLikeno(Likeno + 1);
      const todoref = showTimeDB.database().ref(`Movies/${id}/`);
      todoref.update({
        Likes: Likeno + 1,
      });
    }
  }

  return (
  <>
   <ScrollView >
      <SafeAreaView style={styles.safe}>
     

<View style={styles.container}>


<View style={styles.movie_detail}>
<ImageBackground 
blurRadius={1}
 source={{
     uri: `${allData.Poster}`,
   }} style={{height:430}} >
<View style={{backgroundColor:"#0d0e0e5d" , height:400}}>

<Image
   style={{height:250 , width:170 , position:"relative" , left:90 , top:50 , borderRadius:10}}
   resizeMode='cover'
   source={{
     uri: `${allData.Poster}`,
   }}
 />
<LinearGradient
        colors={['#00000000','#0d1117','#0d1117']}
        style={{
          position:"relative",
          // top:-60,
          marginTop:63
        }}>
<View style={{...styles.header }}>
<TouchableOpacity onPress={()=>Linking.openURL(`https://www.youtube.com/watch?v=${allData.Tid}`) }>
  <View style={{flexDirection:"row" ,justifyContent:"flex-end", margin:6 , borderWidth:1,borderColor:"gray",width:100,alignItems:"center" , paddingRight:10, padding:3 , borderRadius:10 , marginLeft:0,  marginRight:15}}>
  <MaterialCommunityIcons style={{...styles.sicon , color:"yellow" , fontSize:23}} name="play-circle-outline" />
<Text style={{color:"lightblue" , }}>   Trailer</Text>
  </View>
</TouchableOpacity> 
<View style={{flexDirection:"row" ,}}>

<Text style={styles.Name}>{allData.Name}</Text>


</View>

<View style={{flexDirection:"row" ,}}>
{/* <Text style={{color:"yellow", fontSize:40 , position:"relative" , top:-36}}>. </Text> */}
<Text  style={styles.title}>{allData.Year} </Text>
<Text style={{color:"yellow", fontSize:40 , position:"relative" , top:-30}}>.</Text>

<Text  style={styles.title}> {allData.Runtime} </Text>
<Text style={{color:"yellow", fontSize:40 , position:"relative" , top:-30}}>.</Text>


<Text style={styles.title}> {allData.Genre}</Text>

</View>




</View>
</LinearGradient>
</View>

</ImageBackground>
<Text></Text>



 {allData.Showtype == "Movie" ? ( 
   <>
<TouchableOpacity onPress={()=> navigation.navigate('Download' , {item :`${allData.Slink}`} )}>
  <View style={{flexDirection:"row" , justifyContent:"center" , alignItems:"center" , margin:6 , backgroundColor:"#161b22" , padding:3 , borderRadius:5 , marginLeft:17 , marginRight:17}}>
  <MaterialCommunityIcons style={{...styles.sicon , color:"white" , fontSize:30}} name="play" />
<Text style={{color:"lightblue" , }}>   Play</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>Linking.openURL(`${allData.Dlink}`) }>
  <View style={{flexDirection:"row" , justifyContent:"center" , alignItems:"center" , margin:6 , backgroundColor:"#1e9ef3" , padding:3 , borderRadius:5 , marginLeft:17 , marginRight:17}}>
  <MaterialCommunityIcons style={{...styles.sicon , color:"white" , fontSize:30}} name="download" />
<Text style={{color:"black" , }}>   Download ({allData.Size} mb)</Text>
  </View>
</TouchableOpacity> 



</>
 ) : (
   <>
   <Text style={{height:3, borderBottomWidth:0.2,marginLeft:20,marginRight:20,borderBottomColor:"yellow"}}>.</Text>
 
</>
 )}

 

</View>


<Text></Text>                

<View style={styles.second}>


<View style={styles.release}>
<Text style={styles.title1}>Released On</Text>
<Text style={styles.title}>{allData.Released}</Text>
</View>

<View style={styles.lang}>
<Text style={styles.title1}>Language</Text>
<Text style={styles.title}>{allData.Language}</Text>
</View>

<View style={styles.release}>
<Text style={styles.title1}>IMDB</Text>
<View style={styles.imdb}>
<Text style={styles.title}>{allData.ImdbRating} </Text>
<MaterialCommunityIcons style={styles.star} name="star"  />
</View>

</View>
</View>
 <View style={styles.plot}>

   
<Text style={styles.plotinfo}>{allData.Plot}</Text>
</View> 




        <View style={{flexDirection:"row" , justifyContent:"space-around" , margin:10}}>
          <View style={{justifyContent:"center", alignItems:"center"}}>
         
          <TouchableOpacity style={{}} onPress={Liked}>
          {islike ? ( 
            <MaterialCommunityIcons style={{...styles.sicon , color:"#1e9ef3"}} name="thumb-up" />

          ) : ( 
            <MaterialCommunityIcons style={styles.sicon} name="thumb-up-outline" />

          )}
          </TouchableOpacity>

               <Text style={styles.title}>{Likeno}</Text>
          
          </View>

          <View style={{justifyContent:"center", alignItems:"center"}}>
         
          <TouchableOpacity style={{}} onPress={()=> {
            setisaddtopl(!isaddtopl)
              }}>
          {isaddtopl ? ( 
            <MaterialCommunityIcons style={{...styles.sicon }} name="playlist-check" />

          ) : ( 
            <MaterialCommunityIcons style={styles.sicon} name="playlist-plus" />

          )}
          </TouchableOpacity>

        <Text style={styles.title}>My list</Text>
          </View>

          <View style={{justifyContent:"center", alignItems:"center"}}>
          <Ionicons onPress={()=> {
            Share.share({
          message: `Hey ! Hii , Now I am Watching the ${allData.Name} Movie on Cineture App , This App is Very Best for watching All Movie's Free of Cost . So , Download Now Click on the below Link  https://cineture.netlify.app/`,
          })
          }} name='share-social-outline'  color='green'  style={styles.icons} />

          
          <Text style={styles.title}>Share</Text>
          </View>



          <View style={{justifyContent:"center", alignItems:"center"}} onPress={()=> {
            setisaddfav(!isaddfav)
              }}>
  
          {isaddfav ? ( 
            <Ionicons  onPress={()=> {
            setisaddfav(!isaddfav)
              }} name='flame-outline'  color='red'  style={styles.icons} />

          ) : ( 
            <Ionicons  onPress={()=> {
            setisaddfav(!isaddfav)
              }} name='flame-outline'  color='gray'  style={styles.icons} />

          )}
          <Text style={styles.title}>Fav</Text>
          </View>


        </View>




        {allData.Showtype == "Movie" ? ( 
       <>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      </>

     ) : (

   

<View style={{ borderRadius:0 , padding:10 , margin:0 }}>
<Text style={styles.Name}>  {allData.Name}</Text>

{/* <Text style={{color:"white" , fontSize:20, padding:8 , paddingBottom:20}}>Download :</Text> */}
<View  style={{margin:0 , padding:5 , backgroundColor:"#161b22" , borderRadius:4 , borderTopColor:"lightblue", borderTopWidth:1}}>

<FlatList
        //  horizontal
  pagingEnabled={true}
  showsHorizontalScrollIndicator={false}
  legacyImplementation={false}
        // showsHorizontalScrollIndicator={false}
        data={Linklist}
        renderItem={({ item }) => (
          <>
        <View  style={{borderBottomWidth:1, backgroundColor:"black", padding:6 ,marginTop:10, borderRadius:5 , marginBottom:4}}>
         <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between" ,padding:10 }}>




<TouchableOpacity onPress={()=> navigation.navigate('Download' , {item :`${item.Slink}`} )}>

         <View style={{flexDirection:"row"}}>
         <MaterialCommunityIcons onPress={()=> navigation.navigate('Download' , {item :`${item.Slink}`} )} style={{...styles.sicon , color:"#1ed760" , fontSize:37 , position:"relative", top:0,left:0 }} name="play-circle" />
<Text>...</Text>
<View>
          <Text style={{color:"gray" ,fontSize:16,width:200}}>{item.title}</Text>
          <Text style={{color:"gray" ,fontSize:13}}>( {item.Size} mb )</Text>
          </View>
         </View>
         </TouchableOpacity>
      
       
  
         <View  style={{marginLeft:20 ,padding:5, backgroundColor:"gray" ,borderRadius:10 , elevation:30}}> 
<MaterialCommunityIcons onPress={()=>Linking.openURL(`${item.Dlink}`) } style={{  fontSize:26 , color:"black"}} name="download"  />


 </View>





         </View>


          </View>
                    </> 
        )} />



        </View>

</View>

)}






</View>
</SafeAreaView>

<AdMobBanner
bannerSize="smartBannerPortrait"
adUnitID="ca-app-pub-7650197599014997/3536543221" 
servePersonalizedAds 
onDidFailToReceiveAdWithError={()=>{console.log("err white Loading Adds")}}
 />

<AdMobBanner
bannerSize="fullBanner"
adUnitID="ca-app-pub-7650197599014997/3536543221" 
servePersonalizedAds 
onDidFailToReceiveAdWithError={()=>{console.log("err white Loading Adds")}}
 />
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>

</ScrollView>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d1117",
    justifyContent: "center",
  },

  poster: {
    height: 120,
    width: "30%",
    marginRight: 10,
    borderRadius: 10,
  },
  icons:{
    fontSize:25
      },
  safe: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    // flex: 1,
    // resizeMode: "cover",
    justifyContent: "center",
    // height:430,
    width: "100%",
  },
  child: {
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,0.5)',
    height: 400,
    backgroundColor: "black",
  },
  Name: {
    color: "white",
    // position:"relative",
    // top:-30,
    alignItems: "center",
    justifyContent: "center",

    fontSize: 20,
    // width:220,
    paddingBottom: 10,
  },
  video: {
    alignSelf: "center",
    width: 390,
    height: 180,
    borderRadius: 20,
    borderColor: "red",
  },
  Nameview: {
    color: "rgb(0, 255, 242)",
    position: "relative",
    top: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "gray",
    padding: 7,
    paddingLeft: 20,
    // borderBottomWidth:0.5,
    borderBottomColor: "lightblue",
    // paddingBottom:20,
    width: "100%",

    // flexDirection:"row"
  },
  title: {
    color: "gray",
    fontSize: 12,
  },
  title1: {
    color: "gray",
    fontSize: 14,
    color: "lightyellow",
  },
  ep_title: {
    fontSize: 20,
    color: "lightyellow",
    paddingTop: 10,
  },
  movie_detail: {
    // flexDirection:"row",
  },
  sicon: {
    color: "gray",
    fontSize: 30,
  },
  picon: {
    color: "gray",
    fontSize: 25,
    paddingLeft: 3,
  },
  btn: {
    display: "flex",
    // flexDirection:"row",
    paddingLeft: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  second: {
    flexDirection: "row",
  },
  release: {
    padding: 10,
    paddingLeft: 20,
  },
  lang: {
    padding: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  plot: {
    //   backgroundColor:"#273239",
    padding: 15,
    color: "gray",
    // margin:10  ,
    // borderLeftWidth:2,
    // borderLeftColor:"blue",
    // borderRadius:10,
    flexDirection: "row",
  },
  card: {
    // backgroundColor:"rgba(108, 112, 112, 0.226)",
    // padding:20,
    // margin:10  ,
    // borderLeftWidth:0.2,
    // borderColor:"blue",
    // borderRadius:10,
    // borderRightWidth:0.2,
  },
  plotinfo: {
    fontSize: 14,
    color: "gray",
    // width:160 ,
    // height:100
  },
  imdb: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    color: "yellow",
    fontSize: 17,
  },
  downloadicon: {
    color: "gray",
    fontSize: 30,
    height: 30,
    width: 30,
  },
  actors: {
    color: "gray",
  },
  actor: {
    padding: 10,
  },
  actor_name: {
    color: "gray",
  },
  actor_view: {
    flexDirection: "row",
  },
  name: {
    padding: 3,
    marginRight: 10,
  },
  download: {
    backgroundColor: "gray",
    padding: 10,
    margin: 10,
    borderLeftWidth: 2,
    borderLeftColor: "blue",
    borderRadius: 10,
    alignItems: "center",
  },
  download_title: {
    fontSize: 17,
  },
  play: {
    padding: 20,
  },
  playbtn: {
    marginBottom: 10,
  },
  thumb: {
    fontSize: 30,
    color: "gray",
    position: "relative",
    top: -40,
  },
});
