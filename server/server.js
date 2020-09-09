const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");
const MongoClient = require("mongodb").MongoClient;
require("dotenv/config");

const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

//Connection
const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

client.connect();

/*
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/e-commerce-website",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);
*/
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
}

//Products
const Product = mongoose.model(
  "products",
  new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    title: { type: String },
    src: { type: String },
    size: [String],
    description: { type: String },
    price: { type: Number },
  })
);

app.get("/api/products", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

app.post("/api/products", async (req, res) => {
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);
});

app.delete("/api/products/:id", async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
});

//Order
const Order = mongoose.model(
  "order",
  new mongoose.Schema(
    {
      _id: {
        type: String,
        default: shortid.generate,
      },
      email: {
        type: String,
      },
      name: {
        type: String,
      },
      address: {
        type: String,
      },
      total: {
        type: Number,
      },
      cartItems: [
        {
          _id: String,
          title: String,
          price: Number,
          count: Number,
        },
      ],
    },
    {
      timestamps: true,
    }
  )
);

app.post("/api/orders", async (req, res) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.address ||
    !req.body.total ||
    !req.body.cartItems
  ) {
    return res.send({ message: "Data is required" });
  }
  const order = await Order(req.body).save();
  res.send(order);
});

app.get("/api/orders", async (req, res) => {
  const order = await Order.find({});
  res.send(order);
});

app.delete("/api/orders/:id", async (req, res) => {
  const deletedOrder = await Order.findByIdAndDelete(req.params.id);
  res.send(deletedOrder);
});

mongoose.connection.on("connected", () => {
  console.log("CONNECTED");
});

//Listener
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server running at Port: ${port} `);
});
