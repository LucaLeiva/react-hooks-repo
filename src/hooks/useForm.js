import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    // con esto voy concatenando los caracteres en un campo de un formulario
    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    // con esto reinicio el campo del formulario
    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState, // con esto desestructuro los campos del formulario
        formState, // con esto devuelvo todo el objeto con todos los campos del formulario
        onInputChange,
        onResetForm
    }
}