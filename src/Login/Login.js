import React, { useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import { useReducer } from 'react';
const Reducer=((State,action)=> {
  if(action.type==='Use-reducer') {
       return {value:action.val,isvalid:action.val.includes('@')}

  }
  if(action.type==='Event-blur') 
  {
      return {value:State.value,isvalid:State.value.includes('@')}
 
  }
   return {value:'',isvalid:'false'}

})

const Login = (props) => {
  //const [enteredEmail, setEnteredEmail] = useState('');
  //const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [enteredcollege,setenteredcollege]=useState();
  const [collegeIsValid, setcollegeIsValid] = useState(false);
  const [formIsValid,setFormIsValid]=useState(false);
 const[emailState,dispatch] =useReducer(Reducer,{value:'',isvalid:'false'}); 
 /* useEffect(() => {
    //Debouncing using setTimeout
    const identifier=setTimeout(()=> {
      setFormIsValid(
        emailState.value.includes('@') &&
        enteredPassword.trim().length > 6 &&
        enteredcollege.trim().length !== 0
      );
      console.log('hello');

    },10000)
    //Clean up function
    return(()=>{
      clearTimeout(identifier);
      console.log('welcome');

    })
  }, [enteredEmail, enteredPassword, enteredcollege]);
  */

  const emailChangeHandler = (event) => {
    dispatch({
      type:'Use-reducer',
      val:event.target.value,
    });

    setFormIsValid(
    emailState.isvalid &&
    enteredPassword.trim().length > 6 &&
    enteredcollege.trim().length > 0
  );


  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && emailState.isvalid 
    );
  };
const collegeChangeHandler =(event) => {
  setenteredcollege(event.target.value);
   setFormIsValid(
      event.target.value.trim().length > 0
    );
}
  const validateEmailHandler=() => {
    dispatch ({
      type:'Event-blur'

    })
  }

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };
  const validatecollegeHandler=()=> {
    setcollegeIsValid(enteredcollege.trim().length !==0)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
  emailState.value === '' ? classes.invalid : ''
}`}

        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
          </div>
           <div
  className={`${classes.control} ${
    collegeIsValid === false ? classes.invalid : ''
  }`}
>
  <label htmlFor="college">College name</label>
  <input
    type="college"
    id="college_name"
    value={enteredcollege}
    onChange={collegeChangeHandler}
    onBlur={validatecollegeHandler}
  />
</div>

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
//Use usereducer to update password and collegename