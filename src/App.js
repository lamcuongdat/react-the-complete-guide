import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
        {title: 'Car Insurance', amount: 294.67, date: new Date(2022, 2, 28)},
        {title: 'Car Insurance 1', amount: 24.67, date: new Date(2022, 4, 5)},
        {title: 'Car Insurance 2', amount: 314.67, date: new Date(2022, 2, 24)},
        {title: 'Car Insurance 3', amount: 564.67, date: new Date(2022, 11, 14)},
    ]
    return (
        <div>
            <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
            <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
            <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
        </div>
    );
}

export default App;
