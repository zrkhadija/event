
import { useState } from "react";
import Sidebar from'./sidebar/Sidebar';

import Navbar from'./navbar/Navbar';


const FormSuccess= () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
   return (
     <div className="container">
   
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
     </div>
   );
 };
export default FormSuccess;


 
