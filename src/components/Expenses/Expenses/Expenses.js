import './Expenses.css'
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import {useState} from "react";

const Expenses = (props) => {
    const expenses = props.expenses;
    const [yearFilter, setYearFilter] = useState(2022)

    const onYearSelect = (year) => {
        setYearFilter(parseInt(year));
    };
    return (
        <Card className="expenses">
            <ExpensesFilter onYearSelect={onYearSelect}
                            currentYear={yearFilter}/>
            {expenses.map(expense => <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}/>)}
        </Card>
    );
}

export default Expenses;