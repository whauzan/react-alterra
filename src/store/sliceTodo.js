import { v4 as uuidv4 } from "uuid"
import { createSlice } from '@reduxjs/toolkit'

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

export const sliceTodo = createSlice({
    name: "todo",
    initialState: {
        todos: initialValue
    },
    reducers: {
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((item) => item.id !== action.payload)
        },
        addTodo: (state, action) => {
            const newTodo = {id : uuidv4(), ...action.payload}
            state.todos = [...state.todos, newTodo]
        },
        toggleComplete: (state, action) => {
            state.todos = state.todos.map((item)=> item.id === action.payload ? { ...item, completed: !item.completed} : item)
        }
    }
})

export const {deleteTodo, addTodo, toggleComplete} = sliceTodo.actions;
export default sliceTodo.reducer