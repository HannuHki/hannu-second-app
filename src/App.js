import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from "./Checkout";

function App() {
  return (
    // BEM
    <Router>
      <div className="App">
        <h1>Hannu's Amazon Store 🚀</h1>
        <Header />
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Tämä on vielä vaiheessa</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
