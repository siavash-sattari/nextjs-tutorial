import React from 'react';
import Link from 'next/link';
import styles from './style.module.scss';

function Product({ item }) {
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
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default Product;
