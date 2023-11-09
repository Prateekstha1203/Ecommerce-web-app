import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../features/product/productSlice";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const ProductsList = () => {
  const columns = [
    {
      title: "SN",
      dataIndex: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price.localeCompare(b.price),
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Brand",
      dataIndex: "brand",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const productState = useSelector((state) => state.product.products);
  console.log(productState);

  const productData = [];

  for (let i = 0; i < productState.length; i++) {
    productData.push({
      key: i + 1,
      name: productState[i].name,
      price: productState[i].price,
      category: productState[i].category,
      brand: productState[i].brand,
      quantity: productState[i].quantity,
      action: (
        <>
          <Link to={`/admin/product/edit/${productState[i]._id}`}>
            <BiEdit className="fs-3 text-primary " />
          </Link>
          <Link to={`/admin/product/delete/${productState[i]._id}`}>
            <AiFillDelete className="fs-3 text-danger ms-3" />
          </Link>
        </>
      ),
    });
  }

  return (
    <div>
      <h3 className="title">Recent Product</h3>

      <Table columns={columns} dataSource={productData} />
    </div>
  );
};

export default ProductsList;
