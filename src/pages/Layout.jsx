import React from "react";
import Table from "react-bootstrap/Table";
import { BsPlus } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Layout = () => {
  return (
    <div className="background">
      <div>
        <div>
          <Table>
            <div className="card77">
              <tr className="Product row d-flex ">
                <div className=" col-sm   ">
                  <span className="pro  rrrr ">
                    {" "}
                    <th
                      className="stock"
                      style={{
                        paddingTop: "30px",
                        position: "absolute",
                        paddingLeft: "40px",
                      }}
                    >
                      Invoice Layout
                    </th>{" "}
                  </span>
                </div>
                <div className="col-sm ">
                  <span className="inpll rpl " style={{ padding: "14px" }}>
                    {" "}
                    <th
                      className=""
                      style={{ paddingTop: "40px", paddingBottom: "35px" }}
                    >
                      {" "}
                      <BsSearch />
                      <input
                        className="inhol rpl "
                        placeholder="  Type your quary and "
                      />
                    </th>
                  </span>
                </div>
                <div className="col-sm ">
                  <span className="">
                    {" "}
                    <th>
                      {" "}
                      <button className="inAdd  rbtnn">
                        {" "}
                        <span className="plu rbt ">
                          <BsPlus size={"25px"} />
                        </span>
                        <Link
                          to="/CreatLayout"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          {" "}
                          Add Invoice Layout{" "}
                        </Link>
                      </button>
                    </th>
                  </span>
                </div>
              </tr>
            </div>
          </Table>
        </div>

        <div
          style={{ marginLeft: "30px" }}
          className="tab2 card6 col-sm col-lg "
        >
          <Table>
            <thead>
              <tr className="th1 col-sm  rab  ">
                <th>
                  {" "}
                  <span className="Date" style={{ marginLeft: "10px" }}>
                    Name
                  </span>
                </th>
                <th className="rabb">
                  {" "}
                  <span style={{ marginLeft: "90px" }}>Design </span>{" "}
                </th>
                <th>
                  {" "}
                  <span style={{ marginLeft: "110px" }}> Show Logo</span>
                </th>
                <th>
                  {" "}
                  <span style={{ marginLeft: "90px" }}> Show QR</span>{" "}
                </th>

                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th style={{ marginLeft: "190px" }}>
                  {" "}
                  <span style={{ marginLeft: "px" }}>Actions </span>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  {" "}
                  <span className="Default Defa">Default</span>{" "}
                </td>
                <td>
                  <span className="detailed">detailed </span>{" "}
                </td>
                <td>
                  <span className="false"> false</span>{" "}
                </td>
                <td>
                  <span className="true"> true</span>{" "}
                </td>

                <td style={{ marginLeft: "220px" }}>
                  {" "}
                  <span style={{ marginLeft: "90px" }}> </span>{" "}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Layout;
