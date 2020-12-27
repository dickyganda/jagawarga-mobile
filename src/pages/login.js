import React, {useState} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, Alert } from 'react-native';
import { Container, Header, Form, Item, Input, Label, Card} from 'native-base';
import axios from 'axios'
import {BASE_URL,LOGIN} from '../api'


const LoginScreen = ({ navigation }) => {
   const [form, setForm] = useState({
      nik:'',
      nama:''
   });

   const handleChange = (key, value) =>{        
      setForm({
      ...form,
            [key] : value
      })
   }

   const handleSubmit = () =>{
      if(form.nik && form.nama){
          // navigation.replace('Home')
          const data = {
              nik : form.nik,
              nama : form.nama
          }
         //  console.log(data)
         axios.post(BASE_URL+LOGIN, data)
         .then(res => {
            console.log(res.data);
          })
          .catch( e => {
             console.log(e)
          })
         
      }else{
          Alert.alert(
              "Login gagal !",
              "NIK & Nama tidak boleh kosong"
            );
          // alert('Username & Password tidak boleh kosong')
      }
   }


    return (
       <Container style={{backgroundColor: '#2faaff'}}>
      <View style={styles.container}>
         <Image source={require('../drawable/title_jagawarga.png')} style={styles.image}/>
         <Card style = {styles.card}>
      <Form style={{alignItems: 'center'}}>
            <Item floatingLabel>
              <Label>NIK</Label>
              <Input onChangeText={(value) => handleChange('nik',value)} />
            </Item>
            <Item floatingLabel last>
              <Label>Nama</Label>
              <Input onChangeText={(value) => handleChange('nama',value)}/>
            </Item>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => handleSubmit()
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
          </Form>
          </Card>
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
      borderRadius: 20,
   },

   submitButtonText:{
      color: 'white'
   },

   card:{
      borderRadius: 50,
   },
   
   Image:{
      width: 300,
      height: 25,

   }
})