
import "./App.css";
import Login from './components/Login';
import Form from './components/Form';
import Creationcompagne from './components/Creationcompagne';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";
import SendMsg from "./components/SendMsg";


const App = () => {

  return ( 
    
    <Router>
     <div className="container">
    
    <Switch>
       <Route  path="/" exact component={Form}/>
        <Route  path="/Login" component={Login}/> 
        <Route path = "/Creationcompagne" component={Creationcompagne}/>
        <Route path="/SendMsg" component={SendMsg}/>
          
             </Switch>
         </div>
        
  
   </Router>
     
  );
};

export default App;