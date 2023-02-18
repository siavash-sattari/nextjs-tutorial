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

async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;
  const data = await getData();
  const product = data.products.find(item => item.id === productId);

  return {
    props: {
      loadedProduct: product
    }
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map(item => item.id);
  const params = ids.map(item => ({ params: { pid: item } }));

  return {
    paths: params,
    fallback: true
  };
}

export default ProductDetailPage;
