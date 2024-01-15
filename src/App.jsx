import { useState } from "react";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
 
} from "react-router-dom";
import "./App.css";
import Events from "./components/pages/Events";
import NewEvent from "./components/pages/newEvent";
import MainLayout from "./layout/MainLayout";

import UserPage from "./components/pages/UserPage";
import facade from "./util/apiFacade";
import EventDetails from "./components/pages/EventDetails";
import LoggedIn from "./components/pages/LoggedIn";
import ErrorBoundary from "./Errorhandling/err";

//


function App() {
  
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
 
  
  const login = (username, password) => {
    facade.login(username, password).then((login) => {
      setLoggedIn(true)
      setUserName(username)
    });
  };


  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <MainLayout
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            setUserName={setUserName}
            login={login}
            facade={facade}
            userName={userName}
          />
        }
      >
        <Route path="newevents" element={<NewEvent/>} />
        <Route path="events" element={<Events/>} />
        <Route path="events/event/:id" element={<EventDetails/>} />
        
        <Route path="userpage" element={<UserPage username={userName}/>} />
      </Route>
    )
  );
//using errorboundary from err.jsx
  return(
    <div>
    <ErrorBoundary>
       <RouterProvider router={routes} />
      { loggedIn && <LoggedIn userName={userName} />}
    </ErrorBoundary>
  </div>);
}

export default App;
