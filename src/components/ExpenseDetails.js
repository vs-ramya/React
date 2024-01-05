function ExpenseDetails(props) {
    return(
<div>
    <h2>{props.item}</h2>
     <div>{props.amount}</div>
    <h3>{props.location}</h3>

</div>
    );
}
export default ExpenseDetails;