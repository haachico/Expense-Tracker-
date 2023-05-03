import { useContext } from "react";

import { TrackerContext } from "..";

const Balance = () => {
  const { state } = useContext(TrackerContext);

  const income = state.transactions
    .filter((e) => Number(e.amount) > 0)
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const expenses = state.transactions
    .filter((e) => Number(e.amount) < 0)
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const balance = Math.abs(income) - Math.abs(expenses);
  return (
    <div className="balance--component">
      <h2>Balance : ₹ {balance}</h2>

      <div className="income--expense">
        <div className="income">
          <h4>Income</h4>
          <h5>₹ {income}</h5>
        </div>
        <div className="expense">
          <h4>Expense</h4>
          <h5>₹ {Math.abs(expenses)}</h5>
        </div>
      </div>
    </div>
  );
};

export default Balance;
