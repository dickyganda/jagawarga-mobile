import * as React from 'react';
import { View, Text, Image} from 'react-native';
import { Container, Header, Button, Right} from 'native-base';


const MapScreen = ({ navigation }) => {
    return (
       <Container>
         <Header style={{ backgroundColor: '#2faaff' }}>
            {/* <Left>
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
            </Right> */}
         </Header>
         <View>
         <Text>Ini halaman map</Text>
         </View>
      </Container>
    );
  }
  export default MapScreen