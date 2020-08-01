import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View  } from "react-native";

function List({navigation}){
    return(
        <>
        <View style={styles.container_Flat}>
        <FlatList
          data={[
            {key: 'Inciais'},
            {key: 'Virtudes'},
            {key: 'Clero'},
            {key: 'Almas'},
            {key: 'Suplica Diária aos santos'},
            {key: 'Oração a maria'},
            {key: 'Noite'},
            {key: 'Exame de consciencia'},
            {key: 'Rosário Monfortino'},
          ]}
          renderItem={({item}) => <Text onPress={()=>{navigation.navigate('Perfil',{item:item.key})}} style={styles.item}>{item.key}</Text>}
        />
      </View>

     
    </>
    )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginVertical: 10,
    },
    text: {
        fontWeight:'bold',
        fontSize:16,
        textAlign: 'center',
    },

    container_Flat: {
        flex: 2,
        paddingTop: 22,
        width:'100%',
        height:'100%',
        backgroundColor:'#3E414E',
       },
       item: {
         padding: 10,
         fontSize: 24,
        
         color:'#FFF',

       },
       container_Border:{
        backgroundColor:'#fff',
        width:'100%',
        height:'100%',
        flex:1,
       },
  });

export default List;