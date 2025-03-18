const express = require('express');
const router = express.Router();
const Shop = require('../models/Shop');

// Отримати всі аптеки
router.get('/', async (req, res) => {
  try {
    const shops = await Shop.find();
    res.json(shops);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;