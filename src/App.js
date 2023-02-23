import React from "react";
import "./App.css";
import ExpenseTitle from "./Components/ExpenseTitle";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [
        {
          id: "e2",
          title: "Food",
          amount: 250,
          date: new Date(),
        },
      ],
    };
  }
  // formdata function will take object from expenseform and assign it inside new array variable
  formData = (expense) => {
    console.log(expense);
    let newArray = [...this.state.expenses, expense];
    // update expenses with the new array using setstate and re-render the object with var newarray
    this.setState({
      expenses: newArray,
    });
    console.log(newArray);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ExpenseTitle
            formData={this.formData}
            expenses={this.state.expenses}
          />
        </header>
      </div>
    );
  }
}

export default App;
