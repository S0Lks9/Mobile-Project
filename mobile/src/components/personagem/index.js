import React, { useState } from "react"; 
import { TouchableOpacity,Button,TextInput,ScrollView,StyleSheet,Text,View } from "react-native";

export default function Persona(){ 

    return(    
     <ScrollView>  
     <View style={styles.container}>
        <Text style={styles.perso}>Seu personagem</Text>
     </View>         
     </ScrollView>
)
}

const styles= StyleSheet.create({
    container:{
       backgroundColor: 'orange',
        alignItems:'center',
        justifyContent: 'center'
    },
    perso:{
        fontWeight: 120,
        fontSize: 20,
        color: 'white',
        backgroundColor: 'orange'
    }

})