import * as React from 'react';
import {View, Button } from 'react-native';
import { Container, Header, Left, Right, Body, Title, Icon} from 'native-base';
const Map = ({ navigation }) => {
    return (
      <Container>
        <Header style={{ backgroundColor: '#2faaff' }}>
            <Left>
               <Button transparent>
               <Icon name="arrow-back" />
               </Button>
            </Left>
            <Body>
               <Title>Header</Title>
            </Body>
            <Right>
               {/* <Button transparent>
               <Image source={require('../drawable/loginicon.png')} style={{ width: 25, height: 25}} />
               </Button> */}
            </Right>
         </Header>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
      </Container>
    );
  }
export default Map;