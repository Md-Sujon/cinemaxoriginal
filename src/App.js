import './App.css';
import Home from './component/Home/Home';
import HeaderNav from './component/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './component/NoMatch/NoMatch';

function App() {
  return (
   
   <Router>
      <HeaderNav></HeaderNav>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>

      <Route path="/home">
      <Home></Home>
      </Route>

      <Route path="*">
        <NoMatch/>
      </Route>

    </Switch>
   </Router>
      
       
        
      
   
  );
}

export default App;
