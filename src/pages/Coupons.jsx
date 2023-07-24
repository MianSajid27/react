import React,{useEffect,useState}  from 'react'
import Table from 'react-bootstrap/Table';
import { BsPlus } from "react-icons/bs";
import { FiEdit } from "react-icons/fi"; 
import { MdDelete } from "react-icons/md"; 
import { BsEye } from "react-icons/bs";  
import { BsSearch } from "react-icons/bs"; 
import ClipLoader from "react-spinners/ClipLoader";
const Coupons = () => {
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
    <div>
      <div className='bg'> 
      {Loading ? (
          <div className="App"
            
          >
            <ClipLoader color={"#000000"} size={50} />
          </div>
        ) : (
      <div> 
    <div >

  
  <Table >
  
       
       
  <div className='card7'> 
          <tr className="customer">
          <span style={{fontSize:"22px",marginLeft:"30px"}} className=''> <th >Coupon List</th>  </span> 
          
          <span >  <th> <button style={{marginLeft:"670px" ,background:"black"}} className='ad'>    <span className='plus' ><BsPlus size={"30px"} /></span>Add Coupon  </button></th></span>
           
          </tr>
          </div>
       
        
        
      </Table>
   
       
    </div>
    <div className=" card6">

<Table >

      <thead >
     

        <tr style={{color:"#1f2937",fontSize:"16px",background:"#f7f8f9"}} className="th">
          <th className='th' style={{padding:"10px"}}>Code</th>
         
          <th className='' style={{padding:"10px" }}> <span style={{marginLeft:""}}> Amount </span></th> 
          <th className='' > <span style={{marginLeft:""}}> Qty </span> </th>
    
        
         
           <th style={{padding:"10px"}} >
            <span > 	Account</span>  </th>
            <th>Date</th>
            <th>	Used Code</th>
        
            <th > <span > Actions</span></th>

        </tr>
      </thead>
     
      <tbody>
        <tr className='walk in'>
          <td style={{padding:"20px"}}>  1234  </td>
          <td style={{padding:"20px"}}>	<span style={{marginLeft:""}}> 	12200</span>	</td>
        
         <td style={{padding:"20px"}}>	
<span style={{marginLeft:""}} > 	15	 </span></td>

<td style={{padding:"20px"}}>123456</td>
<td style={{padding:"20px"}}>2023-03-08</td>
<td style={{padding:"20px"}}>	15</td>

          <td style={{padding:"20px"}}> <span style={{marginLeft:"" ,fontSize:"21px"}} > <label style={{fontSize:"25px",color:"#f37979"}}> <MdDelete/></label> <FiEdit/></span> </td>

        </tr>

        <tr className='walk in'>
          <td style={{padding:"20px"}}>   mh123 </td>
          <td style={{padding:"20px"}}>	<span style={{marginLeft:""}}> 50</span></td>
        
         <td style={{padding:"20px"}}>	
<span style={{marginLeft:""}} > 	1 </span></td>
<td style={{padding:"20px"}}></td>
<td style={{padding:"20px"}}>2023-03-31</td>
<td style={{padding:"20px"}}>0</td>



         
          <td style={{padding:"20px"}}> <span style={{marginLeft:"" ,fontSize:"21px"}} >  <label style={{fontSize:"25px",color:"#f37979"}}> <MdDelete/></label> <FiEdit/></span> </td>

        </tr>
        <tr className='walk in'>
          <td style={{padding:"20px"}}>   123 </td>
          <td style={{padding:"20px"}}>	<span style={{marginLeft:""}}> 3208</span></td>
        
         <td style={{padding:"20px"}}>	
<span style={{marginLeft:""}} > 	3 </span></td>
<td style={{padding:"20px"}}></td>
<td style={{padding:"20px"}}>2023-03-11</td>
<td style={{padding:"20px"}}>	0</td>



         
          <td style={{padding:"20px"}}> <span style={{marginLeft:"",fontSize:"21px" }} >  <label style={{fontSize:"25px",color:"#f37979"}}> <MdDelete/></label> <FiEdit/></span> </td>

        </tr>
        <tr className='walk in'>
          <td style={{padding:"20px"}}>   testcode </td>
          <td style={{padding:"20px"}}>	<span style={{marginLeft:""}}> 	100</span></td>
        
         <td style={{padding:"20px"}}>	
<span style={{marginLeft:""}} > 		5 </span></td>
<td style={{padding:"20px"}}></td>
<td style={{padding:"20px"}}>2023-03-11</td>
<td style={{padding:"20px"}}>	0</td>



         
          <td style={{padding:"20px"}}> <span style={{marginLeft:"",fontSize:"21px"}} > <label style={{fontSize:"25px",color:"#f37979"}}> <MdDelete/></label> <FiEdit/></span> </td>

        </tr>
       
      </tbody>
      
    </Table>
    </div>
    </div>
      )}

   

        </div>
        {/* <h1>iejfi</h1> */}
    </div>
  )
}

export default Coupons
