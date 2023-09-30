import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container">
          <div className="row">
            <div className="col-6 p-0">
              <div className="main-banner position-relative p-3">
                <img
                  src="images/main-banner.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4 className="text-uppercase ">supercharged for pods</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999/00 pr $41.62/mo.</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6 p-0">
              <div className="d-flex  flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative p-3">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4 className="text-uppercase ">Best sales</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From $999.00
                      <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-3">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4 className="text-uppercase ">New Arrivals</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From $999.00
                      <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-3">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4 className="text-uppercase ">New Arrivals</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From $999.00
                      <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-3">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4 className="text-uppercase ">New Arrivals</h4>
                    <h5>But Headphone Pro</h5>
                    <p>
                      From $999.00
                      <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <section className="container">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex flex-wrap align-items-center justify-content-between">
                <div className="service-item d-flex align-items-center  gap-10">
                  <img src="images/service.png" alt="services" />
                  <div className="service-item-text">
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over $100</p>
                  </div>
                </div>
                <div className="service-item  d-flex align-items-center  gap-10">
                  <img src="images/service-02.png" alt="services" />
                  <div className="service-item-text">
                    <h6>Daily Suprise Offers</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>
                <div className="service-item  d-flex align-items-center  gap-10">
                  <img src="images/service-03.png" alt="services" />
                  <div className="service-item-text">
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="service-item d-flex  d-flex align-items-center  gap-10">
                  <img src="images/service-04.png" alt="services" />
                  <div className="service-item-text">
                    <h6>Affordable prices</h6>
                    <p className="mb-0">Get Factory default price</p>
                  </div>
                </div>
                <div className="service-item  d-flex align-items-center  gap-10">
                  <img src="images/service-05.png" alt="services" />
                  <div className="service-item-text">
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap  justify-content-between align-content-center">
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Smart Watch</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Smart Watch</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marquee-wrapper-4 home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee>
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brands"></img>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brands"></img>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brands"></img>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brands"></img>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brands"></img>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brands"></img>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brands"></img>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brands"></img>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-wrapper  home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="blogheading">Our Featured Product</div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      {/* <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/try.webp" className="img-fluid" style={{height:"300px"}} alt="famous" />
                <div className="famous-card-content position-absolute">
                  <h5>Smart Phone</h5>
                  <h6>iphone 15 pro </h6>
                  <p>From $999.00 or $22/mo. for 24 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="special-wrapper  home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className="popular-wrapper  home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="blogheading">Our Popular Product</div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="blog-wrapper-5  home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="blogheading">Our Blogs</div>
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
