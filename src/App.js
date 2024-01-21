
import React, { useState,useEffect } from 'react';

import Login from './Login/Login';
import Home from './Home/Home';
import MainHeader from './MainHeader/MainHeader';

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
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}
export default App;
