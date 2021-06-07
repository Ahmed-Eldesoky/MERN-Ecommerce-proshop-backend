const Joi = require("joi");
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requied: true,
    },
    rating: {
      type: Number,
      requied: true,
    },
    comment: {
      type: String,
      requied: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  numReviews: {
    type: String,
    required: true,
    default: 0,
  },
  price: {
    type: String,
    required: true,
    default: 0,
  },
  countInStock: {
    type: String,
    required: true,
    default: 0,
  },
});

const Product = mongoose.model("Product", productSchema);

exports.Product = Product;
