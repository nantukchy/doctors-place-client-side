import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Footers from "./components/Pages/footer/Footers";
import Headers from "./components/Pages/header/Headers";
import Home from "./components/Pages/home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Offers from "./components/Pages/offers/Offers";
import Package from "./components/Pages/package/Package";
import Wishlist from "./components/Pages/wishlist/Wishlist";
import AddService from "./components/Pages/addService/AddService";
import Login from "./components/Pages/login/Login";
import initializeAuthentication from "./firebase/firebase.init";
import PrivateRoute from './privateRoute/PrivateRoute';
import AuthProvider from "./context/AuthProvider";


initializeAuthentication();

function App() {
  return (
    <AuthProvider>
      <Router>
      <Headers></Headers>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/offers">
          <Offers></Offers>
        </Route>
        <PrivateRoute path="/package">
          <Package></Package>

        </PrivateRoute>
        <PrivateRoute exact path ="/wishlist/:wishId">
          <Wishlist></Wishlist>

        </PrivateRoute>
        <Route path="/addService">
          <AddService></AddService>

        </Route>
        <Route path="/login">
          <Login></Login>

        </Route>
      </Switch>
      <Footers></Footers>
   </Router>
        
      </AuthProvider>
    
  );
}

export default App;
