import { useState } from "react"
import styles from "./TodoListInput.module.css"

function TodoListInput(props) {
    const [data, setData] = useState({
        task : "",
        completed : false
    })

    const onChange = e => {
        setData({...data,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const formIsNotEmpty = data.task
        if (formIsNotEmpty) {
            const newData = {
                task : data.task,
                completed : data.completed
            }

            props.addTodo(newData)
            setData({
                task : "",
                completed : false
            })
        } else {
            alert("Data masih ada yang kosong")
        }
    }

    return (
        <div className={styles.todo}>
            <input className={styles.todo_input}
                type="text"
                placeholder="Add Todo"
                value={data.task}
                name="task"
                onChange={onChange}>
            </input>
            <button className={styles.todo_submit}
                onClick={handleSubmit}
                disabled={data.task.length < 1}
            >
                Submit
            </button>
        </div>
    )
}

export default TodoListInput