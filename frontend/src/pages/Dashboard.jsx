import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const { data } = await API.get("/transactions");
    setTransactions(data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div>
      <h1>Expense Tracker</h1>

      {transactions.map((item) => (
        <div key={item._id}>
          <h3>{item.title}</h3>
          <p>{item.amount}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
