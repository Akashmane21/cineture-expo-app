import * as React from 'react';
import {Text, View, StyleSheet }

from 'react-native'
import { WebView } from 'react-native-webview';
import { Video, AVPlaybackStatus } from 'expo-av';

const WebViewExample = (props) => {
   const video = React.useRef(null);
   const [status, setStatus] = React.useState({});

   const {navigation} = props
   const { route } = props
   const { item } = route.params

   return (
      <View style = {styles.container}>
  

      <WebView
        style={{}}
        source={{ uri: `${item}` }}
      />

{/* <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540akashmane%252Fdownload-pdf/bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      /> */}
      </View>
   )
}
export default WebViewExample;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
    video:{
        height:200,
        width:300
    }
})