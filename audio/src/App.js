 import './App.css';
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Login from './components/login'
function App() {
  return (
    <div className="App">
      
    <Router>
      <Routes>
    <Route exact path="/"/>
      <Login />
    </Routes>
     
  </Router>
    </div>
  );
}

export default App;
