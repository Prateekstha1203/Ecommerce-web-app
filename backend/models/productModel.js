import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      //   type: mongoose.Schema.Types.ObjectId,
      //   red: "Category",
      type: String,
      required: true,
    },
    brand: {
      type: String,
      //   enum: ["Apple", "Samsung", "POCO"],
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    sold: { type: Number, default: 0 },
    image: {
      type: Array,
      //select:false,
    },
    color: {
      type: String,
      //   enum: ["Black", "Blue", "Red"],
      required: true,
    },
    rating: {
      star: Number,
      postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  },
  { timestamps: true }
);

//Export the model
const Product = mongoose.model("Product", productSchema);

export default Product;
