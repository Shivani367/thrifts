const Product = require("../models/Product");

const createProduct = async (req, res) => {
  try {
    console.log(req.body);

    const {
  title,
  description,
  price,
  originalPrice,
  category,
  condition,
  brand,
  location,
  productAge,
} = req.body;
    
const product = await Product.create({
  title,
  description,
  price,
  originalPrice,
  category,
  condition,
  brand,
  location,
  productAge,
  seller: req.user.userId,
});

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
.populate("seller", "name email");

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(
      req.params.id
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(
  req.params.id
);

if (!product) {
  return res.status(404).json({
    success: false,
    message: "Product not found",
  });
}

if (
  product.seller.toString() !==
  req.user.userId
) {
  return res.status(403).json({
    success: false,
    message: "Not authorized",
  });
}

Object.assign(product, req.body);

await product.save();

res.status(200).json({
  success: true,
  product,
});

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(
  req.params.id
);

if (!product) {
  return res.status(404).json({
    success: false,
    message: "Product not found",
  });
}

if (
  product.seller.toString() !==
  req.user.userId
) {
  return res.status(403).json({
    success: false,
    message: "Not authorized",
  });
}

await product.deleteOne();

res.status(200).json({
  success: true,
  message: "Product deleted",
});

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  createProduct,getProducts,getProductById,updateProduct,
  deleteProduct,

};