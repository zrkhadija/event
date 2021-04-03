import "./navbar.css";
import avatar from "../../assets/avatar.svg";

const Navbar=({sidebarOpen,openSidebar})=>{
             return(



  <nav className="navbar">
       <div className="nav_icon" onClick={()=>openSidebar}>
            <i className="fa fa-bars"></i>
       </div>

      <div className="navbar__left">
                   <a href="#">
                   <a  className="active_link"href="#"></a></a>
                  
                 {/*  <a  className="active_link"href="#">admin</a>*/}
             </div>
            <div className="navbar__right">
                  <div class="search-wrapper">
                      <span className="las la-search"></span>
                      <input type="search" placeholder="search here" />
               
     </div>
                      <a href="#">
                          <i className="fa fa-clock-o"></i>
                      </a>

                    <a href="#">
                       <img width="30" src={avatar} alt="avatar"></img>
                     </a>
                 </div>
    </nav>

    )
}
export default Navbar;