import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet , Image } from 'react-native';

import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json

import { scrollInterpolator, animatedStyles } from './animations';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 2 / 3.3);

const DATA = [
  
  {
    Name : "Sense 8",
    img:"https://cutewallpaper.org/21/sense8-wallpaper/Netflix-Confirms-Sense8-Series-Finale-Date-in-June-What-.jpeg"
      },
      {
Name : "Sense 8",
img:"https://bingeddata.s3.amazonaws.com/uploads/2021/04/TVF-Aspirants.jpg"
  },
  {
    Name : "Sense 8",
    img:"https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/MONEY-HEIST-SEASON-5.jpg"
      },
      {
        Name : "Sense 8",
        img:"https://dark.netflix.io/share/global.png"
          },
          {
            Name : "Sense 8",
            img:"https://miro.medium.com/max/1193/1*CpLtk-FwLvAfBXRfxjeZ_g.jpeg"
              },
              {
                Name : "Sense 8",
                img:"https://www.denofgeek.com/wp-content/uploads/2017/08/stranger-things-season-3-starcourt-teaser-netflix.jpg?fit=670%2C377"
                  }
];
// for (let i = 0; i < 10; i++) {
//   DATA.push(i)
// }

export default class App extends Component {
  
  state = {
    index: 0
  }

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this)
  }

  _renderItem({ item }) {
    return (
      <View style={styles.itemContainer}>
      <Image style={{height:ITEM_HEIGHT , width:ITEM_WIDTH , borderRadius:5}} source={{uri : `${item.img}`}} />
        {/* <Text style={styles.itemLabel}>{` ${item.Name}`}</Text> */}
      </View>
    );
  }
  
  render() {
    return (
      <View>
        <Carousel
          ref={(c) => this.carousel = c}
          data={DATA}
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
        {/* <Text style={styles.counter} >
          {this.state.index}
        </Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 30,
    marginBottom:30
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
    borderRadius:20
  },
  itemLabel: {
    color: 'white',
    fontSize: 24
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
