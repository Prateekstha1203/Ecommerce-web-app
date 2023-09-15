import cloudinary from "cloudinary"

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Upload an image
export const cloudinaryUploadImg = async (fileToUploads) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(fileToUploads, (result) => {
      if (result.secure_url) {
        resolve({ url: result.secure_url, resource_type: 'auto' });
      } else {
        reject(new Error("Failed to upload image to Cloudinary"));
      }
    });
  });
};