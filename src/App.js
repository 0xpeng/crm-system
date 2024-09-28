import React, { useState } from 'react';
import './App.css';

function App() {
  const [customers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', phone: '098-765-4321' }
  ]);

  const [products] = useState([
    { id: 1, name: 'Product A', description: 'High quality product A', price: 100 },
    { id: 2, name: 'Product B', description: 'High quality product B', price: 150 }
  ]);

  return (
    <div className="App">
      <header>
        <h1>CRM System</h1>
      </header>

      <section>
        <h2>Customers</h2>
        <ul>
          {customers.map(customer => (
            <li key={customer.id}>
              <strong>{customer.name}</strong> - {customer.email} ({customer.phone})
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Products</h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <strong>{product.name}</strong> - {product.description} (${product.price})
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
