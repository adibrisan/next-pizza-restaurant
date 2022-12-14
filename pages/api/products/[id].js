import dbConnect from "../../../lib/mongo";

import Product from "../../../models/Product";

export default async function handleProduct(req, res) {
  const {
    method,
    query: { id },
    cookies,
  } = req;

  const token = cookies.token;

  await dbConnect();

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    if (!token || token !== process.env.COOKIE_TOKEN) {
      return res.status(401).json("Not authenticated.");
    }

    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(201).json(updatedProduct);
    } catch (err) {
      console.log(err);
      res.status(500).json(err); //TODO: add toast for error case
    }
  }

  if (method === "DELETE") {
    if (!token || token !== process.env.COOKIE_TOKEN) {
      return res.status(401).json("Not authenticated.");
    }

    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json("The product has been deleted");
    } catch (err) {
      console.log(err);
      res.status(500).json(err); //TODO: add toast for error case
    }
  }
}
