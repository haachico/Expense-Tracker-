import { useContext } from "react";
import { TrackerContext } from "..";

const AddTransaction = () => {
  const { state, dispatch } = useContext(TrackerContext);

  const handleAddClick = () => {
    dispatch({ type: "ADD_TRANSACTION" });
  };

  return (
    <div className="add--transaction">
      <h5>Add a transaction here: </h5>
      <p>(Enter "+"/ "-" before amount )</p>

      <label className="text-label">
        Text : {""}
        <input
          type="text"
          value={state.text}
          className="text--input"
          onChange={(e) =>
            dispatch({ type: "ADD_TEXT", payload: e.target.value })
          }
        />
      </label>
      <label className="amount-label">
        Amount (₹): {""}
        <input
          type="number"
          value={state.amount}
          className="amount--input"
          onChange={(e) =>
            dispatch({ type: "ADD_AMOUNT", payload: e.target.value })
          }
        />
      </label>
      <button onClick={handleAddClick}>Add transaction</button>
    </div>
  );
};
export default AddTransaction;
