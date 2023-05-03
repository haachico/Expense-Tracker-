import { createContext, useEffect, useReducer } from "react";
import uuid from "react-uuid";

export const TrackerContext = createContext();

const initialState = {
  text: "",
  amount: "",
  transactions: []
};

const transactionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TEXT":
      return {
        ...state,
        text: action.payload
      };
    case "ADD_AMOUNT":
      return {
        ...state,
        amount: action.payload
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [
          ...state.transactions,
          { id: uuid(), text: state.text, amount: state.amount }
        ],
        text: "",
        amount: ""
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter((e) => e.id !== action.payload)
      };
    default:
      return state;
  }
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(transactionReducer, initialState);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("tracker-app-data"));

    if (savedNotes) {
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "tracker-app-data",
      JSON.stringify(state.transactions)
    );
  }, [state.transactions]);

  return (
    <div>
      <TrackerContext.Provider value={{ state, dispatch }}>
        {children}
      </TrackerContext.Provider>
    </div>
  );
};
