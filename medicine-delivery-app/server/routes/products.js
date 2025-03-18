const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Отримати товари за ID аптеки
router.get('/', async (req, res) => {
  const { shopId } = req.query;
  try {
    const products = await Product.find({ shop: shopId });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;