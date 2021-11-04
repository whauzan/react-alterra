import styles from "./TodoListItem.module.css"

const TodoListItem = ({item, deleteTodo, toggleComplete}) => {
    return (
        <table className={styles.todo_form}>
            <tbody>
                <tr>
                    <td>
                        <input className={styles.checkbox} 
                            type="checkbox"
                            onClick={() => toggleComplete(item.id)}
                            defaultChecked={item.completed ? true : false}/>
                    </td>
                    <td style={{ textDecoration: item.completed ? "line-through" : null }}>{item.task}</td>
                    <td>
                        <button className={styles.delete_button} onClick={() => deleteTodo(item.id)}>Hapus</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default TodoListItem