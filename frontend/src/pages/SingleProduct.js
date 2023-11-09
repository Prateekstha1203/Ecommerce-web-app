import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import StarRatingComponent from "react-rating-stars-component";
import { Link } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import Color from "../components/Color";
import { AiTwotoneHeart } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import Accordions from "../components/Accordions";
const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);
  const img = "/images/wristwatch_687.jpg";
  return (
    <>
      <Meta title="Product Name" />
      <BreadCrumb title="Product Name" />
      <section className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div className="main-product-image-wrapper">
                  <ReactImageMagnify
                    smallImage={{
                      alt: "Wristwatch by Ted Baker London",
                      isFluidWidth: true,
                      src: img, // Assuming `img` is a string representing the image URL
                    }}
                    largeImage={{
                      src: img, // Assuming `img` is a string representing the image URL
                      height: 1031,
                      width: 687,
                    }}
                  />
                </div>
                <div className="other-product-image d-flex flex-wrap gap-10">
                  <div>
                    <img
                      src="/images/appleWatch.avif"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div>
                    <img
                      src="/images/appleWatch.avif"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div>
                    <img
                      src="/images/appleWatch.avif"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div>
                    <img
                      src="/images/appleWatch.avif"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Kids headphone bulk 10 pack multi colored for student
                  </h3>
                </div>
                <div className="border-bottom">
                  <p className="price">$ 200</p>
                  <div className="d-flex align-items-center gap-10">
                    <StarRatingComponent
                      name="rate1"
                      starCount={10}
                      value={3}
                      activeColor="#ffd700"
                      edit={false}
                    />
                    <p className="mb-0 review"> (2 Reviews)</p>
                  </div>
                  <a className=" review p-2" href="#review">
                    Write a review
                  </a>
                </div>
                <div className="border-bottom">
                  <div className="d-flex align-items-center gap-10 py-2">
                    <h3 className="product-heading">Type :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 py-2">
                    <h3 className="product-heading">Brand :</h3>
                    <p className="product-data">Havels</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 py-2">
                    <h3 className="product-heading">Cateogory :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 py-2">
                    <h3 className="product-heading">Tags :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 py-2">
                    <h3 className="product-heading">Availability :</h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex flex-column gap-10 mt-2 mb-3 py-2">
                    <h3 className="product-heading">Size :</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XL
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-10 py-2">
                    <h3 className="product-heading">Color :</h3>
                    <p className="product-data">
                      <Color />
                    </p>
                  </div>
                  <div className="d-flex align-items-center flex-row gap-10  mt-2 mb-3 py-2">
                    <h3 className="product-heading">Quantity :</h3>
                    <div className="d-flex align-items-center  gap-10">
                      <input
                        type="number"
                        style={{ width: "70px" }}
                        min={1}
                        max={10}
                        className="form-control"
                      />
                    </div>
                    <div className="d-flex  ms-5 justify-content-center gap-15 align-items-center">
                      <button type="submit" className="button border-0">
                        Add to cart
                      </button>
                      <button type="submit" className="button signup">
                        Buy it now
                      </button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-30">
                    <div>
                      <a href="">
                        <BiGitCompare /> Add to Wishlist
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <AiTwotoneHeart /> Wishlist
                      </a>
                    </div>
                  </div>
                  <Accordions image={img} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="description-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className=" col-12">
              <h4 className="">Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  id quam vel est malesuada semper id et elit. Curabitur ac
                  vestibulum mi, ut egestas elit. Nulla facilisi. Sed eu ligula
                  libero. Vestibulum interdum, ex nec bibendum tincidunt, turpis
                  lorem pellentesque velit, at suscipit arcu est ac risus.
                  Nullam sit amet iaculis nunc. Fusce eleifend mauris nec neque
                  facilisis bibendum. Fusce commodo turpis nec scelerisque.
                  Suspendisse bibendum, quam quis bibendum sodales, massa orci
                  posuere odio, non dignissim velit turpis eget justo. Nulla eu
                  urna tortor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="reviews-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="review-inner-wrapper" id="review">
                <div className="review-head  d-flex justify-content-between align-items-end">
                  <div>
                    <h4>Customer Reviews</h4>
                    <div className="d-flex align-items-center justify-content-between gap-10">
                      <div className="d-flex align-items-center gap-10">
                        <StarRatingComponent
                          starCount={10}
                          value={3}
                          activeColor="#ffd700"
                          edit={false}
                          size={24}
                        />
                        <p className="mb-0">Based on 2 Reviews</p>
                      </div>
                    </div>
                  </div>
                  {orderedProduct && (
                    <Link
                      to={`/product/${1}`}
                      className="text-decoration-underline text-dark"
                    >
                      Write a review
                    </Link>
                  )}
                </div>
                <div className="review-form py-4">
                  <form action="" className="gap-20 d-flex flex-column">
                    <div className="form-group">
                      <label htmlFor="formControlInput1">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="formControlInput2"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="formControlInput2">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Email address"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="formControlInput2">Rating</label>

                      <StarRatingComponent
                        starCount={10}
                        value={0}
                        activeColor="#ffd700"
                        edit={true}
                        size={24}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="formControlInput3">Review Title</label>
                      <input
                        type="number"
                        className="form-control"
                        id="formControlInput3"
                        placeholder="Give your review a title"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">
                        Body of Review(1600)
                      </label>
                      <textarea
                        className="form-control"
                        id="formControlTextarea1"
                        rows="3"
                        placeholder="Commenst"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div className="review-list">
                  <h3>Reviews</h3>
                  <div className="review">
                    <div className="d-flex align-items-center gap-10 ">
                      <h6>Prateek shrestha</h6>
                      <StarRatingComponent
                        starCount={10}
                        value={3}
                        activeColor="#ffd700"
                        edit={false}
                        size={24}
                      />
                    </div>
                    <p className="mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed id quam vel est malesuada semper id et elit. Curabitur
                      ac vestibulum mi, ut egestas elit.{" "}
                    </p>
                  </div>
                  <div className="review mt-3">
                    <div className="d-flex align-items-center gap-10">
                      <h6>Prateek shrestha</h6>
                      <StarRatingComponent
                        starCount={10}
                        value={3}
                        activeColor="#ffd700"
                        edit={false}
                        size={24}
                      />
                    </div>
                    <p className="mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed id quam vel est malesuada semper id et elit. Curabitur
                      ac vestibulum mi, ut egestas elit.{" "}
                    </p>
                  </div>
                  <div className="review">
                    <div className="d-flex align-items-center gap-10">
                      <h6>Prateek shrestha</h6>
                      <StarRatingComponent
                        starCount={10}
                        value={3}
                        activeColor="#ffd700"
                        edit={false}
                        size={24}
                      />
                    </div>
                    <p className="mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed id quam vel est malesuada semper id et elit. Curabitur
                      ac vestibulum mi, ut egestas elit.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-product-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Prodcts</h3>
            </div>
            <div className="row">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
