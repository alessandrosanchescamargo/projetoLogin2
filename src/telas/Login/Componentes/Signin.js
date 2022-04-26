import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default function Botao(){
    return(
        <View style={estilos.viewBotao}>
            <TouchableOpacity style={estilos.botao}>
                <Text style={estilos.textoBotao}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}
const estilos = StyleSheet.create({
    viewBotao:{
        marginTop: 30,
        paddingHorizontal: 40,
        
    },
    botao:{
        paddingHorizontal: 80,
        paddingVertical:20,
        backgroundColor: "#fff",
        borderRadius: 20,
        alignItems:"center"
    },
    textoBotao:{
        color:"#9B9B9D",
        
    }
})