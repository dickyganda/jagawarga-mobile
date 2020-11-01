import React, { Component } from 'react';
import { Image, FlatList, Dimensions, ImageBackground } from 'react-native';
import { Container, Header, Card, Text, Button, Icon, View, Left, Right, Body, Title } from 'native-base';
const homeMenu =[
  {
    id: 0,
    nama: 'Penyakit 1',
    image: require('../drawable/homeicon.png'),
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
        <Header style={{ backgroundColor: '#2faaff' }}>
            <Left>
               {/* <Button transparent>
               <Icon name="arrow-back" />
               </Button> */}
            </Left>
            <Body>
               <Image source={require('../drawable/title_jagawarga.png')} style={{ width: 300, height: 25}} ></Image>
            </Body>
            <Right>
               <Button transparent onPress={()=> this.props.navigation.navigate("Login")}>
               <Image source={require('../drawable/loginicon.png')} style={{ width: 25, height: 25}} />
               </Button>
            </Right>
         </Header>
        <FlatList
          data={homeMenu}
          renderItem={({item, index}) => (
            <Card style={{ width: Dimensions.get('screen').width / 3.2, height: Dimensions.get('screen').height / 7, marginLeft: 5.5}}>
              <View style={{ alignItems: 'center', padding: 10 }}>
                <Image source={item.image} style={{ width: 75, height: 75, resizeMode: 'contain' }} />
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