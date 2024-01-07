import Expenseform from "./Expenseform";
function newExpense(props) {
    //we can use any name in the parameter it's upto us
    //in the Expenseform we pass obj as a value to the function  props.savaDataHandler(obj);
    // that's why here we are having our own parameter
    function saveDataHandler(ExpenseData) {
        //destructing  pulling out from obj
        const obj={
            ...ExpenseData,
            id:Math.random.toString(),
        }
       // console.log(obj);
        props.onadd(obj);

    }
    return (
        <div>
            {/*saveData is our own naming we can name it whatever we want it is a function that gonna be executed with parameter 
            pass the function as a value to the savedata*/} 
            <Expenseform saveData={saveDataHandler}></Expenseform>
            {/*Since it is a custom component and custom attribute we have to  call it manually @ expenseform component*/}
        </div>

    )
}
export  default newExpense;