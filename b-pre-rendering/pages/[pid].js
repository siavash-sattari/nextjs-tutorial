import fs from 'fs/promises';
import path from 'path';

const ProductDetailPage = props => {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <p>Title : {loadedProduct.title}</p>
      <p>Price : {loadedProduct.price}</p>
      <p>Product ID : {loadedProduct.id}</p>
    </>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  const product = data.products.find(item => item.id === productId);

  return {
    props: {
      loadedProduct: product
    }
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { pid: 'p1' } }],
    fallback: true
  };
}

export default ProductDetailPage;
