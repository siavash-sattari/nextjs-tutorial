import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import Layout from '../../Layout';
import { Store } from '../../context/Cart';
import { productItems } from '../../data/products';
import styles from './style.module.scss';

function ProductPage() {
  const { query } = useRouter();
  const { slug } = query;

  const { state, dispatch } = useContext(Store);

  const product = productItems.find(item => item.slug === slug);

  if (!product) {
    return <div>Product not found.</div>;
  }

  function addToCartHandler() {
    const existingItem = state.cart.cartItems.find(item => item.slug === product.slug);

    const qty = existingItem ? existingItem.qty + 1 : 1;

    if (product.count < qty) {
      alert('Product is out.');
      return;
    }

    dispatch({ type: 'ADD_TO_CART', payload: { ...product, qty } });
  }

  return (
    <Layout title={product.title}>
      <div className={styles.wrapper}>
        <Image src={product.image} width={340} height={340} layout='responsive' />
        <div>
          <h2>Title : {product.title}</h2>
          <p>Category : {product.cat}</p>
          <p>Description : {product.description}</p>
        </div>
        <div>
          <div className={styles.price}>
            <div>Price :</div>
            <div>{product.price}</div>
          </div>
          <div className={styles.status}>
            <div>Status :</div>
            <div>{product.count > 0 ? 'Available' : 'Unavailable'}</div>
          </div>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </div>
    </Layout>
  );
}

export default ProductPage;
