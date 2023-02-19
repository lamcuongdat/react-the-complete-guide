import Expenses from "./components/Expenses/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense/NewExpense";
import {useState} from "react";
const INITIAL_DUMMY_EXPENSES = [
    {id: 'id1', title: 'Car Insurance', amount: 294.67, date: new Date(2022, 2, 28)},
    {id: 'id2', title: 'Car Insurance 1', amount: 24.67, date: new Date(2021, 4, 5)},
    {id: 'id3', title: 'Car Insurance 2', amount: 314.67, date: new Date(2022, 2, 24)},
    {id: 'id4', title: 'Car Insurance 3', amount: 564.67, date: new Date(2020, 11, 14)},
    {id: 'id5', title: 'Car Insurance 4', amount: 512.67, date: new Date(2020, 10, 24)},
    {id: 'id6', title: 'Car Insurance 5', amount: 374.67, date: new Date(2019, 9, 5)},
    {id: 'id7', title: 'Car Insurance 6', amount: 123.17, date: new Date(2021, 8, 17)},
];
function App() {
    const [expenses, setExpenses] = useState(INITIAL_DUMMY_EXPENSES);
    const onAddExpense = (expense) => {
        setExpenses((prev) => {
            return [{
                ...expense,
                date: new Date(expense.date),
                id: Math.random()
            },
                ...prev];
        })
    }
    return (
        <div>
            <NewExpense onAddExpense={onAddExpense}/>
            <Expenses expenses={expenses}/>
        </div>
    );
}

export default App;
