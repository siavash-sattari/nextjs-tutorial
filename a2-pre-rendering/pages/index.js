import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';

const Homepage = props => {
  const { products } = props;

  return (
    <>
      <h1>Home Page</h1>
      <ul>
        {products.map(item => (
          <li key={item.id}>
            <Link href={`/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'products.json');

  const jsonData = await fs.readFile(filePath);

  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products
    }
  };
}

export default Homepage;
