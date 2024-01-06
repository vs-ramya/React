import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  function clickHandler() {
    const parentElement =  document.querySelector('.expense-item');
    parentElement.remove();
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>Delete</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;