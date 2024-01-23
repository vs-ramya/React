
import React, { useState,useEffect } from 'react';

import Login from './Login/Login';
import Home from './Home/Home';
import MainHeader from './MainHeader/MainHeader';
import Authcontext from './Store/Authcontext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=> {
  const loggedItem=localStorage.getItem('value');
  if(loggedItem=== '1') {
    setIsLoggedIn(true);
  }

  },[]);
  //So that the state is setted to true even before loginHandler is triggered
  


  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('value','1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('value');
  };

  return (
     
      <Authcontext.Provider
       value={{
          isLoggedIn:isLoggedIn,
       }}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </Authcontext.Provider>
      );
}
export default App;
//For  <Authcontext.Provider>

    /*its not a component but with a dot we acan access the property of the authcontext that contains the component
      and it's the provider   
      Authcontext.provider is a component and we can use it in our jsx code
      and we can wrap it around other component 
      those other component and all their descendent component will now have the access to it */
//now remove all the things that is being passed from props related to isloggedin