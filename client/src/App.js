import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Read from './components/Read';
import Write from "./components/Write";

function App() {
  return (
    <Router>
      <div className="App">

        <div>
          <span><Link to="/read">Connect to Server</Link></span>{' '}{' '}{' '}{' '}
          <span><Link to="/write">Save Data to MongoDB</Link></span>
        </div>

        <Routes>
          <Route path="/read" element={ <Read /> } />
          <Route path="/write" element={ <Write /> } />
          <Route path="/" element={ <Write /> } />
        </Routes>
      </div>
    </Router>


  );
}

export default App;
