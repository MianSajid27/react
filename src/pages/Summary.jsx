import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import Table from "react-bootstrap/Table";
import { CiMenuKebab } from "react-icons/ci";
import Menu from "../image/Menu.png";
const Summary = () => {
  return (
    <div className="background">
      <div>
        <Table>
          <div className="card77 col-sm">
            <tr className="customer row d-flex ">
              <div className=" col-sm   ">
                <span className="cus rpr ">
                  {" "}
                  <th className="suplier taxsumary" >Taxes</th>{" "}
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

      <Table style={{ marginLeft: "30px", width: "1010px" }}>
        <thead>
          <tr className="th1 rab">
            <th className="th" style={{ padding: "10px" }}>
              {" "}
              <span style={{ marginLeft: "20px",fontSize:".875rem" }}>Tax Name </span>
            </th>
            <th className="" style={{ padding: "10px" }}>
              {" "}
              <span style={{ marginLeft: "120px" }}> Tax Rate </span>
            </th>
            <th className="reg">
              {" "}
              <span style={{ marginLeft: "150px" }}> Taxable Sales </span>{" "}
            </th>

            <th style={{ padding: "10px" }}>
              <span style={{ marginLeft: "80px" }}> Tax Amount</span>{" "}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr style={{ background: "white" }} className="walk in rab">
            <td style={{ padding: "20px" }}> </td>
            <td style={{ padding: "20px" }}> </td>

            <td style={{ padding: "20px" }}>
              <span style={{ marginLeft: "" }}> no found data </span>
            </td>
            <td style={{ padding: "20px" }}>
              {" "}
              <span style={{ marginLeft: "" }}> </span>{" "}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Summary;
