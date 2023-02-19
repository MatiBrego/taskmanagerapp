import React from 'react';
import NavBar from './components/NavBar';
import "./assets/App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToDo } from './pages/ToDo';
import { Reminders } from './pages/Reminders';
import { Trackers } from './pages/Trackers';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<ToDo/ >} />
        <Route path='/todo' element={<ToDo/ >} />
        <Route path='/reminders' element={<Reminders/ >} />
        <Route path='/trackers' element={<Trackers/ >} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
