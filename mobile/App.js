import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { FlatList,ScrollView,Button, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import  Header  from './src/components/header';
import  Persona  from './src/components/personagem';
import  ListAtributos from './src/components/listatributes';
import  AddAtributo from './src/components/atributes';

const Stack= createNativeStackNavigator();

export default App;
 /* return (
     
      <View styles={styles.container}>
            <Header title= " Persona: Ficha de RPG"/>
       </View>
    )
}*/

function HomeScreen({ navigation}){
  return(
    <View>   
   <View>
    <Header/>
   </View>
   <View style={styles.botao}>
    <Button 
      title= "topicos"
      onPress={() => navigation.navigate('Topicos')}
   />
   <Button 
      title= "criar Persongem"
      onPress={() => navigation.navigate('Personagem')}
   />
   </View>
   </View>
 
    
  )
}

function Topicos(){
  const [topics,setTopics] = useState([
    { nome: 'Raça', key:1 },
    { nome: 'Armas', key: 2 },
    { nome: 'Bestiário', key: 3 },
    { nome: 'sobre', key: 4 },

  ]);
  return(
    <View>
       {
        topics.map(
          (item) => {
            return(
              <View key={item.key}>
              <Text style={styles.item}>{item.nome}</Text>
              </View>        
        )
          }
        )
       }
    </View>
  )
}

function Personagem(){

const [lista,setLista] = useState([
    { texto: 'forca', key: '1' },
    { texto: 'velocidade', key: '2' },
    { texto: 'destreza', key: '3' },

]);

const apertarAtrb = (key) =>{
  setLista(
    (prevLista) => {
      return prevLista.filter(texto => texto.key != key);
    }
  )
}

const submeterInformacao = (texto) => {
   setLista((prevLista) => {
    return[
      {texto: texto, key: Math.random().toString()},
      ...prevLista
    ];
   })
}
  return(
    <View>
    <Persona/>
    <View>
      <AddAtributo 
      funcao={submeterInformacao}
       />
    </View>
    <View style={styles.conteudo}>
      <View>
        <FlatList
        data={lista}
        renderItem= {({item}) =>(
          <ListAtributos 
          props={item} funcao={apertarAtrb}
          />
        )
      } 
        />
      </View>
    </View>
    </View>
  )
}

function App(){
   return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Info" component={HomeScreen}/>
        <Stack.Screen name= "Topicos" component={Topicos}/>
        <Stack.Screen name= "Personagem" component={Personagem}/>
      </Stack.Navigator>
    </NavigationContainer>
   )
}


const styles= StyleSheet.create({
  container:{
        marginBottom: 20
  },
  botao:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding:20,
    margin: 20
  },
  
  item:{
    margin: 10,
    borderColor: 'black',
    borderRadius: 10,
    marginLeft: 1,
    padding: 20,
    fontSize: 20,
    backgroundColor: 'orange',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
