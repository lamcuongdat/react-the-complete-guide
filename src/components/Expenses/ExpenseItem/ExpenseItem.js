import './ExpenseItem.css'
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";
import {useState} from "react";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title)
    const onClick = () => {
        setTitle('Updated')
        console.log(title);
    };
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={onClick}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;