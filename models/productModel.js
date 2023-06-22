const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: "string",
      required: [true, "Please enter a name"],
    },
    quantity: {
      type: Number,
      required: [true, "Please enter a quantity number"],
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: [true, "Please enter a image"],
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
