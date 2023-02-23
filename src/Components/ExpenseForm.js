import React from "react";
import "./ExpenseForm.css";
export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "e1",
      title: "title",
      date: new Date(),
      amount: 0,
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    //
    const expense = {
      title: this.state.title,
      date: new Date(this.state.date),
      amount: Number(this.state.amount),
      id: this.state.title + 1,
    };
    this.props.formData(expense);

    this.setState({
      title: "",
      date: "",
      amount: 0,
    });
  };

  handleChange = (e) => {
    let { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="new-expense">
            <label className="header"> Expenses</label>
            <div className="new-expense_control">
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>

            <div className="new-expense_control">
              <input
                type="date"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </div>
            <div className="new-expense_control">
              <input
                type="number"
                name="amount"
                value={this.state.amount}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="new-expensebutton">
            <button type="submit" value="submit">
              Add Expense
            </button>
          </div>
        </form>
      </div>
    );
  }
}
