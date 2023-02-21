import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '../../Layout';
import { productItems } from '../../data/products';
import styles from './style.module.scss';

function ProductPage() {
  const { query } = useRouter();
  const { slug } = query;

  const product = productItems.find(pItem => pItem.slug === slug);

  if (!product) {
    return <div>Product not found.</div>;
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
          <button>Add to Cart</button>
        </div>
      </div>
    </Layout>
  );
}

export default ProductPage;
