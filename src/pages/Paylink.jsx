import React,{useEffect,useState} from 'react'
import { BsSearch } from "react-icons/bs"; 
import {  RiArrowDropDownLine } from "react-icons/ri";
import ClipLoader from "react-spinners/ClipLoader";
const Paylink = () => {
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


  
  return (
<div className='cloiiuu'>
{Loading ? (
          <div className="App"
            
          >
            <ClipLoader color={"#000000"} size={50} />
          </div>
        ) : (

    <div className=''>
<h5  className='invoice'>Create New Invoice</h5>
  



    <div className='mia     '>

<div className='mia1 rcreate' >
<div style={{border:"none"}} className='card pay'>
<h6 style={{marginTop:"30px",marginLeft:"40px", }} className='duct'>Products</h6>
<span  className='sear'style={{padding:"14px"}}  >  <th>  < BsSearch/><input className='brho'  placeholder= '  Type your quary and enter press'/></th></span>
<button className='acb'>Add Custom Product </button>
</div>

<div  style={{border:"none"}} className='card pay '>
  <div className='d-flex'>
  <div><h6 style={{marginLeft:"40px",marginTop:"40px",marginBottom:"70px" }} className='payment'>Payment Method</h6></div>
<div><h6 style={{marginLeft:"380px",marginTop:"40px" }} className='payment'>Amount</h6></div>
  </div>

</div>

<div  style={{border:"none"}} className='card pay '>
  <div className='d-flex'>
  <div><h6 style={{marginLeft:"40px",marginTop:"40px",marginBottom:""}} className='payment'>Payment </h6>
  <p style={{marginLeft:"40px"}}>Add Discount</p>
  <p style={{marginLeft:"40px"}}>Taxable Amount</p>
  <p style={{marginLeft:"40px"}}>VAT</p>
  <p style={{marginLeft:"40px",marginBottom:"40px"}}>Total</p>

  
  
  </div>




<div><h6 style={{marginLeft:"380px",marginTop:"62px"}}></h6>
<p style={{marginLeft:"380px"}}>0.00﷼</p>
<p style={{marginLeft:"380px"}}>0.00﷼</p>
<p style={{marginLeft:"380px"}}>0.00﷼</p>
<p style={{marginLeft:"380px"}}>0.00﷼</p>

</div>
  </div>

</div>
</div>


<div className='mia2 rcreate  ' > 
<div style={{border:"none" , width:""}} className='card pa '>
<h6 style={{marginTop:"30px",paddingLeft:"30px"}} className='payment'>Customers</h6>

<span className='Spb'> <input onClick={() => setbane(!bane)} style={{marginLeft:"30px",marginRight:"40px"}} className='sel'   placeholder='Select...'   /> <label className='Ricon' onClick={() => setbane(!bane)} ><RiArrowDropDownLine/></label><br/>

{bane ? (
 
<option style={{marginLeft:"30px"}}>WellTest</option>

  ) : null}
</span>

</div>
<div style={{border:"none"}} className='card pa'>
<h6 style={{marginTop:"30px",paddingLeft:"30px"}} className='payment'>Location
</h6>
<span className='Spb'> <input onClick={() => sethide(!hide)} style={{marginLeft:"30px",marginRight:"40px"}} className='sel'   placeholder='Select...'   /> <label className='Ricon' onClick={() => sethide(!hide)} ><RiArrowDropDownLine/></label><br/>

{hide ? (
 
<span style={{marginLeft:"30px"}}>WellTest</span>

  ) : null}
</span>


</div>
<div style={{border:"none"}} className='card pa'>
<h6 style={{marginTop:"30px",paddingLeft:"30px"}} className='payment'>Status</h6>

<span className='Spb'>
   <input onClick={() => setshow(!show)} style={{marginLeft:"30px",marginRight:"40px"}} className='sel'   placeholder='draft...'   /> <label className='Ricon' onClick={() => setshow(!show)} ><RiArrowDropDownLine/></label><br/>

{show ? (
 
<span style={{marginLeft:"30px"}}>WellTest</span>

  ) : null}
</span>

</div>
</div>


    </div>

    </div>
     )}
    </div>
  )
}

export default Paylink
