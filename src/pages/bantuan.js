import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

import { BASE_URL, INSERT } from '../store/typeStore'
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const BantuanScreen = ({ navigation }) => {
  const [form, setForm] = React.useState({
    jenis_bantuan: '',
    stok: '',
    satuan: undefined,
  });
  const [loading, setLoading] = React.useState(false);
  const satuan = undefined;
  const handleChange = (key, value) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const handleSubmit = async () => {
    if (form.jenis_bantuan && form.stok && form.satuan) {
      const nik = await AsyncStorage.getItem('nik');
      const data = {
        jenis_bantuan: form.jenis_bantuan,
        stok: form.stok,
        satuan: form.satuan,
        nik: nik,
      };
      setLoading(true);
      axios
        .post(BASE_URL + INSERT, data)
        .then((res) => {
          const response = res.data;
          setLoading(false);
          if (response.status === 'failed') {
            Alert.alert('Tambah data gagal!', `${response.status}`);
          } else {
            Alert.alert(`${response.reason}`);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      Alert.alert('Input bantuan gagal !', 'Data yang dimasukkan salah');
      // alert('Username & Password tidak boleh kosong')
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.titletext}>Jenis Bantuan</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Jenis Bantuan"
          placeholderTextColor="#008dcb"
          onChangeText={(value) => handleChange('jenis_bantuan', value)}
          autoCapitalize="none"
          keyboardType="default"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.titletext}>Jumlah</Text>
        <TextInput
          style={styles.input}
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
            onValueChange={(newSatuan) => handleChange('satuan', newSatuan)}>
            <Picker.Item color="#008dcb" label="Pcs" value="Pcs" />
            <Picker.Item color="#008dcb" label="Kg" value="Kg" />
            <Picker.Item color="#008dcb" label="Liter" value="Liter" />
          </Picker>
        </View>
      </View>
      <TouchableOpacity
         style={styles.submitButton}
         onPress={() => handleSubmit()}>
         {loading ? (
            <ActivityIndicator size="large" color="#000" />
         ) : (
            <Text style={styles.submitButtonText}> Submit </Text>
         )}
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