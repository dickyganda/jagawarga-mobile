import React from 'react';
import { View, Text } from 'react-native';
import { Container } from 'native-base';
import { useRoute, useFocusEffect } from '@react-navigation/native';

function PenyakitPage() {
  const route = useRoute();
  const [penyakit, setPenyakit] = React.useState(null);

  useFocusEffect(
    React.useCallback(() => {
      setPenyakit(route.params);
    }, [route.params])
  )

  return (
    <Container>
      <View style={{ margin: 10 }}>
       {penyakit != null ? (
          <View style={{ margin: 5, backgroundColor: '#eee', padding: 20 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row'}}>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Nama Penyakit</Text>
              <Text>{penyakit.nama_penyakit}</Text>
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'column', marginTop: 10, marginBottom: 5 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Gejala</Text>
              {penyakit.gejala.map((value, index) => {
                return <Text key={index.toString()}>{value}</Text>
              })}
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'column', marginTop: 10, marginBottom: 5}}>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Penganganan</Text>
              {penyakit.penganganan.map((value, index) => {
                return <Text key={index.toString()}>{value}</Text>
              })}
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 10, marginBottom: 5 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Waktu Penanganan</Text>
              <Text>{penyakit.waktu}</Text>
            </View>
          </View>
       ) : null}
      </View>
    </Container>
  )
}
export default PenyakitPage;