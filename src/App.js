import React from "react";
import "./App.css";
import Customers from "./components/customers";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import { Route, Redirect, Switch } from "react-router-dom";
import Navbar from "./components/common/navbar";

function App() {
  return (
    <React.Fragment>
    <Navbar />
    <main className="container">
      <Switch>
        <Route path="/movies/:id" component={MovieForm}/>
      <Route path="/movies" component={Movies}></Route>
      <Route path="/customers" component={Customers}></Route>
      <Route path="/rentals" component={Rentals}></Route>
      <Route path="/not-found" component={NotFound}></Route>
      <Redirect from="/vidly" exact to="/movies" />
      <Redirect to="/not-found" />
      </Switch>
    </main>
    </React.Fragment>
  );
}

export default App;
