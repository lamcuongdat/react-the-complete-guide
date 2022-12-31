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
            <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
            <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
            <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
            <ExpenseItem title={expenses[4].title} amount={expenses[4].amount} date={expenses[4].date}/>
            <ExpenseItem title={expenses[5].title} amount={expenses[5].amount} date={expenses[5].date}/>
            <ExpenseItem title={expenses[6].title} amount={expenses[6].amount} date={expenses[6].date}/>
        </Card>
    );
}

export default Expenses;