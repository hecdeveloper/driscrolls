import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Users from './pages/Users'
import News from './pages/News'

const App = () => {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/test`)
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error:', error))
  }, [])

  return (
    <Router>
      <div>
        <nav>
          <Link to="/users">Users</Link> | 
          <Link to="/news">News</Link>
        </nav>

        <p>{message}</p>

        <Routes>
          <Route path="/users/*" element={<Users />} />
          <Route path="/news/*" element={<News />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App