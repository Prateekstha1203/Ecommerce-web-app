import React ,{useEffect}from "react";
import CustomInput from "../../../components/CustomInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createBrands } from "../../../features/brand/brandSlice";

const schema = Yup.object().shape({
  brand: Yup.string().required("Brand is required"),
});
const initialState = {
  brand: "",
};


const AddBrand = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const newBrand = useSelector((state) => state.brand);
  const {
    isSuccess,
    isError,
    isLoading,
    createdBrand,
    brandName,
    updatedBrand,
  } = newBrand;


  const formik = useFormik({
    initialValues: initialState,
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createBrands(values));
    },
  });

  useEffect(() => {
    if (isSuccess && createdBrand) {
      toast.success("Brand Added Successfullly!");
    }
    if (isSuccess && updatedBrand) {
      toast.success("Brand Updated Successfullly!");
      navigate("/admin/list-brand");
    }

    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);


  return (
    <div>
      <h3 className="mb-4 title">Add Brands</h3>
      <form action="" onSubmit={formik.handleSubmit}>
        <CustomInput
          type="text"
          label="Enter Brand Name"
          name="brand"
          id="brand"
          i_class="form-control"
          onChange={formik.handleChange("brand")}
          onBlur={formik.handleBlur("brand")}
          value={formik.values.brand}
        />
        <div className="error mt-2">
          {formik.touched.brand && formik.errors.brand}
        </div>
        <button className="btn btn-success border-0 rounded-3 my-3" type="submit">
          Add Brand
        </button>
      </form>
    </div>
  );
};

export default AddBrand;