import React, { Component } from "react";
import { Container, Header, Content, Accordion, Left, Right, Button, Image, Body } from "native-base";
const dataArray = [
  { title: "NAMA PENYAKIT", 
  content: "ISPA" },

  { title: "GEJALA", 
  content: "1.	Hidung tersumbat atau berair 2.	Bersin-bersin 3.	Sesak pada bagian dada 4.	Kerap merasa kelelahan 5.	Demam 6.	Batuk-batuk 7.	Sakit tenggorokan 8.	Nyeri otot" },

  { title: "PENANGANAN PERTAMA", 
  content: "Penanganan ispa sesuai dengan keluhan biasanya di berikan obat untuk mengurangi batuk, vitamin C dan juga pereda nyeri" },

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