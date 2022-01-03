import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import AllProducts from './components/AllProducts/AllProducts';
import { useState } from 'react';
import Login from './components/Login/Login/Login';

function App() {
  const accessToken = localStorage.getItem('accessToken');
  const displayName = localStorage.getItem('displayName');
  const email = localStorage.getItem('email');
  const photoURL = localStorage.getItem('photoURL');
  const isAdmin = localStorage.getItem('isAdmin');
  const [loggedInUser, setLoggedInUser] = useState(accessToken ? { accessToken, displayName, email, photoURL, isAdmin } : null);
  // const matches960px = useMediaQuery('(min-width:960px)');
  console.log(loggedInUser);

  // Store Cars
  const [cars, setCars] = useState([]);
  const [car, setCar] = useState([]);

  const [orderInfo, setOrderInfo] = useState({
    ownerName: loggedInUser && loggedInUser.displayName,
    ownerEmail: loggedInUser && loggedInUser.email,
    ownerPhoneNumber: '',
    ownerAddress: '',
    carId: car._id,
    carName: car.carName,
    carPrice: car.carPrice,
    quantity: 1,
    date: new Date(),
    status: 'pending',
  });
  console.log("Single Package Issue", car);
  console.log("All Packages", cars);
  console.log("Order Info", orderInfo);
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

      <Switch>
        <Route path="/login">
          <Login></Login>
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
