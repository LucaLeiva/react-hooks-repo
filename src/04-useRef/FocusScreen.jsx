import { useRef } from "react"

export const FocusScreen = () => {

    // la idea es que es como un useState pero que no re-renderiza el componente
    // cuando esta referencia cambia
    const inputRef = useRef();

    // y cuando hago click, accedo a la referencia (el input) y la selecciono
    const onClick = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={inputRef} // con esto estoy guardando la referencia de este input
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
            />
            <button className="btn btn-primary mt-3" onClick={onClick}>
                Set Focus
            </button>
        </>
    )
}