import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './pages/Users'
import News from './pages/News';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/users/*" element={<Users />} />
        <Route path="/news/*" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;