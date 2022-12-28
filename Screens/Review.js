import React, { Component , useState , useEffect} from "react";
import showTimeDB from '../db/showTimeDB'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ott from '../Shared/Ott'
import { LinearGradient } from 'expo-linear-gradient';

import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  Input,
  Switch,
  StatusBar,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ImageBackground
} from "react-native";
import { SearchableFlatList } from  "react-native-searchable-list";



export default function Review( props ) {
  const { route } = props
  const { item } = route.params
  const { Type } = item
  const { Name } = item

const [Title, setTitle] = useState(Name)
console.log(Title);
  
  const [data, setdata] = useState([])
const [searchTerm, setsearchTerm] = useState("")
const [searchAttribute, setsearchAttribute] = useState("Name")
const [mainposter, setmainposter] = useState('')
const [logo, setlogo] = useState('')


  useEffect(() => {

    showTimeDB.database().ref(`Movies/`).orderByChild(Type).equalTo(Name).once("value", snapshot => {
      const Moviesdblist = []
      const todos =snapshot.val()
      for(let id in todos){ Moviesdblist.push({id, ...todos[id]}) }
      const reversed = Moviesdblist.reverse();

      setdata(reversed)
    })



    if(Title == "Netflix"){
      setlogo("https://i.insider.com/5beafd0f48eb12015655cf72?width=700")
      setmainposter("https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/MONEY-HEIST-SEASON-5.jpg")
    }
    else if(Title == "Prime"){
      setlogo('https://www.telesurenglish.net/mrf4u/statics/i/ps/www.telesurtv.net/__export/1584731358366/sites/telesur/img/2020/03/20/amazon_2.jpg?width=1200&enable=upscale')
      setmainposter("https://wallpapercave.com/wp/wp5429971.jpg")
    }
    else if(Title == "Disney"){
      setlogo('https://i.gadgets360cdn.com/large/disney_plus_hotstar_logo_1583901149861.jpg?downsize=950:*&output-quality=80')
      setmainposter("https://i.guim.co.uk/img/media/5034a32b6a24842e0e0156a1f376140d41c2e2cc/0_0_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=239e8233bcc9f6c1a8acead482543b66")
    }
    else if(Title == "Marvel"){
      setlogo('https://wallpaperaccess.com/full/342031.png')
      setmainposter("https://pbs.twimg.com/media/Cxp5wi4UAAAepBd.jpg:large")
    }
    else if(Title == "DC"){
      setlogo('https://bpando.org//wp-content/uploads//2012/01/dc-comics-06.jpeg')
      setmainposter("https://images8.alphacoders.com/113/thumb-1920-1137527.jpg")
    }
    else if(Title == "Bollywood"){
      setlogo('https://image.shutterstock.com/image-vector/bollywood-neon-sign-bright-signboard-260nw-1351338800.jpg')
      setmainposter("https://www.bollywoodhungama.com/wp-content/uploads/2020/12/EXCLUSIVE-Here%E2%80%99s-why-CBI-has-not-yet-announced-its-findings-in-the-Sushant-Singh-Rajput-case-1.jpeg")
    }
    else if(Title == "Tollywood"){
      setlogo('https://static10.tgstat.ru/channels/_0/13/134e8dc93b4f18f1cc924c99213e6834.jpg')
      setmainposter("https://static.toiimg.com/photo/74088427.cms")
    }
    else if(Title == "Hollywood"){
      setlogo('https://images-platform.99static.com/tcjZX7Xwd2UVKCxucdEjcPjKO5U=/0x0:1110x1110/500x500/top/smart/99designs-contests-attachments/111/111820/attachment_111820351')
      setmainposter("https://wallpapercave.com/wp/wp6824715.jpg")
    }
    else if(Title == "Cartoon"){
      setlogo('https://1000logos.net/wp-content/uploads/2016/10/Cartoon-Network-Logo.png')
      setmainposter("https://m.media-amazon.com/images/M/MV5BYzE3ODhiNzAtOWY4MS00NTdiLThmNDctNDM4NjRiNGFmYjI1XkEyXkFqcGdeQXVyMTI2ODM1ODUw._V1_.jpg")
    }
    else if(Title == "True"){
      // setlogo('https://1000logos.net/wp-content/uploads/2016/10/Cartoon-Network-Logo.png')
      setmainposter("https://cdn.wallpapersafari.com/56/35/xP8rVp.png")
    }
    else if(Title == "Movie"){
      // setlogo('https://1000logos.net/wp-content/uploads/2016/10/Cartoon-Network-Logo.png')
      setmainposter("https://pbs.twimg.com/media/Cxp5wi4UAAAepBd.jpg:large")
    }
    else if(Title == "Series"){
      // setlogo('https://1000logos.net/wp-content/uploads/2016/10/Cartoon-Network-Logo.png')
      setmainposter("https://hdqwalls.com/wallpapers/game-of-thrones-season-8-4k-x7.jpg")
    }
   
   
  }, [])

 


  



    return (

      <>
<ScrollView style={{}}>
<ImageBackground blurRadius={3} style={{}} source={ {uri : "https://wallpaperaccess.com/full/340599.jpg"}}>

      <View style={{ flex: 1 }}>
      
         <Image style={{height:420, width:"100%" , borderRadius:0 ,}} source={{uri : `${mainposter}`}} />
         
         <LinearGradient
        colors={['#00000000','#000000bd','#000000bd', 'black']}
        style={{
          position:"relative",
          top:-90,
          height:100
        }}>
        <View style={{ position:"relative",
         top:0 , alignItems:"center",left:0, padding:20, borderRadius:20 }}>
         <Image style={{height:60, width:130 , position:"relative",
         top:0 , alignItems:"center",left:0 , borderRadius:20}} source={{uri : `${logo}`}} />
        
        
         </View>
         </LinearGradient>
         {/* <Text></Text>
         <Text></Text> */}
         
        <View style={styles.nav}>
        {/* <Text></Text> */}
        {/* <View style={styles.searchInputs}>
             
             <MaterialCommunityIcons style={styles.sicon} name="movie-search-outline" />
             <TextInput placeholder="search here.." 
                   onChangeText={searchTerm => setsearchTerm(searchTerm)}
           
             style={{width:230 ,color:"white", backgroundColor:"gray" , fontSize:15, paddingLeft:20 , padding:7 , borderRadius:20}}></TextInput>
            
           
               
           
            </View> */}
        <Text style={{color:"white" , padding:8 , fontSize:15}}>  Latest Uploaded :</Text>

        <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false} >
        <FlatList
         horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        data={data}
        renderItem={({ item }) => (
          <>
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
                        style={{...styles.poster , height:180 , width:130 , margin:10 }}
                        source={{
                        uri: `${item.Poster}`,
                        }}
                    />
                    </TouchableOpacity>
          </>
        )} />

        </ScrollView>
        <Text style={{color:"white" , padding:8 , fontSize:15}}>  All Movies & Show's From {Title} :</Text>

            <View style={styles.searchInputs}>
          


            <SearchableFlatList
      // horizontal={true}
              style={styles.list}
              data={data}
              numColumns={2}
              searchTerm={searchTerm}
              searchAttribute={searchAttribute}
              renderItem={({ item }) => (
                  <>
                  <View style={styles.listItem}>
                  <TouchableOpacity  
 onPress={() =>  props.navigation.navigate('Detail' , {item :
  { 
    
    Name :`${item.Name}`,
    id :`${item.id}`,

    Trend :`${item.Trend}`,
    Type :`${item.Type}`,
    Poster:`${item.Poster}`,
    Plot:`${item.Plot}`,
    Dlink :`${item.Dlink}`,
    Slink :`${item.Slink}`,
    Size :`${item.Size}`,
    Language:`${item.Language}`,

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
                        style={{...styles.poster , height:200 }}
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
                    <Text style={styles.runtime}>{item.ImdbRating}</Text>
                    </View>



                    <MaterialCommunityIcons style={styles.hicon} name="star"  />

                    </View>
                    {/* <View style={styles.section}>
                    <Text style={styles.year}>{item.Year}</Text>
                    <Text style={styles.runtime}>{item.Runtime}</Text>

                    </View> */}
                    </View>
                 </>

              )}/>




          
         
        </View>
        </View>
      </View>
      </ImageBackground>
      </ScrollView>
      </>
    );
  }



const styles = StyleSheet.create({
  pageContainer: {
    padding: 1,
    flex: 1,
    // backgroundColor:"black"
  },
  poster:{
    height:120,
    borderRadius:10,
    marginRight:15

    
  },
  searchInputs: {
    flexDirection: "row",
    margin:10,
     alignItems:"center",
     justifyContent:"space-between"
  },
  search: {
    flex: 8,
    color:"white",
    marginBottom: 20,
    // borderColor: "#D44744",
    borderBottomWidth: 3,
    padding: 10
  },
  sicon:{
    fontSize:30,
    color:"gray"
  },
  switch: {
    flex: 2
  },
  listItem: {
    padding: 5,
    // borderColor: "#f4cfce",
    // borderWidth: 1,
    // borderRadius: 20,
    margin: 4,
    width:"48%",
    // height:330,
    backgroundColor:"#202020",
    borderRadius:10,
   
    elevation: 6,
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
    backgroundColor:"black"
  },
  poster:{
    height:240,
    borderRadius:10,

    
  },
  title:{
    color:"#1e9ef3",
fontSize:12,
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
    alignItems:"center",
    paddingTop:20
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
  Type :{
    color:"black" , fontSize:18 , alignItems:"center" , justifyContent:"center" ,
  padding:10,
backgroundColor:"#1e9ef3",
borderRadius:10,
margin:20

},
safe:{
  flex: 1,
  backgroundColor: "black",
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
},
nav:{
  // backgroundColor:"#273239" ,
  borderTopRightRadius:40,
  borderTopLeftRadius:40,
  position:"relative",
  top:-80
}
});