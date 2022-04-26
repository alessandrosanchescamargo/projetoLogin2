import React from "react";
import Topo from "./Componentes/Topo";
import Titulo from "./Componentes/Titulo";
import Login from "./Componentes/Formulario"
import Register from "./Componentes/Register";
import Botao from "./Componentes/Signin";
export default function Index(){
    return <>
        <Topo />
        <Titulo />
        <Login />
        <Register />
        <Botao />
    </>
}