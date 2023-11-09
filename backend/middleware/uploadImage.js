import multer from "multer";
import sharp from "sharp";
import path from "node:path";
const cwd = process.cwd();
import fs from "node:fs";

const resizedImagePaths = {};
export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(cwd, "./public/images/"));
  },
  filename: function (req, file, cb) {
    const uniquesuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniquesuffix + ".jpeg");
  },
});

export const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    return cb(null, true);
  } else {
    return cb({ message: "Unsupported file format" }, false);
  }
};

export const uploadPhoto = multer({
  storage: storage,
  fileFilter: multerFilter,
  limits: { fileSize: 1000000 },
});

export const productImgResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
      const newPath = `public/images/products/${file.filename}`;
      resizedImagePaths[file.path] = newPath;
      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(newPath);
      fs.unlinkSync(`public/images/${file.filename}`);
      file.destination = path.dirname(newPath);
      file.path = newPath;
    })
  );
  next();
};

export const blogImgResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
      const newPath = `public/images/blogs/${file.filename}`;
      resizedImagePaths[file.path] = newPath;
      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(newPath);
      fs.unlinkSync(`public/images/${file.filename}`);
      file.destination = path.dirname(newPath);
      file.path = newPath;
    })
  );
  next();
};
