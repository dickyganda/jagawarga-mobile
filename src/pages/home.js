import React, { Component } from 'react';
import { Image, FlatList, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Container, Card, Text, View } from 'native-base';

const tbParu = [
  {
    title: "NAMA PENYAKIT",
    content: "TB PARU"
  },

  {
    title: "GEJALA",
    content: "1.	Batuk berdahak lebih dari 2 minggu 2.	Demam terus-menerus 3. Lemas 4.	Nafsu makan menurun 5.	Berkeringat dingin saat malam hari tampa aktivitas 6.	Batuk darah"
  },

  {
    title: "PENANGANAN PERTAMA",
    content: "Hasil pemeriksaan positif dilakukan Pengobatan TB selama 6 bulan menggunakan obat OAT (Obat anti TB)"
  },

  {
    title: "WAKTU PENGOBATAN",
    content: "6 Bulan"
  }
];
const kusta = [
  {
    title: "NAMA PENYAKIT",
    content: "KUSTA"
  },

  {
    title: "GEJALA",
    content: "1.	Bercak-bercak berwarna terang atau kemerahan di kulit disertai dengan kurangnya kemampuan merasa, mati rasa, (suhu,tekanan dan sentuhan) 2.	Muncul luka tapi tidak terasa sakit 3.	Otot melemah terutama otot kaki dan tangan 4.	Prmbrsaran saraf terutama di lutut dan siku"
  },

  {
    title: "PENANGANAN PERTAMA",
    content: "Hasil pemeriksaan positif kusta dilakukan pengobatan MDT(Multi Drug Therapy) selama 1 tahun 6 bulan, setelah itu melakukan pengobatan sesuai keluhan pasien"
  },

  {
    title: "WAKTU PENGOBATAN",
    content: "1 Tahun 6 Bulan"
  }
];
const hiv = [
  {
    title: "NAMA PENYAKIT",
    content: "HIV"
  },

  {
    title: "GEJALA",
    content: "1.	Sakit kepala 2.	Demam 3.	Lesu 4.	Pembekakakan kelenjar getah bening 5.	Sakit tenggorokan 6.	Sariawan terus menerus 7.	Munculnya ruam 8.	Nyeri otot dan sendi 9.	Bisul di mulut atau alat kelamin 10.	Diare yang sering"
  },

  {
    title: "PENANGANAN PERTAMA",
    content: "Pengobatan HIV dilakukan seumur hidup menggunakan ARV (antiretroviral)"
  },

  {
    title: "WAKTU PENGOBATAN",
    content: "Seumur Hidup"
  }
];
const diare = [
  {
    title: "NAMA PENYAKIT",
    content: "Diare"
  },

  {
    title: "GEJALA",
    content: "1.	Perut mulas 2.	Tinja encer (BAB cair) atau bahkan berdarah 3.	Mual dan muntah 4.	Pusing 5.	Lemas 6.	Nafsu makan turun 7.	Kulit kering 8.	Merasa haus terus menerus"
  },

  {
    title: "PENANGANAN PERTAMA",
    content: "Mengkonsusmsi banyak cairan untuk menggantikan kehilangan cairan, baik melalui oral (bias menggunakan oralit) ataupun intravena (cairan infus) Pemberian obat untuk melawan bakteri"
  },

  {
    title: "WAKTU PENGOBATAN",
    content: "14"
  }
];
const ispa = [
  {
    title: "NAMA PENYAKIT",
    content: "ISPA"
  },

  {
    title: "GEJALA",
    content: "1.	Hidung tersumbat atau berair 2.	Bersin-bersin 3.	Sesak pada bagian dada 4.	Kerap merasa kelelahan 5.	Demam 6.	Batuk-batuk 7.	Sakit tenggorokan 8.	Nyeri otot"
  },

  {
    title: "PENANGANAN PERTAMA",
    content: "Penanganan ispa sesuai dengan keluhan biasanya di berikan obat untuk mengurangi batuk, vitamin C dan juga pereda nyeri"
  },

  {
    title: "WAKTU PENGOBATAN",
    content: "10"
  }
];
const dbd = [
  {
    title: "NAMA PENYAKIT",
    content: "DBD"
  },

  {
    title: "GEJALA",
    content: "1.	Demam mendadak tinggi 2.	Nafsu makan menurun 3.	Mual dan muntah 4.	Badan terasa lelah,lesuh dan letih terus menerus 5.	Nyeri di persendian,otot,tulang 6.	Tenggorokan sakit 7.	Kepala pusing 8.	Muncul bintik-bintik merah 9.	Perdarahan dari hidung,gusi,atau dibawah kulit 10.	Syok: nadi kecil & cepat, tensi renda, gelisah dan akral dingin 11.	Hasil lab trombositopenia (<100000) hemokonsentrasi (Ht > 20%)"
  },

  {
    title: "PENANGANAN PERTAMA",
    content: "Pengobatan DBD sesuai dengan keluhan 1.	Banyak minum air putih,susu putih,air kelapa,jus jambu 2.	Istirahat cukup 3.	Konsusmsi obat penurun panas dari dokter dan di kompres 4.	Pemberian vitamin 5.	Dan melakukan PSN 3M plus"
  },

  {
    title: "WAKTU PENGOBATAN",
    content: "10"
  }
];
const covid19 = [
  {
    title: "NAMA PENYAKIT",
    content: "COVID 19"
  },

  {
    title: "GEJALA",
    content: "1.	Demam mendadak tinggi 2.	Nafsu makan menurun 3.	Mual dan muntah 4.	Badan terasa lelah,lesuh dan letih terus menerus 5.	Nyeri di persendian,otot,tulang 6.	Tenggorokan sakit 7.	Kepala pusing 8.	Muncul bintik-bintik merah 9.	Perdarahan dari hidung,gusi,atau dibawah kulit 10.	Syok: nadi kecil & cepat, tensi renda, gelisah dan akral dingin 11.	Hasil lab trombositopenia (<100000) hemokonsentrasi (Ht > 20%)"
  },

  {
    title: "PENANGANAN PERTAMA",
    content: "Pengobatan DBD sesuai dengan keluhan 1.	Banyak minum air putih,susu putih,air kelapa,jus jambu 2.	Istirahat cukup 3.	Konsusmsi obat penurun panas dari dokter dan di kompres 4.	Pemberian vitamin 5.	Dan melakukan PSN 3M plus"
  },

  {
    title: "WAKTU PENGOBATAN",
    content: "14 Hari"
  }
];
const homeMenu = [
  {
    id: 0,
    nama: 'TB PARU',
    image: require('../drawable/tbparu.png'),
    params: tbParu,
  },
  {
    id: 1,
    nama: 'KUSTA',
    image: require('../drawable/kusta.png'),
    params: kusta,
  },
  {
    id: 2,
    nama: 'HIV',
    image: require('../drawable/hiv.png'),
    params: hiv,
  },
  {
    id: 3,
    nama: 'DIARE',
    image: require('../drawable/diare.png'),
    params: diare,
  },
  {
    id: 4,
    nama: 'ISPA',
    image: require('../drawable/ispa.png'),
    params: ispa,
  },
  {
    id: 5,
    nama: 'DBD',
    image: require('../drawable/dbd.png'),
    params: dbd,
  },
  {
    id: 6,
    nama: 'COVID 19',
    image: require('../drawable/covid.png'),
    params: covid19
  },
]
export default class Home extends Component {
  render() {
    return (
      <Container>
        <FlatList
          data={homeMenu}
          renderItem={({ item, index }) => (
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.navigate('Sick', item.params)}
            >
              <Card style={{
                width: Dimensions.get('screen').width / 4,
                height: Dimensions.get('screen').height / 8.3,
                borderRadius: 20,
                marginLeft: 10,
                marginRight: 10
              }}
                onPress={item.url}
              >
                <View style={{
                  alignItems: 'center',
                  padding: 10
                }}>
                  <Image
                    source={item.image}
                    style={{
                      width: 65,
                      height: 65,
                      resizeMode: 'contain'
                    }} />
                  <Text
                    style={{
                      color: '#000',
                      fontWeight: 'bold'
                    }}>{item.nama}</Text>
                </View>
              </Card>
            </TouchableWithoutFeedback>
          )}
          numColumns={3}
          keyExtractor={item => item.id}
          style={{ alignSelf: 'center', margin: 20 }}
        />
      </Container>
    );
  }
}