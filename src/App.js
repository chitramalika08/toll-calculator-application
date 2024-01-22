
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TollComponents from './toll';



function App() {
  return (
    <Router>
      <Routes>

      <Route path="/" element={<TollComponents />} />
  
      </Routes>
    </Router>
  );
}

export default App;
