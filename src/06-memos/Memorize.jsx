import { useState } from "react";
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small";

export const Memorize = () => {

    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <>
            <h1>Counter: <Small value={counter} /></h1>
            <hr />

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
