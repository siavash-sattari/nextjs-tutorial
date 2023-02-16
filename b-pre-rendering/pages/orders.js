import { useEffect, useState } from 'react';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch('http://localhost:5000/orders');
      const responseData = await response.json();
      setOrders(responseData);
    };

    fetchOrders();
  }, []);

  return (
    <>
      {orders.map(item => (
        <h1 key={item.id}>
          {item.username} - {item.amount}
        </h1>
      ))}
    </>
  );
};

export default OrdersPage;
