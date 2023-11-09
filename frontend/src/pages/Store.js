import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import StarRatingComponent from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
const Store = () => {
  const [grid, setGrid] = useState(4);
  const gridSetter = () => {
    alert(grid);
  };
  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper py-2 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By categories</h3>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availablility</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        In Stock [1 ]
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Out of Stock [0]
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex  gap-10">
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingInput"
                        placeholder="From "
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingTo"
                        placeholder="To"
                      />
                      <label htmlFor="floatingPTo">To</label>
                    </div>
                  </div>
                </div>
                <h5 className="sub-title">Colors</h5>
                <div className="d-flex  flex-wrap gap-10">
                 <Color />
                </div>
                <h5 className="sub-title">Size</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-1"
                    />
                    <label className="form-check-label" htmlFor="color-1">
                      S (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-2"
                    />
                    <label className="form-check-label" htmlFor="color-2">
                      M (2)
                    </label>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap gap-10 align-align-items-center">
                    <span className="badge rounded-3 text-secondary bg-light py-2 px-3">
                      Watch
                    </span>
                    <span className="badge rounded-3 text-secondary bg-light py-2 px-3">
                      Tv
                    </span>
                    <span className="badge rounded-3 text-secondary bg-light py-2 px-3">
                      Camera
                    </span>
                    <span className="badge rounded-3 text-secondary bg-light py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge rounded-3 text-secondary bg-light py-2 px-3">
                      Watch
                    </span>
                    <span className="badge rounded-3 text-secondary bg-light py-2 px-3">
                      Wire
                    </span>
                    <span className="badge rounded-3 text-secondary bg-light py-2 px-3">
                      Mobile
                    </span>
                    <span className="badge rounded-3 text-secondary bg-light py-2 px-3">
                      Headphone
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Products</h3>
                <div>
                  <div className="random-products d-flex ">
                    <div className="w-25 d-flex align-items-center justify-content-center">
                      <img
                        src="/images/watch.jpg"
                        className="img-fluid  "
                        alt="watch"
                      />
                    </div>
                    <div className="w-75">
                      <h5 className="product-title">
                        Watch for the kids of new generation
                      </h5>
                      <StarRatingComponent
                        name="rate1"
                        starCount={10}
                        value={3}
                        activeColor="#ffd700"
                        edit={false}
                      />
                      <p className="product-price">Rs. 1000</p>
                    </div>
                  </div>
                  <div className="random-products d-flex ">
                    <div className="w-25 d-flex align-items-center justify-content-center">
                      <img
                        src="/images/watch.jpg"
                        className="img-fluid  "
                        alt="watch"
                      />
                    </div>
                    <div className="w-75">
                      <h5 className="product-title">
                        Watch for the kids of new generation
                      </h5>
                      <StarRatingComponent
                        name="rate1"
                        starCount={10}
                        value={3}
                        activeColor="#ffd700"
                        edit={false}
                      />
                      <p className="product-price">Rs. 1000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex gap-10 align-items-center">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>
                      Sort By:{" "}
                    </p>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected>
                        Best Selling
                      </option>
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically, Z-A
                      </option>
                      <option value="price-ascending">Price low to high</option>
                      <option value="price-descending">
                        Price high to low
                      </option>
                      <option value="created-ascending">
                        Date, old to new
                      </option>
                      <option value="created-descending">
                        Date, new to high
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 Products </p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        src="images/gr4.svg"
                        className="img-fluid d-block"
                        alt="sorting"
                        onClick={() => {
                          setGrid(3);
                        }}
                      />
                      <img
                        src="images/gr3.svg"
                        className="img-fluid d-block"
                        alt="sorting"
                        onClick={() => {
                          setGrid(4);
                        }}
                      />
                      <img
                        src="images/gr2.svg"
                        className="img-fluid d-block"
                        alt="sorting"
                        onClick={() => {
                          setGrid(6);
                        }}
                      />
                      <img
                        src="images/gr.svg"
                        className="img-fluid d-block"
                        alt="sorting"
                        onClick={() => {
                          setGrid(12);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-list pb-5 d-flex flex-wrap gap-10">
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
