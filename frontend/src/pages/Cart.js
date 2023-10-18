import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <>
      <Meta title="Cart" />
      <BreadCrumb title="Cart" />
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className=" cart-header d-flex justify-content-between align-items-center py-3">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className=" cart-body d-flex justify-content-between align-items-center py-3">
                <h4 className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="cart-img ">
                    <img src="/images/watch.jpg" alt="watch" />
                  </div>
                  <div className="cart-content">
                    <h5 className="title">Title: Watch</h5>
                    <p className="color">Color: Black</p>
                    <p className="size">Size: M</p>
                  </div>
                </h4>
                <h4 className="cart-col-2">
                  <h5 className="price">$200</h5>
                </h4>
                <h4 className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      type="number"
                      className="form-control"
                      id=""
                      min={1}
                      max={10}
                    />
                  </div>
                  <div>
                    <AiFillDelete className="text-danger" />
                  </div>
                </h4>
                <h4 className="cart-col-4">
                  <h5 className="price">$200</h5>
                </h4>
              </div>
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/product" className="button">
                  Continue to Shooping
                </Link>
                <div className="d-flex align-items-end flex-column">
                  <h4>Sub Total</h4>
                  <p>Taxes and shipping calucated at checkout</p>
                  <Link to="/checkout" className="button">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
