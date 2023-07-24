import React from 'react'
import {  Link } from "react-router-dom";
const Editcustomer = () => {
  return (
    <div>
      <div className="cloii">

<h5 className="crea newr">
      
      <span style={{ color: "black" }} className="newr">
       
      Update Customer
      </span>
    </h5>
    <div className="d-flex  col-sm col-lg rcreate">
        <div className=" ">
          <h5 style={{ marginTop: "50px" }} className="hif">
         
            <label className="hifg">Description </label>
          </h5>
          <h6 style={{ marginLeft: "30px" }} className="  her  ">
            {" "}
            <label className="rhr">
           
            </label>
          </h6>
        </div>
        <div className="card back  carre  ">
          <div className="">
            <h6
              style={{ marginTop: "30px", marginLeft: "30px" }}
              className="name"
            >
                First Name
            </h6>
            <input
             
              name="name"
              className="put  int"
            ></input>
            <h6
              style={{ marginTop: "15px", marginLeft: "30px" }}
              className="name"
            >
           Last Name
            </h6>
            <input
             
              name="last"
              className="put  int"
            ></input>
            <h6
              style={{ marginTop: "15px", marginLeft: "30px" }}
              className="name"
            >
           Email
            </h6>
            <input
             
              name="last"
              className="put  int"
            ></input>
            <h6
              style={{ marginTop: "15px", marginLeft: "30px" }}
              className="name"
            >
          Credit Limit
            </h6>
            <input
             
              name="last"
              className="put  int"
            ></input>
                 <h6
              style={{ marginTop: "15px", marginLeft: "30px" }}
              className="name"
            >
         Phone No
            </h6>
            <input
             
              name="last"
              className="put  int"
            ></input>
            
            <h6
              style={{ marginTop: "15px", marginLeft: "30px" }}
              className="name"
            >
Note
            </h6>
            <div class="form-group">
    <textarea style={{marginBottom:"60px"}} class="form-control put  int" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
    
          </div>
        </div>
      </div>
      <div className='d-flex'> 
      <button className='cutii'>
         <Link style={{textDecoration:"none",color:"#747280"}} to="/Customer"> Back </Link>
         </button>
      <button className='cuti'> Add Customer</button>
      </div>
      
    </div>
    </div>
  )
}

export default Editcustomer
