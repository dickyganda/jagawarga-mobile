import React, { Component } from 'react';
import { Image, FlatList, Dimensions, TouchableWithoutFeedback, StyleSheet, Platform } from 'react-native';
import { Container, Card, Text, View } from 'native-base';
import Carousel from 'react-native-snap-carousel';

const colors = {
  black: '#1a1917',
  gray: '#888888',
  background1: '#B721FF',
  background2: '#21D4FD'
};

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

const tbParu =
  {
    nama_penyakit: "TB PARU",
    gejala: [
      "1.	Batuk berdahak lebih dari 2 minggu",
      "2.	Demam terus-menerus", 
      "3. Lemas",
      "4.	Nafsu makan menurun",
      "5.	Berkeringat dingin saat malam hari tampa aktivitas",
      "6.	Batuk darah"
    ],
    penganganan: [
      "Hasil pemeriksaan positif dilakukan Pengobatan TB selama 6 bulan menggunakan obat OAT (Obat anti TB)"
    ],
    waktu: "6 Bulan"
  }
const kusta =
  {
    nama_penyakit: "KUSTA",
    gejala: [
      "1.	Bercak-bercak berwarna terang atau kemerahan di kulit disertai dengan kurangnya kemampuan merasa, mati rasa, (suhu,tekanan dan sentuhan)",
      "2.	Muncul luka tapi tidak terasa sakit",
      "3.	Otot melemah terutama otot kaki dan tangan",
      "4.	Prmbrsaran saraf terutama di lutut dan siku"
    ],
    penganganan: [
      "Hasil pemeriksaan positif kusta dilakukan pengobatan MDT(Multi Drug Therapy) selama 1 tahun 6 bulan, setelah itu melakukan pengobatan sesuai keluhan pasien"
    ],
    waktu: "1 Tahun 6 Bulan"
  }
const hiv = 
  {
    nama_penyakit: "HIV",
    gejala: [
      "1.	Sakit kepala", 
      "2.	Demam",
      "3.	Lesu",
      "4.	Pembekakakan kelenjar getah bening", 
      "5.	Sakit tenggorokan",
      "6.	Sariawan terus menerus", 
      "7.	Munculnya ruam",
      "8.	Nyeri otot dan sendi",
      "9.	Bisul di mulut atau alat kelamin", 
      "10.	Diare yang sering"
    ],
    penganganan: [
      "Pengobatan HIV dilakukan seumur hidup menggunakan ARV (antiretroviral)"
    ],
    waktu: "Seumur Hidup"
  }
const diare = 
  {
    nama_penyakit: "Diare",
    gejala: [
      "1.	Perut mulas",
      "2.	Tinja encer (BAB cair) atau bahkan berdarah",
      "3.	Mual dan muntah",
      "4.	Pusing",
      "5.	Lemas",
      "6.	Nafsu makan turun",
      "7.	Kulit kering",
      "8.	Merasa haus terus menerus"
    ],
    penganganan: [
      "Mengkonsusmsi banyak cairan untuk menggantikan kehilangan cairan, baik melalui oral (bias menggunakan oralit) ataupun intravena (cairan infus) Pemberian obat untuk melawan bakteri"
    ],
    waktu: "14"
  }
const ispa = 
  {
    nama_penyakit: "ISPA",
    gejala: [
      "1.	Hidung tersumbat atau berair",
      "2.	Bersin-bersin", 
      "3.	Sesak pada bagian dada",
      "4.	Kerap merasa kelelahan", 
      "5.	Demam",
      "6.	Batuk-batuk",
      "7.	Sakit tenggorokan", 
      "8.	Nyeri otot",
    ],
    penganganan: [
      "Penanganan ispa sesuai dengan keluhan biasanya di berikan obat untuk mengurangi batuk, vitamin C dan juga pereda nyeri"
    ],
    waktu: "10"
  }
const dbd = 
  {
    nama_penyakit: "DBD",
    gejala: [
      "1.	Demam mendadak tinggi",
      "2.	Nafsu makan menurun", 
      "3.	Mual dan muntah", 
      "4.	Badan terasa lelah,lesuh dan letih terus menerus",
      "5.	Nyeri di persendian,otot,tulang",
      "6.	Tenggorokan sakit",
      "7.	Kepala pusing", 
      "8.	Muncul bintik-bintik merah", 
      "9.	Perdarahan dari hidung,gusi,atau dibawah kulit", 
      "10.	Syok: nadi kecil & cepat, tensi renda, gelisah dan akral dingin", 
      "11.	Hasil lab trombositopenia (<100000) hemokonsentrasi (Ht > 20%)"
    ],
    penganganan: [
      "1.	Banyak minum air putih,susu putih,air kelapa,jus jambu",
      "2.	Istirahat cukup",
      "3.	Konsusmsi obat penurun panas dari dokter dan di kompres",
      "4.	Pemberian vitamin",
      "5.	Dan melakukan PSN 3M plus"
    ],
    waktu: "10"
  }
const covid19 = 
  {
    nama_penyakit: "COVID 19",
    gejala: [
      "1. Demam mendadak tinggi",
      "2. Nafsu makan menurun",
      "3. Mual dan muntah",
      "4. Badan terasa lelah, lesuh dan letih terus menerus",
      "5. Nyeri di persendian, otot, tulang", 
      "6. Tenggorokan sakit",
      "7. Kepala pusing",
      "8. Muncul bintik-bintik merah", 
      "9. Perdarahan dari hidung,gusi,atau dibawah kulit",
      "10. Syok: nadi kecil & cepat, tensi renda, gelisah dan akral dingin", 
      "11. Hasil lab trombositopenia (<100000) hemokonsentrasi (Ht > 20%)",
    ],
    penganganan: [
      "1.	Banyak minum air putih, susu putih, air kelapa, jus jambu", 
      "2.	Istirahat cukup",
      "3.	Konsusmsi obat penurun panas dari dokter dan di kompres",
      "4.	Pemberian vitamin",
      "5.	Dan melakukan PSN 3M plus"
    ],
    waktu: "14 Hari",
  }
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
    image: require('../drawable/KUSTA.png'),
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
    params: covid19,
  },
];
const ENTRIES = [
  {
      title: 'Budayakan 3M',
      subtitle: 'Mencuci Tangan, Menggunakan Masker, Menjaga Jarak.',
      illustration: 'https://i.imgur.com/SsJmZ9jl.jpg'
      // illustration: require('../drawable/carousel/cs_1.jpg'),
  },
  {
      title: 'Menjaga Lebih Baik daripada Mengobati',
      subtitle: 'jaga kebersihan diri, untuk kesehatan pribadi dan keluarga.',
      illustration: 'https://i.imgur.com/5tj6S7Ol.jpg'
      // illustration: require('../drawable/carousel/cs_2.jpg'),
  },
  {
      title: 'Makanlah makanan 4 sehat 5 sempurna',
      subtitle: 'Menjaga diri bisa dilakukan dengan menjaga asupan makanan.',
      illustration: 'https://i.imgur.com/pmSqIFZl.jpg'
      // illustration: require('../drawable/carousel/cs_3.jpg'),
  }
];
export default class Home extends Component {
  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slideInnerContainer}>
        <View style={styles.shadow} />
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: item.illustration }}
            // source={item.illustration} 
            style={styles.image} 
          />
          <View style={styles.radiusMask} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title.toUpperCase()}
          </Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
      </View>
    )
  }
  render() {
    return (
      <Container>
        <Carousel 
          ref={(c) => {this._carousel = c}}
          data={ENTRIES}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          autoplay={true}
          loop={true}
        />
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
          style={{ alignSelf: 'center', marginTop: -100 }}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  slideInnerContainer: {
    width: itemWidth,
    height: slideHeight,
    paddingHorizontal: itemHorizontalMargin,
    paddingBottom: 18, // needed for shadow
    marginTop: 20,
  },
  shadow: {
      position: 'absolute',
      top: 0,
      left: itemHorizontalMargin,
      right: itemHorizontalMargin,
      bottom: 18,
      shadowColor: colors.black,
      shadowOpacity: 0.25,
      shadowOffset: { width: 0, height: 10 },
      shadowRadius: 10,
      borderRadius: entryBorderRadius
  },
  imageContainer: {
      flex: 1,
      marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
      backgroundColor: 'white',
      borderTopLeftRadius: entryBorderRadius,
      borderTopRightRadius: entryBorderRadius
  },
  imageContainerEven: {
      backgroundColor: colors.black
  },
  image: {
      ...StyleSheet.absoluteFillObject,
      resizeMode: 'cover',
      borderRadius: IS_IOS ? entryBorderRadius : 0,
      borderTopLeftRadius: entryBorderRadius,
      borderTopRightRadius: entryBorderRadius
  },
  // image's border radius is buggy on iOS; let's hack it!
  radiusMask: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: entryBorderRadius,
      backgroundColor: 'white'
  },
  radiusMaskEven: {
      backgroundColor: colors.black
  },
  textContainer: {
      justifyContent: 'center',
      paddingTop: 20 - entryBorderRadius,
      paddingBottom: 20,
      paddingHorizontal: 16,
      backgroundColor: '#eee',
      borderBottomLeftRadius: entryBorderRadius,
      borderBottomRightRadius: entryBorderRadius
  },
  textContainerEven: {
      backgroundColor: colors.black
  },
  title: {
      color: colors.black,
      fontSize: 13,
      fontWeight: 'bold',
      letterSpacing: 0.5
  },
  titleEven: {
      color: 'white'
  },
  subtitle: {
      marginTop: 6,
      color: colors.gray,
      fontSize: 12,
      fontStyle: 'italic'
  },
  subtitleEven: {
      color: 'rgba(255, 255, 255, 0.7)'
  }
});