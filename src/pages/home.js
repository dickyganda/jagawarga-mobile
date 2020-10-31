import React, { Component } from 'react';
import { Image, FlatList, Dimensions } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, View } from 'native-base';
const homeMenu =[
  {
    id: 0,
    nama: 'Penyakit 1',
    image: require('../drawable/homeicon.png')
  },
  {
    id: 1,
    nama: 'Penyakit 2',
    image: require('../drawable/homeicon.png')
  },
  {
    id: 2,
    nama: 'Penyakit 3',
    image: require('../drawable/homeicon.png')
  },
  {
    id: 3,
    nama: 'Penyakit 4',
    image: require('../drawable/homeicon.png')
  },
  {
    id: 4,
    nama: 'Penyakit 5',
    image: require('../drawable/homeicon.png')
  },
  {
    id: 5,
    nama: 'Penyakit 6',
    image: require('../drawable/homeicon.png')
  }
]
export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header />
        <FlatList
          data={homeMenu}
          renderItem={({item, index}) => (
            <Card style={{ width: Dimensions.get('screen').width / 3.2, height: Dimensions.get('screen').height / 7, marginLeft: 5.5}}>
              <View style={{ alignItems: 'center', padding: 10 }}>
                <Image source={item.image} style={{ width: 75, height: 75, resizeMode: 'contain'}} />
                <Text>{item.nama}</Text>
              </View>
            </Card>
          )}
          numColumns={3}
          keyExtractor={item => item.id}
        />
      </Container>
    );
  }
}