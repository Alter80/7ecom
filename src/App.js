import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import AllProducts from './components/AllProducts/AllProducts';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>

      <Switch>
        <Route path="/allproducts">
          <AllProducts></AllProducts>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
