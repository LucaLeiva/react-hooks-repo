import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
    
    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    
    // && es un operador condicional con 1 condicion, a la izq la condicion, a la derecha la accion si se cumple
    // !! sirve para negar darle un valor booleano a un objeto que no lo es, en este caso, si viene en null,
    // al negarse se convertira en true (porque null es falsy, y se niega), luego se vuelve a negar para que sea false
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                isLoading
                    ? <LoadingQuote />
                    : <Quote author={author} quote={quote}/>
            }

            <button
                onClick={increment}
                disabled={isLoading}
                className="btn btn-primary">
                Next quote
            </button>
        </>
    );
}