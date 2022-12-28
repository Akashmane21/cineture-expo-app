import React from 'react'
import { View,Text ,TouchableOpacity, Image, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
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
        borderRadius:5
      
        
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
})

export default function Card(props) {
    const { navigation } = props

    return (
        <View  style={styles.Card1}>

<TouchableOpacity  style={styles.customBtnBG} 
 onPress={() =>  props.navigation.navigate('Detail' , {item :
  { 
    
    Name :`${props.Name}`,
    id :`${props.id}`,
    Trend :`${props.Trend}`,
    Type :`${props.Type}`,
    Poster:`${props.Poster}`,
    Plot:`${props.Plot}`,
    Dlink :`${props.Dlink}`,
    Slink :`${props.Slink}`,
    Size :`${props.Size}`,
    Language:`${props.Language}`,

    Link:`${props.Link}`,
    Ott:`${props.Ott}`,
    Actors:`${props.Actors}`,
    Country:`${props.Country}`,
    Genre:`${props.Genre}`,
    Released:`${props.Released}`,
    Runtime:`${props.Runtime}`,
    Year:`${props.Year}`,
    ImdbRating:`${props.ImdbRating}`,
    Director:`${props.Director}`,
    
    
    
    
    
    
    }} )}  >

             <Image
        style={styles.poster}
        source={{
          uri: `${props.Poster}`,
        }}
      />
 </TouchableOpacity>
       

       <LinearGradient
        colors={['#00000000','#00000000']}
        style={{
          position:"relative",
          // top:-60
        }}>
        <View style={styles.section}>

                        <View style={styles.titleview}>
                    <Text style={styles.title}>{props.Name}</Text>
                    </View>
                    <View style={styles.Imdbview}>
                    <Text style={styles.imdb}>{props.ImdbRating}</Text>
                    </View>



                    <MaterialCommunityIcons style={styles.hicon} name="star"  />
                    </View>
</LinearGradient>
      


                    
     
        </View>
    )
}
