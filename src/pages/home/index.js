import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView,ImageBackground} from 'react-native';
import Logo from '../../../assets/iconR.png'
import Back from '../../../assets/back.png'

export default function Home({navigation}) {
  return (
    
    <ScrollView style={styles.Flex}>
      
    <View style={styles.container}>
    <ImageBackground source={Back} style={styles.Flex}>
     
      
      <Text style={styles.welcome}>Bem vindo Ao Aplicativo De Orações Da Fraternidade Díscipulos Da Mãe De Deus</Text>
     
      <TouchableOpacity style={styles.detailsButton} onPress={()=>navigation.navigate('FlatList',{nome:'Felipe'})}>
      <Text style={styles.detailsButtonText}>Começar Agora</Text>
      
      </TouchableOpacity>
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
    
    </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:'auto',
    height:'auto',
    backgroundColor:'#3E414E',
    height:500,
   
  },
  Flex:{
    flex:1,
    width:'100%',
    height:600,
   
  },
welcome:{
  fontSize:30,
  fontWeight:'bold',
  color:'#FFF',
},
detailsButtonText:{
  color:'#FFF',
  fontSize:24,
  fontWeight:'300',
},
detailsButton:{
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#5E79FD',
  padding:10,
  borderRadius:25,
  marginTop:90,
  width:200,
  marginLeft:60,
},
});
