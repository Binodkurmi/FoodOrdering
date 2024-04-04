const port = 4000;
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose.connect("mongodb+srv://bkurmi504:binod008@cluster0.zuwobll.mongodb.net/myApp?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("MongoDB connection error:", error);
});

// API creation
app.get("/", (req, res) => {
  res.send("Express App is Running");
});

// Images storage engine
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage: storage });

// Creating Upload endpoint for images
app.use('/images', express.static("upload/images"));

app.post("/upload", upload.single('product'), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`
  });
});

// Schema for creating product orders
const ProductOrder = mongoose.model("ProductOrder", {
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  comments: {
    type: String,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  },
});

// Route for creating a product order
app.post("/productorder", async (req, res) => {
  try {
    const { name, phone, address, comments, productName, quantity } = req.body;
    const productOrder = new ProductOrder({ name, phone, address, comments, productName, quantity });
    await productOrder.save();
    res.json({ success: 1, message: "Product order created successfully" });
  } catch (error) {
    console.error("Error creating product order:", error);
    res.status(500).json({ success: 0, message: "Failed to create product order" });
  }
});

// Route for getting all product orders
app.get("/productorder", async (req, res) => {
  try {
    const productOrders = await ProductOrder.find();
    res.json({ success: 1, productOrders });
  } catch (error) {
    console.error("Error getting product orders:", error);
    res.status(500).json({ success: 0, message: "Failed to get product orders" });
  }
});

// Route for deleting a product order by ID
app.delete("/productorder/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await ProductOrder.findByIdAndDelete(id);
    res.json({ success: 1, message: "Product order deleted successfully" });
  } catch (error) {
    console.error("Error deleting product order:", error);
    res.status(500).json({ success: 0, message: "Failed to delete product order" });
  }
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server running on port " + port);
  } else {
    console.log("Error:", error);
  }
});
