import React from 'react';
import classes from './Navigation.module.css';
import Authcontext from '../Store/Authcontext';

const Navigation = (props) => {
  return (
    <Authcontext.Consumer>
       {((ctx) => {
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

      })}
    
    </Authcontext.Consumer>
  );
};

export default Navigation;
//Consumer takes a child which is actually a function that returns all the navigatiion jsx code inside it
//Now the authContext code is being rendered here through consumer so replace every place of props.isLoggedIn with 
//ctx.isloggedin