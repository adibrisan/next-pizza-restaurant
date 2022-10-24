import dbConnect from "../../../lib/mongo";

import Product from "../../../models/Product";

export default async function handleProduct(req, res) {
  const {
    method,
    query: { id },
  } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      console.log(err);
      res.status(500).json(err); //TODO: add toast for error case
    }
  }

  if (method === "DELETE") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      console.log(err);
      res.status(500).json(err); //TODO: add toast for error case
    }
  }
}
