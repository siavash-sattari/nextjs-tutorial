import { useRef, useState } from 'react';

const Homepage = () => {
  const [productItems, setProductItems] = useState([]);

  const titleInputRef = useRef();
  const priceInputRef = useRef();

  const addProductHandler = async event => {
    event.preventDefault();
    const title = titleInputRef.current.value;
    const price = priceInputRef.current.value;
    const reqBody = { title, price };
    const response = await fetch('/api/product', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'content-type': 'application/json'
      }
    });
  };

  const showProductsHandler = async () => {
    const response = await fetch('/api/product');
    const responseData = await response.json();
    setProductItems(responseData.products);
  };

  return (
    <div>
      <h1>Create New Product</h1>
      <form onSubmit={addProductHandler}>
        <div>
          <input type='text' placeholder='Title' ref={titleInputRef} />
        </div>
        <div>
          <input type='text' placeholder='Price' ref={priceInputRef} />
        </div>
        <button>Add</button>
      </form>
      <div className='divider' />
      <button onClick={showProductsHandler} className='show-products'>
        Show All Products
      </button>
      <ul>
        {productItems.map(item => (
          <li key={item.title}>
            {item.title} - $ {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
