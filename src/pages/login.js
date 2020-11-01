import * as React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { Container, Header, Form, Item, Input, Label} from 'native-base';
const LoginScreen = ({ navigation }) => {
    return (
       <Container style={{backgroundColor: '#2faaff'}}>
      <View style={styles.container}>
         <Image source={require('../drawable/title_jagawarga.png')} style={{ width: 300, height: 25}}/>
      <Form style={{alignItems: 'center'}}>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
          </Form>
      </View>
      </Container>
    );
  }
  export default LoginScreen

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
      borderColor: '#7a42f4',
      borderWidth: 1
   },

   submitButton: {
      backgroundColor: 'navy',
      padding: 10,
      margin: 15,
      height: 40,
   },

   submitButtonText:{
      color: 'white'
   }
})