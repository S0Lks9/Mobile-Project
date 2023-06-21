import {Button, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function Header(props){
    return(
        <View>
        <View style={styles.container}>
            <MaterialCommunityIcons name="shield-sword" size={24} color="black" />
            <Text style={styles.texto}>PERSONA: ficha de RPG</Text>            
         </View>       
      </View>
    )
}

/*export default function App() {
  return 
      
      <View style={styles.container}>
        <View style={styles.header}>
        <MaterialCommunityIcons name="shield-sword" size={24} color="black" />
        <Text>PERSONA:FICHA DE RPG</Text>
        </View>
  
          </View>        
      );   
  }
*/
  
const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        justifyContent: 'center',
        flexDirection: 'row',
      alignItems: 'center',
      
    },
    texto:{
        marginTop: 5,
        fontSize: 20
    }
})