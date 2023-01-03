import './NewExpense.css'
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
    const onSubmitExpense = (expense) => {
        props.onAddExpense(expense);
    };
    return <div className='new-expense'>
        <ExpenseForm onSubmitExpense={onSubmitExpense}/>
    </div>
}

export default NewExpense;