import React, { useEffect } from "react";
import CustomInput from "../../../components/CustomInput";

import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createColor,
  getAllColors,
  // resetState,
  // updateAColor,
} from "../../../features/color/colorSlice";
import { resetState } from "../../../features/color/colorSlice";

const schema = Yup.object().shape({
  title: Yup.string().required("Category is required"),
});
const initialState = {
  title: "",
};

const AddColor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newColor = useSelector((state) => state.color);

  const { isSuccess, isError, isLoading, createdColor } = newColor;

  useEffect(() => {
    if (isSuccess && createdColor) {
      toast.success("Color Added Successfullly!");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading, createdColor]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialState,
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createColor(values));
      formik.resetForm();
      setTimeout(() => {
        dispatch(resetState());
      }, 300);
    },
  });
  return (
    <div>
      <h3 className="mb-4 title">Add color</h3>
      <form action="" onSubmit={formik.handleSubmit}>
        <CustomInput
          type="text"
          label="Enter Color Name"
          onChange={formik.handleChange("title")}
          onBlur={formik.handleBlur("title")}
          value={formik.values.title}
          id="color"
        />
         <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          
        <button className="btn btn-success border-0 rounded-3 my-3">
          Add Color
        </button>
      </form>
    </div>
  );
};

export default AddColor;
