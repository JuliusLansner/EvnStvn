import { NavLink, Outlet } from 'react-router-dom';
import LoginP from '../components/pages/LoginP';
import LoggedIn from '../components/pages/LoggedIn';


function MainLayout({loggedIn,login,logout,facade}) {
    return ( <div id="page">
        <div id="container">

        {!loggedIn ? (<LoginP login={login} />):(
            <div>
              <LoggedIn facade={facade} />
              <button onClick={logout}>Logout</button>
              | <NavLink to="events">Events</NavLink> | 
            <NavLink to="newevents">Nyt event</NavLink> | 
           
            <NavLink to ="userpage">Brugerside</NavLink> | 
              
            </div>
          )}
        
       
       

      
            
        
            <Outlet/>
             </div>
       


    </div> );
}

export default MainLayout;