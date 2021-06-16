import * as React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { Container } from 'native-base';
import { Searchbar, DataTable } from 'react-native-paper';
import axios from 'axios';
import Icon from 'react-native-vector-icons/dist/Ionicons'

import { BASE_URL, VIEWKARANTINA } from '../store/typeStore'

const PengingatScreen = ({ navigation }) => {
   const [data, setData] = React.useState(null);
   React.useEffect(() => {
   axios.get(BASE_URL+VIEWKARANTINA)
    .then(async res => {
      await setData(res.data)
    })
    .catch(e => {
       console.log(e)
    })
   }, [axios]);

    return (
       <Container>
         <Searchbar placeholder="Search" icon={{ uri: 'https://img.icons8.com/search'}} />
         {data === null ? 
         <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 2}}>Tunggu</Text> :
   <ScrollView showsHorizontalScrollIndicator={false}>
      <DataTable>
      <DataTable.Header>
         <DataTable.Title style={{ flex: 2 }}>Nama</DataTable.Title>
         <DataTable.Title>Nama Penyakit</DataTable.Title>
         <DataTable.Title>Sisa Waktu (Hari)</DataTable.Title>
         <DataTable.Title>Status</DataTable.Title>
      </DataTable.Header>
         {data.map((data, index) =>
         <DataTable.Row key={index.toString()}>
            <DataTable.Cell style={{ flex: 2}}>{data.nama}</DataTable.Cell>
            <DataTable.Cell>{data.nama_penyakit}</DataTable.Cell>
            <DataTable.Cell>{data.waktu_karantina}</DataTable.Cell>
            <DataTable.Cell>{data.status}</DataTable.Cell>
         </DataTable.Row> 
         )}
      </DataTable>
   </ScrollView>
   }
      </Container>
    );
  }
  export default PengingatScreen

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