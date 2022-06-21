import React, {useState} from 'react';
import { Image, StyleSheet, Text, SafeAreaView, FlatList, Modal, View} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { gStyle } from '../../styles/Style';
import { Ionicons } from '@expo/vector-icons';
import { InputForm } from '../components/InputForm'

export default function Main({navigation}) {
const [news, setNews] = useState([
  {title: "Google", description: "COOLELKFEEOFEFOEFJEOFIJJ fefe fe fe fe", key: '1', img: 'https://bipbap.ru/wp-content/uploads/2017/06/4-5.jpg'},
  {title: "fa", description: "efergerg", key: '2', img: 'https://artworld.ru/images/cms/thumbs/de310e8493b895992859bd3d1772886f838c746e/rodriguez_kartina_maslom_citrusovyj_fresh_apelsiny_jr190515_400_auto_jpg.jpg'},
  {title: "tww", description: "COOLELKFEEOFEgwe egw eg wegfe fe fe", key: '3', img: 'https://artworld.ru/images/cms/thumbs/de310e8493b895992859bd3d1772886f838c746e/rodriguez_kartina_maslom_karp_koi_yaponskaya_zolotaya_rybka_jr200308_400_auto_jpg.jpg'}
])

const [modalWindow, setModalWindow] = useState(false)

const addArticle = (article) => {
  setNews((list) => {
    article.key = Math.random().toString();
    return [
      article,
      ...list
    ]
  })
  setModalWindow(false);
}

  return (
    <SafeAreaView style={gStyle.main}>
      <Modal visible={modalWindow}>
        <ScrollView style={gStyle.main}>
          <Text style={styles.title}>Add article</Text>
          <InputForm addArticle={addArticle}/>
        </ScrollView>
        <Ionicons style={styles.iconClose} name="close-circle" size={50} color="black" onPress={() => setModalWindow(false)}/>
      </Modal>
        <FlatList data={news} renderItem={({item}) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
            <Image style={gStyle.image} source={{
              uri: item.img
            }}/>
            <Text style={styles.title} >{item.title}</Text>
            <Text style={styles.description} >{item.description.substring(0, 30) + "..."}</Text>
          </TouchableOpacity>
        )}/>
        <Ionicons style={styles.iconAdd} name="add-circle"  size={65} color="#9d81dd" onPress={() => setModalWindow(true)}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item:{
    width: '100%',
    marginBottom: 30,
  },
  description:{
    fontFamily: 'comf-light',
    fontSize: 16,
    textAlign: 'left',
    color: '#888'
  },
  title:{
    fontFamily: 'comf-bold',
    fontSize: 22,
    textAlign: 'left',
    marginTop: 5,
    color: '#000'
  },
  iconAdd:{
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 15
  },
  iconClose:{
    position: 'absolute',
    margin: 10,
    right: 0
  }
})

