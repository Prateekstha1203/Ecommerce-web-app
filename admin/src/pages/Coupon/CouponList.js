import React from "react";
import { Table } from "antd";
const CouponList = () => {
  const columns = [
    {
      title: "SN",
      dataIndex: "key",
    },
    {
      title: "Customer",
      dataIndex: "customer",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.customer.length - b.customer.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Date",
      dataIndex: "date",
      defaultSortOrder: "ascend",
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Total",
      dataIndex: "total",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.total - b.total,
      sortDirections: ["descend", "ascend"],
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  const dataTable = [
    {
      key: "1",
      status: "Pending",
      customer: "John Brown",
      date: "2023-10-05",
      total: 150,
    },
    {
      key: "2",
      status: "Completed",
      customer: "Jim Green",
      date: "2023-10-04",
      total: 250,
    },
    {
      key: "3",
      status: "Pending",
      customer: "Joe Black",
      date: "2023-10-03",
      total: 100,
    },
    {
      key: "4",
      status: "Completed",
      customer: "Jim Red",
      date: "2023-10-02",
      total: 200,
    },
    {
      key: "5",
      status: "Pending",
      customer: "Mary Yellow",
      date: "2023-10-01",
      total: 300,
    },
    {
      key: "6",
      status: "Completed",
      customer: "Susan White",
      date: "2023-09-30",
      total: 180,
    },
    {
      key: "7",
      status: "Pending",
      customer: "Bob Smith",
      date: "2023-09-29",
      total: 120,
    },
    {
      key: "8",
      status: "Completed",
      customer: "Alice Blue",
      date: "2023-09-28",
      total: 210,
    },
  ];
  return (
    <div>
      <h3 className="title">Recent Product</h3>

      <Table columns={columns} dataSource={dataTable} onChange={onChange} />
    </div>
  );
};

export default CouponList;
