import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  BiSolidDashboard,
  BiCategoryAlt,
  BiSolidCartAdd,
  BiUserCircle,
  BiSolidCoupon,
  BiSolidColorFill,
} from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { ImBlog } from "react-icons/im";
import { BsFillClipboardCheckFill, BsCardList } from "react-icons/bs";
import { SiGooglemarketingplatform } from "react-icons/si";
import { FaBlog, FaClipboardList } from "react-icons/fa";
import { Layout, Menu, Button, theme } from "antd";
import { MdOutlineCategory } from "react-icons/md";
import { TbBrandBinance } from "react-icons/tb";
import { Link, Outlet, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const colorBgContainer = theme === "dark" ? "#001529" : "#fff";
  const navigate = useNavigate();

  const handleMenuClick = (key) => {
    if (key === "signout") {
      // Handle signout logic here if needed
    } else {
      navigate(key);
      console.log(key);
    }
  };
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 my-0">
            <span className="sm-logo">PS</span>
            <span className="lg-logo">Prateek Shrestha</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({ key }) => handleMenuClick(key)}
          items={[
            {
              key: "",
              icon: <BiSolidDashboard className="fs-5" />,
              label: "Dashbaord",
            },
            {
              key: "customers",
              icon: <BiUserCircle className="fs-5" />,
              label: "Customers",
            },
            {
              key: "catalog",
              icon: <BiCategoryAlt className="fs-5" />,
              label: "Catalogs",
              children: [
                {
                  key: "product",
                  icon: <BiSolidCartAdd className="fs-5" />,
                  label: "Add Product",
                },
                {
                  key: "product-list",
                  icon: <BsCardList className="fs-5" />,
                  label: "Product List",
                },
                {
                  key: "brand",
                  icon: <TbBrandBinance className="fs-5" />,
                  label: "Brand",
                },
                {
                  key: "brand-list",
                  icon: <BsCardList className="fs-5" />,
                  label: "Brand List",
                },
                {
                  key: "category",
                  icon: <BiSolidCartAdd className="fs-5" />,
                  label: "Category",
                },
                {
                  key: "category-list",
                  icon: <MdOutlineCategory className="fs-5" />,
                  label: "Category List",
                },
                {
                  key: "color",
                  icon: <BiSolidColorFill className="fs-5" />,
                  label: "Color",
                },
                {
                  key: "color-list",
                  icon: <BsCardList className="fs-5" />,
                  label: "Color List",
                },
              ],
            },
            {
              key: "orders",
              icon: <BsFillClipboardCheckFill className="fs-5" />,
              label: "Orders",
            },
            {
              key: "marketing",
              icon: <SiGooglemarketingplatform className="fs-5" />,
              label: "Marketing",
              children: [
                {
                  key: "coupon",
                  icon: <BiSolidCoupon className="fs-5" />,
                  label: "Add Coupon",
                },
                {
                  key: "coupon-list",
                  icon: <BsCardList className="fs-5" />,
                  label: "Coupon List",
                },
              ],
            },
            {
              key: "blogs",
              icon: <BiSolidDashboard className="fs-5" />,
              label: "Blogs",
              children: [
                {
                  key: "blog",
                  icon: <ImBlog className="fs-5" />,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <BsCardList className="fs-5" />,
                  label: "Blog List",
                },
                {
                  key: "blog-category",
                  icon: <FaBlog className="fs-5" />,
                  label: "Add Blog Category",
                },
                {
                  key: "blog-category-list",
                  icon: <BsCardList className="fs-5" />,
                  label: "Blog Category List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <FaClipboardList className="fs-5" />,
              label: "Enquiries",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="d-flex justify-content-between align-items-center ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              <IoIosNotifications className="fs-4" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>
            <div className="d-flex gap-4 align-items-center dropdown">
              <div>
                <img
                  className="user-avatar"
                  src="https://media.istockphoto.com/id/1441980127/photo/successful-mature-adult-businessman-stands-in-corporate-office.jpg?s=1024x1024&w=is&k=20&c=WZwyk0LG5mrDJdquPYjqXD3FaLzRW5IRVwPNbsLOKGI="
                  alt="admin"
                />
              </div>
              <div
                className="d-flex flex-column mt-2 "
                role="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="text-dark">Prateek Shrestha</h5>
                <p>prateekshrestha1649@gmail.com</p>
              </div>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    Signout
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
