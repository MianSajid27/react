import React,{useState, useEffect} from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import B from "../image/B.svg";
import U from "../image/U.svg";
import Li from "../image/Li.svg";
import Si from "../image/Si.svg";
import Bra from "../image/Bra.svg";
import X from "../image/X.svg";
import C1 from "../image/C1.svg";
import C2 from "../image/C2.svg";
import C3 from "../image/C3.svg";
import C4 from "../image/C4.svg";
import C5 from "../image/C5.svg";
import C6 from "../image/C6.svg";
import C7 from "../image/C7.svg";
import C8 from "../image/C8.svg";
import C9 from "../image/C9.svg";
import C10 from "../image/C10.svg";
import X1 from "../image/X1.svg";
import Text from "./Text";




const Store = () => {
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
 
  
 
  const [color, setColor] = useState('');

 
  return (
    <div className='cloiiu'>

{Loading ? (
          <div className="App"
            
          >
            <ClipLoader color={"#000000"} size={50} />
          </div>
        ) : (
<div> 
      <h5 className='Any' > <label className=" Where ssting">Store Setting</label></h5>
      <hr class="new1"></hr>
     
    <div className="d-flex  col-sm col-lg rcreate">
        <div className=" ">
          <p style={{ marginTop: "80px" ,fontSize:"18px",fontWeight:"650",color:"#4b556c" }} className="hif">
         
            <label className="hifg"> Sell on website</label>
          </p>
          <h6 style={{ marginLeft: "30px",fontWeight:"420" }} className="  her  ">
            {" "}
            <label className="rhr">
            Instant Site combines everything you need<br/>
             to start selling online on a website. Make<br/>
              quick changes to your Instant Site with<br/>
               the easy-to-use editor
            </label>
          </h6>
        </div>
        <div style={{marginTop:"50px"}}  className="card back  carre rescard   ">
          <div className="">
            <div className='d-flex'> 
            <h6
          
              className="name cash"
            >
                Online Store
            </h6>

            <label   class="switch sliroun">
  <input  type="checkbox"/>
  <span class="slider round"></span>
</label>
            </div>
            <p className=' caspara'>
            <label className='parcash'>   Your Instant Site with online storefront is already set up.Simply fill in your</label><br/>
            <label className='parcash'>  business information and start selling right away.</label></p>
<div className='d-flex'>
               <p className=' caspara'> <label className='httpdie'> https://mian.myignite.site</label> </p>
<button className='map'> Map Domain</button>
</div>

          </div>
        </div>
      </div>
      {/* <br/> */}
      <hr class="new1"></hr>
      <div className="d-flex col-sm col-lg rcreate">
        <div>
          <p style={{ marginTop: "50px", marginLeft: "30px" ,fontSize:"18px",fontWeight:"650",color:"#4b556c"  }} className="hif">
            <label className="hifg  ">Logo</label>
          </p>
          <h6 style={{ marginLeft: "30px",fontWeight:"420" }} className="  her">
            <label className="rhr">
            Personalize your Instant Site and your<br/>
             storefront’s appearance to reflect your<br/>
              unique brand
            </label>
          </h6>
        </div>
        <div style={{marginTop:"10px"}} className="card back carre rescard   ">
          <div >
          
          <input id="file" type="file"placeholder='czdfghjkl'/> 
      
          </div>
        </div>
      </div>
      <div className="d-flex col-sm col-lg rcreate">
        <div>
          <p style={{ marginTop: "50px", marginLeft: "30px",fontSize:"18px",fontWeight:"650",color:"#4b556c"  }} className="hif">
            <label className="hifg  ">Favicon</label>
          </p>
          <h6 style={{ marginLeft: "30px",fontWeight:"420" }} className="  her">
            <label className="rhr">
            Personalize your Instant Site and your<br/>
             storefront’s appearance to reflect your<br/>
              unique brand
            </label>
          </h6>
        </div>
        <div className="card back carre rescard  ">
          <div >
          
          <input id="file" type="file"placeholder='czdfghjkl' /> 
          
           {/* <button   className='buttoncati'> <label style={{fontSize:"40px"}}><BsCloudArrowUp/>   </label><br/>Upload an image <span style={{color:"#968f98"}}> or drag and drop <br/>
PNG, JPG </span></button>   */}


          </div>
        </div>
      </div>
      <div className="d-flex col-sm col-lg rcreate">
        <div>
          <p style={{ marginTop: "50px", marginLeft: "30px",fontSize:"18px",fontWeight:"650",color:"#4b556c"  }} className="hif">
            <label className="hifg  ">Slide Management</label>
          </p>
          <h6 style={{ marginLeft: "30px",fontWeight:"420" }} className="  her">
            <label className="rhr">
            Personalize your Instant Site and your<br/>
             storefront’s appearance to reflect your<br/>
              unique brand
            </label>
          </h6>
        </div>
        <div className="card back carre rescard  ">
          <div >
          
          <input id="file" type="file"placeholder='czdfghjkl'/> 
           {/* <button   className='buttoncati'> <label style={{fontSize:"40px"}}><BsCloudArrowUp/>   </label><br/>Upload an image <span style={{color:"#968f98"}}> or drag and drop <br/>
PNG, JPG </span></button>   */}


          </div>
        </div>
      </div>
      <hr class="new1"></hr>
      <div className="d-flex  col-sm col-lg rcreate">
        <div className=" ">
          <p style={{ marginTop: "50px",fontSize:"18px",fontWeight:"650",color:"#4b556c" }} className="hif">
         
            <label className="hifg">Domain Name </label>
          </p>
          <h6 style={{ marginLeft: "30px",fontWeight:"420"  }} className="  her  ">
            {" "}
            <label className="rhr">
            Help customers find you  stand out from<br/>
             the crowd by including the name of your<br/>
              business in your web address.
            </label>
          </h6>
        </div>
        <div style={{marginTop:"10px"}} className="card back  carre rescard  ">
          <div className="">
            <h6
              style={{ marginTop: "30px", marginLeft: "30px",fontWeight:"400px" }}
              className="name"
            >
               Domain Name
            </h6>
            <input
             style={{marginBottom:"40px"}}
              name="name"
              className="put  int"
            ></input>
          
          
            
           
           
            
            
            
          </div>
        </div>
      </div>
      <hr class="new1"></hr>
      <div className="d-flex  col-sm col-lg rcreate">
        <div className=" ">
          <p style={{ marginTop: "50px",fontSize:"18px",fontWeight:"650",color:"#4b556c" }} className="hif">
         
            <label className="hifg">Store Setting </label>
          </p>
          <h6 style={{ marginLeft: "30px",fontWeight:"420"  }} className="  her  ">
            {" "}
            <label className="rhr">
            Add your shop settings information from     <br/>
            here
             
            </label>
          </h6>
        </div>
        <div style={{marginTop:"10px"}} className="card back  carre rescard  ">
          <div className="">
          <h6
              style={{ marginTop: "30px", marginLeft: "30px",fontWeight:"400px" }}
              className="name"
            >
              Theme color
            </h6>
            <h6 style={{ marginTop: "20px", marginLeft: "30px",fontWeight:"400px" }}>
              Color
            </h6>
    <div className='d-flex'> 
    {/* <input  type="color" value={color} onChange={colorPicker}/> */}
            <input style={{marginLeft:"30px",}} type="color" id="primary_color" class="field-radio" name="primary-color" v-model="scheme.primary" vlaue="#4ca488" onChange={(e)=>setColor(e.target.value)}  /> 
<p className='color'>{color}</p>
</div>
            <h6
              style={{ marginTop: "10px", marginLeft: "30px",fontWeight:"400px" }}
              className="name"
            >
               location
            </h6>   
            <input
             style={{}}
              name="name"
              className="put  int"
            ></input>
          
          <h6
              style={{ marginTop: "10px", marginLeft: "30px",fontWeight:"400px" }}
              className="name"
            >
               Meta Title
            </h6>
            <input
             style={{}}
              name="name"
              className="put  int"
            ></input>
            
            <h6
              style={{ marginTop: "10px", marginLeft: "30px",fontWeight:"400px" }}
              className="name"
            >Meta Description
            </h6>
            <input
             style={{}}
              name="name"
              className="put  int"
            ></input><h6
            style={{ marginTop: "10px", marginLeft: "30px",fontWeight:"400px" }}
            className="name"
          >
           Whatsapp No
          </h6>
          <input
           style={{ marginBottom:"50px"}}
            name="name"
            className="put  int"
          ></input>
           
            
            
            
          </div>
        </div>
      </div>
      <hr class="new1"></hr> 
      <div className="d-flex  col-sm col-lg rcreate">
        <div className=" ">
          <p style={{ marginTop: "50px",fontSize:"18px",fontWeight:"650",color:"#4b556c" }} className="hif">
         
            <label className="hifg">Custom Script </label>
          </p>
          <h6 style={{ marginLeft: "30px",fontWeight:"420"  }} className="  her  ">
            {" "}
            <label className="rhr">
            
            </label>
          </h6>
        </div>
        <div style={{marginTop:"10px"}} className="card back  carre  rescard  ">
          <div className="">
            <h6
              style={{ marginTop: "30px", marginLeft: "30px",fontWeight:"400px" }}
              className="name"
            >
               Custom Script
            </h6>
            <div class="form-group">
    <textarea style={{marginBottom:"40px"}} class="form-control put  int" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
          </div>
        </div>
      </div>
      <hr class="new1"></hr>
      <div className="d-flex  col-sm col-lg rcreate">
        <div className=" ">
          <p style={{ marginTop: "50px",fontSize:"18px",fontWeight:"650",color:"#4b556c" }} className="hif">
         
            <label className="hifg">About Us </label>
          </p>
          <h6 style={{ marginLeft: "30px",fontWeight:"420"  }} className="  her  ">
            {" "}
            <label className="rhr">
            Add your shop settings information from<br/>
            here
            </label>
          </h6>
        </div>
        <div style={{marginTop:"10px"}} className="card back  carre  rescard  ">
      <div className=""style={{border:"2px solid #f1f1f1" ,marginTop:"30px",marginLeft:"30px",marginRight:"30px",marginBottom:"30px"}} >
    
            
 <Text/>
 </div> 
        </div>
      </div>
      <hr class="new1"></hr>
      <div className="d-flex  col-sm col-lg rcreate">
        <div className=" ">
          <p style={{ marginTop: "50px",fontSize:"18px",fontWeight:"650",color:"#4b556c" }} className="hif">
         
            <label className="hifg">Term and Condition </label>
          </p>
          <h6 style={{ marginLeft: "30px",fontWeight:"420"  }} className="  her  ">
            {" "}
            <label className="rhr">
            Add your shop settings information from<br/>
            here
            </label>
          </h6>
        </div>
        <div style={{marginTop:"10px"}} className="card back  carre  rescard  ">
      <div className=""style={{border:"2px solid #f1f1f1" ,marginTop:"30px",marginLeft:"30px",marginRight:"30px",marginBottom:"30px"}} >
    
            
 <Text/>
 </div> 
        </div>
      </div>
      <hr class="new1"></hr>
      <div className="d-flex  col-sm col-lg rcreate">
        <div className=" ">
          <p style={{ marginTop: "50px",fontSize:"18px",fontWeight:"650",color:"#4b556c" }} className="hif">
         
            <label className="hifg">Privacy Policy </label>
          </p>
          <h6 style={{ marginLeft: "30px",fontWeight:"420"  }} className="  her  ">
            {" "}
            <label className="rhr">
            Add your shop settings information from<br/>
            here
            </label>
          </h6>
        </div>
        <div style={{marginTop:"10px"}} className="card back  carre  rescard  ">
      <div className=""style={{border:"2px solid #f1f1f1" ,marginTop:"30px",marginLeft:"30px",marginRight:"30px",marginBottom:"30px"}} >
    
            
 <Text/>
 </div> 
        </div>
      </div>
      <hr class="new1"></hr>
<button className='sting'> Save Setting</button>
</div>
      )}
    </div>
  )
}

export default Store;

