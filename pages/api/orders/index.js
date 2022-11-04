import dbConnect from "../../../lib/mongo";

import Order from "../../../models/Order";

import { FINISHED_ORDER } from "../../../consts";

export default async function handleOrders(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const orders = await Order.find({
        status: {
          $lte: FINISHED_ORDER,
        },
      });
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    try {
      const order = await Order.create(req.body);
      res.status(201).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
