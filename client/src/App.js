import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import  Read  from "./components/Read";
import  Write  from "./components/Write";

function App() {
  return (
    <Router>
      <div className="App">

        <div>
          <span><Link to="/read">Read data from Server</Link></span>
          {" "}{" "}{" "}{" "}
          <span><Link to="/write">Write data to Mongodb</Link></span>
        </div>

        <Routes>
          < Route path="/read" element={<Read />} />
          < Route path="/write" element={<Write />} />
        </Routes>

      </div>
    </Router>

  );
}

export default App;
