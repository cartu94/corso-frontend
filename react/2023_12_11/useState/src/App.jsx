import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LifeCycle from './pages/LifeCycle';
import Header from './components/Header';

export default function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cycle" element={<LifeCycle />} />
        </Routes>
      </Router>
  )
}