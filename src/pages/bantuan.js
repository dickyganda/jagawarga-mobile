import * as React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import { Container, Header, Left, Button, Icon, Body, Title, Right } from 'native-base';
const BantuanScreen = ({ navigation }) => {
    return (
       <Container>
         <Header>
            <Left>
               <Button transparent>
               <Icon name="arrow-back" />
               </Button>
            </Left>
            <Body>
               <Title>Header</Title>
            </Body>
            <Right>
               <Button transparent>
               <Text>Cancel</Text>
               </Button>
            </Right>
         </Header>
      <View style={styles.container}>
         <Text style = {styles.titletext}>Bantuan</Text>
        <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "NIK"
               placeholderTextColor = "#008dcb"
               autoCapitalize = "none"/>

<TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Nama"
               placeholderTextColor = "#008dcb"
               autoCapitalize = "none"/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Bantuan"
               placeholderTextColor = "#008dcb"
               autoCapitalize = "none"/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
      </View>
      </Container>
    );
  }
  export default BantuanScreen

  const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },

   titletext:{
      fontSize: 18,
      color: 'blue',
      textAlign: 'center',
   },

   input: {
      margin: 15,
      height: 40,
      borderColor: '#008dcb',
      borderWidth: 1
   },

   submitButton: {
      backgroundColor: '#008dcb',
      padding: 10,
      margin: 15,
      height: 40,
   },

   submitButtonText:{
      color: 'white'
   }
})