import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BookingPage from './pages/BookingPage';
import Dashboard from './pages/Dashboard';

// Корневой компонент приложения
function App() {
  return (
    <Router>
      <div className="App bg-gray-50 min-h-screen">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking/:id" element={<BookingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
