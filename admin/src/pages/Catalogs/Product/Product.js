import React, { useEffect, useState } from "react";
import CustomInput from "../../../components/CustomInput";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import * as yup from "yup";
import { useFormik } from "formik";

import { getAllBrands } from "../../../features/brand/brandSlice";
import { getAllCategories } from "../../../features/category/categorySlice";
import { getAllColors } from "../../../features/color/colorSlice";

import Select from "react-select";
import makeAnimated from "react-select/animated";

import Dropzone from "react-dropzone";
import { uploadImage,deleteImage  } from "../../../features/uploadImg/uploadSlice";
import { createProducts, resetState } from "../../../features/product/productSlice";



let schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().required(),
  category: yup.string().required(),
  brand: yup.string().required(),
  tags: yup.string().required("Tag is Required"),
  color: yup
    .array()
    .min(1, "Pick at least one color")
    .required("Color is Required"),

  quantity: yup.number().required("Quantity is Required"),
});


const Product = () => {
  //Creating react hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [color, setColor] = useState([]);
  const [images,setImages] = useState([]);

  useEffect(() => {
    dispatch(getAllBrands());
    dispatch(getAllCategories());
    dispatch(getAllColors());
  }, []);

  //fetching state from the store
  const brandState = useSelector((state) => state.brand.brands);
  const categoryState = useSelector((state) => state.category.categories);
  const colorState = useSelector((state) => state.color.colors);
  const uploadState = useSelector((state) => state.upload.images);
 const productState = useSelector((state) => state.product);
const {isSuccess, isError, message, createdProduct} = productState;
  //Formik validation------------------------------------------------------

  useEffect(() => {
    if (isSuccess && createdProduct) {
      if (isSuccess && createdProduct) {
        console.log("prateek")
        console.log(createProducts)
        toast.success("Product Added Successfullly!");
        navigate("/admin/product-list");
      }
      if (isError) {
        toast.error("Something Went Wrong!");
      }
    }
  }, [isSuccess, isError, createdProduct]);
  const img = [];
  uploadState.forEach((i) => {
    img.push({
      public_id: i.public_id,
      url: i.url,
    });
  });

  const coloropt = [];
  colorState.forEach((i) => {
    coloropt.push({
      label: i.title,
      value: i._id,
    });
  });


  useEffect(() => {
    formik.values.color = color ? color : " ";
    formik.values.images = img;
  }, [color, img]);
  

  useEffect(() => {
    if (images === null) {
      // Clear the uploadState when images are set to null
      dispatch(deleteImage(uploadState.map((i) => i.public_id)));
    }
  }, [images, dispatch, uploadState]);


  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      brand: "",
      category: "",
      tags: "",
      color: "",
      quantity: "",
      images: "",
    },
    validationSchema: schema,
    onSubmit:  (values) => {
      dispatch(createProducts(values));
      formik.resetForm();
      setColor(null);
      setTimeout(() => {
        dispatch(resetState());
      }, 3000);
     
      
    },
    
  });

  //Color fetching
 

  const handleColors = (e) => {
    setColor(e);
  };

  const handleImages = async (acceptedFiles) => {
    await dispatch(uploadImage(acceptedFiles));
  };

  
  //----------------------------------------------------------------------
  const animatedComponents = makeAnimated();

  return (
    <div>
      <h3 className="mb-4 title">Add Product</h3>
      <form action="" onSubmit={formik.handleSubmit}>
        {/* --------------------------------Custom input for name---------------------------------------------- */}
        <CustomInput
          type="text"
          label="Enter Product Name"
          name="name"
          id="name"
          i_class="form-control"
          onChange={formik.handleChange("name")}
          onBlur={formik.handleBlur("name")}
          value={formik.values.name}
        />

        <div className="error mt-2">
          {formik.touched.name && formik.errors.name}
        </div>

        {/* --------------------------------Custom input for description---------------------------------------------- */}
        <CustomInput
          type="text"
          label="Enter Description"
          name="description"
          id="description"
          i_class="form-control"
          onChange={formik.handleChange("description")}
          onBlur={formik.handleBlur("")}
          value={formik.values.description}
        />

          <div className="error mt-2">
            {formik.touched.description && formik.errors.description}
          </div>

        {/* --------------------------------Custom input for price---------------------------------------------- */}
        <CustomInput
          type="number"
          label="Enter Product Price"
          name="price"
          onChange={formik.handleChange("price")}
          onBlur={formik.handleBlur("price")}
          value={formik.values.price}
        />
        <div className="error">
          {formik.touched.price && formik.errors.price}
        </div>

        {/* --------------------------------Custom input for brand--------------------------------------------- */}
        <select
          name="brand"
          onChange={formik.handleChange("brand")}
          onBlur={formik.handleBlur("brand")}
          value={formik.values.brand}
          className="form-control py-3 my-4"
          id=""
        >
          <option value="">Select Brand</option>
          {brandState.map((i, index) => {
            return (
              <option key={index} value={i.brand}>
                {i.brand}
              </option>
            );
          })}
        </select>
        <div className="error">
          {formik.touched.brand && formik.errors.brand}
        </div>

        {/* --------------------------------Custom input for category---------------------------------------------- */}
        <select
          name="category"
          onChange={formik.handleChange("category")}
          onBlur={formik.handleBlur("category")}
          value={formik.values.category}
          className="form-control py-3 my-4"
          id=""
        >
          <option value="">Select Category</option>
          {categoryState.map((content, index) => {
            return (
              <option key={index} value={content.title}>
                {content.title}
              </option>
            );
          })}
        </select>
        <div className="error">
          {formik.touched.category && formik.errors.category}
        </div>

        {/* --------------------------------Custom input for tags---------------------------------------------- */}
        <select
          name="tags"
          onChange={formik.handleChange("tags")}
          onBlur={formik.handleBlur("tags")}
          value={formik.values.tags}
          className="form-control py-3 my-4"
          id=""
        >
          <option value="" disabled>
            Select Tags
          </option>
          <option value="featured">Featured</option>
          <option value="popular">Popular</option>
          <option value="special">Special</option>
        </select>
        <div className="error">{formik.touched.tags && formik.errors.tags}</div>

        {/* --------------------------------Custom input for color---------------------------------------------- */}

        <Select
          name="color"
          className="form-control p-0 my-4"
          closeMenuOnSelect={false}
          components={animatedComponents}
          placeholder="Select colors"
          isMulti
          options={coloropt}
          onChange={(i) => handleColors(i)}
          value={color}
          allowClear
        />

        <div className="error">
          {formik.touched.color && formik.errors.color}
        </div>

        {/* --------------------------------Custom input for quantity---------------------------------------------- */}
        <CustomInput
          type="number"
          label="Enter Product Quantity"
          name="quantity"
          onChange={formik.handleChange("quantity")}
          onBlur={formik.handleBlur("quantity")}
          value={formik.values.quantity}
          id="quantity"
        />
        <div className="error">
          {formik.touched.quantity && formik.errors.quantity}
        </div>

        <div className="bg-white border-1 p-5 text-center">
        <Dropzone   onDrop={(acceptedFiles) => dispatch(uploadImage(acceptedFiles))}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
              </section>
            )}
          </Dropzone>
        </div>
        <div className="showimages d-flex flex-wrap gap-3">
          {uploadState?.map((i, j) => {
            return (
              <div className=" position-relative" key={j}>
                <button
                  type="button"
                  onClick={() => dispatch(deleteImage(i.public_id))}
                  className="btn-close position-absolute"
                  style={{ top: "10px", right: "10px" }}
                 value={images}
                ></button>
                <img src={i.url} alt="" width={200} height={200} />
              </div>
            );
          })}
        </div>
        <button className="btn btn-success border-0 rounded-3 my-3">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Product;
