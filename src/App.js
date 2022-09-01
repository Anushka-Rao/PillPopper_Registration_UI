import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Registration from "./components/Registration";

function App(){
     return (
      <div>
        <Header />
        <div className="container">
        <Router>
          <Routes>
            <Route exact path="/" element={<Registration />} />
          </Routes>
        </Router>
        </div>
      </div>
     )
}

export default App;