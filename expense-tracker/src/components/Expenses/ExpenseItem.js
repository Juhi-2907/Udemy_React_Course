import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const expenseDate = props.date;
  const expenseAmount = props.amount;
  // const expenseTitle = props.title;
  /* state is managed on per componenet instance basis i.e if this 
  component is used 5 time there would be 5 seperate state. */
  //register state with use state
  const [expenseTitle, setExpenseTitle] = useState(props.title);
  const clickHandler = () => {
    setExpenseTitle("Updated");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      {/* <button onClick={clickHandler}>Update</button> */}
    </Card>
  );
}

export default ExpenseItem;
