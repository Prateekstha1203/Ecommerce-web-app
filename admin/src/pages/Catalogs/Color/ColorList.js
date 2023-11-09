import React ,{useEffect}from "react";
import { Table } from "antd";

import { useDispatch, useSelector } from "react-redux";
 import {getAllColors } from "../../../features/color/colorSlice";

import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";


const ColorList = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllColors()) 
  },[])

  const colorstate = useSelector((state) => state.color.colors);
  console.log(colorstate)

  const colorData = [];
  for (let i = 0; i < colorstate.length; i++) {
    colorData.push({
      key: i + 1,
      name: colorstate[i].title,
      action: (
        <>
          <Link to={`/admin/color/edit/${colorstate[i]._id}`}>
            <BiEdit className="fs-3 text-primary " />
          </Link>
          <Link to={`/admin/color/delete/${colorstate[i]._id}`}>
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
    title: "Color",
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

      <Table columns={columns} dataSource={colorData} />
    </div>
  );
};

export default ColorList;
