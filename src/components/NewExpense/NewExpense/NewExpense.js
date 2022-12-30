import './NewExpense.css'
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = () => {
    const onSubmitExpense = (expense) => {
        console.log(expense)
    };
    return <div className='new-expense'>
        <ExpenseForm onSubmitExpense={onSubmitExpense}/>
    </div>
}

export default NewExpense;