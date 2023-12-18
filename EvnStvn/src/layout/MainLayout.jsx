import { NavLink, Outlet } from 'react-router-dom';
import LoginP from '../components/pages/LoginP';
import LoggedIn from '../components/pages/LoggedIn';
import { useNavigate } from "react-router-dom";


function MainLayout({loggedIn,login,facade,setUserName,setLoggedIn}) {

  const navigate = useNavigate();
    
    const logoutx = () => {
        facade.logout();
        setLoggedIn(false);
        setUserName("");
        navigate('/');
      };
    return ( <div id="page">
        <div id="container">

        {!loggedIn ? (<LoginP login={login} />):(
            <div>
              
              <button onClick={logoutx}>Logout</button>
              | <NavLink to="events">Events</NavLink> | 
            <NavLink to="newevents">Nyt event</NavLink> | 
           
            <NavLink to ="userpage">Brugerside</NavLink> | 
              
            </div>
          ) 
          }
          
        
       
       

      
            
        
            <Outlet/>
             </div>
       


    </div> );
}

export default MainLayout;