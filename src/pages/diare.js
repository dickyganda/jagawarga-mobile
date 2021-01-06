import React, { Component } from "react";
import { Container, Header, Content, Accordion, Left, Right, Button, Image, Body } from "native-base";
const dataArray = [
  { title: "NAMA PENYAKIT", 
  content: "Diare" },

  { title: "GEJALA", 
  content: "1.	Perut mulas 2.	Tinja encer (BAB cair) atau bahkan berdarah 3.	Mual dan muntah 4.	Pusing 5.	Lemas 6.	Nafsu makan turun 7.	Kulit kering 8.	Merasa haus terus menerus" },

  { title: "PENANGANAN PERTAMA", 
  content: "Mengkonsusmsi banyak cairan untuk menggantikan kehilangan cairan, baik melalui oral (bias menggunakan oralit) ataupun intravena (cairan infus) Pemberian obat untuk melawan bakteri" },

  { title: "WAKTU PENGOBATAN", 
  content: "14" }
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