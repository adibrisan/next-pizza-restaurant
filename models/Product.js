import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 20,
    },
    description: {
      type: String,
      required: true,
      maxLength: 120,
    },
    img: {
      type: String,
      required: true,
    },
    prices: {
      type: [Number],
      required: true,
    },
    extra: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
