const express = require('express');
const app = express();

const { products } = require("./data");
const peopleRouter = require("./routes/people.js");
const cookieParser = require('cookie-parser');

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

const logger = (req, res, next) => {
  const { method, url } = req;
  console.log(method, url);
  next();  
}

app.use(logger);

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
    return res.json(product);
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

app.use("/api/v1/people", peopleRouter);

const auth = (req, res, next) => {
  const name = req.cookies.name;
  if(name) {
    req.user = name;
    next();
  } else {
    return res.status(401).json({ message: "unauthorized" });
  }
}

app.get("/test", auth, (req, res) => {
    return res.status(200).json({ message: `Welcome, ${req.user}`})
})

app.post("/logon", (req, res) => {
  const name = req.body.name;
  if(name) {
    return res.cookie("name", req.body.name).status(201).json({ message: `Hello, ${name}`})
  } else {
    return res.status(400).json({ message: "No user found."})
  }
})

app.delete("/logoff", (req, res) => {
  const name = req.cookies.name;
  if (name) {
    return res.clearCookie("name").status(200).json({ message: `User, ${name} is logged off.`})
  } else {
    return res.status(400).json({ message: 'No logged in user found.'})
  }
  
})

app.all("*", (req, res) => {
  res.status(404).send("<h1>Page Not Found!</h1>");
})

app.listen(3000, () => {
  console.log("Server listening on port 3000...");
});
