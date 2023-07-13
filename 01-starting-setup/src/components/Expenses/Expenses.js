import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  //1 const [filterInfoText, setFilterInfoText] = useState("2019, 2021 & 2022");

  //2 let filterInfoText = "2019, 2021 & 2022";

  // if (filteredYear === "2019") {
  //   filterInfoText = "2020, 2021 & 2022";
  // } else if (filteredYear === "2021") {
  //   filterInfoText = "2019, 2020 & 2022";
  // } else if (filteredYear === "2022") {
  //   filterInfoText = "2019, 2020 & 2021";
  // }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    //1 if (selectedYear === "2019") {
    //   setFilterInfoText("2020, 2021 & 2022");
    // } else if (selectedYear === "2020") {
    //   setFilterInfoText("2019, 2021 & 2022");
    // } else if (selectedYear === "2021") {
    //   setFilterInfoText("2019, 2020 & 2022");
    // } else {
    //   setFilterInfoText("2019, 2020 & 2021");
    // }
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* <p>Data for years {filterInfoText} is hidden.</p> */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
        {/* <ExpenseItem
          date={props.items[0].date}
          title={props.items[0].title}
          amount={props.items[0].amount}
        ></ExpenseItem>
        <ExpenseItem
          date={props.items[1].date}
          title={props.items[1].title}
          amount={props.items[1].amount}
        ></ExpenseItem>
        <ExpenseItem
          date={props.items[2].date}
          title={props.items[2].title}
          amount={props.items[2].amount}
        ></ExpenseItem>
        <ExpenseItem
          date={props.items[3].date}
          title={props.items[3].title}
          amount={props.items[3].amount}
        ></ExpenseItem> */}
      </Card>
    </div>
  );
};

export default Expenses;
