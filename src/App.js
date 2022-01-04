import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Login/Login/Login';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SinglePage from './components/Shared/SinglePage/SinglePage';
import { createContext, useState } from 'react';
import NotFound from './components/NotFound/NotFound';

export const UserContext = createContext();


function App() {
  const accessToken = localStorage.getItem('accessToken');
  const displayName = localStorage.getItem('displayName');
  const email = localStorage.getItem('email');
  const photoURL = localStorage.getItem('photoURL');
  const isAdmin = localStorage.getItem('isAdmin');
  const [loggedInUser, setLoggedInUser] = useState( accessToken ? { accessToken, displayName, email, photoURL, isAdmin } : null );

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/products/:id">
            <SinglePage></SinglePage>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/Register">
            <Login></Login>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
