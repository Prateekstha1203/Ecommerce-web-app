import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../../features/blogs/blogSlice";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const BlogList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);

  const blogstate = useSelector((state) => state.blog.blogs);
  console.log(blogstate);
  const columns = [
    {
      title: "SN",
      dataIndex: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Author",
      dataIndex: "author",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];


  let blogData = [];
  for (let i = 0; i < blogstate.length; i++) {
    blogData.push({
      key: i + 1,
      name: blogstate[i].title,
      description: blogstate[i].description,
      category: blogstate[i].category,
      author: blogstate[i].author,
      action: (
        <>
          <Link to={`/admin/category/edit/${blogstate[i]._id}`}>
            <BiEdit className="fs-3 text-primary " />
          </Link>
          <Link to={`/admin/category/delete/${blogstate[i]._id}`}>
            <AiFillDelete className="fs-3 text-danger ms-3" />
          </Link>
        </>
      ),
    });
  }
  return (
    <div>
      <h3 className="title">List of Blogs</h3>
      <Table columns={columns}  dataSource={blogData}/>
    </div>
  );
};

export default BlogList;
