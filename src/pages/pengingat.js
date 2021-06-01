import * as React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import { Container, Header, Left, Button, Icon, Body, Title, Right, Image } from 'native-base';
import { Searchbar, DataTable } from 'react-native-paper';
import axios from 'axios'
import {BASE_URL,VIEWKARANTINA} from '../api'

const dataPengingat = [
   {"id": 0, "nama":"DICKY GANDA PRAYOGI","nama_penyakit":"DBD","waktu_karantina":"Selesai","status":"sakit"},
   {"id": 1,"nama":"KAMAT","nama_penyakit":"-","waktu_karantina":"-","status":"sehat"},
   {"id": 2,"nama":"LIPA","nama_penyakit":"-","waktu_karantina":"-","status":"sehat"},
   {"id": 3,"nama":"KAMDANI","nama_penyakit":"-","waktu_karantina":"-","status":"sehat"},
   {"id": 4,"nama":"MUSTAHAL","nama_penyakit":"-","waktu_karantina":"-","status":"sehat"},
   {"id": 5,"nama":"SEMAH","nama_penyakit":"-","waktu_karantina":"-","status":"sehat"},
   {"id": 6,"nama":"BAERAN","nama_penyakit":"-","waktu_karantina":"-","status":"sehat"},
   {"id": 7,"nama":"MUNARI","nama_penyakit":"-","waktu_karantina":"-","status":"sehat"},
   {"id": 8,"nama":"TASAM","nama_penyakit":"-","waktu_karantina":"-","status":"sehat"},
   {"id": 9,"nama":"NURALIM","nama_penyakit":"-","waktu_karantina":"-","status":"sehat"},
];
const PengingatScreen = ({ navigation }) => {
   const [data, setData] = React.useState(null);

   React.useEffect(() => {
   //   axios.get(BASE_URL+VIEWKARANTINA)
   //  .then(res => {
   //     setData({
   //        data : res.data
   //     })
   //  })
   //  .catch(e => {
   //     console.log(e)
   //  })
   });

    return (
       <Container>
          <Searchbar placeholder="Search" />
   {dataPengingat === null ? 
      
      <Text>Tunggu</Text>
   :
    <DataTable>
    <DataTable.Header>
      <DataTable.Title style={{ flex: 2}}>Nama</DataTable.Title>
      <DataTable.Title>Nama Penyakit</DataTable.Title>
      <DataTable.Title>Sisa Waktu (Hari)</DataTable.Title>
      <DataTable.Title>Status</DataTable.Title>
    </DataTable.Header>
      {dataPengingat.map((data) =>
         <DataTable.Row key={data.id}>
            <DataTable.Cell style={{ flex: 2}}>{data.nama}</DataTable.Cell>
            <DataTable.Cell>{data.nama_penyakit}</DataTable.Cell>
            <DataTable.Cell>{data.waktu_karantina}</DataTable.Cell>
            <DataTable.Cell>{data.status}</DataTable.Cell>
         </DataTable.Row>
      )}

    {/* <DataTable.Pagination
      page={1}
      numberOfPages={3}
      onPageChange={page => {
        console.log(page);
      }}
      label="1-2 of 6"
    /> */}
  </DataTable>
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