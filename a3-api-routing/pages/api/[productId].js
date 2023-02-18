import fs from 'fs';
import path from 'path';

function handler(req, res) {
  const pId = req.query.productId;
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  const product = data.find(item => item.id === pId);
  res.json({ product });
}

export default handler;
