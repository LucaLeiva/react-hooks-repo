export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {
    
    const style = {
        cursor: "pointer",
        MozUserSelect: "none",
        WebkitUserSelect: "none",
        msUserSelect: "none"
    }
    
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span
                className={`align-self-center ${(todo.done) ? "text-decoration-line-through" : ""}`}
                onClick={() => onToggleTodo(todo.id)}
                style={style}
            >
                {todo.description}
            </span>
            <button
                className="btn btn-danger"
                onClick={() => onDeleteTodo(todo.id)}
            >Borrar</button>
        </li>
    )
}