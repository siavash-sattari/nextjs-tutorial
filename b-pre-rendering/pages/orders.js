import { useEffect, useState } from 'react';

const OrdersPage = props => {
  const [orders, setOrders] = useState(props.orders);

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

export async function getServerSideProps() {
  const response = await fetch('http://localhost:5000/orders');
  const responseData = await response.json();

  return {
    props: {
      orders: responseData
    }
  };
}
