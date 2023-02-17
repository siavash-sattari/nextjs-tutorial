import fs from 'fs';
import path from 'path';

const ProductsPage = props => {
  return (
    <>
      <h1>Products Page</h1>
      <ul>
        {props.productItems.map(item => (
          <li key={item.title}>
            {item.title} - $ {item.price}
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
