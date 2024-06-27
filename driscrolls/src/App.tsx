import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Users from './pages/Users';
import News from './pages/News';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/users">Users</Link> | 
          <Link to="/news">News</Link>
        </nav>

        <Routes>
          <Route path="/users/*" element={<Users />} />
          <Route path="/news/*" element={<News />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;