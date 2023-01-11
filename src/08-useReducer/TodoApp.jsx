import { useEffect } from "react";
import { useReducer } from "react"
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [
    
];

// en este caso es necesaria la funcion inicializadora, porque cuando recargo
// la pagina, useReducer se vuelve a cargar, entonces todos se inicia en vacio,
// entonces useEffect vacia el localStorage sin querer. Con esto evito eso
const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
}

export const TodoApp = () => {

    // useReducer es muy parecido a useState, pero este puede manejar multiples
    // acciones con una funcion que YO defino llamada reducer. En esta, le
    // envio un type, asi le indico que hacer con el contenido, y un payload, el
    // contenido en si. Init es una funcion inicializadora, en caso de que el
    // estado inicial sea mas complejo
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos) || []);
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: "[TODO] Add Todo",
            payload: todo
        }

        // dispatch enviara mi argumento hacia el todoReducer que yo cree,
        // ahi este sabra que hacer porque yo se lo defini dependiendo del type
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: "[TODO] Remove Todo",
            payload: id
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: "[TODO] Toggle Todo",
            payload: id
        })
    }

    return (
        <>
            <h1>TodoApp: {todos.length}, <small>pendientes: {todos.filter(todo => !todo.done).length}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoAdd onNewTodo={handleNewTodo} />

                </div>
            </div>
        </>
    )
}

// todo este quilombo de pasar funciones de un componente a otro se puede arreglar
// con Redux o con useContext