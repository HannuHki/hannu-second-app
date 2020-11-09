import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    // BEM
    <div className="App">
      <h1>Hannu's Amazon Store 🚀</h1>
      <Header />
      <Home />
      {/* Home */}
    </div>
  );
}

export default App;
