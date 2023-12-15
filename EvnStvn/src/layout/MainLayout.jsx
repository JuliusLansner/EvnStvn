import { NavLink, Outlet } from 'react-router-dom';
import Login from '../components/pages/login';
import LoggedIn from '../components/pages/LoggedIn';


function MainLayout({loggedIn,login,logout,facade}) {
    return ( <div id="page">
        <div id="container">



        | <NavLink to="events">Events</NavLink> | 
            <NavLink to="newevents">Nyt event</NavLink> | 
            <NavLink to ="logout">Log ud</NavLink> | 
            <NavLink to ="userpage">Brugerside</NavLink> | 
            
        
            <Outlet/>
             </div>



    </div> );
}

export default MainLayout;