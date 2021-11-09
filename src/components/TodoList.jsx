import TodoListItem from "./TodoListItem"
import { useDispatch, useSelector } from "react-redux"
import { deleteTodo, toggleComplete } from "../store/sliceTodo"

const TodoList = () => {
    const todos = useSelector((state) => state.todo.todos)
    const dispatch = useDispatch()

    return (
        <div>
            {todos.map((item) => <TodoListItem key={item.id} item ={item} deleteTodo={() => {dispatch(deleteTodo(item.id))}} toggleComplete={() => {dispatch(toggleComplete(item.id))}}/>)}
        </div>
    )
}

export default TodoList