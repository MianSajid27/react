// import React, { useState } from "react";

// import { AiFillDollarCircle } from "react-icons/ai";
// import { GiMineTruck } from "react-icons/gi";
// import { AiOutlineConsoleSql } from "react-icons/ai";
// import { FcCamcorderPro } from "react-icons/fc";
// import { MdOutlineTableView } from "react-icons/md";
// import { AiOutlineArrowRight } from "react-icons/ai";
// import "../App.css";
// const Dashboard = () => {
//   const white = "white";
//   const [bg, setBg] = useState(white);
//   const [isActive, setIsActive] = useState(false);

//   //  const  handleClick = () => {
//   //     👇️ toggle
//   //      setIsActive(current => !current);

//   //      👇️ or set to true
//   //      setIsActive(true);
//   //   };

//   const bgchange = () => {
//     let newBg = "yellow";
//     setBg(newBg);

//     console.log("clicked");
//   };

//   const bgback = () => {
//     setBg(white);
//   };

//   return (
//     <div className="bg   " >
//       <div className="">
//         <div
//           style={{ marginBottom: "20px" }}
//           className="card mx-4   "
//         >
//           <div className="col w-full">
//             <div className="   row">
//               <div className="col-3">
//                 <button
//                   style={{ width: "220px", fontSize: "20px" }}
//                   className=" mx-3 pt-3 pb-3 border-0 display-5 fw-bold rounded-top  rounded-bottom mt-5"
//                   Id="tut-1"
//                   onClick=""
//                 >
//                   TODAY
//                 </button>
//               </div>
//               <div className="col-3">
//                 <button
//                   style={{ width: "220px", fontSize: "20px" }}
//                   className="mx-3 pt-3 pb-3 border-0 display-5 fw-bold rounded-top  rounded-bottom mt-5"
//                   Id="tut-2"
//                   onClick=""
//                 >
//                   YESTERDAY
//                 </button>
//               </div>
//               <div className="col-3">
//                 <button
//                   style={{ width: "220px", fontSize: "20px" }}
//                   className="mx-3 pt-3 pb-3 border-0 display-5 fw-bold rounded-top  rounded-bottom mt-5"
//                   Id="tut-3"
//                   onClick=""
//                 >
//                   THIS WEEK
//                 </button>
//               </div>
//               <div className="col-3">
//                 <button
//                   style={{ width: "220px", fontSize: "20px" }}
//                   className="mx-3 pt-3 pb-3 border-0 display-5 fw-bold rounded-top  rounded-bottom mt-5"
//                   Id="tut-4"
//                   onClick=""
//                 >
//                   THIS MONTH
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//           <div className="row">
//             <div className="col-3">
//               <div className="card1  ">
//                 <h3 className="R5">
//                   {/* <h3 style={{paddingLeft:"10px"}} className='pt-3 pb-3 ' > */}
//                   Gros Sale{" "}
//                   <label className="gross ">
//                     {" "}
//                     <AiFillDollarCircle />
//                   </label>
//                 </h3>
//                 <br></br>
//                 <h2 className="R4">Rs 0</h2>
//               </div>
//             </div>
//             <div className="col-3">
//               <div className="card1  ">
//                 <h3 className="R5">
//                   Net Sale{" "}
//                   <label className="net">
//                     <GiMineTruck />
//                   </label>
//                 </h3>
//                 <br></br>
//                 <h2 className="R4">Rs 0</h2>
//               </div>
//             </div>
//             <div className="col-3">
//               <div className="card1  ">
//                 <h3 className="R5">
//                   Sold Item{" "}
//                   <label className="Sold">
//                     <AiOutlineConsoleSql />
//                   </label>
//                 </h3>
//                 <br></br>
//                 <h2 className="R4">0</h2>
//               </div>
//             </div>
//             <div className="col-3">
//               <div className="card1  ">
//                 <h3 className="R5">
//                   Order{" "}
//                   <label className="order">
//                     <FcCamcorderPro />
//                   </label>
//                 </h3>
//                 <br></br>
//                 <h2 className="R4">0</h2>
//               </div>
//             </div>
//           </div>
//         </div>
//         </div>
//       </div>

//       {/* <div style={{}} className='card mx-4  '>
// <button><label><MdOutlineTableView/></label> Fill your store Information <labe><AiOutlineArrowRight/></labe><br/> <label>Fill your store Information for safe sale</label> </button>

//         </div> */}
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import { FaToolbox } from "react-icons/fa";
import Select from "react-select";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FcCamcorderPro } from "react-icons/fc";
import { MdOutlineTableView } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GiAerialSignal } from "react-icons/gi";
import { TiTickOutline } from "react-icons/ti";
import { AiTwotoneMedicineBox } from "react-icons/ai";
import { FaShuttleVan } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TbReceiptTax } from "react-icons/tb";
import { SiProducthunt } from "react-icons/si";
import Dash from "./Dash";
import Chart from "./Chart";
const Dashboard = (props) => {
  console.log(props);
  const options = [{ value: "Sajid", label: "Sajid" }];
  return (
    <div className="cloiiuu5 broen">

      {/* <div style={{marginTop:"200px"}} className="card">

<Dash
 title="hello" 
 para="Get ready for your first sale. Complete the setup to get started"


/>
      </div> */}
      <div className="card77 dasre">



        <h6 className="setup">
          Get ready for your first sale. Complete the setup to get started
        </h6>

<Dash
iccon={<FaToolbox/>} 
paragraph=" Review Business Setting "
paragrap="Fill in your business settings"
arrow={<AiOutlineArrowRight/>}
/>
<Dash
iccon={<GiAerialSignal/>} 
paragraph=" Setup Online Storefront  "
paragrap="Website, mobile  more"
arrow={<AiOutlineArrowRight/>}
/>
<Dash
iccon={<AiTwotoneMedicineBox/>} 
paragraph=" Review Business Setting "
paragrap="Fill in your business settings"
arrow={<AiOutlineArrowRight/>}
/>
<Dash
iccon={<FaShuttleVan/>} 
paragraph=" Setup Shipping Setting  "
paragrap="Set shipping and to method"
arrow={<AiOutlineArrowRight/>}
/>
<Dash
iccon={<MdOutlineDashboardCustomize/>} 
paragraph=" Setting Categorieses"
paragrap="Setup  product to categories"
arrow={<AiOutlineArrowRight/>}
/>
<Dash
iccon={<TbReceiptTax/>} 
paragraph=" Setup Taxes manager  "
paragrap="Setup tax here this producr"
arrow={<AiOutlineArrowRight/>}
/>
<Dash
iccon={<SiProducthunt/>} 
paragraph=" Add your First Product  "
paragrap="Get started  adding names,"
arrow={<AiOutlineArrowRight/>}
/>
      </div>

      <div style={{ marginTop: "20px" }} className="card77 dasre">
        <div>
          <h6 className="location">Select Location</h6>
          <div className="selection">
            <Select styles={{}} options={options} />
          </div>
        </div>

        <div className="d-flex flexio">
          <div className="col-3">
            <button style={{backgroundColor:"white",border:"1px solid #9ca3af",color:"#837280",fontWeight:"600"}}
              className="  pt-2 pb-2   rounded-top  rounded-bottom   butt1"
              Id="tut-1"
              onClick=""
            >
              Today
            </button>
          </div>
          <div className="col-3">
            <button
             style={{backgroundColor:"white",border:"1px solid #9ca3af",color:"#837280",fontWeight:"600"}}
              className=" pt-2 pb-2   rounded-top  rounded-bottom  butt2"
              Id="tut-2"
              onClick=""
            >
              Yesterday
            </button>
          </div>
          <div className="col-3">
            <button
             style={{backgroundColor:"white",border:"1px solid #9ca3af",color:"#837280",fontWeight:"600"}}
              className=" pt-2 pb-2  rounded-top  rounded-bottom  butt3"
              Id="tut-3"
              onClick=""
            >
              This Week
            </button>
          </div>
          <div className="col-3">
            <button
             style={{backgroundColor:"white",border:"1px solid #9ca3af",color:"#837280",fontWeight:"600"}}
              className="pt-2 pb-2    rounded-top  rounded-bottom  hovr butt4"
              Id="tut-4"
              onClick=""
            >
              This Month
            </button>
          </div>
        </div>

        <div className="d-flex flexio">
          <div className="col-3">

            <div className="card1"> 
<div className="d-flex">  
<h3 className="R5">
                Gross Sale{" "}
                
              </h3>
              <label className="gross ">
                  {" "}
                  <AiFillDollarCircle />
                </label>

</div>
<h2 className="R4">Rs 0</h2>
            </div>
            
          </div>
          <div className="col-3">

          <div s className="card1s"> 
<div className="d-flex">  
<h3 className="R5">
                Net Sale{" "}
                
              </h3>
              <label className="net ">
                  {" "}
                  <FaCartArrowDown/>
                </label>

</div>
<h2 className="R4">Rs 0</h2>
            </div>
            
           
          </div>
          <div className="col-3">

<div className="card1ss"> 
<div className="d-flex">  
<h3 className="R5">
      {" "}
      Sold Item
    </h3>
    <label className="Sold ">
        {" "}
        <AiOutlineConsoleSql />
      </label>

</div>
<h2 className="R4"> 0</h2>
  </div>
  
 
</div>
<div className="col-3">

<div className="card1sss"> 
<div className="d-flex">  
<h3 className="R5">
      {" "}
  Order
    </h3>
    <label className="order ">
        {" "}
        <FcCamcorderPro />
      </label>

</div>
<h2 className="R4"> 0</h2>
  </div>
  
 
</div>
       
         
        </div>
      </div>

      <div
        style={{ marginTop: "20px", marginBottom: "40px" }}
        className="card77 dasre"
      >
        <Chart />
      </div>
    </div>
  );
};

export default Dashboard;
