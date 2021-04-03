
import "./App.css";
import Login from './components/Login';
import Form from './components/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";


const App = () => {

  return ( 
    
    <Router>
     <div className="container">
    
    <Switch>
       <Route  path="/" exact component={Login}/>
        <Route  path="/FormSignup" component={Form}/> 
          
             </Switch>
         </div>
        
  
   </Router>
     
  );
};

export default App;