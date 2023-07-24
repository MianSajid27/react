import React from "react";

import Table from "react-bootstrap/Table";

import { useLocation, useNavigate, Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { BsEye } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
const Location = () => {
  return (
    <div className="background ">
      <div>
        <div>
          <Table>
            <div className="card77 col-sm">
              <tr className="customer row d-flex ">
                <div className=" col-sm   ">
                  <span className="cus  rpr lotit  ">
                    {" "}
                    <th
                      style={{
                        paddingTop: "30px",
                        position: "absolute",
                        marginLeft: "30px",
                      }}
                    >
                      Location
                    </th>{" "}
                  </span>
                </div>
                <div className="col-sm ">
                  <span className="place rpl " style={{ padding: "14px" }}>
                    {" "}
                    <th
                      className=""
                      style={{ paddingTop: "40px", paddingBottom: "40px" }}
                    >
                      {" "}
                      <BsSearch />
                      <input
                        className="loca rpl "
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
                      <button className="addlo  rbtn">
                        {" "}
                        <span className="plus rbt ">
                          <BsPlus size={"25px"} />
                        </span>
                        <Link
                          style={{ textDecoration: "none", color: "white" }}
                          to="/Addcustomer"
                        >
                          {" "}
                          Add Location
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
                <th className="th" style={{ padding: "10px" }}>
                  Name
                </th>
                <th className="em" style={{ padding: "10px" }}>
                  <span style={{ marginLeft: "60px" }}> City</span>
                </th>
                <th>
                  {" "}
                  <span style={{ marginLeft: "70px" }}> State</span>{" "}
                </th>
                <th>
                  <span style={{ marginLeft: "70px" }}> Country</span>
                </th>
                <span
                  className="reg"
                  style={{ padding: "10px", marginLeft: "90px" }}
                >
                  {" "}
                  <th className="reg" style={{}}>
                    {" "}
                    Payment Method
                  </th>
                </span>
                {/* <br /> */}
                <th style={{ padding: "10px" }}>Action</th>
                <td></td>{" "}
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={{ paddingTop: "70px" }}>
                  {" "}
                  <span className="Date sajid">sajid </span>{" "}
                </td>
                <td> </td>
                <td> </td>
                <td style={{ paddingTop: "70px" }}>
                  {" "}
                  <span className="pakidtan">Pakistan</span>{" "}
                </td>
                <td className="">
                  {" "}
                  <span className="cheqe">Cash</span>
                  <br />
                  <span className="cheqe"> Card</span>
                  <br />
                  <span className="cheqe"> Cheque</span>
                  <br />
                  <span className="cheqe"> Bank Transfer</span>
                  <br />
                  <span className="cheqe"> Other</span>
                </td>

                {/* <td></td> */}
                <td style={{ paddingTop: "70px" }}>
                  {" "}
                  <span className="efiticon">
                    <FiEdit />{" "}
                  </span>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Location;
