import React, { Component } from "react";
import { Container, Header, Content, Accordion, Left, Right, Button, Image, Body } from "native-base";
const dataArray = [
  { title: "NAMA PENYAKIT", 
  content: "TB PARU" },

  { title: "GEJALA", 
  content: "1.	Batuk berdahak lebih dari 2 minggu 2.	Demam terus-menerus 3. Lemas 4.	Nafsu makan menurun 5.	Berkeringat dingin saat malam hari tampa aktivitas 6.	Batuk darah" },

  { title: "PENANGANAN PERTAMA", 
  content: "Hasil pemeriksaan positif dilakukan Pengobatan TB selama 6 bulan menggunakan obat OAT (Obat anti TB)" },

  { title: "WAKTU PENGOBATAN", 
  content: "6 Bulan" }
];
export default class AccordionExample extends Component {
  render() {
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
         
        <Content padder>
          <Accordion dataArray={dataArray} expanded={0}/>
        </Content>
      </Container>
    );
  }
}