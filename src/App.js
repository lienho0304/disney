
import './App.css';
import Login from './components/Login'
import Header from './components/Header'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import Series from './components/Series';
import Movies from './components/Movies';
import Detail from './components/Detail';
import Search from './components/Search'
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
     <Route path ='/series'>
       <Series/>
     </Route>
     <Route path ='/movies'>
       <Movies/>
     </Route>
     <Route path ='/details'>
       <Detail/>
     </Route>
     <Route path ='/search'>
       <Search/>
     </Route>
     
     
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
