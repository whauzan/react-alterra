import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <Header/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
