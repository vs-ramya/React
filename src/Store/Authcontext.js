import React from "react";
//Creates a context object and it takes a default context as parameter it may be a string or object etc..
const Authcontext=React.createContext({
    isLoggedIn:false,
});
export default Authcontext;