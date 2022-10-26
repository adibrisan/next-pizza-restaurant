import dbConnect from "../../../lib/mongo";

import Order from "../../../models/Order";

export default async function handleOrders(req, res) {
  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
  }

  if (method === "PUT") {
  }

  if (method === "DELETE") {
  }
}
