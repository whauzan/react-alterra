import { Component } from "react";
import { v4 as uuidv4 } from "uuid"
import TodoList from "./TodoList";
import TodoListInput from "./TodoListInput";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : [
                {
                    id : uuidv4(),
                    task : "Makan Mie",
                    completed : false
                },
                {
                    id : uuidv4(),
                    task : "Makan Ayam",
                    completed : true
                }
            ]
        }
    }

    deleteTodo = (id) => {
        const newListPengunjung = this.state.data.filter((item) => item.id !== id)
        this.setState({data : newListPengunjung})
    }

    addTodo = (newUser) => {
        const newPengunjung = {id : uuidv4(), ...newUser}
        this.setState({data : [...this.state.data, newPengunjung]})
    }

    toggleComplete = (id) => {
        const complete = this.state.data.map((item)=> item.id === id ? { ...item, completed: !item.completed} : item)
        this.setState({data : complete})
    }

    render() {
        return (
            <div>
                <TodoListInput addTodo={this.addTodo}/>
                <TodoList data={this.state.data} deleteTodo={this.deleteTodo} toggleComplete={this.toggleComplete}/>
                {/* <TodoList data={this.state.data} hapusPengunjung={this.hapusPengunjung} sudahSelesai={this.sudahSelesai} belumSelesai={this.belumSelesai}/> */}
            </div>
        )
    }
}

export default Home