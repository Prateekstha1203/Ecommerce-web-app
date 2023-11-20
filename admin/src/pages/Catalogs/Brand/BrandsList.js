import React, { useEffect } from "react";
import { Table } from "antd";
import { getAllBrands } from "../../../features/brand/brandSlice";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const BrandsList = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrands());
  }
  , []);

  const brandstate = useSelector((state) => state.brand.brands);

  const brandData = [];
  for (let i = 0; i < brandstate.length; i++) {
    brandData.push({
      key: i + 1,
      name: brandstate[i].brand,
      action: (
        <>
          <Link to={`/admin/brand/edit/${brandstate[i]._id}`}>
            <BiEdit className="fs-3 text-primary " />
          </Link>
          <Link to={`/admin/brand/delete/${brandstate[i]._id}`}>
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
    title: "brand",
    dataIndex: "name", 
    sorter: (a, b) => a.name.localeCompare(b.name), 
  },
  {
    title: "Action",
    dataIndex: "action",
  },
  ]
  return (
    <div>
      <h3 className="brand">List of Brands</h3>

      <Table columns={columns} dataSource={brandData} />
    </div>
  );
};

export default BrandsList;
