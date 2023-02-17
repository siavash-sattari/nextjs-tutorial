import fs from 'fs';
import path from 'path';

function handler(req, res) {
  if (req.method === 'POST') {
    const title = req.body.title;
    const price = req.body.price;
    const newProduct = { title, price };
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newProduct);
    fs.writeFileSync(filePath, JSON.stringify(data));
  }
}

export default handler;
