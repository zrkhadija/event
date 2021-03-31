import { useState } from "react";
import "./App.css";
import login from "./components/Login/login";

import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import {
  BrowserRouter as Router, Switch, Route, Link 
  } from 'react-router-dom';

const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return ( <Router>
    <div className="container">
    
      {/* test client */}
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
     <Link to="/signup">login </Link>
     <Link to="/login">sign up</Link>
     
     <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
     <Switch>
   <Route path="/" exact component={App}/>
   <Route path="/login" component={login}/>
   </Switch>
     </div>
     </Router>
   
    
  );
};

export default App;