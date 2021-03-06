import React, { Component } from "react";
import { Container, Header, Content, Accordion, Left, Right, Button, Body } from "native-base";
const dataArray = [
  { title: "NAMA PENYAKIT", 
  content: "DBD" },

  { title: "GEJALA", 
  content: "1.	Demam mendadak tinggi 2.	Nafsu makan menurun 3.	Mual dan muntah 4.	Badan terasa lelah,lesuh dan letih terus menerus 5.	Nyeri di persendian,otot,tulang 6.	Tenggorokan sakit 7.	Kepala pusing 8.	Muncul bintik-bintik merah 9.	Perdarahan dari hidung,gusi,atau dibawah kulit 10.	Syok: nadi kecil & cepat, tensi renda, gelisah dan akral dingin 11.	Hasil lab trombositopenia (<100000) hemokonsentrasi (Ht > 20%)" },

  { title: "PENANGANAN PERTAMA", 
  content: "Pengobatan DBD sesuai dengan keluhan 1.	Banyak minum air putih,susu putih,air kelapa,jus jambu 2.	Istirahat cukup 3.	Konsusmsi obat penurun panas dari dokter dan di kompres 4.	Pemberian vitamin 5.	Dan melakukan PSN 3M plus" },

  { title: "WAKTU PENGOBATAN", 
  content: "10" }
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