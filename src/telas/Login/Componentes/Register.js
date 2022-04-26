import React from "react";
import { Text, TouchableOpacity, StyleSheet, View} from "react-native";

export default function Register(){
    return (
        <View style={estilo.viewRegister}>
            <Text style={estilo.textoRegister}>
                Don't have an account?
            </Text>
            <TouchableOpacity>
                <Text style={estilo.botaoRegister}>Register</Text>
            </TouchableOpacity>
        </View>
    )
}
const estilo = StyleSheet.create({
    viewRegister:{
        paddingHorizontal: 100,
        alignItems:"center",
        marginTop: 200,
        flexDirection: "row"
        
    },
    textoRegister:{
        color:"#34323D"
    },
    botaoRegister:{
        color:"#fff"
    }
})