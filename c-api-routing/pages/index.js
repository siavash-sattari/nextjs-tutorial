import { useRef } from 'react';

const Homepage = () => {
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
    </div>
  );
};

export default Homepage;
