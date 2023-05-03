import "./styles.css";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import Transactions from "./Components/Transactions";
import AddTransaction from "./Components/AddTransaction";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Balance />
      <Transactions />
      <AddTransaction />
    </div>
  );
}
