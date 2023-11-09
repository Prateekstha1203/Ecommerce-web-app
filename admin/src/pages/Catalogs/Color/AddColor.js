import React from 'react'
import CustomInput from '../../../components/CustomInput';
const AddColor = () => {
    return (
        <div>
          <h3 className="mb-4 title">Add cOlor</h3>
          <form action="">
            <CustomInput type="text" label="Enter Color Name" />
            <button className="btn btn-success border-0 rounded-3 my-3">
              Add Color
            </button>
          </form>
        </div>
      );
}

export default AddColor