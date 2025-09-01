const express = require("express");
const fs = require("fs");
const app = express();
const port = 8080;

products = [
    {'id': 143, 'name': 'Blue Notebook', 'price': 5.49},
    {'id': 144, 'name': 'Blue Marker', 'price': 1.99}
]
API_doc = `
<!DOCTYPE html>
<html>
  <head>
    <title>API documentation</title>
  </head>
  <body>
    <h1>API documentation</h1>

    <table>
      <tr>
        <th>URL</th>
        <th>method(s)</th>
        <th>description</th>
      </tr>
      <tr>
        <td>/</td>
        <td><i>any</a></td>
        <td>view this documentation</td>
      </tr>
      <tr>
        <td><a href="/products">/products</a></td>
        <td>GET</td>
        <td>return a list of all products</td>
      </tr>
      <tr>
        <td><a href="/products/143/">/products/<i>ID</i></a></td>
        <td>GET</td>
        <td>return the product with integer ID</td>
      </tr>
    </table>
  </body>
</html>`

app.get("/", async (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200);
  res.send(API_doc)
});

app.get("/products", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(201);
  res.send(JSON.stringify(products, null, 4))
});

app.get("/products/:ID", async (req, res) => {
  var ID = req.params.ID;
  var ix = 0;
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  for(ix = 0; ix < products.length; ix++) {
      if(products[ix]['id'] == ID) {
          res.send(JSON.stringify(products[ix], null, 4))
          return;
      }
  }
  res.send("\"(not found)\"")
});

app.get("/products", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(201);
  res.send(JSON.stringify(products, null, 4))
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
