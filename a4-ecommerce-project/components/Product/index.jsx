import Link from 'next/link';
import { useContext } from 'react';
import { Store } from '../../context/Cart';
import styles from './style.module.scss';

function Product({ item }) {
  const { state, dispatch } = useContext(Store);

  function addToCartHandler() {
    const existingItem = state.cart.cartItems.find(product => product.slug === item.slug);

    const qty = existingItem ? existingItem.qty + 1 : 1;

    if (item.count < qty) {
      alert('Product is out.');
      return;
    }

    dispatch({ type: 'ADD_TO_CART', payload: { ...item, qty } });
  }

  return (
    <div className={styles.wrapper}>
      <Link href={`/products/${item.slug}`}>
        <img src={item.image} alt={item.title} />
      </Link>
      <div className={styles.productDetails}>
        <Link href={`/products/${item.slug}`}>
          <h2>{item.title}</h2>
        </Link>
        <p>{item.price}</p>
        <button onClick={addToCartHandler}>Add To Cart</button>
      </div>
    </div>
  );
}

export default Product;
