import React from 'react';
import NavBar from './components/NavBar';
import "./assets/App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Posts } from './pages/Posts';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Posts/ >} />
        <Route path='/todo' element={<Posts/ >} />
        {/* <Route path='/reminders' element={<Reminders/ >} />
        <Route path='/trackers' element={<Trackers/ >} /> */}
      </Routes>
      </Router>
    </div>
  );
}

export default App;
