import mongoose from "mongoose";
export const validMongodbId = (id) => {
  const validId = mongoose.Schema.Types.ObjectId.isValid(id);
  if (!validId) {
    throw new Error("This id is not valid or not found");
  }
};
