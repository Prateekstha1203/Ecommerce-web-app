
import mongoose from "mongoose";

// Declare the Schema of the Mongo model
var brandSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

//Export the model
const Brand = mongoose.model("Brand", brandSchema);

export default Brand;
