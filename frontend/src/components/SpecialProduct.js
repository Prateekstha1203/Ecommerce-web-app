import React from "react";
import StarRatingComponent from "react-rating-stars-component";
import { Link } from "react-router-dom";


const SpecialProduct = () => {
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex gap-15">
          <div className="d-flex align-items-center">
            <img src="images/watch.jpg" className="img-fluid" alt="watch" />
          </div>
          <div className="special-product-content px-5 py-2">
            <h5 className="brands">Havels</h5>
            <h6 className="title">Samsung galaxy note 10+</h6>
            <StarRatingComponent
              name="rate1"
              starCount={10}
              value={3}
              activeColor="#ffd700"
              edit={false}
            />
            <p className="price">
              <span className="res-p">$100</span>&nbsp; <strike>$200</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5 </b>days
              </p>
              <div className="d-flex gap-1 align-items-center">
                <span className="badge rounded-circle p-2 bg-danger">1</span>:
                <span className="badge rounded-circle p-2 bg-danger">1</span>:
                <span className="badge rounded-circle p-2 bg-danger">1</span>
              </div>
             
            </div>
            <div className="prod-count mt-3">
                <p>Products: 5</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link className="button my-3">Add to cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
