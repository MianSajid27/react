import React, {useEffect, useState } from "react";
import Mobile from "../image/Mobile.webp";
import Web from "../image/Web.webp";
import Green from "../image/Green.webp";
import Playstore from "../image/Playstore.webp";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiUserCheck } from "react-icons/bi";
import { FaChartLine } from "react-icons/fa";
import { CiBatteryFull } from "react-icons/ci";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdCollectionsBookmark } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { FaGooglePlay } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";
import ClipLoader from "react-spinners/ClipLoader";
import "../App.css";
const User = () => {
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://pos-dev.myignite.online/connector/api/user", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImIyMjYxNDUwNTllOTc4YmMwMDJkZDU4N2M2MGVkZWU2MjZlNzgwMmQ3ZjQxMzM5Mzk3YTkzNGIyNGRmNjhmN2U4NTE5MDU5MWEwOTIxOWY1In0.eyJhdWQiOiIzNSIsImp0aSI6ImIyMjYxNDUwNTllOTc4YmMwMDJkZDU4N2M2MGVkZWU2MjZlNzgwMmQ3ZjQxMzM5Mzk3YTkzNGIyNGRmNjhmN2U4NTE5MDU5MWEwOTIxOWY1IiwiaWF0IjoxNjgzNTQ0MDI5LCJuYmYiOjE2ODM1NDQwMjksImV4cCI6MTcxNTE2NjQyOSwic3ViIjoiMTUxOCIsInNjb3BlcyI6W119.Z6Mu5ednnVvqma1pc3CACEMx4Fp2tJFmRnxGN6_oU3MpJjItGtiZdyOIvFV508UHlSWUnn4wXwdBTOUF3HaeWjGp1JBr_BdZ6gsYFjAkbmgW8mUM0xGdpe4IJiNwQTs3SF1QC6B93JrPc7Mnmh6a_OvknAGW-1btWIZ2KUr_41PMT-AGDyzouPL4ojanWghDyzBTK1G-SI4cKMabHAyUrvoj3EmT1V4VmGzNjZoXxYyk_lku1vsnHIamSNGhgTjSrOOEW9AX_vpfRWXDWURQsrJ5W4x5ofI0P3i_m1oU8wYQFhNUhY13NpXglstB9TytHWtjkb-Kx1uUDclpbSCUouSXNO3ihXjqRZlcuyDsufH7d8iBJ_6MksEeHBTbczLt0fLDQmzajga1SPjCW1ILJuVKHm6wANiugBYKKZOa-RvDyrPdwfgy2S1hYI8GPFTMw-nMx9GPoX7TbcavpQ0kxfpLzMaIXOjW2_GlHROoq9AlfJiLczbCMHJut9xus9CqcjdUlySnwX2yin-6ZwGcLuiKRnmBWGOwSj8Es7ehVNZz32QejiLX3cTgrGKqldC7WVEmVcFwNsZjn79z-ShOvTeVjmRAc-K_2OD_LWPNoERPAPx-EjxgDEr3o5DWvAP8ed-vLJ9Nio2491VLMqpu2W8HGCu8Wuu7uNp1vWfzapo ",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((result) => {
      result.json().then((resp) => {
        // console.log("result", resp);
        setData(resp.data);
        console.log("result", resp);
        setLoading(false);
      });
    });
  }, []);
  const [show, setshow] = useState(false);
  const [hide, sethide] = useState(false);
  const [bane, setbane] = useState(false);
  const [pic, setpic] = useState(false);
  const [pi, setpi] = useState(false);
  return (
    <div className="bg">
 {Loading ? (
          <div className="App"
            
          >
            <ClipLoader color={"#000000"} size={50} />
          </div>
        ) : (
      <div> 
      <h5
        style={{ paddingTop: "100px", fontWeight: "700", marginLeft: "40px" }}
      >
        Mobile app
      </h5>

      <div  style={{ backgroundColor: "#2f705f" , marginLeft: "40px",marginBottom:"20px" }} className=" card77 col-sm   ">
        <div className=" d-flex row  " >

       
          
          <div style={{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"}} className=" col-sm   ">
            <img className="mobile  " src={Mobile} />
          </div>
          <div style={{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"}} className=" col-sm   ">
           <span>
            <h5 style={{ fontWeight: "700",color:"white" }}>Create your store app easily</h5>
            </span>
            <span>
            <p style={{ display:"flex", width:"20rem",color:"white" ,marginLeft:"100px",fontWeight: "500"}}>
              Create an app with your store's<br></br>
              increase your custom increase<br></br>
              your store's repurchase chances
            </p>
            </span>
            </div>
          <div className="now col-sm text-center ">
            <button style={{}} className="your">
              create your app now
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
        </div>
      <div className="card business">
        <h5
          style={{
            color: "#529f7f",
            marginLeft: "20px",
            fontWeight: "600",
            fontSize: "22px",
            paddingTop: "20px",
            paddingBottom: "40px",
          }}
        >
          Make your business sustainable through the app
        </h5>
        <div className="justify d-flex row">
          <div className="lef col-sm">
            <div className="d-flex  ">
              <div
                style={{ backgroundColor: "#f3f4f6", border: "none" }}
                className="card x3 "
              >
                <label className="bi" style={{ marginLeft: "20px" }}>
                  <BiUserCheck />
                </label>
                <h5 style={{ marginLeft: "20px" }}>3x</h5>
                <p style={{ marginLeft: "20px", fontSize: "17px" }}>
                  Customer retension rate
                </p>
              </div>

              <div
                style={{ backgroundColor: "#f3f4f6", border: "none" }}
                className="card x5"
              >
                <labe className="bi" style={{ marginLeft: "20px" }}>
                  <FaChartLine />
                </labe>
                <h5 style={{ marginLeft: "20px" }}>5x</h5>
                <p style={{ marginLeft: "20px", fontSize: "17px" }}>
                  Converting customs into buyers
                </p>
              </div>
            </div>

            <div className="d-flex ">
              <div
                style={{ backgroundColor: "#f3f4f6", border: "none" }}
                className="card x3"
              >
                <label className="bi" style={{ marginLeft: "20px" }}>
                  <RiMoneyDollarBoxLine />
                </label>
                <h5 style={{ marginLeft: "20px", border: "none" }}>70%</h5>
                <p style={{ marginLeft: "20px", fontSize: "17px" }}>
                  Increase returns and profits
                </p>
              </div>

              <div
                style={{ backgroundColor: "#f3f4f6", border: "none" }}
                className="card x5"
              >
                <label className="bi" style={{ marginLeft: "20px" }}>
                  <AiOutlineUserAdd />
                </label>
                <h5 style={{ marginLeft: "20px", border: "none" }}>98%</h5>
                <p style={{ marginLeft: "20px", fontSize: "17px" }}>
                  Customer access to your store
                </p>
              </div>
            </div>
            <div className="d-flex  ">
              <div
                style={{
                  marginBottom: "20px",
                  backgroundColor: "#f3f4f6",
                  border: "none",
                }}
                className="card x3 "
              >
                <labe className="bi" style={{ marginLeft: "20px" }}>
                  <MdCollectionsBookmark />
                </labe>
                <h5 style={{ marginLeft: "20px" }}>40%</h5>
                <p style={{ marginLeft: "20px", fontSize: "17px" }}>
                  Lower marketing costs
                </p>
              </div>
            </div>
          </div>

          <div className="rig  col-sm">
            <img className="mobi" src={Mobile} />
          </div>
        </div>
      </div>

      <div
        style={{ marginLeft: "40px", marginBottom: "20px" }}
        className="card "
      >
        <div className="d-flex row">

        
        <div className="mian  col-sm  ">
          <h5
            style={{
              color: "#2f705f",
              marginLeft: "20px",
              fontWeight: "700",
              paddingTop: "20px",
              paddingBottom: "30px",
            }}
          >
            Application features
          </h5>
          <div className="mian1 col-sm">
            <button
              id="1"
              className="store"
              style={{
                marginLeft: "40px",
                marginBottom: "10px",
                fontSize: "19px",
              }}
              onMouseEnter={() => setpic(!pic)}
            >
              {" "}
              <labe className="tik">
                {" "}
                <TiTick />
              </labe>
              One dashboard for store and app
            </button>

            <div className="mian2 col-sm">
              {pic ? (
                <img id="1" className="mob" src={Web} />
              ) : (
                <img id="2" className="mob" src={Mobile} />
              )}
            </div>

            <button
              id="2"
              className="store "
              style={{
                marginLeft: "40px",
                marginBottom: "10px",
                fontSize: "19px",
              }}
              onMouseEnter={() => setpic(!pic)}
            >
              {" "}
              <labe className="tik">
                {" "}
                <TiTick />
              </labe>
              Retargeting abandoned carts in the
              <br /> app
            </button>
            <button
              id="4"
              className="store"
              style={{
                marginLeft: "40px",
                marginBottom: "10px",
                fontSize: "19px",
              }}
              onMouseEnter={() => setpic(!pic)}
            >
              {" "}
              <labe className="tik">
                {" "}
                <TiTick />
              </labe>
              Special discount fo application users
            </button>
            <button
              id="3"
              className="store"
              style={{
                marginLeft: "40px",
                marginBottom: "10px",
                fontSize: "19px",
              }}
              onMouseEnter={() => setpic(!pic)}
            >
              {" "}
              <labe className="tik">
                {" "}
                <TiTick />
              </labe>
              Sending notification for application
              <br /> users
            </button>
          </div>
        </div>
        </div>
      </div>

      <div
        style={{ marginLeft: "40px", marginBottom: "20px" }}
        className="card"
      >
        <div className="">

       <div className="">

       
        <h5
          style={{
            color: "#529f7f",
            marginLeft: "20px",
            fontWeight: "700",
            paddingTop: "20px",
            paddingBottom: "30px", 
          }} className="d-flex row"
        >
          Demo store Apps
        </h5>
        </div>
        <div style={{marginRight:"760px"}} className="we col-sm ">
          <img className="web" src={Web} />
          <br />
          <label className="stor">
            <FaGooglePlay />
          </label>
          <label className="gr">
            <GrAppleAppStore />
          </label>
        </div>

        {/* <img src={Playstore}/> */}
      </div>
      </div>
      <div>
        <div
          style={{ marginLeft: "40px", marginBottom: "20px" }}
          className="card btd "
        >
          <div className="d-flex row">

         
          <div className="">

         
          <h5
            style={{
              color: "#529f7f",
              marginLeft: "20px",
              fontWeight: "700",
              paddingTop: "20px",
              paddingBottom: "30px",
            }}
          >
            FAQ
          </h5>
          </div>

          <div className="">

         
          <button className="ignite col-sm" onClick={() => setshow(!show)}>
            Does app content management reruire a seperate control pannel from
            ignite?
            <label className="dro" onClick={() => setshow(!show)}>
              {" "}
              {show ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            </label>
          </button>
          {show ? (
            <p
              style={{
                marginLeft: "20px",
                fontSize: "20px",
                marginRight: "20px",
                background: "#f3f4f6",
              }}
            >
              No, Your will be able to manage
              Pages/Categories/Product/Orders/Shipping Companies/ Payment
              Methods from the same Ignite Dashboard.
            </p>
          ) : null}

          <button
            style={{ marginTop: "10px" }}
            className="ignite"
            onClick={() => sethide(!hide)}
          >
            {" "}
            Do app notification and alert have an additional cost on the number
            message?
            <label className="dro" onClick={() => sethide(!hide)}>
              {" "}
              {hide ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            </label>
          </button>
          {hide ? (
            <p
              style={{
                marginLeft: "20px",
                fontSize: "20px",
                background: "#f3f4f6 ",
                marginRight: "20px",
              }}
            >
              No, Your will be able to manage
              Pages/Categories/Product/Orders/Shipping Companies/ Payment
              Methods from
              <br /> the same Ignite Dashboard.
            </p>
          ) : null}

          <button
            style={{ marginBottom: "20px", marginTop: "10px" }}
            className="ignite"
            onClick={() => setbane(!bane)}
          >
            How and when are abnandend alert sent through the app?
            <label className="dr" onClick={() => setbane(!bane)}>
              {bane ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            </label>
          </button>
       
        {bane ? (
          <p style={{ marginLeft: "30px", fontSize: "20px" }}>
            No, Your will be able to manage
            Pages/Categories/Product/Orders/Shipping Companies/ Payment Methods
            from
            <br /> the same Ignite Dashboard.
          </p>
        ) : null}
         </div>
         </div>
         </div>
      </div>

      <div style={{ marginLeft: "40px" }} className="card">
        <div className="d-flex row ">
          <div className="no col-sm">
            <h5
              style={{
                marginTop: "10px",
                fontWeight: "600",
                marginBottom: "20px",
                fontSize: "22px",
              }}
            >
              Create your store App easily
            </h5>
            <button className="your">
              create your app now
              <AiOutlineArrowRight />
            </button>
          </div>
          <div className="col-sm">
            <img style={{marginRight:"100px"}} className="green" src={Green} />
          </div>
        </div>
      </div>
      </div>
        )}
    </div>
  );
};
export default User;
