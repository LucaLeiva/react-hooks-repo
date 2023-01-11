import { useEffect } from "react";
import { useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: "strider2",
        email: "default@example.com"
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

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
            <h1>Formulario Simple</h1>
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

            {
                username === "strider2" ? <Message /> : null
            }
        </>
    )
}