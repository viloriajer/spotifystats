import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Start } from './pages/Start';
import { Information } from './pages/Information';


function App() {
  return (
    <Router>

<Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route path="/info">
            <Information />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
