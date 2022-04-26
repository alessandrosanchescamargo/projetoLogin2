import React from "react";
import { Text, TextInput, StyleSheet, View} from "react-native";

export default function Formulario(){
    return (
        <View style={estilos.viewLogin}>
            <TextInput
             style={estilos.inputLogin} 
             placeholder="Phone,email or username" 
             keyboardType="default" 
             placeholderTextColor={"#5F5E68"}  
            />
            <TextInput
                style={estilos.inputLogin}
                placeholder="Password"
                keyboardType="default"
                placeholderTextColor={"#5F5E68"}
                secureTextEntry
            />
        </View>
    )    
}
const estilos = StyleSheet.create({
    viewLogin:{
        paddingHorizontal: 60,
        paddingVertical: 60,
    },
    inputLogin: {
        height: 40,
        margin: 12,
        padding: 15,
        borderColor:"#5F5E68",
        color:"#5F5E68",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        
      },
})