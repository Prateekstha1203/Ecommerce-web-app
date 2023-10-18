import React from 'react'
import CustomInput from '../../../components/CustomInput';
const AddBrand = () => {
    return (
        <div>
          <h3 className="mb-4 title">Add Brand</h3>
          <form action="">
            <CustomInput type="text" label="Enter Blog Category Name" />
            <button className="btn btn-success border-0 rounded-3 my-3">
              Add Blog Crand
            </button>
          </form>
        </div>
      );
}

export default AddBrand