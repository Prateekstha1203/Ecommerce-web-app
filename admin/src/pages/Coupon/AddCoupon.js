import React from 'react'
import CustomInput from '../../components/CustomInput';
const AddCoupon = () => {
    return (
        <div>
          <h3 className="mb-4 title">Add Coupon</h3>
          <form action="">
            <CustomInput type="text" label="Enter Coupon Name" />
            <button className="btn btn-success border-0 rounded-3 my-3">
              Add Coupon
            </button>
          </form>
        </div>
      );
}

export default AddCoupon