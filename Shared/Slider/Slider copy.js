import React, { Component , useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View, Dimensions, StyleSheet , Image , ImageBackground } from 'react-native';

import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json

import { scrollInterpolator, animatedStyles } from './animations';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import showTimeDB from '../../db/showTimeDB'

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 2 / 1.3);

const DATA = [
  
  {
    Name : "Sense 8",
    img:"https://cutewallpaper.org/21/sense8-wallpaper/Netflix-Confirms-Sense8-Series-Finale-Date-in-June-What-.jpeg",
       imdb:9.4,
       genere:"Action",
       Duration:"1 hr ",
       likes:500,
       Year:2018
  },
      {
Name : "Aspirants",
img:"https://bingeddata.s3.amazonaws.com/uploads/2021/04/TVF-Aspirants.jpg",
imdb:9.2,
genere:"Educational",
Duration:"1 hr ",
likes:200,
Year:2021
  },
  {
    Name : "MONEY-HEIST",
    img:"https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/MONEY-HEIST-SEASON-5.jpg",
    imdb:9.4,
    genere:"Action",
    Duration:"2 hr ",
    likes:300,
    Year:2020
      },
      {
        Name : "Dark",
        img:"https://dark.netflix.io/share/global.png",
        imdb:9.4,
        genere:"Science",
        Duration:"52 min ",
        likes:200,
        Year:2020
          },
          {
            Name : "12 Monkeys",
            img:"https://miro.medium.com/max/1193/1*CpLtk-FwLvAfBXRfxjeZ_g.jpeg",
            imdb:9.9,
            genere:"Time",
            Duration:"1 hr ",
            likes:1000,
            Year:2016
              },
              {
                Name : "Strainger Things",
                img:"https://www.denofgeek.com/wp-content/uploads/2017/08/stranger-things-season-3-starcourt-teaser-netflix.jpg?fit=670%2C377",
                imdb:8.4,
                genere:"Horror",
                Duration:"1 hr ",
                likes:160,
                Year:2020
                  }
];
// for (let i = 0; i < 10; i++) {
//   DATA.push(i)
// }

export default class App extends Component {
  
  state = {
    index: 0,
    studentslist : []
  }
 

  componentDidMount() {
   
    showTimeDB.database().ref(`Stream/`).once("value", snapshot => {
      const Moviesdblist = []
      const todos =snapshot.val()
      for(let id in todos){ Moviesdblist.push({id, ...todos[id]}) }
      const reversed = Moviesdblist.reverse();

      this.setState({ studentslist: reversed });
      // console.log(this.state.studentslist);
    })
    
  
  
}



  constructor(props) {
    super(props);
    console.log(this.props);
    this._renderItem = this._renderItem.bind(this)
  }

  _renderItem({ item }) {
    return (
      <View style={styles.itemContainer}>
      <TouchableOpacity onPress={()=> console.log(item.img)} style={{elevation:20}}>
      <Image style={{height:350 , width:230 , borderRadius:5 , elevation:10}} source={{uri : `${item.Poster}`}} />
      </TouchableOpacity>
      <Text></Text>
      <Text style={styles.counter} >
          {item.Name}
        </Text>
        <View style={{flexDirection:"row" , justifyContent:"center"}}>
        {/* <Text style={{...styles.notitle1}}> {item.Genre}</Text> */}
        <Text style={styles.notitle1}>{item.Year}</Text>
        </View>
        <Text></Text>

       


<TouchableOpacity  onPress={()=> this.props.navigation.navigate('Download' , {item :`${item.Slink}`} )} style={{flexDirection:"row" , padding:10,paddingLeft:20, backgroundColor:"orange", margin:10 , borderRadius:20 , width:"60%" , marginLeft:0 , justifyContent:"space-between"}}>
  <Text style={{
    color:"black"
  }}>Watch Now</Text>
  <MaterialCommunityIcons name="play" style={{fontSize:24}} />

</TouchableOpacity>
      </View>
    );
  }
  
  render() {
    return (

      <View style={{backgroundColor:"#111310a9"}}>
      <View style={{paddingTop:40 ,borderBottomLeftRadius:50 , borderBottomRightRadius:50}}>
      <Text style={{...styles.counter , color:"gray" ,fontSize:23}} >
          Movie's Of the Day ✨
        </Text>
        <Text></Text>

      </View>
     
        
        <Carousel
          ref={(c) => this.carousel = c}
          data={this.state.studentslist}
          renderItem={this._renderItem}
          sliderWidth={SLIDER_WIDTH}
          autoplay={true}
          loop={true}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={(index) => this.setState({ index })}
          scrollInterpolator={scrollInterpolator}
          slideInterpolatedStyle={animatedStyles}
          useScrollView={true}          
        />
      

        <Text></Text>


<Text></Text>
        <Text></Text>
        
        <Text></Text>
        <Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 10,
    marginBottom:30
  },
  itemContainer: {
    width: ITEM_WIDTH,
    // height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'dodgerblue',
    borderRadius:20,
    paddingTop:30
  },
  itemLabel: {
    color: 'white',
    fontSize: 24
  },
  counter: {
    marginTop: 0,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color:"white"
  },
  no:{
    color:"lightblue",
    fontSize:20
  },
  notitle1:{
    color:"lightgreen",
    fontSize:15
  },
  notitle:{
    color:"gray",
    fontSize:15
  }
});
