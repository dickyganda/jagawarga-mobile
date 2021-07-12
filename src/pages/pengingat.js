import * as React from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { Container } from 'native-base';
import { Searchbar, DataTable } from 'react-native-paper';
import axios from 'axios';

import { BASE_URL, VIEWKARANTINA } from '../store/typeStore'

const PengingatScreen = ({ navigation }) => {
  const [users, setUser] = React.useState([]);
  const [loading, setloading] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [filteredUser, setFilteredUser] = React.useState([]);

  React.useEffect(() => {
    setloading(true);
    axios
      .get(BASE_URL + VIEWKARANTINA)
      .then((res) => {
        setUser(res.data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  React.useEffect(() => {
    setFilteredUser(
      users.filter((user) => 
        user.nama.toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [search, users]);

  if (loading) {
    return (
      <ActivityIndicator size="large" color="#000" style={{ flex: 1}} />
    )
  }

  return (
    <Container>
      <Searchbar
        placeholder="Search"
        icon={{uri: 'https://img.icons8.com/search'}}
        onChangeText={(value) => setSearch(value)}
      />
        <ScrollView showsHorizontalScrollIndicator={false}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{flex: 2}}>Nama</DataTable.Title>
                <DataTable.Title style={{flex: 2}}>Nama Penyakit</DataTable.Title>
                <DataTable.Title style={{ flex: 2}}>Sisa Waktu (Hari)</DataTable.Title>
                <DataTable.Title>Status</DataTable.Title>
              </DataTable.Header>
              {filteredUser.map((user, index) => (
                <DataTable.Row key={index.toString()}>
                  <DataTable.Cell style={{flex: 2}}>{user.nama}</DataTable.Cell>
                  <DataTable.Cell style={{flex: 2}}>{user.nama_penyakit}</DataTable.Cell>
                  <DataTable.Cell style={{ flex: 2}}>{user.waktu_karantina}</DataTable.Cell>
                  <DataTable.Cell>{user.status}</DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </ScrollView>
      </Container>
    );
  }
export default PengingatScreen;