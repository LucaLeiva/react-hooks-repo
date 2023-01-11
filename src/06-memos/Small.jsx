import { memo } from "react"

// memo va a evitar que se redibuje este componente salvo que cambie el valor value
export const Small = memo(({value}) => {
    
    console.log("Me volvi a dibujar :(")
    
    return (
        <small>{value}</small>
    )
});