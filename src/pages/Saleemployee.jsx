import React from 'react'
import { useLocation, useNavigate, Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import Table from "react-bootstrap/Table";
import { CiMenuKebab } from "react-icons/ci";
import Menu from "../image/Menu.png";
const Saleemployee = () => {
  return (
    <div className="background">
          <div>
        <Table>
          <div className="card77 col-sm">
            <tr className="customer row d-flex ">
              <div className=" col-sm   ">
                <span className="cus rpr ">
                  {" "}
                  <th  className="suplier salemployee">Sales Employee</th>{" "}
                </span>
              </div>
              <div className="col ">
                <label className="sdf">Select Date </label>

                <br />
                <input
                style={{}}
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

      <Table style={{marginLeft:"30px",width:"1020px"}}>
            <thead>
              <tr className="th1 col-sm  rab  ">
                <th className="th" style={{ padding: "10px" }}>
                <span style={{marginLeft:"10px"}}>   Name </span>
                </th>
                <th className="em" style={{ padding: "10px" }}>
                  <span style={{ marginLeft: "30px" }}> Gross Sales</span>
                </th>
                <th>
                  {" "}
                  <span style={{ marginLeft: "40px" }}> Refunds</span>{" "}
                </th>
                <th>
                  <span style={{ marginLeft: "" }}> Discount</span>
                </th>
                <span
                  className=""
                  style={{ padding: "10px", marginLeft: "" }}
                >
                  {" "}
                  <th className="reg" style={{}}>
                    {" "}
                    Net Sales
                  </th>
                </span>
                {/* <br /> */}
                <th style={{ padding: "10px" }}> <span style={{}}> Receipts </span> </th>
                {" "}
              </tr>
            </thead>

            <tbody style={{background:"white"}}>
              <tr>
                <td >
                  {" "}
                  <span> </span>{" "}
                </td>
                <td> </td>
                <td style={{marginLeft:"100px"}}>no data found </td>
                <td >
                  {" "}
                  <span ></span>{" "}
                </td>
                <td className="">
                  {" "}
                  <span ></span>
              
                  <span > </span>
                  <br />  <span > </span>
                 
                  <span> </span>
                  <br />
                  <span > </span>
                </td>
<td></td>
                {/* <td></td> */}
               
              </tr>
            </tbody>
          </Table>
    </div>
  )
}

export default Saleemployee
