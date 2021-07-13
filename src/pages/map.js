import * as React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { WebView } from 'react-native-webview';

const MapScreen = ({ navigation }) => {
   return (
     <WebView
        source={{uri: 'http://147.139.182.187/mapmobile'}}
        startInLoadingState={true}
        renderLoading={() => <ActivityIndicator size="large" color="#000" style={{ flex: 10 }} />}
     />
   );
}
export default MapScreen