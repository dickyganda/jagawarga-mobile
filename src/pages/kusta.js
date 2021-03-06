import React, { Component } from "react";
import { Container, Header, Content, Accordion, Left, Right, Button, Image, Body } from "native-base";
const dataArray = [
  { title: "NAMA PENYAKIT", 
  content: "KUSTA" },

  { title: "GEJALA", 
  content: "1.	Bercak-bercak berwarna terang atau kemerahan di kulit disertai dengan kurangnya kemampuan merasa, mati rasa, (suhu,tekanan dan sentuhan) 2.	Muncul luka tapi tidak terasa sakit 3.	Otot melemah terutama otot kaki dan tangan 4.	Prmbrsaran saraf terutama di lutut dan siku" },

  { title: "PENANGANAN PERTAMA", 
  content: "Hasil pemeriksaan positif kusta dilakukan pengobatan MDT(Multi Drug Therapy) selama 1 tahun 6 bulan, setelah itu melakukan pengobatan sesuai keluhan pasien" },

  { title: "WAKTU PENGOBATAN", 
  content: "1 Tahun 6 Bulan" }
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