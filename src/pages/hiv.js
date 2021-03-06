import React, { Component } from "react";
import { Container, Header, Content, Accordion, Left, Right, Button, Image, Body} from "native-base";
const dataArray = [
  { title: "NAMA PENYAKIT", 
  content: "HIV" },

  { title: "GEJALA", 
  content: "1.	Sakit kepala 2.	Demam 3.	Lesu 4.	Pembekakakan kelenjar getah bening 5.	Sakit tenggorokan 6.	Sariawan terus menerus 7.	Munculnya ruam 8.	Nyeri otot dan sendi 9.	Bisul di mulut atau alat kelamin 10.	Diare yang sering" },

  { title: "PENANGANAN PERTAMA", 
  content: "Pengobatan HIV dilakukan seumur hidup menggunakan ARV (antiretroviral)" },

  { title: "WAKTU PENGOBATAN", 
  content: "Seumur Hidup" }
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