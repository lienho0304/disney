import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import LoginUser from "./components/LoginUser";
import Movies from "./components/Movies";
import Register from "./components/Register";
import Search from "./components/Search";
import Series from "./components/Series";
import Watchlist from "./components/Watchlist";
function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/login" component={LoginUser} />
        <Header />
        <Switch>
          <Route path="/hello" component={Login} />

          <Route path="/register" component={Register} />

          <Route path="/home" component={Home} />

          <Route path="/series" component={Series} />

          <Route path="/movies" component={Movies} />

          <Route path="/details" component={Detail} />

          <Route path="/search" component={Search} />

          <Route path="/watchlist" component={Watchlist} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
