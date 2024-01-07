function Expenseform() {
    function titleChangeHandler(event) {
        
        console.log(event.target.value);
    }
    return (
        <div>
            <form>
                <label>Expense Title: </label>
                {/* The onchange event is an event handler in HTML& JS that is triggered when the value of an input  is changed by the user */}
                <input type='text' name="title" id='name' onChange={titleChangeHandler}></input>
                <label>Expense Amount: </label>
                <input type='text' name="amount" onChange={titleChangeHandler}></input>
                <label>Date: </label>
                <input type='date' min='2022-01-01' max='2023-12-31' name="date" onChange={titleChangeHandler}></input> 
                <span> <button type="submit">Add Expense</button></span>
                
        
            </form>
            
        </div>

    )
}
export default Expenseform;