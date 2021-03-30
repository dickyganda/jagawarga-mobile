import * as React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios'
import { BASE_URL, INSERT } from '../api'

const BantuanScreen = ({ navigation }) => {

   const [form, setForm] = React.useState({
      jenis_bantuan: '',
      stok: '',
      satuan: undefined
   });
   const [satuan, setSatuan] = React.useState(undefined);

   const onValueChange = (value) => {
      setForm({
         ...form,
         [key]: value
      })
   }


   const handleChange = (key, value) => {
      setForm({
         ...form,
         [key]: value
      })
      // sama dengan kode handle login,
      // kondisi ketika user berhasil insert/nggak
      // user berhasil insert popup success,
      // user tidak berhasil insert popup gagal.
   }

   const handleSubmit = () => {
      if (form.jenis_bantuan && form.stok && form.satuan) {
         // navigation.replace('Home')
         const data = {
            jenis_bantuan: form.jenis_bantuan,
            stok: form.stok,
            satuan: form.satuan,
         }
         //  console.log(data)
         axios.post(BASE_URL + INSERT, data)
            .then(res => {
               // console.log(res.data);
               if (res.data.status === "failed") {
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
            .catch(e => {
               console.log(e)
            })

      } else {
         Alert.alert(
            "Input bantuan gagal !",
            "Data yang dimasukkan salah"
         );
         // alert('Username & Password tidak boleh kosong')
      }
   }


   return (
      <View style={styles.container}>
         <View style={styles.inputContainer}>
            <Text style={styles.titletext}>Jenis Bantuan</Text>
            <TextInput style={styles.input}
               underlineColorAndroid="transparent"
               placeholder="Jenis Bantuan"
               placeholderTextColor="#008dcb"
               onChangeText={(value) => handleChange('jenis_bantuan', value)}
               autoCapitalize="none"
               keyboardType="default"
            />
         </View>
         <View style={styles.inputContainer}>
            <Text style={styles.titletext}>Stok</Text>
            <TextInput style={styles.input}
               underlineColorAndroid="transparent"
               placeholder="Jumlah"
               placeholderTextColor="#008dcb"
               onChangeText={(value) => handleChange('stok', value)}
               autoCapitalize="none"
               keyboardType="number-pad"
            />
         </View>
         <View style={styles.inputContainer}>
            <Text style={styles.titletext}>Satuan</Text>
            <View style={styles.input}>
               <Picker
                  mode="dropdown"
                  selectedValue={satuan}
                  onValueChange={(newSatuan) => setSatuan(newSatuan)}
               >
                  <Picker.Item color='#008dcb' label="Pcs" value="key0" />
                  <Picker.Item color='#008dcb' label="Kg" value="key1" />
                  <Picker.Item color='#008dcb' label="Liter" value="key2" />
               </Picker>
            </View>
         </View>
         <TouchableOpacity
            style={styles.submitButton}
            onPress={
               () => handleSubmit()
            }>
            <Text style={styles.submitButtonText}> Submit </Text>
         </TouchableOpacity>
      </View>
   );
}
export default BantuanScreen

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   inputContainer: {
      margin: 5
   },
   titletext: {
      fontWeight: 'bold',
      color: '#0080ff'
   },
   input: {
      margin: 15,
      height: 50,
      borderColor: '#008dcb',
      borderWidth: 1,
      borderRadius: 8
   },
   submitButton: {
      backgroundColor: '#2faaff',
      padding: 15,
      margin: 15,
      height: 50,
      borderRadius: 8,
      alignItems: 'center'
   },
   submitButtonText: {
      color: 'white',
      position: 'relative',
      fontWeight: 'bold'
   }
})