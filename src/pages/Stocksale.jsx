import React from 'react'
import { useLocation, useNavigate, Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import Table from "react-bootstrap/Table";
import { AiOutlineArrowDown } from "react-icons/ai";
import Menu from "../image/Menu.png";
const Stocksale = () => {
  return (
    <div className="background">
           <div>
        <Table>
          <div className="card77 col-sm">
            <tr className="customer row d-flex ">
              <div className=" col-sm   ">
                <span className="cus rpr ">
                  {" "}
                  <th s className="suplier salemployee">Stock Sale Report</th>{" "}
                </span>
              </div>
              <div className="col ">
                <label className="sdf" style={{marginLeft:"280px"}}>Select Date </label>

                <br />
                <input
              style={{marginLeft:"280px"}}
                  className="sdfinput"
                  placeholder="2023-07-04 - 2023-07-04"
                />
              </div>
              <div className="col-sm ">

<img style={{width:"4px",marginTop:""}} src={Menu}/> <label style={{marginTop:"50px",marginLeft:"10px"}}>Filter<AiOutlineArrowDown/> </label> 
{/* <label style={{fontSize:"1rem",fontWeight:"600",marginTop:"50px",}}></label> */}

              </div>
              <div className="col-sm ">



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
                <span style={{marginLeft:"10px"}}>  SKU </span>
                </th>
                <th className="em" style={{ padding: "10px" }}>
                  <span style={{ marginLeft: "10px" }}> Products</span>
                </th>
                <th>
                  {" "}
                  <span style={{ marginLeft: "40px" }}> Location</span>{" "}
                </th>
                <th>
                  <span style={{ marginLeft: "" }}>Current Stock</span>
                </th>
                <span
                  className=""
                  style={{ padding: "10px", marginLeft: "" }}
                >
                  {" "}
                  <th className="reg" style={{}}>
                    {" "}
                    Unit Sold
                  </th>
                </span>
                {/* <br /> */}
                <th style={{ padding: "10px" }}> <span style={{}}> Total Amount </span> </th>
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
                <td> </td>
                <td >
                  {" "}
                  <span  style={{fontSize:"12px"}}> No data found</span>{" "}
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

export default Stocksale
