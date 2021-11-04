import TodoListItem from "./TodoListItem"

const TodoList = (props) => {
    const {data, deleteTodo, toggleComplete} = props
    return (
        <div>
            {data.map((todo) => <TodoListItem key={todo.id} item ={todo} deleteTodo={deleteTodo} toggleComplete={toggleComplete}/>)}
        </div>
    )
}

export default TodoList