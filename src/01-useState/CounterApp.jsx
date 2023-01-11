import { useState } from "react"

export const CounterApp = () => {
    
    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });

    const {counter1, counter2, counter3} = state;

    const handleClick = () => {
        // si yo no hago esto con un objeto, cambio un objeto por un numero, en TS eso se puede
        // forzar a que no pase
        setCounter({
            // uso el spread operator para recuperar los valores, pero luego
            // puedo sobreescribir algunos
            ...state,
            counter1: counter1 + 1
        });
    }
    
    return (
        <>
            <h1>Counter: {counter1}</h1>
            <h1>Counter: {counter2}</h1>
            <h1>Counter: {counter3}</h1>

            <hr />

            <button
                className="btn"
                onClick={handleClick}>
                    +1
            </button>
        </>
    )
}