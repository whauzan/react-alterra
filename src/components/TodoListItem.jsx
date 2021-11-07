import styles from "./TodoListItem.module.css"

const TodoListItem = ({item, deleteTodo, toggleComplete}) => {
    return (
        // <table className={styles.todo_form}>
        //     <tbody>
        //         <tr>
        //             <td>
        //                 <input className={styles.checkbox} 
        //                     type="checkbox"
        //                     onClick={() => toggleComplete(item.id)}
        //                     defaultChecked={item.completed ? true : false}/>
        //             </td>
        //             <td style={{ textDecoration: item.completed ? "line-through" : null }}>{item.task}</td>
        //             <td>
        //                 <button className={styles.delete_button} onClick={() => deleteTodo(item.id)}>Hapus</button>
        //             </td>
        //         </tr>
        //     </tbody>
        // </table>
        <li className={styles.list_item} key={item.id}>
            <input type="text" 
                value={item.task}
                className={`${item.completed ? styles.complete : styles.list}`}
                // onChange={(event) => event.preventDefault()}
            />
            <div>
                <button className={styles.button_complete} onClick={() => toggleComplete(item.id)}>
                    <i className="fa fa-check-circle"></i>
                </button>
                <button className={styles.button_delete} onClick={() => deleteTodo(item.id)}>
                    <i className="fa fa-trash"></i>
                </button>
            </div>
        </li>
    )
}

export default TodoListItem