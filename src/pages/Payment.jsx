import React,{useEffect,useState} from 'react'
import Master from "../image/Master.webp";
import Visa from "../image/Visa.webp";
import Mada from "../image/Mada.webp";
import knet from "../image/knet.webp";
import Sadad from "../image/Sadad.webp";
import Amrican from "../image/Amrican.webp";
import { GrHome } from "react-icons/gr";
import { BsArrowLeftRight } from "react-icons/bs";
import ClipLoader from "react-spinners/ClipLoader";
const Payment = () => {
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
  return (
    <div className='cloii5'>
       {Loading ? (
          <div className="App"
            
          >
            <ClipLoader color={"#000000"} size={50} />
          </div>
        ) : (
<div> 
<h5 className='Any' > <label  className=" Where partner">Payment Partners</label></h5>
      <hr class="new1"></hr>
     
    <div className="d-flex  col-sm col-lg rcreate  ">
        <div className=" ">
          <p className="hif Deliver">
         
            <label className="hifg"> Cash On Delivery</label>
          </p>
          <h6  className="  her enable  ">
            {" "}
            <label  className="rhr">
            Enable Cash on Delivery.
            </label>
          </h6>
        </div>
        <div style={{marginTop:"15px"}}  className="card back  carre  rpay ">
          <div className="">
            <div className='d-flex'> 
            <h6
              
              className="name cash"
            >
             Cash On Delivery
            </h6>

            <label style={{fontSize:"100px"}}  class="switch sliroun">
  <input   type="checkbox"/>
  <span  class="slider round  "></span>
</label>
            </div>
            <p className='caspara'>

       <label className='parcash'>Cash on delivery (COD) is when a recipient pays for a good or service at  </label><br/>
       <label className='parcash'> the time of delivery.</label>
            </p>

          </div>
        </div>
      </div>

 <hr class="new1"></hr>
      <div className="d-flex  col-sm col-lg rcreate">
        <div className=" ">
          <p  className="hif  Deliver ">
         
            <label className="hifg"> Ignite Pay</label>
          </p>
          <h6  className="  her enable ">
            {" "}
            <label className="rhr">
            Accepted Payments
            </label>
          </h6>
        </div>
        <div style={{marginTop:"20px"}}  className="card back  carre  rpay  ">
          <div className="">


            <div className='d-flex'> 
            <h6
       
              className="name cash"
            >
        Accepted Payments
            </h6>

            <label   class="switch sliroun2">
  <input  type="checkbox"/>
  <span class="slider round"></span>
</label>

<div>

</div>

            </div>
          


          </div>

          <br/>
          <div className='d-flex'>
 
<img className='master ' src={Master}/>

<img className='visa'  src={Visa}/>
<img className='visa' src={Mada}/>
<img className='knet' src={knet}/>
<img  className='sadad' src={Sadad}/>
<img   className='Amrica' src={Amrican}/>
        </div>
        </div>
       

       
      </div>
      
      <div className="d-flex  col-sm col-lg rcreate">
        <div className=" ">
          <p style={{ marginTop: "40px" ,fontSize:"17px",fontWeight:"700",color:"#4b556c" }} className="hif">
         
            <label className="hifg"></label>
          </p>
          <h6 style={{ marginLeft: "30px",fontWeight:"420" }} className="  her  ">
            {" "}
            <label className="rhr">
        
            </label>
          </h6>
        </div>
        <div style={{marginTop:"20px"}}  className="card back  carre rpay   ">
          <div className="d-flex">

<label className='iconhom'><GrHome/></label>
<p className='caspara'>  <label className='parcash'> Payout Bank Account </label><br/>
<label style={{paddingTop:"5px"}}> <label className='parcash'>
    Any active bank account that you chose</label> </label></p>

          </div>
        </div>
    
      </div>
      <div className="d-flex  col-sm col-lg rcreate">
        <div className=" ">
          <p style={{ marginTop: "40px" ,fontSize:"17px",fontWeight:"700",color:"#4b556c" }} className="hif">
         
            <label className="hifg"></label>
          </p>
          <h6 style={{ marginLeft: "30px",fontWeight:"420" }} className="  her  ">
            {" "}
            <label className="rhr">
        
            </label>
          </h6>
        </div>
        <div style={{marginTop:"20px"}}  className="card back  carre rpay   ">
          <div className="d-flex">

<label className='iconhom'><BsArrowLeftRight/></label>
<p className='caspara'> <label className='parcash'>Transaction Rate </label><br/>
<label style={{paddingTop:"5px"}}> <label className='parcash'>Credit & Debit Card</label> </label> <label className='vat' style={{marginLeft:"315px"}}><label className='parcash'> 3% + VAT </label></label></p>

          </div>
        </div>
    
      </div>
      <hr class="new1"></hr>
      </div>
            )}
    </div>
  )
}

export default Payment
