import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
const Dashboard = () => {
  const data = [
    {
      type: "Jan",
      sales: 38,
    },
    {
      type: "Feb",
      sales: 52,
    },
    {
      type: "Mar",
      sales: 61,
    },
    {
      type: "Apr",
      sales: 145,
    },
    {
      type: "May",
      sales: 48,
    },
    {
      type: "Jun",
      sales: 38,
    },
    {
      type: "Jul",
      sales: 38,
    },
    {
      type: "Aug",
      sales: 38,
    },
    {
      type: "Sep",
      sales: 38,
    },
    {
      type: "Oct",
      sales: 38,
    },
    {
      type: "Nov",
      sales: 38,
    },
    {
      type: "Dec",
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    color: ({ type }) => {
      return "#ffd333";
    },
    label: {
      // 可手动配置 label 数据标签位置
      position: "middle",
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Months",
      },
      sales: {
        alias: "Income",
      },
    },
  };

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

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <h3 className="mb-4 title">Dashboard</h3>
      <div className="d-flex justify-content-between align-content-center gap-3">
        <div className="d-flex justify-content-between align-content-end  flex-grow-1 bg-white p-3 rounded-3">
          <div className="d-flex flex-column align-items-start">
            <p className="mb-0 desc-content">Total</p>
            <h4 className="mb-0 sub-title">$1100</h4>
          </div>
          <div className="d-flex align-items-end flex-column">
            <h6>
              <BsArrowUpRight />
              32%
            </h6>
            <p className="mb-0 desc-content">Compare To April 2022</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-content-end  flex-grow-1 bg-white p-3 rounded-3">
          <div className="d-flex flex-column align-items-start">
            <p className="mb-0 desc-content">Total</p>
            <h4 className="mb-0 sub-title">$1100</h4>
          </div>
          <div className="d-flex align-items-end flex-column">
            <h6 className="red">
              <BsArrowUpRight />
              32%
            </h6>
            <p className="mb-0 desc-content">Compare To April 2022</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-content-end  flex-grow-1 bg-white p-3 rounded-3">
          <div className="d-flex flex-column align-items-start">
            <p className="mb-0 desc-content">Total</p>
            <h4 className="mb-0 sub-title">$1100</h4>
          </div>
          <div className="d-flex align-items-end flex-column">
            <h6 className="green">
              <BsArrowUpRight />
              32%
            </h6>
            <p className="mb-0 desc-content">Compare To April 2022</p>
          </div>
        </div>
      </div>
      <div className="d-flex gap-3 justify-content-between">
        <div className="mt-5 flex-grow-1 ">
          <h3 className="mb-4">Income Statics</h3>
          <div>
            <Column {...config} />
          </div>
        </div>
        <div className="mt-5 flex-grow-1">
          <h3 className="mb-4">Recent Orders</h3>
          <Table columns={columns} dataSource={dataTable} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
