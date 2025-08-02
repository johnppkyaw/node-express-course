const express = require('express');
const app = express();
const { products } = require("./data");

app.use(express.static("./public"));

app.get('/api/v1/test', (req, res) => {
  res.json({ message: "It worked!" });
})

app.get('/api/v1/products', (req, res) => {
  res.json(products);
})

app.get('/api/v1/products/:productID', (req, res) => {
  const idToFind = parseInt(req.params.productID);
  const product = products.find((p) => p.id === idToFind);
  if(product) {
    res.json(product);
  }
  res.json({ message: "That product was not found." });  
})

app.get('/api/v1/query', (req, res) => {
  const { search, limit, less } = req.query;
  const limitToInt = parseInt(limit);
  const lessToInt = parseInt(less);
  let filteredProducts = [];
  
  if(search) {
    filteredProducts = products.filter((p) => {
      return p.name.includes(search);
    })
  }

  if(lessToInt > 0) {
    filteredProducts = filteredProducts.filter((p) => {
      return p.price < lessToInt;
    })
  }

  if(limitToInt > 0) {
    filteredProducts = filteredProducts.slice(0, limitToInt);
  }

  if(filteredProducts.length > 0) {
      res.json(filteredProducts);
    } else {
      res.json({ message: "No product found with the given query."})
    }
})

app.all("*", (req, res) => {
  res.status(404).send("<h1>Page Not Found!</h1>");
})

app.listen(3000, () => {
  console.log("Server listening on port 3000...");
});
