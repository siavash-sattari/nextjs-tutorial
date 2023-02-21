import Product from '../components/Product';
import { productItems } from '../data/products';
import Layout from '../Layout';

function Homepage() {
  return (
    <Layout title='Home Page'>
      <div className='grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4'>
        {productItems.map(product => (
          <Product key={product.slug} item={product} />
        ))}
      </div>
    </Layout>
  );
}

export default Homepage;
