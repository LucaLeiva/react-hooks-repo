const initialState = [{
    id: 1,
    todo: "Recolectar oro",
    done: false
}];

// action le indicará al reducer como quiero que cambie el estado
const todoReducer = (state = initialState, action = {}) => {

    if(action.type === "[TODO] add todo") {
        return [...state, action.payload];
    }

    // siempre debe retornar un estado
    return state;
}

// inicio con el estado inicial
let todos = todoReducer();

// este es mi nuevo todo
const newTodo = {
    id: 2,
    todo: "Recolectar piedra",
    done: false
}

// esta es mi nueva accion, añadir el newTodo
const addTodoAction = {
    type: "[TODO] add todo",
    payload: newTodo
}

// le digo al reducer que tiene que ejecutar la accion addTodoAction
//sobre el estado anterior que se guardo en todos
todos = todoReducer(todos, addTodoAction);

console.log({state: todos});

// la idea es: tenemos un estado inicial, lo mandamos a un reducer junto a una accion
// el reducer dentro sabra si la accion enviada es valida, y si lo es, se devolvera
// un nuevo estado con dicha accion ejecutada