import './Expenses.css'
import Card from "../Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import {useState} from "react";
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesChart from '../ExpensesChart/ExpensesChart';

const Expenses = (props) => {
    const expenses = props.expenses;
    const [yearFilter, setYearFilter] = useState(2022)

    const filteredExpense = expenses.filter(expense => expense.date.getFullYear() === yearFilter);
    const onYearSelect = (year) => {
        setYearFilter(parseInt(year));
    };
    return (
        <Card className="expenses">
            <ExpensesFilter onYearSelect={onYearSelect}
                            currentYear={yearFilter}/>
            <ExpensesChart expenses={filteredExpense}/>
            <ExpensesList expenses={filteredExpense}/>
        </Card>
    );
}

export default Expenses;