import './App.css';
import Today from './pages/Today';
import Tomorrow from './pages/Tomorrow';
import Weekly from './pages/Weekly';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Today />} />
        <Route path="/tomorrow" element={<Tomorrow />} />
        <Route path="/about" element={<About />} />
        <Route path="/weekly" element={<Weekly />} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
