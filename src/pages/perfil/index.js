import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Button,ScrollView} from 'react-native';
import {VarNoite,VarOutra} from '../Texts'


export default function Perfil({navigation,route}) {
    //const type = route.params.item;
    function GeraTexto(){
        if(route.params.item == 'Noite'){
            return(<Text style={styles.Read}>{VarNoite}</Text>)
        }
        if(route.params.item == 'Inciais'){
        return(<Text style={styles.Read}>{VarOutra}</Text>)
        }
        else{
            return(<Text>OK</Text>)
        }
    }


  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.welcome}>{route.params?.item}</Text>
        
        <GeraTexto />
        
  


      <Button
      title="Mais"
      onPress={()=>navigation.navigate('FlatList',{nome:'Felipe'})}
      />
      <StatusBar style="auto" />
    </View>
</ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:40,
    backgroundColor:'#f0f0f0'
  },
  welcome:{
      fontSize:26,
      fontWeight:'bold',
      marginTop:0
  },
  desc:{
    fontSize:16,
  },
  Read:{
    fontSize:20,
    fontWeight:'300',
    marginTop:0
},
});
