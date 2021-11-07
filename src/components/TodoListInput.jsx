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
        <form>
            <input type="text" 
                placeholder="Add Todo"
                value={data.task}
                name="task"
                onChange={onChange}
                className={styles.task_input}
            />
            <button className={styles.button_add}
                onClick={handleSubmit}
                // disabled={data.task.length < 1}
            >
                Add
            </button>
        </form>
    )
}

export default TodoListInput