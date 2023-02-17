import fs from 'fs';
import path from 'path';

function handler(req, res) {
  if (req.method === 'POST') {
    const id = req.body.id;
    const title = req.body.title;
    const price = req.body.price;
    const newProduct = { id, title, price };
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newProduct);
    fs.writeFileSync(filePath, JSON.stringify(data));
  } else {
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    res.json({ products: data });
  }
}

export default handler;
