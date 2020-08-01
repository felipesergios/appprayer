import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from './src/pages/home'
import Sobre from './src/pages/sobre'
import Perfil from './src/pages/perfil'
import List from './src/pages/FlatList'
import { FlatList } from 'react-native-gesture-handler';

const Stack = createStackNavigator();
const Tab =createBottomTabNavigator();
function Tabs(){
  return(
    <Tab.Navigator styles={styles.container}>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Sobre" component={Sobre} options={{title:'Sobre o app'}}/>
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home"
         component={Tabs}
         options={{
           title:'Inicio',
         }}
         />
        <Stack.Screen name="Perfil"
         component={Perfil}
         options={{
          title: 'Orando..',
          headerStyle: {
            backgroundColor: '#5E79FD',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
         />
         <Stack.Screen name="FlatList"
         component={List}
         options={{
           title:'FlatList'
         }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
