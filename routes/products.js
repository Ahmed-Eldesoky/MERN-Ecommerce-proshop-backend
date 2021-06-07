const express = require("express");
const {
  getProducts,
  getProductById,
  deleteProductById,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} = require("../controllers/productController");
const { protect, admin } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/top").get(getTopProducts)

router.route("/:id/reviews").post(protect,createProductReview)
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProductById)
  .put(protect, admin, updateProduct);

module.exports = router;
