function handler(req, res) {
  if (req.method === 'POST') {
    const title = req.body.title;
    const price = req.body.price;
    const newProduct = { title, price };
    const products = [];
    products.push(newProduct);
    console.log(products);
  }
}

export default handler;
