import './App.css';
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
  <Router>
    <div className="App">
        <Route path="/" component={Home} exact />
    </div>
  </Router>
  )
}

export default App;
