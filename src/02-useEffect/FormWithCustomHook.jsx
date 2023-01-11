import { useEffect } from "react";
import { useState } from "react"
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {

    // esta idea de hook existe en react-custom-form
    const { formState, onInputChange, onResetForm, username, email, password } = useForm({    
        username: "",
        email: "",
        password: ""
    });

    //const {username, email, password} = formState;

    // si no tiene ninguna dependencia, useEffect se ejecutara cada vez
    // que el componente se vuelva a redibujar, en este caso, cada vez que
    // se ingrese una letra en el input, porque ahi cambia el state, y se redibuja
    useEffect(() => {
        //console.log("useEffect with [] called!");
        
        // el return solo se ejecutara cuando se "desmonte" el componente
        // return (() => {
        //     console.log("a")
        //})
        // cuando en las dependencias se pone un array vacio, entonces solo se
    // ejecuta cuando el componente es montado (la primera vez que se renderiza)
    }, []);

    // se recomienda tener varios useEffect simples
    useEffect(() => {
        //console.log("useEffect with [formState called!");
    }, [formState]);

    useEffect(() => {
        //console.log("useEffect with email change!");
    }, [email]);
    

    return (
        <>
            <h1>Formulario con custom Hook</h1>
            <hr/>

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value ={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="default@example.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
        </>
    )
}