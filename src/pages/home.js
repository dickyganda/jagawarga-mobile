import React, { Component } from 'react';
import { Image, FlatList, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { Container, Header, Card, Text, Button, Icon, View, Left, Right, Body, Title } from 'native-base';
const homeMenu =[
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
    image: require('../drawable/dbd.png'),
    pres: 'Covid'
  }
]
export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#2faaff' }}>
            <Left>
               <Button transparent  onPress={()=>this.props.navigation.openDrawer()}>
               <Image source={require('../drawable/list.png')} style={{ width: 25, height: 25}} />
               </Button>
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
            <TouchableOpacity onPress={() => this.props.navigation.navigate(item.pres)}>
              <Card style={{ width: Dimensions.get('screen').width / 3.2, height: Dimensions.get('screen').height / 7, marginLeft: 5.5}} onPress={item.url}>
                <View style={{ alignItems: 'center', padding: 10 }}>
                  <Image source={item.image} style={{ width: 75, height: 75, resizeMode: 'contain' }} />
                  <Text>{item.nama}</Text>
                </View>
              </Card>
            </TouchableOpacity>
          )}
          numColumns={3}
          keyExtractor={item => item.id}
        />
      </Container>
    );
  }
}