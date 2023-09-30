import React from "react";
import { Link } from "react-router-dom";
const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="blog-card-img">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog " />
      </div>
      <div className="blog-card-content">
        <p className="date"> Dec, 2022 </p>
        <h6 className="title"> lorem lorem lorem lorem lorem lorem lorem</h6>
        <p className="desc">
          Nullam blandit justo vitae volutpat efficitur. Integer fringilla purus
          nec justo efficitur, in tincidunt dui lobortis.
        </p>
        <Link className="button" to="/blog/:id">
          Read Me
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
