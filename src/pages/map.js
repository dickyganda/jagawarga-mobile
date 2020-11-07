import * as React from 'react';
import { View, Text, Image} from 'react-native';
import { Container, Header, Button, Right } from 'native-base';
const MapScreen = ({ navigation }) => {
    return (
       <Container>
         <Header style={{ backgroundColor: '#2faaff' }}>
            <Right>
               <Button transparent onPress={()=> navigation.navigate("Login")}>
                  <Image source={require('../drawable/loginicon.png')} style={{ width: 25, height: 25}} />
               </Button>
            </Right>
         </Header>
         <View>
            <Text>Ini Screen untuk Peta</Text>
         </View>
      </Container>
    );
  }
  export default MapScreen