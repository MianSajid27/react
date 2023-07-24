import React, { useState, useEffect }  from 'react'
import Table from "react-bootstrap/Table";
import ClipLoader from "react-spinners/ClipLoader";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { BsEye } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
const Purchase = () => {
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
                   Purchases
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
                        Add Purchases
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
            <th  className='th' style={{padding:"10px"}}><span style={{marginLeft:"80px"}}>Name </span></th>
          <th className='' style={{padding:"10px" }}> <span style={{marginLeft:"70px"}}> Total </span></th> 
          <th className='reg' > <span style={{marginLeft:"160px"}}> 	Date </span> </th>
    
        
         
           <th style={{padding:"10px"}} >
            <span style={{marginLeft:"50px"}}> Status</span>  </th>
            </tr>
          </thead>

          <tbody>
            <tr className="walk in rab">
              <td style={{ padding: "20px" }}>  </td>
              <td></td>

              <td style={{ padding: "20px",paddingLeft:"90px" ,fontSize:"13px"}}>  No Data Found</td>
           
             

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

export default Purchase
