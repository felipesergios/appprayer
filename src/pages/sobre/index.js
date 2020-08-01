import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sobre({route}) {
    
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Historia do app</Text>
  <Text>Este app comecou a ser desenvolvido por Felipe sergio no dia 27/08/2020 com 
    objetivo de trazer praticidade no seu momento de conversar com deus ,espero que faça bom uso.
    Qualquer dúvida Entrar em contato. 
  </Text>
  <Text>

  </Text>

  <Text style={styles.welcome}>Quem somos?</Text>
  <Text>
  Somos uma comunidade Católica 
  sem fins lucrativos e temos como carisma fazer Nossa Senhora mais conhecida e amada 
  através do anúncio do Evangelho para preparar a Volta Gloriosa do Nosso Senhor Jesus Cristo. 
  </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
    marginTop:-120
  },
  welcome:{
    fontSize:24,
    fontWeight:'bold',
}
});
