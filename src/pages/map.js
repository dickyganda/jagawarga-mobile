import * as React from 'react';
import { WebView } from 'react-native-webview';

const MapScreen = ({ navigation }) => {
   return (
     <WebView
         source={{uri: 'http://147.139.182.187/mapmobile'}}
     />
   );
}
export default MapScreen