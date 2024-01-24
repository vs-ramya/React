import React from 'react';
import { useContext } from 'react';
import classes from './Navigation.module.css';
import Authcontext from '../Store/Authcontext';

const Navigation = (props) => {
  //Using use context hook instead of consumer method because it's simple
  //Usecontext allows us to use context and allows us to tap and listen to it
  //Inorder to use UseContext remove consumer and then call the authcontext inside usecontext
  const ctx=useContext(Authcontext);
        return (
          <nav className={classes.nav}>
          <ul>
        
            {ctx.isLoggedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {ctx.isLoggedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {ctx.isLoggedIn && (
              <li>
                <button onClick={props.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
        )
};

export default Navigation;
//Consumer takes a child which is actually a function that returns all the navigatiion jsx code inside it
//Now the authContext code is being rendered here through consumer so replace every place of props.isLoggedIn with 
//ctx.isloggedin