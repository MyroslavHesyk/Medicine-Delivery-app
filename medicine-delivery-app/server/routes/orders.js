const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Створити замовлення
router.post('/', async (req, res) => {
  const { customerName, email, phone, address, products, totalPrice } = req.body;
  const order = new Order({ customerName, email, phone, address, products, totalPrice });

  try {
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;