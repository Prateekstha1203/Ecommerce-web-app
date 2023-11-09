import React from "react";
import StarRatingComponent from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
const ProductCard = (props) => {
  const { grid } = props;
  const location = useLocation();

  return (
    <div
      className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}
    >
      <Link to="/product/:id" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <div>
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
        </div>
        <div className="product-img">
          <img
            src="images/watch.jpg"
            className="img-fluid img-photo"
            alt="featured product"
          />
          <img
            src="images/tab.jpg"
            className="img-fluid img-photo"
            alt="featured product"
          />
        </div>
        <div className="product-info">
          <StarRatingComponent
            name="rate1"
            starCount={10}
            value={3}
            activeColor="#ffd700"
            edit={false}
          />
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">Title of product</h5>
          <p className="description">
            A watch is a portable timekeeping device typically worn on the wrist
            or carried in a pocket. It features a clock display that indicates
            hours, minutes, and sometimes seconds.
          </p>
          <p className="price">$100</p>
        </div>
        <div className="product-actions position-absolute">
          <div className="d-flex flex-column gap-15">
            <div>
              <Link>
                <img src="images/prodcompare.svg" alt="product compare" />
              </Link>
            </div>
            <div>
              <Link>
                <img src="images/add-cart.svg" alt="add cart" />
              </Link>
            </div>
            <div>
              <Link>
                <img src="images/view.svg" alt="view product" />
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
