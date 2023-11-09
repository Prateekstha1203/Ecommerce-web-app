import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const RefundPolicy = () => {
  return (
    <>
      <Meta title="Refund Policy" />
      <BreadCrumb title="Refund Policy" />
      <section className="policy-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="policy-card"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RefundPolicy;
