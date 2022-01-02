import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
