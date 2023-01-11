import { useMemo } from "react";
import { useState } from "react";
import { useCounter } from "../hooks/useCounter"

const heavyStuff = (iterationNumber = 100) => {
    for(let i = 0; i < iterationNumber; i++) {
        console.log("Ahi vamos...");
    }

    return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {

    const { counter, increment } = useCounter(4000);
    const [show, setShow] = useState(true);
    // memoriza el valor de una funcion, y lo hace solo cuando la dependencia indicada cambie
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr />

            {/* este calculo hiper pesado no se deberia volver a realizar
            cuando se seleccione el boton Show/Hide */}
            <h4>{memorizedValue}</h4>

            <button
                className="btn btn-primary mt-3"
                onClick={increment}
            >
                +1
            </button>

            {/* este boton va a provocar que se re-renderize todo el componente,
            pero el valor de counter no cambio, entonces es al pedo que se re-renderize
            para eso se usa Memo, pero solo tiene sentido hacerlo en componentes pesados */}
            <button
                className="btn btn-outline-primary mt-3"
                onClick={() => setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
