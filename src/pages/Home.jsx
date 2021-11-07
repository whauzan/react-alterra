import { useState } from "react";
import { v4 as uuidv4 } from "uuid"
import '../App.css';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TodoList from "../components/TodoList";
import TodoListInput from "../components/TodoListInput";

const initialValue = [
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

function Home() {
    const [data, setData] = useState(initialValue)

    const deleteTodo = (id) => {
        setData((oldData) => oldData.filter((item) => item.id !== id))
    }

    const addTodo = (newUser) => {
        const newPengunjung = {id : uuidv4(), ...newUser}
        setData((oldData) => [...oldData, newPengunjung])
    }

    const toggleComplete = (id) => {
        setData((oldData) => oldData.map((item)=> item.id === id ? { ...item, completed: !item.completed} : item))
    }

    return (
        <>
            <Navbar/>
            <div className="app-wrapper">
                <Header/>
                <TodoListInput addTodo={addTodo}/>
                <TodoList data={data} deleteTodo={deleteTodo} toggleComplete={toggleComplete}/>
                {/* <TodoList data={this.state.data} hapusPengunjung={this.hapusPengunjung} sudahSelesai={this.sudahSelesai} belumSelesai={this.belumSelesai}/> */}
            </div>
        </>
    )
}

export default Home