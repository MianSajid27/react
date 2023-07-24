import React, { useEffect, useState } from "react";
import Sidebar from "../coponent/Sidebar";
import Man from "../image/Man.svg";
import Flag from "../image/Flag.png";
import Drop from "../image/Drop.png";

import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { RxDashboard } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { BsTag } from "react-icons/bs";
import { GrCatalogOption } from "react-icons/gr";
import Dropright from "../image/Dropright.png";
import Favicon from "../image/Favicon.webp";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { RiAlipayLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { TbBrandAsana } from "react-icons/tb";
import { BsVectorPen } from "react-icons/bs";
import { SiBrave } from "react-icons/si";
import { GiUnicycle } from "react-icons/gi";
import { SlBasket } from "react-icons/sl";
import { CgNotes } from "react-icons/cg";
import { RiHandCoinLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { CgCreditCard } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "../App.css";

export default function Header(props) {
  console.log(props.children);
  const [ico, setico] = useState(false);
  const [side, setside] = useState(false);
  const [show, setshow] = useState(false);
  const [hide, sethide] = useState(false);
  const [bane, setbane] = useState(false);
  const [lim, setlim] = useState(false);
  const [sal, setsal] = useState(false);
  const [Rep, setRep] = useState(false);
  const [Et, setEt] = useState(false);
//   const [Loading, setLoading] = useState(false)
// useEffect(()=>{
// setLoading(true)
// setTimeout(()=>{
// setLoading(false)

// },10000)

// },[])

   
  return (

    
    <>


      <nav
        style={{ position: "fixed", zIndex: 999 }}
        class="navbar navbar-expand-lg navbar-light bg-white  w-100 ix d-flex col-sm col-lg           "
      >
        <div style={{textDecoration:"none",border:"none"}}
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation btnn"
        >
          <div onClick={() => setside(!side)}>
            {side ? (
              <div
                className=" "
                style={{
                  outline:"none",
                  fontSize: "40px",
                  border: "none",
                  marginLeft: "900px",
                  textDecoration: "none",
                  marginTop: "30px",
                  background: "#e5e7eb",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  borderRadius: "50px",
                 background:"#f3f4f6",
                  marginTop:"30px",
                  display:"block"


                }}
              >
                {" "}
               <RxCross1 />
              </div>
            ) : (
              <span
                style={{ fontSize: "70px", border: "none", marginLeft: "40px",  marginTop:"30px"}}
                class="navbar-toggler-icon  "
              >
                <div className="d-flex">
                  <button style={{ marginLeft: "150px" }} className=" post left">
                    {" "}
                    POS
                  </button>
                  <div className="d-flex">
                    <button
                      className=""
                      style={{
                        marginTop:"15px",
                        marginBottom:"25px",
                        marginLeft: "80px",
                        background: "white",
                        border: " 6px solid #e6e8ec",
                        width: "420px",
                        borderRadius:"20px"
                      }}
                    >
                      {" "}
                      <label>
                        <img style={{ width: "55px" }} src={Flag} />{" "}
                      </label>{" "}
                    <span style={{fontSize:"50px"}}>  English </span>
                      
                      {" "}
                      <> 
                        <img
                          style={{ width: "80px", fontSize: "" }}
                          src={Drop}
                        />
                      </>
                    </button>
                  </div>

                  <button
                    style={{
                      marginTop:"15px",
                      marginBottom:"25px",
                      marginLeft: "60px",
                      marginRight:"40px",
                      border: "none",
                      background: "white",
                      border: "5px solid #f3f4f6",
                      borderRadius: "50px",
                    }}
                  >
                    {" "}
                    <img
                      style={{
                     
                        width: "90px",
                        border: "1px solid #f3f4f6",
                        borderRadius: "30px",
                        
                       
                      }}
                      src={Man}
                    />
                  </button>
                </div>
              </span>
            )}
          </div>
        </div>
        
        {side ? (
          <div
            className="div5"
            style={{
              width: "1200px",
              height: "2230px",
              marginLeft: "20px",
              fontSize: "100px",
            }}
          >
       

            <div className="col-sm  ">
              <div >
                {" "}
                <Link className="div3 div5" to="/Dashboard">
                  {" "}
                  <label className="icon div5  ">
                    {" "}
                    <RxDashboard />
                  </label>{" "}
                  <div style={{ marginLeft: "8px" }}> Dashboard</div>
                </Link>
              </div>
              <div style={{width:"1000px"}} className="div1 div5" to="/User">
                <label className="icon1 div5 " onClick={() => setshow(!show)}>
                  <FaUsers />{" "}
                  <label style={{ marginLeft: "12px" }}>Users </label>{" "}
                  <span className="show" onClick={() => setshow(!show)}>
                    {" "}
                    {show ? (
                      <label className="div6" style={{fontSize:"110px"}}>  <RiArrowDropUpLine /></label>
                    ) : (
                      <img
                        className="div6"
                        style={{ width: "60px" }}
                        src={Dropright}
                      />
                    )}{" "}
                  </span>{" "}
                </label>{" "}
              </div>
              {show ? (
                <div className="drop">
                  <Link className="div1 div5" to="/Roles" style={{marginTop:"15px"}}>
                    <label className="icon1 div5" style={{marginLeft:"20px",marginRight:"5px" }}>
                      <BsTag />
                    </label>{" "}
                    Roles{" "}
                  </Link>
                  <Link className="div1 div5" to="/User" style={{marginTop:"15px"}}>
                    <label className="icon1 div5" style={{marginLeft:"20px",marginRight:"5px" }}>
                      <FaUsers />
                    </label>{" "}
                    User{" "}
                  </Link>
                </div>
              ) : null}

              <div>
                {" "}
                <Link className="div11 div5" to="/Customer">
                  {" "}
                  <label className="icon1 div5">
                    {" "}
                    <FaUsers />
                  </label>
                  <label style={{ marginLeft: "8px" }}> Customer</label>{" "}
                </Link>
              </div>
              <div style={{width:"1000px"}} className="div1 div5" to="/User">
                <label className="icon1 div5 " onClick={() => sethide(!hide)}>
                  {" "}
                  <SlBasket />{" "}
                  <label style={{ marginLeft: "9px" }}>Catalog </label>{" "}
                  <span className="sho" onClick={() => sethide(!hide)}>
                    {" "}
                    {hide ? (
                     <label className="div7" style={{fontSize:"110px"}}>  <RiArrowDropUpLine /></label>
                    ) : (
                      <img
                        className="div7"
                        style={{ width: "60px" }}

                        src={Dropright}
                      />
                    )}
                  </span>
                </label>{" "}
              </div>

              {hide ? (
                <div className="">
                  <Link className="div1 div5" to="/Product" style={{marginTop:"15px"}}>
                    <label className="icon1 div5" style={{marginLeft:"20px",marginRight:"5px" }}>
                      <TbBrandAsana />
                    </label>{" "}
                    Product{" "}
                  </Link>
                  <Link className="div1 div5" to="/Variation" style={{marginTop:"15px"}}>
                    <label className="icon1 div5" style={{marginLeft:"20px",marginRight:"5px" }}>
                      <BsVectorPen />
                    </label>{" "}
                    Variation{" "}
                  </Link>
                  <Link className="div1 div5" to="/Brand" style={{marginTop:"15px"}}>
                    <label className="icon1 div5" style={{marginLeft:"20px",marginRight:"5px" }}>
                      <SiBrave />
                    </label>{" "}
                    Brand{" "}
                  </Link>
                  <Link className="div1 div5" to="/Unit" style={{marginTop:"15px"}}>
                    <label className="icon1 div5" style={{marginLeft:"20px",marginRight:"5px" }}>
                      <GiUnicycle />
                    </label>{" "}
                    Unit{" "}
                  </Link>
                  <Link className="div1 div5" to="/Categories" style={{marginTop:"15px"}}>
                    <label className="icon1 div5" style={{marginLeft:"20px" ,marginRight:"5px"}}>
                      <BsTag />
                    </label>{" "}
                    categories{" "}
                  </Link>
                  <Link className="div1 div5" to="/Stock" style={{marginTop:"15px"}}>
                    <label className="icon1 div5" style={{marginLeft:"20px" ,marginRight:"5px"}}>
                      <BsVectorPen />
                    </label>{" "}
                    Stock transfer{" "}
                  </Link>
                </div>
              ) : null}

              <div style={{width:"1000px"}} className="div1 div5" to="/Sales">
                {" "}
                <label className="icon11 div5" onClick={() => setsal(!sal)}>
                  <TbBrandAsana />{" "}
                  <label style={{ marginLeft: "8px" }}>Sales Channel </label>{" "}
                  <span className="shoo01" onClick={() => setsal(!sal)}>
                    {" "}
                    {sal ? (
                      <label className="div88" style={{fontSize:"110px"}}>  <RiArrowDropUpLine /></label>
                    ) : (
                      <img
                        className="div88"
                        style={{ width: "60px" }}
                        src={Dropright}
                      />
                    )}
                  </span>{" "}
                </label>
              </div>
              {sal ? (
                <div>
                  <Link className="div1 div5" to="/Store" style={{marginTop:"15px"}}>
                    {" "}
                    <label className="icon1 div5" style={{marginLeft:"20px",marginRight:"5px" }}>
                      {" "}
                      <CgWebsite />
                    </label>
                    Store
                  </Link>
                  <Link className="div1 div5" to="/Component" style={{marginTop:"15px"}}>
                    {" "}
                    <label className="icon1 div5" style={{marginLeft:"20px",marginRight:"5px" }}>
                      {" "}
                      <CgWebsite />
                    </label>
                    Marketplace
                  </Link>
                  <Link className="div1 div5" to="/Mobile" style={{marginTop:"15px"}}>
                    <label className="icon1 div5" style={{marginLeft:"20px",marginRight:"5px" }}>
                      {" "}
                      <MdOutlineMobileFriendly />
                    </label>
                    Mobile app
                  </Link>
                  <Link className="div1 div5" to="/Paylink" style={{marginTop:"15px"}}>
                    {" "}
                    <label className="icon1 div5" style={{marginLeft:"20px",marginRight:"5px" }}>
                      {" "}
                      <RiAlipayLine />
                    </label>
                    Pay link
                  </Link>
                </div>
              ) : null}

              <div  style={{width:"1000px"}}  className="div1 div5" to="/Sales">
                {" "}
                <label className="icon11 div5" onClick={() => setbane(!bane)}>
                  {" "}
                  <SlBasket />{" "}
                  <label style={{ marginLeft: "10px" }}>Sales </label>{" "}
                  <span className="shoo" onClick={() => setbane(!bane)}>
                    {" "}
                    {bane ? (
                      <label className="div8" style={{fontSize:"110px"}}>  <RiArrowDropUpLine /></label>
                    ) : (
                      <img
                        className="div8"
                        style={{ width: "60px" }}
                        src={Dropright}
                      />
                    )}
                  </span>{" "}
                </label>
              </div>
              {bane ? (
                <div className="">
                  <Link className="div1 div5" to="/Invocies" style={{marginTop:"15px"}}>
                    {" "}
                    <label className="icon1 div5" style={{marginLeft:"20px",marginRight:"5px" }}>
                      {" "}
                      <CgNotes />
                    </label>
                    Invocies
                  </Link>
                  <Link className="div1 div5" to="/Credit" style={{marginTop:"15px"}}>
                    {" "}
                    <label className="icon1 div5" style={{marginLeft:"20px",marginRight:"5px" }}>
                      {" "}
                      <CgCreditCard />
                    </label>
                    Credit Notes
                  </Link>
                </div>
              ) : null}

              <div  style={{width:"1000px"}} className="div1 div5" to="/Marketing">
                {" "}
                <label className="icon1 div5" onClick={() => setlim(!lim)}>
                  {" "}
                  <RxDashboard />{" "}
                  <label style={{ marginLeft: "10px" }}> Marketing</label>{" "}
                  <span className="shoo0" onClick={() => setlim(!lim)}>
                    {" "}
                    {lim ? (
                       <label className="div9" style={{fontSize:"110px"}}>  <RiArrowDropUpLine /></label>
                    ) : (
                      <img
                        className="div9"
                        style={{ width: "60px" }}
                        src={Dropright}
                      />
                    )}
                  </span>{" "}
                </label>
              </div>
              {lim ? (
                <div className="">
                  <Link className="div1 div5" to="/Coupons" style={{marginTop:"15px"}}>
                    {" "}
                    <label className="icon1 div5" style={{marginLeft:"20px",marginRight:"5px" }}>
                      {" "}
                      <CgNotes />
                    </label>
                    Coupons
                  </Link>
                  <Link className="div1 div5" to="/Abondoned" style={{marginTop:"15px"}}>
                    {" "}
                    <label className="icon1 div5" style={{marginLeft:"20px",marginRight:"5px" }}>
                      {" "}
                      <SlBasket />
                    </label>
                    Abondoned
                  </Link>
                </div>
              ) : null}
              <div  style={{width:"1000px"}} className="div1 div5" to="/Marketing">
                {" "}
                <label className="icon1 div5" onClick={() => setRep(!Rep)}>
                  {" "}
                  <RiHandCoinLine />
                  <label style={{ marginLeft: "13px" }}> Report</label>{" "}
                  <span className="shooR" onClick={() => setRep(!Rep)}>
                    {" "}
                    {Rep ? (
                      <label className="div10" style={{fontSize:"110px"}}>  <RiArrowDropUpLine /></label>
                    ) : (
                      <img
                        className="div10"
                        style={{ width: "60px" }}
                        src={Dropright}
                      />
                    )}
                  </span>{" "}
                </label>
              </div>
              {Rep ? (
                <div className="">
                  <Link className="div1 div5" to="/Coupons" style={{marginTop:"15px"}}>
                    {" "}
                    <label className="icon1 div5" style={{marginLeft:"20px",marginRight:"5px" }}>
                      {" "}
                      <CgNotes />
                    </label>
                    Coupons
                  </Link>
                  <Link className="div1 div5" to="/Abondoned" style={{marginTop:"15px"}}>
                    {" "}
                    <label className="icon1 div5" style={{marginLeft:"20px",marginRight:"5px" }}>
                      {" "}
                      <SlBasket />
                    </label>
                    Abondoned
                  </Link>
                </div>
              ) : null}
              <div
                style={{ marginTop: "13px",width:"1000px" }}
                className="div1"
                to="/Marketing"
              >
                {" "}
                <label className="icon1 div5" onClick={() => setEt(!Et)}>
                  {" "}
                  <IoSettingsOutline />{" "}
                  <label style={{ marginLeft: "12px" }}> Setting</label>{" "}
                  <span className="shoos" onClick={() => setEt(!Et)}>
                    {" "}
                    {Et ? (
                       <label className="div100" style={{fontSize:"110px"}}>  <RiArrowDropUpLine /></label>
                    ) : (
                      <img
                        className="div100"
                        style={{ width: "60px" }}
                        src={Dropright}
                      />
                    )}
                  </span>{" "}
                </label>
              </div>
              {Et ? (
                <div className="">
                  <Link className="div1 div5" to="/Coupons" style={{marginTop:"15px"}}>
                    {" "}
                    <label className="icon1 div5" style={{marginLeft:"20px",marginRight:"5px" }}>
                      {" "}
                      <CgNotes />
                    </label>
                    Coupons
                  </Link>
                  <Link className="div1 div5" to="/Abondoned" style={{marginTop:"15px"}}>
                    {" "}
                    <label className="icon1 div5" style={{marginLeft:"20px",marginRight:"5px" }}>
                      {" "}
                      <SlBasket />
                    </label>
                    Abondoned
                  </Link>
                </div>
              ) : null}

              <Link
                style={{ marginTop: "95px" }}
                className="div1 div5 div12"
                to="/User"
              >
                {" "}
                <label className="iconl div5">
                  {" "}
                  <img
                    className="div5"
                    style={{ width: "70px" }}
                    src={Favicon}
                  />
                </label>
                Powered by Ignite
              </Link>
            </div>
          </div>
        ) : null}

        <div className="col-sm col-lg">
          <a
            class="navbar-brand rnav  "
            href="#"
            style={{ marginLeft: "60px", fontSize: "19px" }}
          >
            newborjanshoe123
          </a>
        </div>

        <div class="collapse navbar-collapse col-sm  " id="navbarNav ">
          <ul class="navbar-nav nbtn">
            <li class="nav-item ">
              <a class="nav-link " href="#">
                <button className="pos nbtn"> POS</button>{" "}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <button className="eng">
                  <img style={{ width: "20px" }} src={Flag} />{" "}
                  <label>
                    {" "}
                    <span
                      style={{
                        marginLeft: "5px",
                        color: "#525a64",
                        fontWeight: "500",
                      }}
                    >
                      English
                    </span>
                    <label style={{ fontSize: "", marginLeft: "5px" }}>
                      {" "}
                      <img style={{ width: "30px" }} src={Drop} />{" "}
                    </label>
                  </label>
                </button>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <img
                  style={{
                    width: "40px",
                    border: "1px solid #f3f4f6",
                    borderRadius: "30px",
                    marginLeft: "10px",
                  }}
                  src={Man}
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>

 

      <div className="row ">
        <div style={{ width: "280px" }} className=" col-3 ">
          <Sidebar></Sidebar>
        </div>

        <div className=" col-9 ">{props.children}</div>
      </div>
    
      
 {/* )
 } 
  </div>  */}
    </>
  );
}
