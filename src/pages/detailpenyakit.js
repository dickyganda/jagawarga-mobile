import * as React from 'react';
import { View, Button } from 'react-native';
const DetailpenyakitScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style = {styles.titletext}>Berisi jenis jenis penyakit menular dalam bentuk image button dan setiap button ketika di klik akan mengarah ke informasi detail setiap penyakit</Text>
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Go to Setting"
        />
      </View>
    );
  }
  export default DetailpenyakitScreen