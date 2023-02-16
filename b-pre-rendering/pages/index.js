const Homepage = props => {
  const { products } = props;

  return (
    <>
      <h1>Home Page</h1>
      <ul>
        {products.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      products: [
        { id: 'p1', title: 'product1' },
        { id: 'p2', title: 'product2' }
      ]
    }
  };
}

export default Homepage;
