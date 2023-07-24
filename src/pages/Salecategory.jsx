import React from 'react'
import { useLocation, useNavigate, Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import Table from "react-bootstrap/Table";
import { CiMenuKebab } from "react-icons/ci";
import Menu from "../image/Menu.png";
const Salecategory = () => {
  return (
    <div className="background">
      
      <div>
        <Table>
          <div className="card77 col-sm">
            <tr className="customer row d-flex ">
              <div className=" col-sm   ">
                <span className="cus rpr ">
                  {" "}
                  <th  className="suplier salecategory">Sales Category</th>{" "}
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



      <div style={{marginLeft:"30px"}} className=" card6 col-sm col-lg">

<Table >

      <thead >
     

        <tr className="th1 rab ">
          <th className='th' style={{padding:"10px" ,width:"300px"}}> <span className='salecate'>Category  </span></th>
          <th  style={{padding:"10px",width:"300px" }}> <span className='valcate'>	Sold Item  </span></th> 
        <th></th>
        <th></th>
         
           <th style={{padding:"10px"}} >
            <span style={{marginLeft:"100px",width:"300px"}}> NetSales</span>  </th>

        </tr>
      </thead>
     
      <tbody>
        <tr className='walk in rab'>
          <td style={{padding:"20px"}}> <span className='typ' style={{marginLeft:"200px"}}> No data found  </span>  </td>
         
        
         <td style={{padding:"20px"}}>	
<span style={{marginLeft:"80px"}}> </span></td>



         <td></td>
         <td></td>
          <td style={{padding:"20px"}}> <span style={{}} > </span> </td>

        </tr>
        
       
       
      </tbody>
      
    </Table>
    </div>

    </div>
  )
}

export default Salecategory
