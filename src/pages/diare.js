import React, { Component } from "react";
import { Container, Header, Content, Accordion } from "native-base";
const dataArray = [
  { title: "NAMA PENYAKIT", 
  content: "Diare" },

  { title: "GEJALA", 
  content: "1.	Perut mulas 2.	Tinja encer (BAB cair) atau bahkan berdarah 3.	Mual dan muntah 4.	Pusing 5.	Lemas 6.	Nafsu makan turun 7.	Kulit kering 8.	Merasa haus terus menerus" },

  { title: "PENANGANAN PERTAMA", 
  content: "Mengkonsusmsi banyak cairan untuk menggantikan kehilangan cairan, baik melalui oral (bias menggunakan oralit) ataupun intravena (cairan infus) Pemberian obat untuk melawan bakteri" },

  { title: "WAKTU PENGOBATAN", 
  content: "KOSONG" }
];
export default class AccordionExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Accordion dataArray={dataArray} expanded={0}/>
        </Content>
      </Container>
    );
  }
}