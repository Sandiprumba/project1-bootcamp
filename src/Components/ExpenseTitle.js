import React from "react";
import "./ExpenseTitle.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseForm from "./ExpenseForm";

const ExpenseTitle = (props) => {
  console.log(props.expenses);
  return (
    <div>
      <div className="new-expense">
        <ExpenseForm formData={props.formData} />
      </div>
      <div className="expenses">
        {props.expenses.map((item) => (
          <ExpenseItem
            key={item.id}
            date={item.date}
            title={item.title}
            amount={item.amount}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpenseTitle;
