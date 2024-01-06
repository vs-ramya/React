 import React,{useState} from 'react';
 import ExpenseDate from './ExpenseDate';

import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  //setAmount is a function used to update the value of amount   and usestate used to inialize the amount
  //const [amount, setAmount] uses array destructuring to assign names to the elements returned by the useState hook.
  //The first element (amount) represents the current state value, and the second element (setAmount) is the function that can be used to update the state variable amount
    const [amount,setAmount]=useState(props.amount);
    function clickHandler() {
      setAmount('$100');
      console.log(amount);
    }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{amount}</div>
        <button onClick={clickHandler}>Change Amount</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;