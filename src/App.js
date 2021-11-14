import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, ContactUs, ReviewMessage, News, NotFound } from './Pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path="/contact_us" exact element={<ContactUs />} />
				<Route path="/review_message" element={<ReviewMessage />} />
				<Route path="/news" element={<News />} />
				<Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
