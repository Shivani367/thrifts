const express = require("express");
const router = express.Router();

const {
  createOrder,verifyPayment,
} = require("../controllers/orderController");

const authMiddleware = require(
  "../middlewares/authMiddleware"
);

router.post(
  "/create/:productId",
  authMiddleware,
  createOrder
);
router.post(
  "/verify",
  authMiddleware,
  verifyPayment
);

module.exports = router;