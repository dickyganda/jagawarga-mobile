import React, { Component } from 'react';
import { Image, FlatList, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Container, Card, Text, View } from 'native-base';

const homeMenu = [
  {
    id: 0,
    nama: 'TB PARU',
    image: require('../drawable/tbparu.png'),
    pres: 'Tb Paru'

  },
  {
    id: 1,
    nama: 'KUSTA',
    image: require('../drawable/kusta.png'),
    pres: 'Kusta'
  },
  {
    id: 2,
    nama: 'HIV',
    image: require('../drawable/hiv.png'),
    pres: 'Hiv'
  },
  {
    id: 3,
    nama: 'DIARE',
    image: require('../drawable/diare.png'),
    pres: 'Diare'
  },
  {
    id: 4,
    nama: 'ISPA',
    image: require('../drawable/ispa.png'),
    pres: 'Ispa'
  },
  {
    id: 5,
    nama: 'DBD',
    image: require('../drawable/dbd.png'),
    pres: 'Dbd'
  },
  {
    id: 6,
    nama: 'COVID 19',
    image: require('../drawable/covid.png'),
    pres: 'Covid'
  }
]
export default class Home extends Component {
  render() {
    return (
      <Container>
        <FlatList
          data={homeMenu}
          renderItem={({ item, index }) => (
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.navigate(item.pres)}
            >
              <Card style={{
                width: Dimensions.get('screen').width / 4,
                height: Dimensions.get('screen').height / 8.3,
                borderRadius: 20,
                marginLeft: 10,
                marginRight: 10
              }}
                onPress={item.url}
              >
                <View style={{
                  alignItems: 'center',
                  padding: 10
                }}>
                  <Image
                    source={item.image}
                    style={{
                      width: 65,
                      height: 65,
                      resizeMode: 'contain'
                    }} />
                  <Text
                    style={{
                      color: '#000',
                      fontWeight: 'bold'
                    }}>{item.nama}</Text>
                </View>
              </Card>
            </TouchableWithoutFeedback>
          )}
          numColumns={3}
          keyExtractor={item => item.id}
          style={{ alignSelf: 'center', margin: 20 }}
        />
      </Container>
    );
  }
}