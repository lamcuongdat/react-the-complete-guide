import './ExpenseForm.css'
import {useState} from "react";
const ExpenseForm = (props) => {
   const [userInput, setUserInput] = useState({
       enteredTitle: '',
       enteredAmount: '',
       enteredDate: ''
   })

    function onTitleEntered(event) {
        setUserInput((prev) => {
            return {
                ...prev,
                enteredTitle: event.target.value
            }
        })
    }

    function onAmountChange(event) {
        setUserInput((prev) => {
            return {
                ...prev,
                enteredAmount: event.target.value
            }
        })
    }

    function onDateChange(event) {
        setUserInput((prev) => {
            return {
                ...prev,
                enteredDate: event.target.value
            }
        })
    }

    function submitHandler(event) {
        event.preventDefault();
        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: userInput.enteredDate
        }
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })
        props.onSubmitExpense(expenseData);
    }

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text"
                       value={userInput.enteredTitle}
                       onChange={onTitleEntered}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number"
                       min='0.01'
                       step='0.01'
                       value={userInput.enteredAmount}
                       onChange={onAmountChange}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date"
                       min='2019-01-01'
                       max='2022-12-31'
                       value={userInput.enteredDate}
                       onChange={onDateChange}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.stopEditing}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;