//import React,{useState} from "react";
function Expenseform(props) {  
    
    function clickHandler(event) {
    event.preventDefault();
    let newExpenses=document.getElementById('name');
    let newAmount=document.getElementById('money');
    let newDate=document.getElementById('calendar');
    let name=newExpenses.value;
    let amount=newAmount.value;
    let Date= newDate.value;
            let obj={
                ExpenseName:name,
                ExpenseAmount:amount,
                ExpenseDate:Date,

            }
            //calling custom component from child to parent ,we can able to access it eventhough it is not in this module because
            // of this line <Expenseform saveData={saveDataHandler}></Expenseform> as the saveData propt points the savedatahandler() function
            //saveData super important parent thet calls child to parent 

            props.saveData(obj);


        }
    return (
        <div>
            <form>
                <label>Expense Title: </label>
                {/* The onchange event is an event handler in HTML& JS that is triggered when the value of an input  is changed by the user */}
                <input type='text' name="title" id='name'></input>
                <label>Expense Amount: </label>
                {/*This value={enteredAmount} may be declared or even nothing happens whwn you didnt even declare it */}
                <input type='text' name="amount" id='money'  ></input>
                <label>Date: </label>
                <input type='date' min='2022-01-01' max='2023-12-31' name="date" id='calendar'></input> 
                <span> <button type="submit" onClick={clickHandler}>Add Expense</button> </span>
                
        
            </form>
            
        </div>

    )
}
export default Expenseform;
  
        