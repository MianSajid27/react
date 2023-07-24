import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { BsTag } from "react-icons/bs";
import Dropright from "../image/Dropright.png";
import Favicon from "../image/Favicon.webp";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { RiAlipayLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { TbBrandAsana } from "react-icons/tb";
import { BsVectorPen } from "react-icons/bs";
import { SiBrave } from "react-icons/si";
import { GiUnicycle } from "react-icons/gi";
import { SlBasket } from "react-icons/sl";
import { CgNotes } from "react-icons/cg";
import { RiHandCoinLine } from "react-icons/ri";
import { CgCreditCard } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLocationOn} from "react-icons/ci";
import { AiOutlineBook} from "react-icons/ai";
import { TbCamera } from "react-icons/tb";
import "../App.css";

import {} from "react-icons/fa";
import { Link, withRouter } from "react-router-dom";

const Sidebar = ({ childern }) => {
  const [show, setshow] = useState(false);
  const [hide, sethide] = useState(false);
  const [bane, setbane] = useState(false);
  const [lim, setlim] = useState(false);
  const [sal, setsal] = useState(false);
  const [Rep, setRep] = useState(false);
  const [Et, setEt] = useState(false);
  const [pur, setpur] = useState(false);
  return (
    <>
    <div className=" sidescrolling"> 
      <div className="container   " >
        <div 
 
          className="w3-sidebar w3-light-grey w3-bar-block   "
        
        >
          <div>
            {" "}
            <Link className="div3" to="/Dashboard">
              {" "}
              <label className="icon">
                {" "} 
                <RxDashboard />
              </label>{" "}
              <div style={{ marginLeft: "8px" }}> Dashboard</div>
            </Link>
          </div>
          <div className="div1" to="/User" >
            <label className="icon1" onClick={() => setshow(!show)}>
              <FaUsers /> <label style={{ marginLeft: "12px" }}>Users </label>{" "}
              <span className="show" onClick={() => setshow(!show)}>
                {" "}
                {show ? (
                  <RiArrowDropUpLine />
                ) : (
                  <img style={{ width: "15px" }} src={Dropright} />
                )}{" "}
              </span>{" "}
            </label>{" "}
          </div>
          {show ? (
            <div className="drop">
              <Link className="div1" to="/Roles" style={{marginTop:"15px"}}>
                <label className="icon1" >
                  <BsTag />
                </label>{" "}
                Roles{" "}
              </Link>
              <Link className="div1" to="/User" style={{marginTop:"15px"}}>
                <label className="icon1" >
                  <FaUsers />
                </label>{" "}
                User{" "}
              </Link>
              {/* <Link className="div1" to="/Create" style={{marginTop:"15px"}}>
                <label className="icon1" >
                  <FaUsers />
                </label>{" "}
                Create{" "}
              </Link> */}
            </div>
          ) : null}

          <div>
            {" "}
            <Link className="div11" to="/Customer">
              {" "}
              <label className="icon1">
                {" "}
                <FaUsers />
              </label>
              <label style={{ marginLeft: "8px" }}> Customer</label>{" "}
            </Link>
          </div>
          <div>
            {" "}
            <Link className="div11" to="/Supplier ">
              {" "}
              <label className="icon1">
                {" "}
                <FaUsers />
              </label>
              <label style={{ marginLeft: "8px" }}> Supplier </label>{" "}
            </Link>
          </div>
          <div className="div1" to="/User">
            <label className="icon1" onClick={() => sethide(!hide)}>
              {" "}
              <SlBasket /> <label style={{ marginLeft: "9px" }}>
                Catalog{" "}
              </label>{" "}
              <span className="sho" onClick={() => sethide(!hide)}>
                {" "}
                {hide ? (
                  <RiArrowDropUpLine />
                ) : (
                  <img style={{ width: "15px" }} src={Dropright} />
                )}
              </span>
            </label>{" "}
          </div>

          {hide ? (
            <div className="">
              <Link className="div1" to="/Product" style={{marginTop:"15px",}}>
                <label className="icon1"  style={{marginLeft:"20px",marginRight:"5px" }}>
                  <TbBrandAsana />
                </label>{" "}
                Product{" "}
              </Link>
              <Link className="div1" to="/Variation" style={{marginTop:"15px"}}>
                <label className="icon1" style={{marginLeft:"20px",marginRight:"5px" }}>
                  <BsVectorPen />
                </label>{" "}
                Variation{" "}
              </Link>
              <Link className="div1" to="/Brand" style={{marginTop:"15px"}}>
                <label className="icon1" style={{marginLeft:"20px",marginRight:"5px" }}>
                  <SiBrave />
                </label>{" "}
                Brand{" "}
              </Link>
              <Link className="div1" to="/Unit" style={{marginTop:"15px"}}>
                <label className="icon1" style={{marginLeft:"20px",marginRight:"5px" }}>
                  <GiUnicycle />
                </label>{" "}
                Unit{" "}
              </Link>
              <Link className="div1" to="/Categories" style={{marginTop:"15px"}}>
                <label className="icon1" style={{marginLeft:"20px",marginRight:"5px" }}>
                  <BsTag />
                </label>{" "}
                categories{" "}
              </Link>
              <Link className="div1" to="/Stock" style={{marginTop:"15px"}}>
                <label className="icon1" style={{marginLeft:"20px",marginRight:"5px" }}>
                  <BsVectorPen />
                </label>{" "}
                Stock transfer{" "}
              </Link>
              <Link className="div1" to="/Import" style={{marginTop:"15px"}}>
                <label className="icon1" style={{marginLeft:"20px",marginRight:"5px" }}>
                <TbBrandAsana />
                </label>{" "}
                Import Products{" "}
              </Link>
            </div>
          ) : null}

          <div className="div1" to="/Sales">
            {" "}
            <label className="icon1" onClick={() => setsal(!sal)}>
              <TbBrandAsana />{" "}
              <label style={{ marginLeft: "8px" }}>Sales Channel </label>{" "}
              <span className="shoo01" onClick={() => setsal(!sal)}>
                {" "}
                {sal ? (
                  <RiArrowDropUpLine />
                ) : (
                  <img style={{ width: "15px" }} src={Dropright} />
                )}
              </span>{" "}
            </label>
          </div>
          {sal ? (
            <div>
              <Link className="div1" to="/Store" style={{marginTop:"15px"}}>
                {" "}
                <label className="icon1" style={{marginLeft:"20px",marginRight:"5px" }}>
                  {" "}
                  <CgWebsite />
                </label>
                Store
              </Link>
              <Link className="div1" to="/Component" style={{marginTop:"15px"}}>
                {" "}
                <label className="icon1" style={{marginLeft:"20px",marginRight:"5px" }}>
                  {" "}
                  <CgWebsite />
                </label>
                Marketplace
              </Link>
              <Link className="div1" to="/Mobile" style={{marginTop:"15px"}}>
                <label className="icon1" style={{marginLeft:"20px",marginRight:"5px" }}>
                  {" "}
                  <MdOutlineMobileFriendly />
                </label>
                Mobile app
              </Link>
              <Link className="div1" to="/Paylink" style={{marginTop:"15px"}}>
                {" "}
                <label className="icon1" style={{marginLeft:"20px",marginRight:"5px" }}>
                  {" "}
                  <RiAlipayLine />
                </label>
                Pay link
              </Link>
            </div>
          ) : null}

          <div className="div1" to="/Sales">
            {" "}
            <label className="icon1" onClick={() => setbane(!bane)}>
              {" "}
              <SlBasket /> <label style={{ marginLeft: "10px" }}>
                Sales{" "}
              </label>{" "}
              <span className="shoo" onClick={() => setbane(!bane)}>
                {" "}
                {bane ? (
                  <RiArrowDropUpLine />
                ) : (
                  <img style={{ width: "15px" }} src={Dropright} />
                )}
              </span>{" "}
            </label>
          </div>
          {bane ? (
            <div className="">
              <Link className="div1" to="/Invocies" style={{marginTop:"15px"}}>
                {" "}
                <label className="icon1" style={{marginLeft:"20px",marginRight:"5px" }}>
                  {" "}
                  <CgNotes />
                </label>
                Invocies
              </Link>
              <Link className="div1" to="/Credit" style={{marginTop:"15px"}}>
                {" "}
                <label className="icon1" style={{marginLeft:"20px",marginRight:"5px" }}>
                  {" "}
                  <CgCreditCard />
                </label>
                Credit Notes
              </Link>
            </div>
          ) : null}

<div className="div1" to="/" >
            <label className="icon1" onClick={() => setpur(!pur)}>
            <SlBasket />  <label style={{ marginLeft: "12px" }}>Purchases </label>{" "}
              <span className="showving" onClick={() => setpur(!pur)}>
                {" "}
                {pur ? (
                  <RiArrowDropUpLine />
                ) : (
                  <img style={{ width: "15px" }} src={Dropright} />
                )}{" "}
              </span>{" "}
            </label>{" "}
          </div>
          {pur ? (
            <div className="drop">
              <Link className="div1" to="/Purchase" style={{marginTop:"15px"}}>
                <label className="icon1" >
                <CgNotes />
                </label>{" "}
                Purchases{" "}
              </Link>
             
              {/* <Link className="div1" to="/Create" style={{marginTop:"15px"}}>
                <label className="icon1" >
                  <FaUsers />
                </label>{" "}
                Create{" "}
              </Link> */}
            </div>
          ) : null}

          <div className="div1" to="/Marketing">
            {" "}
            <label className="icon1" onClick={() => setlim(!lim)}>
              {" "}
              <RxDashboard />{" "}
              <label style={{ marginLeft: "10px" }}> Marketing</label>{" "}
              <span className="shoo0" onClick={() => setlim(!lim)}>
                {" "}
                {lim ? (
                  <RiArrowDropUpLine />
                ) : (
                  <img style={{ width: "15px" }} src={Dropright} />
                )}
              </span>{" "}
            </label>
          </div>
          {lim ? (
            <div className="">
              <Link className="div1" to="/Coupons" style={{marginTop:"15px"}}>
                {" "}
                <label className="icon1" style={{marginLeft:"20px",marginRight:"5px" }}>
                  {" "}
                  <CgNotes />
                </label>
                Coupons
              </Link>
              <Link className="div1" to="/Abondoned" style={{marginTop:"15px"}}>
                {" "}
                <label className="icon1" style={{marginLeft:"20px",marginRight:"5px" }}>
                  {" "}
                  <SlBasket />
                </label>
                Abondoned
              </Link>
            </div>
          ) : null}
          <div className="div1" to="/Marketing">
            {" "}
            <label className="icon1" onClick={() => setRep(!Rep)}>
              {" "}
              <RiHandCoinLine />
              <label style={{ marginLeft: "13px" }}> Report</label>{" "}
              <span className="shooR" onClick={() => setRep(!Rep)}>
                {" "}
                {Rep ? (
                  <RiArrowDropUpLine />
                ) : (
                  <img style={{ width: "15px" }} src={Dropright} />
                )}
              </span>{" "}
            </label>
          </div>
          {Rep ? (
            <div className="">
              <Link className="div1" to="/Summary" style={{marginTop:"15px"}}>
                {" "}
                <label className="icon1" style={{marginLeft:"20px",marginRight:"5px" }}>
                  {" "}
                  <TbCamera />
                </label>
              Tax Summary
              </Link>
              <Link className="div1" to="/Salecategory" style={{marginTop:"15px"}}>
                {" "}
                <label className="icon1" style={{marginLeft:"20px",marginRight:"5px" }}>
                  {" "}
                  <SlBasket />
                </label>
              Sale Categories
              </Link>
              <Link className="div1" to="/Salling" style={{marginTop:"15px"}}>
                {" "}
                <label className="icon1" style={{marginLeft:"20px",marginRight:"5px" }}>
                  {" "}
                  <SlBasket />
                </label>
            Product Sale
              </Link>
              <Link className="div1" to="/Salesummary" style={{marginTop:"15px"}}>
                {" "}
                <label className="icon1" style={{marginLeft:"20px",marginRight:"5px" }}>
                  {" "}
                  <SlBasket />
                </label>
             Sale Summary
              </Link>
              <Link className="div1" to="/Saleemployee" style={{marginTop:"15px"}}>
                {" "}
                <label className="icon1" style={{marginLeft:"20px",marginRight:"5px" }}>
                  {" "}
                  <FaUsers />
                </label>
             Sale Employee
              </Link>
              <Link className="div1" to="/Stocksale" style={{marginTop:"15px"}}>
                {" "}
                <label className="icon1" style={{marginLeft:"20px",marginRight:"5px" }}>
                  {" "}
                  <TbCamera />
                </label>
            Stock Sale Report
              </Link>
            </div>
          ) : null}
          <div style={{ marginTop: "13px" }} className="div1 poig" to="/Marketing">
            {" "}
            <label className="icon1" onClick={() => setEt(!Et)}>
              {" "}
              <IoSettingsOutline />{" "}
              <label style={{ marginLeft: "12px" }}> Setting</label>{" "}
              <span className="shoos" onClick={() => setEt(!Et)}>
                {" "}
                {Et ? (
                  <RiArrowDropUpLine />
                ) : (
                  <img style={{ width: "15px" }} src={Dropright} />
                )}
              </span>{" "}
            </label>
          </div>
          {Et ? (
            <div className="">
              <Link className="div1" to="/Business" style={{marginTop:"15px"}}>
                {" "}
                <label className="icon1" style={{marginLeft:"20px",marginRight:"5px" }}>
                  {" "}
                  <CgNotes />
                </label>
                Business
              </Link>
              <Link className="div1" to="/Location" style={{marginTop:"15px"}}>
                {" "}
                <label className="icon1" style={{marginLeft:"20px",marginRight:"5px" }}>
                  {" "}
                  <CiLocationOn />
                </label>
                Location
              </Link>
              <Link className="div1" to="/Layout" style={{marginTop:"15px"}}>
                {" "}
                <label className="icon1" style={{marginLeft:"20px",marginRight:"5px" }}>
                  {" "}
                  <AiOutlineBook />
                </label>
                Layout
              </Link>
              <Link className="div1" to="/Plugin" style={{marginTop:"15px"}}>
                {" "}
                <label className="icon1" style={{marginLeft:"20px",marginRight:"5px" }}>
                  {" "}
                  <CgNotes />
                </label>
                Store Plugin
              </Link>
              <Link className="div1" to="/POS" style={{marginTop:"15px"}}>
                {" "}
                <label className="icon1" style={{marginLeft:"20px",marginRight:"5px" }}>
                  {" "}
                  <SlBasket />
                </label>
                POS Setting
              </Link>
              <Link className="div1" to="/Payment" style={{marginTop:"15px"}}>
                {" "}
                <label className="icon1" style={{marginLeft:"20px",marginRight:"5px" }}>
                  {" "}
                  <SlBasket />
                </label>
                Payment
              </Link>
              <Link className="div1" to="/Billing" style={{marginTop:"15px"}}>
                {" "}
                <label className="icon1" style={{marginLeft:"20px",marginRight:"5px" }}>
                  {" "}
                  <SlBasket />
                </label>
                Billing
              </Link>
            </div>
          ) : null}
<div style={{position:"relative",zIndex:"99"}}>
          <Link style={{ marginTop: "65px",zIndex:"99",position:"absolute"   }} className="div1 " to="/User">
            {" "}
            <label className="iconl">
              {" "}
              <img style={{ width: "30px" }} src={Favicon} />
            </label>
            Powered by Ignite
          </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Sidebar;
