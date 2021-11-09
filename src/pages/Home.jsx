import '../App.css';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TodoList from "../components/TodoList";
import TodoListInput from "../components/TodoListInput";

function Home() {
    return (
        <>
            <Navbar/>
            <div className="app-wrapper">
                <Header/>
                <TodoListInput />
                <TodoList />
            </div>
        </>
    )
}

export default Home