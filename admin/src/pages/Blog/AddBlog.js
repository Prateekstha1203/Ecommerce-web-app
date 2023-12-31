import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import { Stepper } from "react-form-stepper";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";

const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const AddBlog = () => {
  const [description, setDescription] = useState();
  const handleDescription = (e) => {
    setDescription(e);
    console.log(description);
  };
  return (
    <div>
      <h3 className="mb-4 title">Add Blog</h3>
      {/* <Stepper
        steps={[
          { label: "Add Blog Details" },
          { label: "Upload Images" },
          { label: "Finish" },
        ]}
        activeStep={1}
      /> */}
      <div className="">
        <form action="">
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Dragger>
          <div className="mt-4">
            <CustomInput type="text" label="Enter Blog Title" />
            <select name="" id="" className="form-control py-3 mb-3">
              <option value="">Select Category</option>;
            </select>
            <ReactQuill
              theme="snow"
              value={description}
              onChange={(evt) => {
                handleDescription(evt);
              }}
            />
            <button className="btn btn-success border-0 rounded-3 my-3">
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
