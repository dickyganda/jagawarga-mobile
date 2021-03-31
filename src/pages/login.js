import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, Alert, TextInput, StatusBar } from 'react-native';
import axios from 'axios'
import { BASE_URL, LOGIN } from '../api'


const LoginScreen = ({ navigation }) => {
   const [form, setForm] = useState({
      nik: '',
      nama: ''
   });

   const handleChange = (key, value) => {
      setForm({
         ...form,
         [key]: value
      })
   }

   const handleSubmit = () => {
      if (form.nik && form.nama) {
         // navigation.replace('Home')
         const data = {
            nik: form.nik,
            nama: form.nama
         }
         //  console.log(data)
         axios.post(BASE_URL + LOGIN, data)
            .then(res => {
               // console.log(res.data);
               if (res.data.status === "failed") {
                  alert("Login gagal")
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
            .catch(e => {
               console.log(e)
            })

      } else {
         Alert.alert(
            "Login gagal !",
            "NIK & Nama tidak boleh kosong"
         );
         // alert('Username & Password tidak boleh kosong')
      }
   }


   return (
      <View style={styles.container}>
         <Image style={styles.image} source={require('../drawable/title_jagawarga.png')} />
         <StatusBar style="auto" />
         <View style={styles.inputView}>
            <TextInput
               style={styles.TextInput}
               placeholder="NIK"
               placeholderTextColor="#003f5c"
            />
         </View>
         <View style={styles.inputView}>
            <TextInput
               style={styles.TextInput}
               placeholder="Nama"
               placeholderTextColor="#003f5c"
            />
         </View>
         <TouchableOpacity style={styles.loginBtn}>
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