import Image from 'next/image';
import { useContext } from 'react';
import { Store } from '../context/Cart';
import Layout from '../Layout';

function CartPage() {
  const { state } = useContext(Store);

  const {
    cart: { cartItems }
  } = state;

  return (
    <Layout title='cart'>
      <h1 className='mb-4 text-xl'>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div>Cart is empty.</div>
      ) : (
        <div className='grid md:grid-cols-4 md:gap-5'>
          <div className='overflow-x-auto md:col-span-3'>
            <table className='min-w-full'>
              <thead className='border-b'>
                <tr>
                  <th className='px-5 text-left'>Item</th>
                  <th className='p-5 text-right'>Quantity</th>
                  <th className='p-5 text-right'>Price</th>
                  <th className='p-5'>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.slug} className='border-b'>
                    <td>
                      <span className='flex item-center gap-3'>
                        <Image src={item.image} width={50} height={50} />
                        {item.title}
                      </span>
                    </td>
                    <td className='p-5 text-right'>{item.qty}</td>
                    <td className='p-5 text-right'>{item.price}</td>
                    <td className='p-5 text-center'>
                      <button>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='p-5'>
            <div className='pb-5'>Total Price: {cartItems.reduce((acc, cur) => acc + cur.qty * cur.price, 0)}</div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default CartPage;
