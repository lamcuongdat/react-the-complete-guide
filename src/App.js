import Expenses from "./components/Expenses/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense/NewExpense";

function App() {
    const expenses = [
        {title: 'Car Insurance', amount: 294.67, date: new Date(2022, 2, 28)},
        {title: 'Car Insurance 1', amount: 24.67, date: new Date(2022, 4, 5)},
        {title: 'Car Insurance 2', amount: 314.67, date: new Date(2022, 2, 24)},
        {title: 'Car Insurance 3', amount: 564.67, date: new Date(2022, 11, 14)},
        {title: 'Car Insurance 4', amount: 512.67, date: new Date(2022, 10, 24)},
        {title: 'Car Insurance 5', amount: 374.67, date: new Date(2022, 9, 5)},
        {title: 'Car Insurance 6', amount: 123.17, date: new Date(2022, 8, 17)},
    ]
    return (
        <div>
            <NewExpense/>
            <Expenses expenses={expenses}/>
        </div>
    );
}

export default App;
