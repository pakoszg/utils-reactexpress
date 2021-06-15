import "./Customers.css";
import { useState, useEffect } from "react";

function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("/api/customers")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCustomers(data);
      });
  }, []);

  return (
    <div className="Customers">
      <h2>Customers</h2>
      <ul>
        {customers &&
          customers.map((customer) => (
            <li key={customer.id}>
              {customer.firstName} {customer.lastName}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Customers;
