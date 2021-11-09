import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import AboutApp from './pages/AboutApp';
import AboutAuthor from './pages/AboutAuthor';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from './store/store';

function App() {
  return (
    <>
      <div className="container">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router>
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about-app' element={<AboutApp/>} />
                <Route path='/about-author' element={<AboutAuthor/>} />
                <Route path='*' element={<NotFound/>} />
              </Routes>
            </Router>
          </PersistGate>
        </Provider>
      </div>
    </>
  );
}

export default App;
