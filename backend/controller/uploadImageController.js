import expressAsyncHandler from "express-async-handler";
import { validMongodbId } from "../utils/validateMongodbId.js";
import { cloudinaryUploadImg , cloudinaryDeleteImg} from "../utils/cloudinary.js";
import fs from "fs";

export const uploadImage = expressAsyncHandler(async (req, res) => {
   
    try {
        const uploader = (path) => cloudinaryUploadImg(path, "images");

        const urls = [];
        const files = req.files;
        for (const file of files) {
          const { path } = file;
          console.log(path)
          const newpath = await uploader(path);
          console.log(newpath);
          urls.push(newpath);
          fs.unlinkSync(path);
        }
        const images = urls.map((file) => {
          return file;
        });
        res.json(images);
      } catch (error) {
        throw new Error(error);
      }
  });


  export const deleteImages = expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = cloudinaryDeleteImg(id, "images");
      res.json({ message: "Deleted" });
    } catch (error) {
      throw new Error(error);
    }
  });