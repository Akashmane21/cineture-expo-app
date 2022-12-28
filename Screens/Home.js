import { View ,FlatList,Animated,Platform,ActivityIndicator,Image,Text,StatusBar,Modal,SafeAreaView ,TouchableOpacity,ImageBackground,TouchableOpacityBase , StyleSheet, ScrollView } from 'react-native';
import showTimeDB from '../db/showTimeDB';
import { useState , useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ScreenOrientation from 'expo-screen-orientation';

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  setTestDeviceIDAsync,
   AdMobRewarded, 
} from 'expo-ads-admob';


import Slider from '../Shared/Slider/Slider'
import Ott from '../Shared/Ott'
import Trend from '../Comps/Trend'
import Card from '../Comps/Card';

export default function Home(props) {


  // -------------------------Adds-----------------------------------

  const [openmodal, setopenmodal] = useState(false)
  const [trend, settrend] = useState([])
  const [south, setsouth] = useState([])
  const [netflix, setnetflix] = useState([])
  const [prime, setprime] = useState([])
  const [marvel, setmarvel] = useState([])
  const [dc, setdc] = useState([])
  const [movie, setmovie] = useState([])
  const [series, setseries] = useState([])
  const [img1, setimg1] = useState("https://images4.alphacoders.com/112/thumbbig-1129381.jpg")
  const [img2, setimg2] = useState("https://wallpaperaccess.com/full/2106481.jpg")
  const [img3, setimg3] = useState("https://wallpapercave.com/wp/wp7724756.jpg")
  const [img4, setimg4] = useState("https://images-na.ssl-images-amazon.com/images/I/61boFr6SYZL._SL1000_.jpg")
  const [img5, setimg5] = useState("https://c4.wallpaperflare.com/wallpaper/655/683/807/12-monkeys-tv-shows-wallpaper-preview.jpg")

  const [Plink, setPlink] = useState('')
  const [psrc, setpsrc] = useState("https://firebasestorage.googleapis.com/v0/b/storage-6e6c1.appspot.com/o/Image%2FLogo.png?alt=media&token=a1b7c1df-b7b5-481d-a69d-c7a57dea6128")
  const [Pheight, setPheight] = useState(420)
  const [ptitle, setptitle] = useState('Visit')
  const [loader, setloader] = useState(true);
  const [allmovies, setallmovies] = useState([])
  const [bgcolor, setbgcolor] = useState('#673ab7')
  const { navigation } = props
  const [playlist, setplaylist] = useState("playlist-plus")
  const [userid, setuserid] = useState("")


  useEffect(() => {


    
    AsyncStorage.getItem('username').then(
           (value) =>{
       setuserid(value)
      })
     


 const colors = ["red", "#13d5d4","#fc9480", "green","#800405", "violet", "blue", "lightblue", "orange"];

  const random = Math.floor(Math.random() * colors.length);
  const maincolor = colors[random]
  setbgcolor(maincolor)


//   AdMobRewarded.setAdUnitID('ca-app-pub-7650197599014997/3148293319'); // Test ID, Replace with your-admob-unit-id
//   AdMobRewarded.requestAdAsync();
//   AdMobRewarded.showAdAsync();


//   AdMobInterstitial.setAdUnitID('ca-app-pub-7650197599014997/1831342210');
//   AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
//  AdMobInterstitial.showAdAsync();

//  AdMobRewarded.setAdUnitID('ca-app-pub-7650197599014997/7470681702'); // Test ID, Replace with your-admob-unit-id
//  AdMobRewarded.requestAdAsync();
//  AdMobRewarded.showAdAsync();



 ScreenOrientation.unlockAsync()         



 showTimeDB.database().ref(`Movies/`).orderByChild("Trend").equalTo("True").once("value", snapshot => {
   const Moviesdblist = []
   const todos =snapshot.val()
   for(let id in todos){ Moviesdblist.push({id, ...todos[id]}) }
   const reversed = Moviesdblist.reverse();

   settrend(reversed)
 })

 showTimeDB.database().ref(`Poster/`).once("value", snapshot => {
   const Poster =snapshot.val()
   setpsrc(Poster.Poster)
   setPlink(Poster.Link)
   setPheight(Poster.height)
   setptitle(Poster.Title)
   // settrend(Moviesdblist)
 })


 showTimeDB.database().ref(`Slider/`).once("value", snapshot => {
   const img =snapshot.val()
  setimg1(img.img1)
  setimg2(img.img2)
  setimg3(img.img3)
  setimg4(img.img4)
  setimg5(img.img5)
   // settrend(Moviesdblist)
 })


 


 showTimeDB.database().ref(`Movies/`).orderByChild("Type").equalTo("Tollywood").once("value", snapshot => {
   const south = []
   const todos =snapshot.val()
   for(let id in todos){ south.push({id, ...todos[id]}) }
   const reversed = south.reverse();

   setsouth(reversed)
 })


 
 showTimeDB.database().ref(`Movies/`).orderByChild("Showtype").equalTo("Movie").once("value", snapshot => {
   const south = []
   const todos =snapshot.val()
   for(let id in todos){ south.push({id, ...todos[id]}) }
   const reversed = south.reverse();
   setloader(false)
   setmovie(reversed)
 })

 showTimeDB.database().ref(`Movies/`).orderByChild("Showtype").equalTo("Series").once("value", snapshot => {
   const south = []
   const todos =snapshot.val()
   for(let id in todos){ south.push({id, ...todos[id]}) }
   const reversed = south.reverse();

   setseries(reversed)
 })


 showTimeDB.database().ref(`Movies/`).orderByChild("Ott").equalTo("Netflix").once("value", snapshot => {
   const netflix = []
   const todos =snapshot.val()
   for(let id in todos){ netflix.push({id, ...todos[id]}) }
   const reversednetflix = netflix.reverse();

   setnetflix(reversednetflix)
 })



 showTimeDB.database().ref(`Movies/`).orderByChild("Ott").equalTo("Marvel").once("value", snapshot => {
   const marvel = []
   const todos =snapshot.val()
   for(let id in todos){ marvel.push({id, ...todos[id]}) }
   const reversedmarvel = marvel.reverse();

   setmarvel(reversedmarvel)
 })



 showTimeDB.database().ref(`Movies/`).orderByChild("Ott").equalTo("DC").once("value", snapshot => {
   const dc = []
   const todos =snapshot.val()
   for(let id in todos){ dc.push({id, ...todos[id]}) }
   const reverseddc = dc.reverse();

   setdc(reverseddc)
 })


 showTimeDB.database().ref(`Movies/`).orderByChild("Ott").equalTo("Prime").once("value", snapshot => {
   const prime = []
   const todos =snapshot.val()
   for(let id in todos){ prime.push({id, ...todos[id]}) }
   const reversedprime = prime.reverse();

   setprime(reversedprime)
 })

 showTimeDB.database().ref(`Movies/`).once("value", snapshot => {
   const Moviesdblist = []
   const todos =snapshot.val()
   for(let id in todos){ Moviesdblist.push({id, ...todos[id]}) }
   const reversed = Moviesdblist.reverse();

   setallmovies(reversed)
 })


 AdMobRewarded.setAdUnitID('ca-app-pub-7650197599014997/8154445081'); // Test ID, Replace with your-admob-unit-id
 AdMobRewarded.requestAdAsync();
 AdMobRewarded.showAdAsync();


 AdMobInterstitial.setAdUnitID('ca-app-pub-7650197599014997/8653122627');
 AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
AdMobInterstitial.showAdAsync();

AdMobRewarded.setAdUnitID('ca-app-pub-7650197599014997/7032935107'); // Test ID, Replace with your-admob-unit-id
AdMobRewarded.requestAdAsync();
AdMobRewarded.showAdAsync();


 
}, [])



  return (
    <ScrollView style={styles.container}>
    {/* Greatings Header */}
      <View>
       <View style={{ paddingBottom:10 , borderBottomRightRadius:60,alignItems:"center" , flexDirection:"row", justifyContent:"space-between"}}>
      <Image source={require ('../assets/cc.png')} 
          style={{height:70,width:70,position:"relative",top:25,left:10 , height:43}}
        />
        <Image source={require ('../assets/Lju.png')} 
          style={{height:30,width:170,marginTop:55,position:"relative",left:-10}}
        />
        <TouchableOpacity onPress={()=> navigation.navigate("Settings")} style={{backgroundColor:"gray" ,borderRadius:10 ,position:"relative",top:30,left:-30,padding:4}}>
        <Image source={require ('../assets/outline_search_black_24dp.png')} 
          style={{height:25,width:25, color:"white"}}
        />
        </TouchableOpacity>

      </View>
      <View style={{borderBottomWidth:1,borderBottomColor:"#5934d9",paddingBottom:10,borderBottomRightRadius:100}}>
    
    <View style={{padding:10 , marginTop:0 ,borderBottomWidth:1,borderBottomColor:"#ed63fe",paddingBottom:10,borderBottomRightRadius:100 , marginLeft:10,marginRight:0,borderRadius:10}}>
      <Text style={{fontSize:18, color:"white"}}>Welcome to Cineture {userid} ,</Text>
      <Text style={{fontSize:14, color:"lightblue"}}>What's Your Mood Today ✨</Text>

    </View>
      </View>
   </View> 

   <Slider />
   <View style={{position:"relative" , top:-10}}>
    <Ott {...props}/>
    </View>

    <AdMobBanner
bannerSize="smartBannerPortrait"
adUnitID="ca-app-pub-7650197599014997/3536543221" 
servePersonalizedAds 
onDidFailToReceiveAdWithError={()=>{console.log("err white Loading Adds")}}
 />


 <View style={{...styles.strip , position:"relative" , top:-10}} >
 <Text  style={styles.title} >Recommanded For you</Text>
 <TouchableOpacity  style={styles.customBtnBG} onPress={() => navigation.navigate('Review' , {item : { Type : "Trend" ,   Name : "True" }} )}  >
 <Text  style={styles.see} >See all</Text>

  </TouchableOpacity>
</View>



<View style={{position:"relative" , top:-10}} >


      <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false} >
        <FlatList
         horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        
        data={trend}
        renderItem={({ item }) => (
          <>

  

        <Trend    {...props}
        Name ={item.Name}
    Trend ={item.Trend}
    Type ={item.Type}
    id ={item.id}
    Language = {item.Language}
    Poster={item.Poster}
    Plot={item.Plot}
    Dlink ={item.Dlink}
    Size ={item.Size}

    Slink ={item.Slink}
    Link={item.Link}
    Ott={item.Ott}
    Actors={item.Actors}
    Country={item.Country}
    Genre={item.Genre}
    Released={item.Released}
    Runtime={item.Runtime}
    Year={item.Year}
    ImdbRating={item.ImdbRating}
    Director={item.Director}
        

        />
        


    </>
  )
  }
        keyExtractor={item =>item.id}
      />
    </ScrollView>
  
</View>

<AdMobBanner
bannerSize="largeBanner"
adUnitID="ca-app-pub-7650197599014997/3536543221" 
servePersonalizedAds 
onDidFailToReceiveAdWithError={()=>{console.log("err white Loading Adds")}}
 />
<AdMobBanner
bannerSize="largeBanner"
adUnitID="ca-app-pub-7650197599014997/3536543221" 
servePersonalizedAds 
onDidFailToReceiveAdWithError={()=>{console.log("err white Loading Adds")}}
 />


<View style={styles.strip} >
 <Text  style={styles.title} >Latest Uploaded movies 💖</Text>
 <TouchableOpacity  style={styles.customBtnBG} onPress={() =>  navigation.navigate('Review' , {item : { Type : "Showtype" ,   Name : "Movie" }} ) }  >
 <Text  style={styles.see} >See all</Text>

  </TouchableOpacity>
</View>



<ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false} >
        <FlatList
         horizontal
  pagingEnabled={true}
  showsHorizontalScrollIndicator={false}
  legacyImplementation={false}
        // showsHorizontalScrollIndicator={false}
        data={movie}
        renderItem={({ item }) => (
          <>
 {loader &&
            <ActivityIndicator
                animating
                color={"#1e9ef3"}
                size="large"
                // style={{ flex: 1, position:"absolute", top:"30%", left:"45%" }}
            />
        }
          
        <Card {...props}
        id ={item.id}
        Name ={item.Name}
    Trend ={item.Trend}
    Type ={item.Type}
    Poster={item.Poster}
    Plot={item.Plot}
    Dlink ={item.Dlink}
    Size ={item.Size}
    Language = {item.Language}

    Slink ={item.Slink}
    Link={item.Link}
    Ott={item.Ott}
    Actors={item.Actors}
    Country={item.Country}
    Genre={item.Genre}
    Released={item.Released}
    Runtime={item.Runtime}
    Year={item.Year}
    ImdbRating={item.ImdbRating}
    Director={item.Director}
        

        />

    </>
  )
  }
        keyExtractor={item =>item.id}
      />
    </ScrollView>

   






    <AdMobBanner
bannerSize="largeBanner"
adUnitID="ca-app-pub-7650197599014997/3536543221" 
servePersonalizedAds 
onDidFailToReceiveAdWithError={()=>{console.log("err white Loading Adds")}}
 />
<AdMobBanner
bannerSize="largeBanner"
adUnitID="ca-app-pub-7650197599014997/3536543221" 
servePersonalizedAds 
onDidFailToReceiveAdWithError={()=>{console.log("err white Loading Adds")}}
 />


   


  

     <View style={styles.strip} >
 <Text  style={styles.title} >Latest Uploaded Web-Series </Text>
 <TouchableOpacity  style={styles.customBtnBG} onPress={() =>  navigation.navigate('Review' , {item : { Type : "Showtype" ,   Name : "Series" }} ) }  >
 <Text  style={styles.see} >See all</Text>
  </TouchableOpacity>
</View>



<ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false} >
        <FlatList
         horizontal
  pagingEnabled={true}
  showsHorizontalScrollIndicator={false}
  legacyImplementation={false}
        // showsHorizontalScrollIndicator={false}
        data={series}
        renderItem={({ item }) => (
          <>

          
        <Card {...props}
        id ={item.id}
        Name ={item.Name}
    Trend ={item.Trend}
    Type ={item.Type}
    Poster={item.Poster}
    Plot={item.Plot}
    Size ={item.Size}

    Dlink ={item.Dlink}
    Slink ={item.Slink}
    Link={item.Link}
    Ott={item.Ott}
    Actors={item.Actors}
    Country={item.Country}
    Genre={item.Genre}
    Released={item.Released}
    Runtime={item.Runtime}
    Year={item.Year}
    ImdbRating={item.ImdbRating}
    Director={item.Director}
        

        />



    </>
  )
  }
        keyExtractor={item =>item.id}
      />
    </ScrollView>
 












              <View style={styles.strip} >
 <Text  style={styles.title} >South Action movies 💖</Text>
 <TouchableOpacity  style={styles.customBtnBG} onPress={() =>  navigation.navigate('Review' , {item : { Type : "Type" ,   Name : "Tollywood" }} ) }  >
 <Text  style={styles.see} >See all</Text>

  </TouchableOpacity>
</View>



<ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false} >
        <FlatList
         horizontal
  pagingEnabled={true}
  showsHorizontalScrollIndicator={false}
  legacyImplementation={false}
        // showsHorizontalScrollIndicator={false}
        data={south}
        renderItem={({ item }) => (
          <>

          
        <Card {...props}
        id ={item.id}
        Name ={item.Name}
    Trend ={item.Trend}
    Type ={item.Type}
    Poster={item.Poster}
    Size ={item.Size}
    Language = {item.Language}

    Plot={item.Plot}
    Dlink ={item.Dlink}
    Slink ={item.Slink}
    Link={item.Link}
    Ott={item.Ott}
    Actors={item.Actors}
    Country={item.Country}
    Genre={item.Genre}
    Released={item.Released}
    Runtime={item.Runtime}
    Year={item.Year}
    ImdbRating={item.ImdbRating}
    Director={item.Director}
        

        />



    </>
  )
  }
        keyExtractor={item =>item.id}
      />
    </ScrollView>

    





              <View style={styles.strip} >
 <Text  style={styles.title} >Netflix Originals ✨</Text>
 <TouchableOpacity  style={styles.customBtnBG} onPress={() => navigation.navigate('Review' , {item : { Type : "Ott" ,   Name : "Netflix" }} )}  >
 <Text  style={styles.see} >See all</Text>

  </TouchableOpacity>
</View>
     <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false} >
        <FlatList
         horizontal
  pagingEnabled={true}
  showsHorizontalScrollIndicator={false}
  legacyImplementation={false}
        // showsHorizontalScrollIndicator={false}
        data={netflix}
        renderItem={({ item }) => (
          <>
        <Card {...props}
                id ={item.id}

        Name ={item.Name}
    Trend ={item.Trend}
    Type ={item.Type}
    Poster={item.Poster}
    Plot={item.Plot}
    Dlink ={item.Dlink}
    Slink ={item.Slink}
    Size ={item.Size}
    Language = {item.Language}

    Link={item.Link}
    Ott={item.Ott}
    Actors={item.Actors}
    Country={item.Country}
    Genre={item.Genre}
    Released={item.Released}
    Runtime={item.Runtime}
    Year={item.Year}
    ImdbRating={item.ImdbRating}
    Director={item.Director}
        

        />



    </>
  )
  }
        keyExtractor={item =>item.id}
      />
    </ScrollView>

    


    <View style={styles.strip} >
 <Text  style={styles.title} >Marvel Universe 🔥</Text>
 <TouchableOpacity  style={styles.customBtnBG} onPress={() => navigation.navigate('Review' , {item : { Type : "Ott" ,   Name : "Marvel" }} )}  >
 <Text  style={styles.see} >See all</Text>

  </TouchableOpacity>
</View>
     <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false} >
        <FlatList
         horizontal
  pagingEnabled={true}
  showsHorizontalScrollIndicator={false}
  legacyImplementation={false}
        // showsHorizontalScrollIndicator={false}
        data={marvel}
        renderItem={({ item }) => (
          <>
        <Card {...props}
        Name ={item.Name}
        id ={item.id}

    Trend ={item.Trend}
    Type ={item.Type}
    Poster={item.Poster}
    Plot={item.Plot}
    Dlink ={item.Dlink}
    Slink ={item.Slink}
    Link={item.Link}
    Ott={item.Ott}
    Size ={item.Size}
    Language = {item.Language}

    Actors={item.Actors}
    Country={item.Country}
    Genre={item.Genre}
    Released={item.Released}
    Runtime={item.Runtime}
    Year={item.Year}
    ImdbRating={item.ImdbRating}
    Director={item.Director}
        

        />



    </>
  )
  }
        keyExtractor={item =>item.id}
      />
    </ScrollView>





    <View style={styles.strip} >
 <Text  style={styles.title} >Amazon Prime </Text>
 <TouchableOpacity  style={styles.customBtnBG} onPress={() => navigation.navigate('Review' , {item : { Type : "Ott" ,   Name : "Prime" }} )}  >
   <Text  style={styles.see} >See all</Text>

  </TouchableOpacity>
</View>
     <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false} >
        <FlatList
         horizontal
  pagingEnabled={true}
  showsHorizontalScrollIndicator={false}
  legacyImplementation={false}
        // showsHorizontalScrollIndicator={false}
        data={prime}
        renderItem={({ item }) => (
          <>
        <Card {...props}
        Name ={item.Name}
        id ={item.id}
        Language = {item.Language}

    Trend ={item.Trend}
    Type ={item.Type}
    Poster={item.Poster}
    Size ={item.Size}

    Plot={item.Plot}
    Dlink ={item.Dlink}
    Slink ={item.Slink}
    Link={item.Link}
    Ott={item.Ott}
    Actors={item.Actors}
    Country={item.Country}
    Genre={item.Genre}
    Released={item.Released}
    Runtime={item.Runtime}
    Year={item.Year}
    ImdbRating={item.ImdbRating}
    Director={item.Director}
        

        />



    </>
  )
  }
        keyExtractor={item =>item.id}
      />
    </ScrollView>





    
    <View style={styles.strip} >
 <Text  style={styles.title} >DC Univers </Text>
 <TouchableOpacity  style={styles.customBtnBG} onPress={() => navigation.navigate('Review' , {item : { Type : "Ott" ,   Name : "DC" }} )}  >
   <Text  style={styles.see} >See all</Text>

  </TouchableOpacity>
</View>
     <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false} >
        <FlatList
         horizontal
  pagingEnabled={true}
  showsHorizontalScrollIndicator={false}
  legacyImplementation={false}
        // showsHorizontalScrollIndicator={false}
        data={dc}
        renderItem={({ item }) => (
          <>
        <Card {...props}
        Name ={item.Name}
        id ={item.id}

    Trend ={item.Trend}
    Size ={item.Size}
    Language = {item.Language}

    Type ={item.Type}
    Poster={item.Poster}
    Plot={item.Plot}
    Dlink ={item.Dlink}
    Slink ={item.Slink}
    Link={item.Link}
    Ott={item.Ott}
    Actors={item.Actors}
    Country={item.Country}
    Genre={item.Genre}
    Released={item.Released}
    Runtime={item.Runtime}
    Year={item.Year}
    ImdbRating={item.ImdbRating}
    Director={item.Director}
        

        />



    </>
  )
  }
        keyExtractor={item =>item.id}
      />
    </ScrollView>


        <View style={{ height:200}}></View>


      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
 
  name:{
    color:"green",
    fontSize:60
  },
  
  tinyLogo: {
    width: '100%',
    height: 250,
    borderBottomStartRadius:100,
    borderRadius:10,
 
  },
  logo: {
    width: 66,
    height: 58,
  },
  title:{
    fontSize:15,
    borderRadius:6,
    paddingLeft:10,
  // backgroundColor:'#202020',
 width:"40%",
 color:"white",
 borderLeftWidth:1,
// borderLeftColor:"chartreuse",
marginLeft:1,
justifyContent:"center",
alignItems:"center",
flexGrow:1,
textTransform: 'uppercase',
  },
 
  Card: {
display:'flex',
flexDirection: "row",
justifyContent : "space-between",

backgroundColor:"#202020"

  },
  submit:{
    fontSize:30,
    width:"40%",
    backgroundColor:"green",
    position:"relative",
    left:90
  },
  strip:{
    display:"flex",
    flexDirection:"row",
    marginTop:20,
    marginBottom:10,
    // backgroundColor:"white"

  },
  button:{
backgroundColor:"red"
  },
  ricon:{
    color:"white",
    fontSize:17,
    
    position:"relative",
    top:8

  },
  customBtnText:{
    color:"lightblue",
    position:"relative",
    top:5


  },


 
  container: {
    // flex: 1,
             flexDirection: "column",
    // backgroundColor:"#616360",

    backgroundColor:"#0d1117",
    transform: [{ rotate: '0deg' }],

  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white" ,
    fontSize: 40 ,
    fontWeight: "bold" ,
    textAlign: "center" ,
    backgroundColor: "rgba(0, 0, 0, 0.493)",
    position:"relative",
    // top:270,
    height:420

  },
  img:{
    // height:420,
    
  },
  hicon:{
    color:"red",
    fontSize:20,
    position:"absolute",
    top:380,
    left:310,

  }
  ,
  htext:{
    color:"white",
    fontSize:13,
    position:"absolute",
    top:324,
    left:310,

  },
  sicon:{
    color:"gray",
    fontSize:25,
    position:"absolute",
    top:380,
    left:20,

  },
  drawer:{
    color:"lightblue",
    fontSize:25,
    position:"absolute",
    top:30,
    left:30,

  },
  account:{
    color:"lightblue",
    fontSize:25,
    position:"absolute",
    top:30,
    left:320,

  }
  ,
  stext:{
    color:"gray",
    fontSize:13,
    position:"absolute",
    top:320,
    left:15,

  },
  play:{
    position:"relative",
    top:-70,
    width:140,
    left:110,
    borderRadius:13,
    backgroundColor:"white"

  },
  bg:{
    height:200,
    backgroundColor:"red"
  },
  safe:{
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 0 : 0
  },
  slider:{
    margin:20,
 
  },
  see:{color:"gray" , paddingRight:10, fontSize:12}
  
  



});
