import { useRouter } from 'next/router';

const Products = () => {
  const router = useRouter();

  console.log(router?.query); // {slug : ['1', '2', '3', '4', '5', '6']}

  return <h1>Products</h1>;
};

export default Products;
