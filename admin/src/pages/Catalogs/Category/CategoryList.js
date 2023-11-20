import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../../features/category/categorySlice";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllCategories())
  },[])

  const categorystate = useSelector((state) => state.category.categories);


  const categoryData = [];
  for (let i = 0; i < categorystate.length; i++) {
    categoryData.push({
      key: i + 1,
      name: categorystate[i].title,
      action: (
        <>
          <Link to={`/admin/category/edit/${categorystate[i]._id}`}>
            <BiEdit className="fs-3 text-primary " />
          </Link>
          <Link to={`/admin/category/delete/${categorystate[i]._id}`}>
            <AiFillDelete className="fs-3 text-danger ms-3" />
          </Link>
        </>
      ),
    });
  }
  const columns = [
    {
      title: "SN",
      dataIndex: "key",
    },
     {
    title: "Title",
    dataIndex: "name", 
    defaultSortOrder: "descend",
    sorter: (a, b) => a.name.localeCompare(b.name), 
  },
  {
    title: "Action",
    dataIndex: "action",
  },
  ]
 
  return (
    <div>
      <h3 className="title">Recent Product</h3>

      <Table columns={columns} dataSource={categoryData} />
    </div>
  );
};

export default CategoryList;
