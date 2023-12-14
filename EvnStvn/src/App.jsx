import { useState } from 'react'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Events from './components/pages/Events'
import NewEvent from './components/pages/newEvent'
import MainLayout from './layout/MainLayout'
import Logout from './components/pages/Logout'
import UserPage from './components/pages/UserPage'
import facade from './util/apiFacade'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const logout = () =>  {
    facade.logout();
    setLoggedIn(false);
  }

  const login = (username,password) => {
    
    facade.login(username,password).then((res)=>setLoggedIn(true))
  }
 
 
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={
      <MainLayout 
      loggedIn={loggedIn}
      logout={logout}
      login={login}
      facade={facade}
      
      
      />}>
        
        <Route path="newevents" element={<NewEvent loggedIn={loggedIn}/>}/>
        <Route path="events" element={<Events loggedIn={loggedIn}/>}/>
        <Route path="logout" element={<Logout loggedIn={loggedIn}/>}/>
        <Route path="userpage" element={<UserPage loggedIn={loggedIn}/>}/>
        
        



      </Route>
    )
  )

  return (
   <RouterProvider router={routes}/>

   
  )
}

export default App
