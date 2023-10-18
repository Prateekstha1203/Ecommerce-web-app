import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png"></img>
                <h2 className="mb-0 text-white"> Sign up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  class="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Balaju Kathmandu Nepal, <br /> Postal Code: 44600
                </address>
                <a href="tel:+977 9818767642" className="mt-3 d-block mb-3 text-white">
                  tel:+977 9818767642
                </a>
                <a
                  href="mailto:prateekshrestha1203@gmail.com"
                  className="mt-3 d-block mb-3 text-white"
                >
                  prateekshrestha1203@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30">
                  <a href="" className="text-white">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a href="" className="text-white">
                    <BsGithub className="fs-4" />
                  </a>
                  <a href="" className="text-white">
                    <BsYoutube className="fs-4" />
                  </a>
                  <a href="" className="text-white">
                    <BsInstagram className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="/privacy-policy">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1" to="/refund-policy">Refund Policy</Link>
                <Link className="text-white py-2 mb-1"to="/shipping-policy">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1" to="/terms-conditions">
                  Terms and Conditions
                </Link>
                <Link className="text-white py-2 mb-1" to="/blogs">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4" >Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="/aboutus">About Us</Link>
                <Link className="text-white py-2 mb-1" to="faq">FAQ</Link>
                <Link className="text-white py-2 mb-1" to="/contact">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered By Prateek Shrestha
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
