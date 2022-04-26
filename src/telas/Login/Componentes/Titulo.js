import React from "react";
import {Text, StyleSheet, View} from "react-native";

export default function Titulo(){
    return(
        <View style={estilos.viewTitulo}>
            <Text style={estilos.textoTitulo}>Let's sign you in.</Text>
            <Text style={estilos.textoSubtitulo}>
                Welcome back.
            </Text>
            <Text style={estilos.textoSubtitulo}>
                You've been missed!
            </Text>
        </View>
    )
}
const estilos = StyleSheet.create({
    viewTitulo:{
        paddingHorizontal: 60,
        paddingVertical: 30,
        
    },
    textoTitulo:{
        color: "#fff",
        fontWeight: "bold",
        fontSize: 36,
        marginBottom: 10
    },
    textoSubtitulo: {
        color: "#9B9B9E",
        fontSize: 30
    }
})