import express from "express";
import cors from "cors";
import { getShopifyProducts } from "./API/getShopifyProducts.js";
const app = express();
const port = 3000;

app.use(cors())

app.get("/", async (req, res) => {
  const shopifyProducts = await getShopifyProducts();
  res.send(shopifyProducts);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});