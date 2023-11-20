import React, { useEffect } from "react";
import { Table } from "antd";

import { getAllEnquiry } from "../../features/enquiry/enquirySlice";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Enquiries = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEnquiry());
  }, []);

  const enquirystate = useSelector((state) => state.enquiry.enquiries);
  const enquiryData = [];
  for (let i = 0; i < enquirystate.length; i++) {
    enquiryData.push({
      key: i + 1,
      name: enquirystate[i].name,
      email: enquirystate[i].email,
      mobile: enquirystate[i].mobile,
      comment: enquirystate[i].comment,
      status: (
        <>
          <select className="form-control form-select" name="">
         
            <option value="">Set status</option>
            <option value="">Set status</option>
            <option value="">Set status</option>
            <option value="">Set status</option>
          </select>
        </>
      ),
      action: (
        <>
          <Link to={`/admin/enquiry/edit/${enquirystate[i]._id}`}>
            <BiEdit className="fs-3 text-primary " />
          </Link>
          <Link to={`/admin/enquiry/delete/${enquirystate[i]._id}`}>
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
      title: "Name",
      dataIndex: "name",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.name.length - b.name.length,
    },

    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
    },
    {
      title: "Comment",
      dataIndex: "comment",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];

  return (
    <div>
      <h3 className="title">Recent Enquiries</h3>

      <Table columns={columns} dataSource={enquiryData} />
    </div>
  );
};

export default Enquiries;
