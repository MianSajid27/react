import React from 'react'
import Man from "../image/Man.svg";
import {GiUsaFlag} from "react-icons/gi";
import {RiArrowDropDownLine} from "react-icons/ri";

const Nav = () => {
  return (
    <div>

<div className="ix"> 
    <nav class="navbar navbar-expand-lg navbar-light bg-white  ">
   
   <a class="navbar-brand" href="#" style={{marginLeft:"60px"}}>newborjanshoe123</a>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse " id="navbarNav " >
     <ul class="navbar-nav">
       <li class="nav-item ">
         <a class="nav-link" href="#"><button className="pos"> POS</button> </a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="#"><button className="eng"><GiUsaFlag/> <label> <span style={{marginLeft:"5px",color:"#525a64",fontWeight:"500"}}>English</span><label style={{fontSize:"20px",marginLeft:"5px"}}>  <RiArrowDropDownLine/> </label></label></button></a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="#"><img style={{width:"50px"}} src={Man}/></a>
       </li>
       <li class="nav-item">
         <a class="nav-link disabled" href="#"></a>
       </li>
     </ul>
   </div>
   
  </nav>
  </div>
      
    </div>
  )
}

export default Nav
