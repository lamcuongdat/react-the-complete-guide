import './NewExpense.css'
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import {useState} from 'react';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    const onSubmitExpense = (expense) => {
        props.onAddExpense(expense);
        setIsEditing(false);
    };

    function startEditing() {
        setIsEditing(true);
    }

    function stopEditing() {
        setIsEditing(false);
    }

    return <div className='new-expense'>
        {!isEditing
            ? <button onClick={startEditing}>Add New Expense</button>
            : <ExpenseForm onSubmitExpense={onSubmitExpense}
                           stopEditing={stopEditing}/>}
    </div>
}

export default NewExpense;