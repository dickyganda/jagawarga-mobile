import React, { Component } from "react";
import { Container, Header, Content, Accordion } from "native-base";
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
        <Header />
        <Content padder>
          <Accordion dataArray={dataArray} expanded={0}/>
        </Content>
      </Container>
    );
  }
}