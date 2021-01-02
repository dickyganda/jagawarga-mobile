import * as React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import { Container, Header, Left, Button, Icon, Body, Title, Right, Image } from 'native-base';
import axios from 'axios'
import {BASE_URL,INSERT} from '../api'

const BantuanScreen = ({ navigation }) => {
   
   const [form, setForm] = React.useState({
      jenis_bantuan:'',
      stok:'',
      satuan:''
   });
   

   const handleChange = (key, value) =>{        
      setForm({
      ...form,
            [key] : value
      })
      // sama dengan kode handle login,
      // kondisi ketika user berhasil insert/nggak
      // user berhasil insert popup success,
      // user tidak berhasil insert popup gagal.
   }

   const handleSubmit = () =>{
      if(form.jenis_bantuan && form.stok && form.satuan){
          // navigation.replace('Home')
          const data = {
              jenis_bantuan : form.jenis_bantuan,
              stok : form.stok,
              satuan : form.satuan,
          }
         //  console.log(data)
         axios.post(BASE_URL+INSERT, data)
         .then(res => {
            console.log(res.data);
            if(res.data.status === "failed"){
               alert("Gagal Input Bantuan")
            }
            else {
               navigation.navigate("Home")
            }
            // pengecekan ketika status API berhasil, dan data user didapatkan.
            // ketika status API failed, tetap dihalaman login, tp popup error.
            // jika success lanjut bawah
            // lock AsynStorage { info user }, navigasi ke halaman home
            // ketika user masuk aplikasi lagi, tidak perlu login langsung ke halaman input
          })
          .catch( e => {
             console.log(e)
          })
         
      }else{
          Alert.alert(
              "Input bantuan gagal !",
              "Data yang dimasukkan salah"
            );
          // alert('Username & Password tidak boleh kosong')
      }
   }


    return (
       <Container>
         <Header style={{ backgroundColor: '#2faaff' }}>
            <Left>
               <Button transparent>
               <Icon name="arrow-back" />
               </Button>
            </Left>
            <Body>
               <Title style={{alignItems: 'center'}}>Bantuan</Title>
            </Body>
            <Right>
               <Button transparent>
               <Text>Back</Text>
               </Button>
            </Right>
         </Header>
      <View style={styles.container}>
         <Text style = {styles.titletext}>Bantuan</Text>
        <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Jenis Bantuan"
               placeholderTextColor = "#008dcb"
               onChangeText={(value) => handleChange('jenis_bantuan',value)} 
               autoCapitalize = "none"/>

<TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Jumlah"
               placeholderTextColor = "#008dcb"
               onChangeText={(value) => handleChange('stok',value)} 
               autoCapitalize = "none"/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Satuan"
               placeholderTextColor = "#008dcb"
               onChangeText={(value) => handleChange('satuan',value)}
               autoCapitalize = "none"/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => handleSubmit()
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
      color: '#2faaff',
      textAlign: 'center',
   },

   input: {
      margin: 15,
      height: 40,
      borderColor: '#008dcb',
      borderWidth: 1
   },

   submitButton: {
      backgroundColor: '#2faaff',
      padding: 10,
      margin: 15,
      height: 40,
   },

   submitButtonText:{
      color: 'white'
   }
})