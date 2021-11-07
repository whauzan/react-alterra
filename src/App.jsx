import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import AboutApp from './pages/AboutApp';
import AboutAuthor from './pages/AboutAuthor';

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about-app' element={<AboutApp/>} />
            <Route path='/about-author' element={<AboutAuthor/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
