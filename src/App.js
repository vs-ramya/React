import Expenses from './components/Expenses';
import Expenseform from './components/Expenseform';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Food',
      amount: 'Rs.3000',
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'Tour', amount: 'Rs.7000', date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Clothing',
      amount: 'Rs.5000',
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'EMI',
      amount: 'Rs.12000',
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenseform></Expenseform>
      <Expenses items={expenses} />
      
    </div>
  );
}

export default App;