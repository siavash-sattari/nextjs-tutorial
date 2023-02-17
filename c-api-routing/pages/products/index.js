import { useState } from 'react';

import fs from 'fs';
import path from 'path';

const ProductsPage = props => {
  const [productData, setProductData] = useState([]);

  const showProductPrice = async id => {
    const response = await fetch(`/api/${id}`);
    const responseData = await response.json();
    setProductData(responseData.product);
  };

  return (
    <>
      <h1>Products Page</h1>
      {productData && <h1>{productData.price}</h1>}
      <ul>
        {props.productItems.map(item => (
          <li key={item.title}>
            {item.title} - <button onClick={() => showProductPrice(item.id)}>show price</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);

  return {
    props: {
      productItems: data
    }
  };
}

export default ProductsPage;
