import React,{useState} from "react";
function Expenseform() {  
        const [enteredTitle, setEnteredTitle] = useState('');
        const [enteredAmount, setEnteredAmount] = useState('');
        const [enteredDate, setEnteredDate] = useState('');
    
        function titleChangeHandler(event) {
            setEnteredTitle(event.target.value);
        }
    
        function amountChangeHandler(event) {
            setEnteredAmount(event.target.value);
        }
    
        function dateChangeHandler(event) {
            setEnteredDate(event.target.value);
        }
    return (
        <div>
            <form>
                <label>Expense Title: </label>
                {/* The onchange event is an event handler in HTML& JS that is triggered when the value of an input  is changed by the user */}
                <input type='text' name="title" id='name' value={enteredTitle} onChange={titleChangeHandler}></input>
                <label>Expense Amount: </label>
                {/*This value={enteredAmount} may be declared or even nothing happens whwn you didnt even declare it */}
                <input type='text' name="amount" value={enteredAmount} onChange={amountChangeHandler}></input>
                <label>Date: </label>
                <input type='date' min='2022-01-01' max='2023-12-31' name="date" value={enteredDate} onChange={dateChangeHandler}></input> 
                <span> <button type="submit">Add Expense</button></span>
                
        
            </form>
            
        </div>

    )
}
export default Expenseform;