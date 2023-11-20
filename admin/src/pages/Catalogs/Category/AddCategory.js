import React, { useEffect } from "react";
import CustomInput from "../../../components/CustomInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createdCategory } from "../../../features/category/categorySlice";

const schema = Yup.object().shape({
  title: Yup.string().required("Category is required"),
});
const initialState = {
  title: "",
};

const AddCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createdCategory(values));
    },
  });

  const newCategory = useSelector((state) => state.category);
  const {
    isSuccess,
    isError,
    isLoading,
    createdCategoryData,
  } = newCategory;

  useEffect(() => {
    if (isSuccess && createdCategoryData) {
      toast.success("Category Added Successfullly!");
      navigate("/admin/category-list");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading, createdCategoryData])

  return (
    <div>
      <h3 className="mb-4 title">Add Category</h3>
      <form action="" onSubmit={formik.handleSubmit}>
        <CustomInput
          type="text"
          label="Enter Category Name"
          name="title"
          id="title"
          i_class="form-control"
          onChange={formik.handleChange("title")}
          onBlur={formik.handleBlur("title")}
          value={formik.values.title}
        />
        <div className="error mt-2">
          {formik.touched.title && formik.errors.title}
        </div>
        <button className="btn btn-success border-0 rounded-3 my-3" type="submit">
          Add Category
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
