import React,{useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table';
import { BsPlus } from "react-icons/bs";
import { FiEye } from "react-icons/fi"; 
import { MdDelete } from "react-icons/md";
import ClipLoader from "react-spinners/ClipLoader";
const Abondoned = () => {
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
          <span style={{fontSize:"22px",marginLeft:"30px"}} className=''> <th >Abandoned Carts</th>  </span> 
          
          
           
          </tr>
          </div>
       
        
        
      </Table>
   
       
    </div>
    <div className=" card6">

<Table >

      <thead >
     

        <tr style={{color:"#1f2937",fontSize:"16px",background:"#f7f8f9"}} className="th">
          <th className='th' style={{padding:"10px"}}>Customer Name</th>
         
          <th className='' style={{padding:"10px" }}> <span style={{marginLeft:""}}> Created At </span></th> 
          <th className='' > <span style={{marginLeft:""}}> 	Edit Date </span> </th>
    
        
         
           <th style={{padding:"10px"}} >
            <span > 	Cart Price</span>  </th>
            <th>Purchase Status</th>
            <th>	Products Quantity</th>
        <th></th>
            <th > <span > Actions</span></th>

        </tr>
      </thead>
     
      <tbody>
        <tr className='walk in'>
          <td style={{padding:"20px"}}>  rehan nadeem  </td>
          <td style={{padding:"20px"}}>	<span style={{marginLeft:""}}> 	2023-03-10 13:34:39</span>	</td>
        
         <td style={{padding:"20px"}}>	
<span style={{marginLeft:""}} > 	2023-03-10 15:18:46	 </span></td>

<td style={{padding:"20px"}}>0﷼</td>
<td style={{padding:"20px"}}>pending</td>
<td></td>
<td style={{padding:"20px"}}>	</td>

          <td style={{padding:"20px"}}> <span style={{marginLeft:"" ,fontSize:"21px"}} > <label style={{fontSize:"25px",color:""}}><FiEye/> </label> </span> </td>

        </tr>
        <tr className='walk in'>
          <td style={{padding:"20px"}}>  rehan nadeem  </td>
          <td style={{padding:"20px"}}>	<span style={{marginLeft:""}}> 	2023-03-10 13:34:39</span>	</td>
        
         <td style={{padding:"20px"}}>	
<span style={{marginLeft:""}} > 	2023-03-10 15:18:46	 </span></td>

<td style={{padding:"20px"}}>100﷼</td>
<td style={{padding:"20px"}}>pending</td>
<td style={{padding:"20px"}}>	1</td>
<td></td>


          <td style={{padding:"20px"}}> <span style={{marginLeft:"" ,fontSize:"21px"}} > <label style={{fontSize:"25px",color:""}}><FiEye/> </label> </span> </td>

        </tr>
        <tr className='walk in'>
          <td style={{padding:"20px"}}>  rehan nadeem  </td>
          <td style={{padding:"20px"}}>	<span style={{marginLeft:""}}> 	2023-03-10 13:34:39</span>	</td>
        
         <td style={{padding:"20px"}}>	
<span style={{marginLeft:""}} > 	2023-03-10 15:18:46	 </span></td>

<td style={{padding:"20px"}}>100﷼</td>
<td style={{padding:"20px"}}>pending</td>
<td style={{padding:"20px"}}>1	</td>
<td></td>


          <td style={{padding:"20px"}}> <span style={{marginLeft:"" ,fontSize:"21px"}} > <label style={{fontSize:"25px",color:""}}><FiEye/> </label> </span> </td>

        </tr>
        <tr className='walk in'>
          <td style={{padding:"20px"}}>  rehan nadeem  </td>
          <td style={{padding:"20px"}}>	<span style={{marginLeft:""}}> 	2023-03-10 13:34:39</span>	</td>
        
         <td style={{padding:"20px"}}>	
<span style={{marginLeft:""}} > 	2023-03-10 15:18:46	 </span></td>

<td style={{padding:"20px"}}>3000﷼</td>
<td style={{padding:"20px"}}>pending</td>
<td style={{padding:"20px"}}>	10</td>
<td></td>


          <td style={{padding:"20px"}}> <span style={{marginLeft:"" ,fontSize:"21px"}} > <label style={{fontSize:"25px",color:""}}><FiEye/> </label> </span> </td>

        </tr>
        <tr className='walk in'>
          <td style={{padding:"20px"}}>  rehan nadeem  </td>
          <td style={{padding:"20px"}}>	<span style={{marginLeft:""}}> 	2023-03-10 13:34:39</span>	</td>
        
         <td style={{padding:"20px"}}>	
<span style={{marginLeft:""}} > 	2023-03-10 15:18:46	 </span></td>

<td style={{padding:"20px"}}>2100﷼</td>
<td style={{padding:"20px"}}>pending</td>
<td style={{padding:"20px"}}>	4</td>
<td></td>


          <td style={{padding:"20px"}}> <span style={{marginLeft:"" ,fontSize:"21px"}} > <label style={{fontSize:"25px",color:""}}><FiEye/> </label> </span> </td>

        </tr>
        <tr className='walk in'>
          <td style={{padding:"20px"}}>  rehan nadeem  </td>
          <td style={{padding:"20px"}}>	<span style={{marginLeft:""}}> 	2023-03-10 13:34:39</span>	</td>
        
         <td style={{padding:"20px"}}>	
<span style={{marginLeft:""}} > 	2023-03-10 15:18:46	 </span></td>

<td style={{padding:"20px"}}>3000﷼</td>
<td style={{padding:"20px"}}>pending</td>
<td style={{padding:"20px"}}>7	</td>
<td></td>


          <td style={{padding:"20px"}}> <span style={{marginLeft:"" ,fontSize:"21px"}} > <label style={{fontSize:"25px",color:""}}><FiEye/> </label> </span> </td>

        </tr>
        <tr className='walk in'>
          <td style={{padding:"20px"}}>  rehan nadeem  </td>
          <td style={{padding:"20px"}}>	<span style={{marginLeft:""}}> 	2023-03-10 13:34:39</span>	</td>
        
         <td style={{padding:"20px"}}>	
<span style={{marginLeft:""}} > 	2023-03-10 15:18:46	 </span></td>

<td style={{padding:"20px"}}>1200﷼</td>
<td style={{padding:"20px"}}>pending</td>
<td style={{padding:"20px"}}>10	</td>
<td></td>


          <td style={{padding:"20px"}}> <span style={{marginLeft:"" ,fontSize:"21px"}} > <label style={{fontSize:"25px",color:""}}><FiEye/> </label> </span> </td>

        </tr>
        <tr className='walk in'>
          <td style={{padding:"20px"}}>  rehan nadeem  </td>
          <td style={{padding:"20px"}}>	<span style={{marginLeft:""}}> 	2023-03-10 13:34:39</span>	</td>
        
         <td style={{padding:"20px"}}>	
<span style={{marginLeft:""}} > 	2023-03-10 15:18:46	 </span></td>

<td style={{padding:"20px"}}>1800﷼</td>
<td style={{padding:"20px"}}>pending</td>
<td style={{padding:"20px"}}>6	</td>
<td></td>


          <td style={{padding:"20px"}}> <span style={{marginLeft:"" ,fontSize:"21px"}} > <label style={{fontSize:"25px",color:""}}><FiEye/> </label> </span> </td>

        </tr>
        <tr className='walk in'>
          <td style={{padding:"20px"}}>  rehan nadeem  </td>
          <td style={{padding:"20px"}}>	<span style={{marginLeft:""}}> 	2023-03-10 13:34:39</span>	</td>
        
         <td style={{padding:"20px"}}>	
<span style={{marginLeft:""}} > 	2023-03-10 15:18:46	 </span></td>

<td style={{padding:"20px"}}>250﷼</td>
<td style={{padding:"20px"}}>pending</td>
<td style={{padding:"20px"}}>	1</td>
<td></td>


          <td style={{padding:"20px"}}> <span style={{marginLeft:"" ,fontSize:"21px"}} > <label style={{fontSize:"25px",color:""}}><FiEye/> </label> </span> </td>

        </tr>
        <tr className='walk in'>
          <td style={{padding:"20px"}}>  rehan nadeem  </td>
          <td style={{padding:"20px"}}>	<span style={{marginLeft:""}}> 	2023-03-10 13:34:39</span>	</td>
        
         <td style={{padding:"20px"}}>	
<span style={{marginLeft:""}} > 	2023-03-10 15:18:46	 </span></td>

<td style={{padding:"20px"}}>100﷼</td>
<td style={{padding:"20px"}}>pending</td>
<td style={{padding:"20px"}}>	1</td>
<td></td>


          <td style={{padding:"20px"}}> <span style={{marginLeft:"" ,fontSize:"21px"}} > <label style={{fontSize:"25px",color:""}}><FiEye/> </label> </span> </td>

        </tr>
       
       
      </tbody>
      
    </Table>
    </div>
    </div>
     )}

   

        </div>
    </div>
  )
}

export default Abondoned
