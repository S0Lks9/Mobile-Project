import React, { useState } from "react";
import { StyleSheet,Text,TouchableOpacity, Button,View, TextInput,ScrollView,FlatList } from "react-native";
import {MaterialIcons} from '@expo/vector-icons';


export default function ListAtributos({props,funcao}){
    return(
    <TouchableOpacity onPress={() => funcao(props.key)}>
    <View style={styles.postagem}>
        <MaterialIcons name='delete' size= {18} color={'gray'}/>
        <Text style={styles.itemTexto}>{props.texto}</Text>

    </View>
    </TouchableOpacity>
    

)
}

const styles=StyleSheet.create({
    postagem:{
     padding: 16,
     marginTop: 16,
     borderColor: 'black',
     borderWidth: 1,
     borderStyle: 'solid',
     borderRadius: 10,
     flexDirection: 'row'
    },
    itemTexto:{
     marginTop: 30,
    }, 
})