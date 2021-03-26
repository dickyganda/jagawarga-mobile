import React from 'react';
import { View } from 'react-native';
import { Container, Accordion } from 'native-base';
import { useRoute, useFocusEffect } from '@react-navigation/native';

function PenyakitPage() {
  const route = useRoute();
  const [penyakit, setPenyakit] = React.useState(null);

  useFocusEffect(
    React.useCallback(() => {
      setPenyakit(route.params);
    }, [route.params])
  )
  console.log('penyakit', route.params)

  return (
    <Container>
      <View style={{ margin: 10 }}>
        {penyakit != null ? (<Accordion dataArray={penyakit} expanded={0} />) : null}
      </View>
    </Container>
  )
}
export default PenyakitPage;