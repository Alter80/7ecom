import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Login/Login/Login';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SinglePage from './components/Shared/SinglePage/SinglePage';




function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>

        <Route path="/">
          <Home></Home>
        </Route>

        <Route exact path="/products/:id">
          <SinglePage></SinglePage>
        </Route>

        <Route exact path="/login">
          <Login></Login>
        </Route>
      </Switch>

      <Footer></Footer>
    </Router>
  );
}

export default App;
