import { useContext } from "react";

import Transaction from "./Transaction";
import { TrackerContext } from "..";

const Transactions = () => {
  const { state } = useContext(TrackerContext);
  return (
    <div className="transactions--history">
      <h4>Transactions history</h4>
      <hr />
      {state.transactions.length === 0 ? (
        <p>Transactions history will appear here</p>
      ) : (
        state.transactions.map((e) => (
          <Transaction text={e.text} amount={e.amount} id={e.id} key={e.id} />
        ))
      )}
    </div>
  );
};

export default Transactions;
