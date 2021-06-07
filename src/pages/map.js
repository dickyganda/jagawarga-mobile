import * as React from 'react';
import { WebView } from 'react-native-webview';


const MapScreen = ({ navigation }) => {
   return (
      <WebView
         source={{ uri: 'http://147.139.182.187/mapmobile' }}
      // style={{ width: 100, height: 500 }}
      />
   );
}
export default MapScreen