import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {
    console.log("Message Mounted");

        const onMouseMove = ({x, y}) => {
            const coords = {x, y};
            console.log(coords);
        }

        // este window solo esta mal, porque puede provocar un memory leak,
        // ya que no se estará destruyendo el original
        window.addEventListener("mousemove", onMouseMove);

        return () => {
            console.log("Message Unmounted");
            window.removeEventListener("mousemove", onMouseMove);
        }
    }, []);


    return (
        <>
            <h3>Usuario ya existe</h3>
        </>
    )
}