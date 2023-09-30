import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const Wishlist = () => {
  return (
    <>
      <Meta title="Wishlist" />
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-3">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative my-5">
                <img
                  src="/images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-img">
                  <img
                    src="/images/watch.jpg"
                    alt="watch"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="wishlist-details p-3">
                     <h5 className="mb-0 title">Fastrack Watch</h5>
                  <h6 className="mb-0 price mt-3">Rs. 2000</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
