
import Expense  from './components/Expense';

function App() {
  //A component in react is just a javascript function which then return a html code 
  let expenses=[ 
    { 
      date:new Date(2023,2,20),
      item:"Electricity",
      amount:"Rs.2000",
      location:"Chennai",
 },
 { 
  date:new Date(2022,6,20),
  item:"Food",
  amount:"Rs.4000",
  location:"Trichy",
},
{ 
  date:new Date(2023,8,20),
  item:"Clothing",
  amount:"Rs.9000",
  location:"Chennai",
},
{ 
  date:new Date(2021,11,20),
  item:"EMI",
  amount:"Rs.2000",
  location:"Ariyalur",
},

]
let expenseComponents = [];
for (let i = 0; i < expenses.length; i++) {
  expenseComponents.push(
    <Expense
      key={i}
      date={expenses[i].date}
      item={expenses[i].item}
      amount={expenses[i].amount}
      location={expenses[i].location}
      >
    </Expense>
  );
}

return (
  <div>
    <h2>Let's get started</h2>
    {expenseComponents}
  </div>
);
}

export default App;
