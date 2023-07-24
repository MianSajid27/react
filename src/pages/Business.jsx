import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
const Business = () => {
  return (
    <div className="busback">
      <div>
        <h5 className="Any">
          {" "}
          <label
            className=" Where ssting busting"
            style={{ fontWeight: "640" }}
          >
            Business Setting
          </label>
        </h5>
        <hr class="new1"></hr>

        <div className="d-flex col-sm col-lg rcreate">
          <div>
            <p className="hif buspara">
              <label className="hifg bustit  ">Logo</label>
            </p>
            <h6
              style={{ marginLeft: "30px", fontWeight: "420" }}
              className="  her"
            >
              <label className="rhr burpara">
                Upload your site logo from here.
                <br />
                Dimension of the logo should be{" "}
                <label style={{ color: "#4b556c", fontWeight: "600" }}>
                  {" "}
                  128x48
                </label>
                <br />
                <label style={{ color: "#4b556c", fontWeight: "600" }}>
                  {" "}
                  Pixel
                </label>
              </label>
            </h6>
          </div>
          <div
            style={{ marginTop: "18px" }}
            className="card back carre rescard buscard   "
          >
            <div>
              <input id="file" type="file" placeholder="czdfghjkl" />
            </div>
          </div>
        </div>
        <hr class="new1"></hr>
        <div className="d-flex  col-sm col-lg rcreate">
          <div className=" ">
            <p
              style={{
                marginTop: "70px",
                fontSize: "18px",
                fontWeight: "650",
                color: "#4b556c",
                marginBottom: "5px",
              }}
              className="hif"
            >
              <label className="hifg bustit">Business </label>
            </p>
            <h6
              style={{ marginLeft: "30px", fontWeight: "420" }}
              className="  her  "
            >
              {" "}
              <label className="rhr  burpara">
                Change your site information from here <br />
              </label>
            </h6>
          </div>
          <div
            style={{ marginTop: "18px" }}
            className="card back  carre rescard  buscar "
          >
            <div className="">
              <h6
                style={{
                  marginTop: "40px",
                  marginLeft: "30px",
                  fontWeight: "400px",
                  color: "#4b556c",
                }}
                className="name bustitt"
              >
                Name
              </h6>
              <input style={{}} name="name" className="put  int"></input>

              <h6
                style={{
                  marginTop: "10px",
                  marginLeft: "30px",
                  fontWeight: "400px",
                  color: "#4b556c",
                }}
                className="name bustitt"
              >
                Currency
              </h6>
              <select
                class="form-select  mb-2 put int"
                aria-label="Disabled select example"
                disabled
              >
                <option selected></option>
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
              </select>

              <h6
                style={{
                  marginTop: "10px",
                  marginLeft: "30px",
                  fontWeight: "400px",
                  color: "#4b556c",
                }}
                className="name bustitt"
              >
                Time zone
              </h6>

              <select
                class="form-select  put int mb-2 "
                aria-label=".form-select-lg example"
              >
                <option className="overflow-scroll" selected></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="1">One</option>
              </select>
              <h6
                style={{
                  marginTop: "10px",
                  marginLeft: "30px",
                  fontWeight: "400px",
                  color: "#4b556c",
                }}
                className="name bustitt"
              >
                Tin No.
              </h6>
              <input
                style={{ marginBottom: "50px" }}
                name="name"
                className="put  int"
              ></input>
            </div>
          </div>
        </div>

        <hr class="new1"></hr>
        <button className="Saset">Save Setting </button>
      </div>
    </div>
  );
};

export default Business;
