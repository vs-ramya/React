
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './Expense.css';

function Expense(props) {
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <div className='expense-item__price'>
        <ExpenseDetails amount={props.amount}/>
        </div> 
        <ExpenseDetails location={props.location}   item={props.item}/>
      </div>
    </div>
  );
}

export default Expense;