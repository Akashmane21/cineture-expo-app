import { StatusBar } from 'expo-status-bar';
import React, { Component , useState , useEffect} from "react";
import showTimeDB from '../db/showTimeDB'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

import Ott from '../Shared/Ott'
import Navbar from '../Shared/navbar'

import {
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  Switch,
  ScrollView,
  Modal,
  ImageBackground  
} from "react-native";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  setTestDeviceIDAsync,
   AdMobRewarded, 
} from 'expo-ads-admob';


import { SearchableFlatList } from "react-native-searchable-list";


export default function Search(props) {


  
  const [data, setdata] = useState([])
  const [searchTerm, setsearchTerm] = useState("")
  const [searchAttribute, setsearchAttribute] = useState("Name")
  const [ismodalopen, setismodalopen] = useState(false)
  const [length, setlength] = useState(0)

  useEffect(() => {

    showTimeDB.database().ref(`Movies/`).once("value", snapshot => {
      const Moviesdblist = []
      const todos =snapshot.val()
      for(let id in todos){ Moviesdblist.push({id, ...todos[id]}) }
      const reversed = Moviesdblist.reverse();

      setdata(reversed)
      setlength(reversed.length)
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
    <View style={{ flex: 1 , backgroundColor:"white" }}>







    <Modal
              animationType={"slide"}
              transparent={true}
              visible={ismodalopen}
              >
              <TouchableOpacity onPress={()=> setismodalopen(!ismodalopen)}>
              <View style={{height:100}}>
    
              </View>
              </TouchableOpacity>
    
              <ScrollView  showsVerticalScrollIndicator={false}>
         <View style={{
         borderRadius:10 ,backgroundColor:"gray", padding:20 , height:1000,borderTopLeftRadius:30,borderTopRightRadius:30
             }} >
          </View>
         </ScrollView>
       </Modal>
    
    
    
    
          {/* <View style={{height:100 , paddingTop:60}}>
          <Text style={{fontSize:20, color:"white"}}>                  Find Your Fav ✨</Text>
          </View> */}
    <View style={styles.pageContainer}>
    
              {/* <Text></Text> */}
    <View style={{backgroundColor:"#161b22"}}>
    <Text></Text>
      <Text></Text>
      <View style={styles.searchInputs}>
      
      {/* <MaterialCommunityIcons style={styles.sicon} name="movie-search-outline" /> */}
      <View style={{flexDirection:"row", backgroundColor:"white", alignItems:"center", paddingRight:15, borderRadius:10}}>
      <TextInput placeholder="search here.." 
            onChangeText={searchTerm => setsearchTerm(searchTerm)}
    
      style={{width:300 , color:"black", backgroundColor:"white" , fontSize:15, paddingLeft:20 , padding:7 , borderRadius:10}}></TextInput>
     <Image source={require ('../assets/outline_search_black_24dp.png')} 
      style={{height:25,width:25, color:"white"}}
    />
    
      </View>
     
      {/* <MaterialCommunityIcons onPress={()=> setismodalopen(true)} style={styles.sicon} name="filter-menu-outline" /> */}
    
        
    
     </View>
    </View>
           
      
     {/* <ImageBackground blurRadius={0.4} style={{}} source={ {uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtEigSzb1fSkLvBl7gZPZVTA1Rq4rbhNMww&usqp=CAU"}}> */}
    
     <ScrollView style={{backgroundColor:"#0b1016"}}>
    <Ott {...props} />

    <AdMobBanner
bannerSize="smartBannerPortrait"
adUnitID="ca-app-pub-7650197599014997/3536543221" 
servePersonalizedAds 
onDidFailToReceiveAdWithError={()=>{console.log("err white Loading Adds")}}
 />

    <Text></Text>
    <Text style={{color:"gray" ,textTransform: 'uppercase',}}>     All Movie's & Shows : Total ({length})</Text>
    <Text></Text>
                <SearchableFlatList
                  // style={styles.list}
                  data={data}
                  numColumns={2}
    
                  searchTerm={searchTerm}
                  searchAttribute={searchAttribute}
                  renderItem={({ item }) => (
                      <>
            <View  style={styles.Card1}>
    
                      <TouchableOpacity  
     onPress={() =>  props.navigation.navigate('Detail' , {item :
      { 
        
        Name :`${item.Name}`,
        id :`${item.id}`,
        Ott:`${item.Ott}`,
        Language:`${item.Language}`,
        Size :`${item.Size}`,
        Trend :`${item.Trend}`,
        Type :`${item.Type}`,
        Poster:`${item.Poster}`,
        Plot:`${item.Plot}`,
        Dlink :`${item.Dlink}`,
        Slink :`${item.Slink}`,
        Link:`${item.Link}`,
        Ott:`${item.Ott}`,
        Actors:`${item.Actors}`,
        Country:`${item.Country}`,
        Genre:`${item.Genre}`,
        Released:`${item.Released}`,
        Runtime:`${item.Runtime}`,
        Year:`${item.Year}`,
        ImdbRating:`${item.ImdbRating}`,
        Director:`${item.Director}`,
        
      }} )}  >
        
                        <Image
                            style={{...styles.poster}}
                            source={{
                            uri: `${item.Poster}`,
                            }}
                        />
    
                </TouchableOpacity>
                <View style={styles.section}>
    
                            <View style={styles.titleview}>
                        <Text style={styles.title}>{item.Name}</Text>
                        </View>
                        <View style={styles.Imdbview}>
                        <Text style={styles.imdb}>{item.ImdbRating}</Text>
                        </View>
    
    
    
                        <MaterialCommunityIcons style={styles.hicon} name="star"  />
                        </View>
    
       </View>
                 

    </>
    
       )}
                                
                            
       />
<View style={styles.joinn}>
<View style={{width:"80%"}}>

      <Image
        style={styles.req}
        resizeMode='cover'
        source={{
          uri: `https://cdni.iconscout.com/illustration/premium/thumb/boy-worried-about-page-not-found-error-4558757-3780053.png`,
        }}
      />
      </View>
<View style={{width:"60%"}}>

      <Text style={{color:"white" , fontSize:30}}>"{searchTerm}" Not Found! </Text>
</View>
</View>
    
            <View style={styles.request}>

      <Image
        style={styles.reqq}
        source={{
          uri: `https://www.clipartmax.com/png/full/441-4417308_dont-worry-about-ut-dont-worry-about-ut.png`,
        }}
      />
      <Text style={styles.not}>I'm Here for you 😉</Text>

      <TouchableOpacity style={styles.join}>
    <Ionicons name='aperture-outline'  color='orange' style={styles.icons} />

    <Text style={styles.now}>
   Request Now 

    </Text></TouchableOpacity>

    
             
<Text style={{}}>-------Or-------</Text>

            

      <TouchableOpacity style={styles.join}>
    <Ionicons name='paper-plane'  color='blue' style={styles.icons} />

    <Text style={styles.now}>
   Join Telegram 

    </Text></TouchableOpacity>
</View>
              
    <Text></Text>           
    <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
    
    
              </ScrollView>
             
    
             {/* </ImageBackground> */}
            </View>
          
          </View>
  );
}


const styles = StyleSheet.create({
  pageContainer: {
    padding: 1,
    flex: 1,
    backgroundColor:"black",
    borderTopLeftRadius:20,
    borderTopRightRadius:20

  },
  req:{
    height:100,
      width:200
  },
  reqq:{
    height:150,
    width:230
  },
  now:{
    fontSize:15,
    paddingTop:2
  },
  request:{
    // height:300,
    // width:300,
    backgroundColor:"white",
    margin:10,
    borderRadius:20,
    padding:10,
    alignItems:'center'


  },
  
join:{
  display:"flex",
  flexDirection:"row",
  padding:10,
  justifyContent:"space-around",
  backgroundColor:"white",
  marginRight:10,
  borderRadius:40,
  elevation:10,
  marginTop:20,
  width:200,
  marginBottom:20
  },

  joinn:{
    display:"flex",
    flexDirection:"row",
    padding:10,
    justifyContent:"space-around",
    backgroundColor:"orange",
    marginRight:10,
    borderRadius:20,
    margin:10
 
    },
  icons:{
    fontSize:25
      },
  not:{
    color:"black",
    fontSize:30,
textAlign:"center" ,
fontWeight:'bold'
 },
 dont:{
  color:"white",
  fontSize:70,
textAlign:"center" ,
fontWeight:'bold',
backgroundColor:'gray'

 },
  sicon:{
    fontSize:30,
    color:"gray"
  },
  poster:{
    height:100,
    borderRadius:10,
    width:30

    
  },
  searchInputs: {
    flexDirection: "row",
    margin:10,
     alignItems:"center",
     justifyContent:"space-between",
     backgroundColor:"#121212"
  },
  search: {
    flex: 8,
    // color:"white",
    // marginBottom: 20,
    // borderColor: "#D44744",
    // borderBottomWidth: 3,
    padding: 10
  },
  switch: {
    flex: 2
  },
  listItem: {
    padding: 3,
    // borderColor: "#f4cfce",
    // borderWidth: 1,
    // borderRadius: 20,
    margin: 4,
    // width:170,
    // height:330,
    // backgroundColor:"#161b22",
    borderRadius:10,
    marginLeft:10
    // flexDirection:"row",
  
    // elevation: 6,
  },
  info: {
    padding: 10,
    marginTop: 20,
    borderColor: "#f4cfce",
    borderWidth: 1
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#f4cfce"
  },
  row1: {
    flexDirection: "row"
  },
  prop: {
    flex: 1,
    padding: 10
  },
  val: {
    borderLeftWidth: 1,
    alignSelf: "center",
    flex: 2
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 5,
    height: 330,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  bg :{
    backgroundColor:"white"
  },
  poster:{
    height:200,
    borderRadius:10,
    width:"88%"
    
  },
  title:{
    color:"gray",
// fontSize:11,
// width:200,
// flexGrow:1

  },
  runtime:{
    fontSize:10,
    color:"gray"
  },
  section:{
    display:"flex",
    flexDirection:"row",
    // justifyContent:"center",
    alignItems:"center"
  },
  year:{
    color:"gray",
fontSize:12,
paddingRight:10
  },
  hicon:{
    color:"yellow",
paddingRight:4,
paddingLeft:4
  },
  titleview:{
    width:"80%",
    overflow:"scroll"
  },
  cardbg:{
    // backgroundColor:"#202020",
    padding:10,
    paddingLeft:0,

  },
















  Card1:{
    width:150,
    margin:10,
    // alignItems:"center",
    // backgroundColor:"rgba(108, 112, 112, 0.226)",
    borderRadius:20,
    // padding:6,
    // height:230,
    marginRight:-8,
    backgroundColor:"black",
    // backgroundColor:"gray",
    marginRight:5,
    borderRadius:5,
  marginLeft:20
    
}, info: {
    padding: 10,
    marginTop: 20,
    borderColor: "#f4cfce",
    borderWidth: 1
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#f4cfce"
  },
  row1: {
    flexDirection: "row"
  },
  prop: {
    flex: 1,
    padding: 10
  },
  val: {
    borderLeftWidth: 1,
    alignSelf: "center",
    flex: 2
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 5,
    height: 330,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  bg :{
    backgroundColor:"black"
  },
 
  
  runtime:{
    fontSize:10,
    color:"gray"
  },
  imdb:{
      fontSize:12,
      color:"gray"

  },
  Ott:{
      position:"relative",
      left:70,
    fontSize:10,
    color:"gray"

  },
  section:{
    flexDirection:"row",
    alignItems:"center",
    paddingBottom:10, position:"relative",
    height:50,
    overflow:"hidden"
  },
  year:{
    color:"gray",
fontSize:12,
paddingRight:10
  },
  hicon:{
    color:"yellow",
paddingRight:4,
paddingLeft:4
  },
  titleview:{
    width:"70%",
    overflow:"scroll"
  },
poster :{
    height:180,
    width:"100%",
    borderRadius:5,
    padding:20

},
title:{
    fontSize:12,
    padding:4,
    color:"white"
}
});