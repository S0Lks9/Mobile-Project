import React, { useState } from "react";
import { StyleSheet,Text,TouchableOpacity, Button,View, TextInput,ScrollView,FlatList } from "react-native";
import {MaterialIcons} from '@expo/vector-icons';


export default function AddAtributo({funcao}) {
     const [texto, setTexto]= useState('');

     const catchMudo = (val) => {
        setTexto(val);
     }

    return(
          <View style={styles.cabecalho}>
            <TextInput
              style={styles.input}
              placeholder="novo atributo"
              onChangeText={catchMudo}
            />
            <Button
              onPress={() => funcao(texto)}
              title="Adicionar Atributo"
              color='orange'
            />
          </View>
             )
}

const styles=StyleSheet.create({
   input:{
    marginBottom: 10,
    paddingHorizontal:8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
   }
});