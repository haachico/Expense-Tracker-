import { useContext } from "react";

import { TrackerContext } from "..";

const Transaction = ({ text, amount, id }) => {
  const { state, dispatch } = useContext(TrackerContext);
  const sign = amount < 0 ? "-" : "+";

  return (
    <div className="transaction--component">
      <div
        className="transaction"
        style={{ backgroundColor: amount < 0 ? "orange" : "lightgreen" }}
      >
        <p>{text}</p>
        <p>
          {sign} ₹ {Math.abs(amount)}
        </p>
      </div>
      <button
        onClick={() => dispatch({ type: "DELETE_TRANSACTION", payload: id })}
      >
        x
      </button>
    </div>
  );
};

export default Transaction;
