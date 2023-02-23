import "./ExpenseItem.css";
import React from "react";
import ExpenseDate from "./ExpenseDate";
class ExpenseItem extends React.Component {
  render() {
    return (
      <div className="expense-item">
        <ExpenseDate date={this.props.date} />
        <div className="expense-item_description">
          <h2>{this.props.title}</h2>
          <div className="expense-item_price">{this.props.amount}</div>
        </div>
      </div>
    );
  }
}

export default ExpenseItem;
