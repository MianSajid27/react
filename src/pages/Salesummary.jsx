import React from 'react'
import { useLocation, useNavigate, Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import Table from "react-bootstrap/Table";
import { CiMenuKebab } from "react-icons/ci";
import Menu from "../image/Menu.png";
const Salesummary = () => {
  return (
    <div className="background">
       <div>
        <Table>
          <div className="card77 col-sm">
            <tr className="customer row d-flex ">
              <div className=" col-sm   ">
                <span className="cus rpr ">
                  {" "}
                  <th  className="suplier salsummary">Sales Summary</th>{" "}
                </span>
              </div>
              <div className="col ">
                <label className="sdf">Select Date </label>

                <br />
                <input
                  className="sdfinput"
                  placeholder="2023-07-04 - 2023-07-04"
                />
              </div>
              <div className="col-sm ">

              <img style={{width:"4px",marginTop:"50px",color:"#6b7280"}} src={Menu}/>
              </div>
            </tr>
          </div>

          <div className="summary">
            <div className="summary1">Show</div>
            <div className="summary2">
              <select
                style={{
                  width: "50px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  paddingLeft: "2px",
                  paddingRight: "5px",
                  background: "white",
                  border:"none",borderRadius:"5px",
                  fontSize:"15px"
                }}
              >
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
              </select>
            </div>
            <div className="summary3">Entries</div>
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
                  Date
                  </span>
                </th>
                <th className="rabb">
                  {" "}
                  <span style={{ marginLeft: "50px" }}>	Gross Sales </span>{" "}
                </th>
                <th>
                  {" "}
                  <span style={{ marginLeft: "50px" }}> 	Net Sales</span>
                </th>
                <th>
                  {" "}
                  <span style={{ marginLeft: "70px" }}> Refund Sales</span>{" "}
                </th>

              
                
                <th style={{ marginLeft: "50px" }}>
                  {" "}
                  <span style={{ marginLeft: "10px" }}>Discount Sales </span>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  {" "}
                  <span className="Default Defa"></span>{" "}
                </td>
                <td>
                  <span className="detailed"> </span>{" "}
                </td>
                <td>
         
                </td>
                <td>
                  <span style={{fontSize:"12px"}} > No data found </span>{" "}
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
  )
}

export default Salesummary
