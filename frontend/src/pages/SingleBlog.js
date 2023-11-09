import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const SingleBlog = () => {
  return (
    <>
      <Meta title="Dynamic Blog name" />
      <BreadCrumb title="Dynamic Blog name" />
      <div className="blog-wrapper home-wrapper-2">
        <div className="container">
          <div className="row py-3">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex gap-10 align-items-center ">
                  <BsArrowLeft className="fs-4" />
                  Go back to blogs
                </Link>
                <h3 className="title">
                  lorem lorem lorem lorem lorem lorem lorem
                </h3>
                <img
                  src="images/blog-1.jpg"
                  className="img-fluid w-100"
                  alt="blog "
                />
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
      </div>
    </>
  );
};

export default SingleBlog;
