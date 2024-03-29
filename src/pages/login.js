import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, Alert, TextInput, StatusBar } from 'react-native';
import {AuthContext} from '../utils/authContext';
const LoginScreen = ({ navigation }) => {
   const [form, setForm] = useState({
      nik: '',
      nama: ''
   });

   const handleChangeNIK = (value) => {
      setForm({
         ...form,
         nik: value
      })
   }

   const handleChangeName = (value) => {
      setForm({
         ...form,
         nama: value
      })
   }

   const {signIn} = React.useContext(AuthContext);

   const handleSubmit = () => {
      if (form.nik && form.nama) {
        const data = {
          nik: form.nik,
          nama: form.nama,
        };
        signIn(data);
      } else {
         Alert.alert('Isi NIK & Nama', 'Form tidak boleh kosong');
      }
   }


   return (
      <View style={styles.container}>
         <Image style={styles.image} source={require('../drawable/title_jagawarga.png')} />
         <StatusBar style="auto" />
         <View style={styles.inputView}>
            <TextInput
               style={styles.TextInput}
               onChangeText={(value) => handleChangeNIK(value)}
               placeholder="NIK"
               placeholderTextColor="#003f5c"
            />
         </View>
         <View style={styles.inputView}>
            <TextInput
               style={styles.TextInput}
               onChangeText={(value) => handleChangeName(value)}
               placeholder="Nama"
               placeholderTextColor="#003f5c"
            />
         </View>
         <TouchableOpacity style={styles.loginBtn} onPress={() => handleSubmit()}>
            <Text style={styles.loginText}>Login</Text>
         </TouchableOpacity>
      </View>
   );
}
export default LoginScreen

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#2faaff",
      alignItems: "center",
      justifyContent: "center",
   },
   image: {
      marginBottom: 40,
      width: 300,
      resizeMode: 'contain'
   },
   inputView: {
      backgroundColor: "#fff",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
   },
   TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 10
   },
   loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#0080ff",
   },
   loginText: {
      color: 'white',
      fontWeight: 'bold'
   }
})