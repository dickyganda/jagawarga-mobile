import * as React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import { Container, Header, Left, Button, Icon, Body, Title, Right, Image } from 'native-base';
import { DataTable } from 'react-native-paper';

const PengingatScreen = ({ navigation }) => {
    return (
       <Container>
         <Header style={{ backgroundColor: '#2faaff' }}>
            <Left>
               <Button transparent>
               <Icon name="arrow-back" />
               </Button>
            </Left>
            <Body>
               <Title style={{alignItems: 'center'}}>Pengingat</Title>
            </Body>
            <Right>
               <Button transparent>
               <Text>Back</Text>
               </Button>
            </Right>
         </Header>
      <View style={styles.container}>
         <Text style = {styles.titletext}>Pengingat</Text>
        
    <DataTable>
    <DataTable.Header>
      <DataTable.Title>Nama</DataTable.Title>
      <DataTable.Title numeric>Nama Penyakit</DataTable.Title>
      <DataTable.Title numeric>Sisa Waktu (Hari)</DataTable.Title>
    </DataTable.Header>

    <DataTable.Row>
      <DataTable.Cell>Dafa</DataTable.Cell>
      <DataTable.Cell numeric>Covid 19</DataTable.Cell>
      <DataTable.Cell numeric>10</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Khavita</DataTable.Cell>
      <DataTable.Cell numeric>Covid 19</DataTable.Cell>
      <DataTable.Cell numeric>14</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Pagination
      page={1}
      numberOfPages={3}
      onPageChange={page => {
        console.log(page);
      }}
      label="1-2 of 6"
    />
  </DataTable>
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