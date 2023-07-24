import React,{useEffect,useState} from 'react'
import Select from "react-select";
import ClipLoader from "react-spinners/ClipLoader";

const POS  = () => {
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
    const options = [
        { value: "Disable", label: "Disable" },
        { value: "Select for commision agent list ", label: "Select for commision agent list" },
        
      ];
  return (
    <div className='bgrd'>
       {Loading ? (
          <div className="App"
            
          >
            <ClipLoader color={"#000000"} size={50} />
          </div>
        ) : (
      <div> 
    <h5 className="crea newr">
        {" "}
        <span style={{ color: "black" }} className="newr">
          {" "}
          Product Setting{" "}
        </span>
      </h5>

      <div className="d-flex  col-sm col-lg rcreate">
        <div className=" ">
          <h5 style={{ marginTop: "50px"   , color: "#4b556c", }} className="hif">
            {" "}
            <label className="hifg">Product</label>
          </h5>
         
        </div>
        <div className='card back pso'> 
<div className='d-flex'>
    <div> 
    <div class="form-check">
  <input  style={{marginLeft:"10px" }} class="form-check-input inputcheck" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label label" for="flexCheckDefault" >
  Enable Brand
  </label>
</div>
</div> 
<div>
<div class="form-check">
  <input  style={{marginLeft:"140px",marginBottom:"30px"}}  class="form-check-input inputcheck" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label label" for="flexCheckDefault">

  Enable Category
  </label>
</div>

</div>
</div>

</div>
      </div>
      <div className="d-flex  col-sm col-lg rcreate">
        <div className=" ">
          <h5 style={{ marginTop: "50px", color: "#4b556c",}} className="hif">
            {" "}
            <label style={{width:"200px"}} className="hifg">ProductPosition</label>
          </h5>
         
        </div>
        <div  className='card back psso'> 
<div className='d-flex'>
    <div> 
    <div class="form-check">
  <input  style={{marginLeft:"10px" }} class="form-check-input inputcheck" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label label" for="flexCheckDefault" >

  Enable Racks
  </label>
</div>
</div> 
<div>
<div class="form-check">
  <input  style={{marginLeft:"40px",marginBottom:"30px"}}  class="form-check-input inputcheck" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label label" for="flexCheckDefault">

  Enable Row
  </label>
</div>


</div>
<div>
<div class="form-check">
  <input  style={{marginLeft:"60px"}}  class="form-check-input inputcheck" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label label" for="flexCheckDefault">

  Enable Position
  </label>
</div>


</div>
</div>

</div>
      </div>
      <div className="d-flex  col-sm col-lg rcreate">
        <div className=" ">
          <h5 style={{ marginTop: "50px", color: "#4b556c",}} className="hif">
            {" "}
            <label className="hifg">Purchases</label>
          </h5>
         
        </div>
        <div  className='card back psos'> 
<div className='d-flex'>
    <div> 
    <div class="form-check">
  <input  style={{marginLeft:"10px",marginBottom:"30px"}} class="form-check-input inputcheck" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label label" for="flexCheckDefault" >
  Enable Lot
  </label>
</div>
</div> 

</div>

</div>
      </div>
      <div className="d-flex col-sm col-lg rcreate">
        <div>
          <h5 style={{ marginTop: "50px", marginLeft: "30px", color: "#4b556c", }} className="hif">
            <label className="hifg">Sales Commission </label>
          </h5>
          <h6 style={{ marginLeft: "30px" }} className="  her">
            <label className="rhr"></label>
          </h6>
        </div>
        <div className="card back pcard  ">
          <div className="">
           
            
            <h6
              style={{ marginTop: "35px", marginLeft: "30px" }}
              className="name agent"
            >
             Sales Commission Agent.
            </h6>
            {/* <select
            
              name="Casher"
              style={{ paddingRight: "10px" ,marginBottom:"45px"}}
              class=" putt int "
            >

              <option></option>
              <div> Disable</div>
              <option> select </option>
              <option>commision lagent agent</option>
            </select> */}
        <div className='opion' style={{marginLeft:"30px",marginRight:"30px",marginBottom:"40px",}}>    
            <Select styles={{}}  options={options} />
            </div>    
          </div>
        </div>
      </div>

      <button className='updade'> Update</button>
      </div>
)}
    </div>

  )
}

export default POS 
