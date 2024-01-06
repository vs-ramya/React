function Expenseform() {
    return (
        <div>
            <form>
                <label for='name'>Expense Title: </label>
                <input type='text' name="title" id='name'></input>
                <label for='money'>Expense Amount: </label>
                <input type='text' name="amount"></input>
                <label for='calendar'>Date: </label>
                <input type='date' name="date"></input> 
                <span> <button>Add Expense</button></span>
                
        
            </form>
            
        </div>

    )
}
export default Expenseform;