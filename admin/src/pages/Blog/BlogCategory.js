import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogsCategory } from "../../features/blogCategory/blogCategorySlice";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const BlogCategory = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBlogsCategory());
  }, []);
  const blogCategorystate = useSelector(
    (state) => state.blogCategory.blogCategories
  );
  console.log(blogCategorystate);
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
      title: "Action",
      dataIndex: "action",
    },
  ];
  let blogCategoryData = [];
  for (let i = 0; i < blogCategorystate.length; i++) {
    blogCategoryData.push({
      key: i + 1,
      name: blogCategorystate[i].title,
      description: blogCategorystate[i].description,
      category: blogCategorystate[i].category,
      author: blogCategorystate[i].author,
      action: (
        <>
          <Link to={`/admin/blogCategory/edit/${blogCategorystate[i]._id}`}>
            <BiEdit className="fs-3 text-primary " />
          </Link>
          <Link to={`/admin/blogCategory/delete/${blogCategorystate[i]._id}`}>
            <AiFillDelete className="fs-3 text-danger ms-3" />
          </Link>
        </>
      ),
    });
  }
  return (
    <div>
      <h3 className="title">List of Blogs Category</h3>

      <Table dataSource={blogCategoryData}  columns={columns}/>
    </div>
  );
};

export default BlogCategory;
