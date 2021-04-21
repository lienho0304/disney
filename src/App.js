
import './App.css';
import Login from './components/Login'
import Header from './components/Header'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    <Switch>
      <Route path ='/hello'>
     <Login/>
      </Route>
      </Switch>
      <Switch>
     <Route path ='/home'>
       <Home/>
     </Route>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
