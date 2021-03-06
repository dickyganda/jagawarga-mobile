import * as React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import { Container, Header, Left, Button, Icon, Body, Title, Right, Image } from 'native-base';
import { DataTable } from 'react-native-paper';
import axios from 'axios'
import {BASE_URL,VIEWKARANTINA} from '../api'

const PengingatScreen = ({ navigation }) => {
   const [data, setData] = React.useState(null);

   React.useEffect(() => {
     axios.get(BASE_URL+VIEWKARANTINA)
    .then(res => {
       setData({
          data : res.data
       })
    })
    .catch(e => {
       console.log(e)
    })
   });

    return (
       <Container>
         <Header style={{ backgroundColor: '#2faaff' }}>
            {/* <Left>
               <Button transparent  onPress={()=>this.props.navigation.openDrawer()}>
               <Image source={require('../drawable/list.png')} style={{ width: 25, height: 25}} />
               </Button>
            </Left>
            <Body>
               <Image source={require('../drawable/title_jagawarga.png')} style={{ width: 300, height: 25}} ></Image>
            </Body>
            <Right>
               <Button transparent onPress={()=> this.props.navigation.navigate("Login")}>
               <Image source={require('../drawable/loginicon.png')} style={{ width: 25, height: 25}} />
               </Button>
            </Right> */}
         </Header>
      <View style={styles.container}>
         <Text style = {styles.titletext}>Pengingat</Text>
   {data === null ? 
      <Text>Tunggu</Text>
   :
    <DataTable>
    <DataTable.Header>
      <DataTable.Title>Nama</DataTable.Title>
      <DataTable.Title numeric>Nama Penyakit</DataTable.Title>
      <DataTable.Title numeric>Sisa Waktu (Hari)</DataTable.Title>
    </DataTable.Header>
      {data.data.map((data) =>
         <DataTable.Row key={data.id_karantina}>
            <DataTable.Cell>{data.nama}</DataTable.Cell>
            <DataTable.Cell numeric>{data.nama_penyakit}</DataTable.Cell>
            <DataTable.Cell numeric>{data.waktu_karantina}</DataTable.Cell>
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
      </View>
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