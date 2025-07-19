// api/generate.js
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { original, price } = req.body;

  if (!/^\d+$/.test(original)) {
    return res.status(400).json({ error: 'Original must be numeric' });
  }

  if (!/^\d{5}$/.test(price)) {
    return res.status(400).json({ error: 'Price must be 5 digits (e.g. 00100)' });
  }

  const finalCode = `822${original}00160${price}`;
  return res.status(200).json({ barcode: finalCode });
}
