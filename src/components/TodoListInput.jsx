import { Component } from "react";
import styles from "./TodoListInput.module.css"

class TodoListInput extends Component {
    state = {
        task : "",
        completed : false
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const formIsNotEmpty = this.state.task
        if (formIsNotEmpty) {
            const newData = {
                task : this.state.task,
                completed : this.state.completed
            }

            this.props.addTodo(newData)
            this.setState({
                task : "",
                completed : false
            })
        } else {
            alert("Data masih ada yang kosong")
        }
    }

    render() {
        return (
            <div className={styles.todo}>
                <input className={styles.todo_input}
                    type="text"
                    placeholder="Add Todo"
                    value={this.state.task}
                    name="task"
                    onChange={this.onChange}>
                </input>
                <button className={styles.todo_submit}
                    onClick={this.handleSubmit}
                    disabled={this.state.task.length < 1}
                >
                    Submit
                </button>
            </div>
        )
    }
}

export default TodoListInput