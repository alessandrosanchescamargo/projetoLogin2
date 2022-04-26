import React from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import voltar from "../../../../assets/voltar.png";
export default function Topo(){
    return (
        <View style={estilos.viewTopo}>
            <TouchableOpacity>
                <Image source={voltar} />
            </TouchableOpacity>
        </View>
    )
}
const estilos = StyleSheet.create({
    viewTopo: {
        paddingHorizontal: 50,
        paddingVertical: 10
    },
    imagem: {
        
    }
})