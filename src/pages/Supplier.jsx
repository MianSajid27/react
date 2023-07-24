
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import ClipLoader from "react-spinners/ClipLoader";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { BsEye } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
const Supplier = () => {
  return (
    <div>
     <>

<div className="background ">

    <div >
      <div>
        <Table>
          <div className="card77 col-sm">
            <tr className="customer row d-flex ">
              <div className=" col-sm   ">
                <span className="cus rpr ">
                  {" "}
                  <th
                    className="suplier"
                  >
                    Supplier
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
                      className="holder rpl "
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
                    <button className="add   supbtn">
                      {" "}
                      <span className="plus rbt ">
                        <BsPlus size={"25px"} />
                      </span>
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to="/Addcustomer"
                      >
                        {" "}
                        Add Supplier
                      </Link>
                    </button>
                  </th>
                </span>
              </div>
            </tr>
          </div>
        </Table>
      </div>

      <div style={{ marginLeft: "30px" }} className=" card6 col-sm">
        <Table>
          <thead>
            <tr className="th1 rab">
              <th className="th" style={{ padding: "10px" }}>
                Customers
              </th>
              <th className="em" style={{ paddingLeft:"120px" }}>
                Email
              </th>
              <th className="em" style={{ paddingLeft:"150px" }}>
              Registration Date
              </th>
              <span className="reg" style={{ padding: "10px" }}>
                {" "}
                {/* <th className="" style={{paddingLeft:"120px"}}>
                  {" "}
                  Registration Date
                </th> */}
                
              </span>
              <td></td>
          
               <br />
              <th style={{ padding: "10px" }}>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr className="walk in rab">
              <td style={{ padding: "20px" }}>  </td>
              <td></td>

              <td style={{ padding: "20px",paddingLeft:"100px" ,fontSize:"13px"}}>  No Data Found</td>
              <td></td>
              <th></th>

              <td style={{ padding: "20px" }}>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/Editcustomer"
                >
                  {" "}
                  {" "}
                </Link>
                <span className="bs">
                  {" "}
                </span>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
 
</div>
</>
    </div>
  )
}

export default Supplier

