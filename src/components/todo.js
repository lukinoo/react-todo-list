const Todo = ({text,checked,color,todos,setTodos,todo}) => {
    const deleteTodo = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    }
    const doneTodo = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    checked: !checked
                }
            }
            return item;
        }))
    }

    return (
        <div style={{borderLeft: `5px solid ${color}`}} className={`todo ${todo.checked ? 'todo-done' : ''}`}>
            <input onChange={doneTodo} type="checkbox" className="checkbox" />
            <li className="text">{text}</li>
            <button onClick={deleteTodo} className="trash-button">
                <i className="far fa-trash-alt"></i>
            </button>
        </div>
    )
}

export default Todo;