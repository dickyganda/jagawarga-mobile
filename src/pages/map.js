import * as React from 'react';
import { WebView } from 'react-native-webview';


const MapScreen = ({ navigation }) => {
   return (
      <WebView
         source={{ uri: 'https://xeceryn.github.io/leafletjs-map/' }}
      // style={{ width: 100, height: 500 }}
      />
   );
}
export default MapScreen