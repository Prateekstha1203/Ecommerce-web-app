import React from "react";
import CustomInput from "../../components/CustomInput";

const AddBlogCategory = () => {
  return (
    <div>
      <h3 className="mb-4 title">Add Blog Category</h3>
      <form action="">
        <CustomInput type="text" label="Enter Blog Category Name" />
        <button className="btn btn-success border-0 rounded-3 my-3">
          Add Blog Category
        </button>
      </form>
    </div>
  );
};

export default AddBlogCategory;
