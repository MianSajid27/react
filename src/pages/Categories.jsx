import React,{useEffect,useState}  from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate, Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { FiEdit } from "react-icons/fi"; 
import { BsEye } from "react-icons/bs";  
import { BsSearch } from "react-icons/bs"
import ClipLoader from "react-spinners/ClipLoader";
const Categories = () => {
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
    <>
    <div>
     <div className='background'> 
     {Loading ? (
          <div className="App"
            
          >
            <ClipLoader color={"#000000"} size={50} />
          </div>
        ) : (
     <div> 
    <div >

  
  <Table >
  
       
       
  <div className='card77'> 
  <tr className="customer row d-flex ">
                <div className=" col-sm   ">
                  <span className=" cus rrrr ">
                    {" "}
                    <th
                    className='curr'
                      style={{

                        paddingTop: "30px",
                        position: "absolute",
                       paddingLeft:"40px"
                      }}
                    >
                      Categories
                    </th>{" "}
                  </span>
                </div>
                <div className="col-sm ">
                  <span className=" cat rpl " style={{ padding: "14px" }}>
                    {" "}
                    <th
                      className=""
                      style={{ paddingTop: "40px", paddingBottom: "35px" }}
                    >
                      {" "}
                      <BsSearch />
                      <input
                        className="holder rpl "
                        placeholder="  Type your quary and "
                      />
                    </th>
                  </span>
                </div>
                <div className="col-sm ">
                  <span className="">
                    {" "}
                    <th>
                      {" "}
                      <button className="add  rbtnn">
                        {" "}
                        <span className="plus rbt ">
                          <BsPlus size={"25px"} />
                        </span>
                       <Link style={{textDecoration:"none",color:"white"}} to="/AddCategories"> Add Categories  </Link>
                      </button>
                    </th>
                  </span>
                </div>
               
              </tr>
          {/* <tr className="customer">
          <span  className='cus'> <th >Categories</th>  </span> 
          <span  className='cat'style={{padding:"14px"}}  >  <th>  < BsSearch/><input className='holder'  placeholder= '  Type your quary and enter press'/></th></span>
          <span >  <th> <button className='ad'>    <span className='plus' ><BsPlus size={"30px"} /></span>Add Categories </button></th></span>
           
          </tr> */}
          </div>
       
        
        
      </Table>
   
       
    </div>

    <div style={{marginLeft:"30px"}} className=" card6 col-sm col-lg">

    <Table >
    
          <thead >
         
    
            <tr className="th1 rab">
              <th> <span style={{marginLeft:"50px"}}>Image </span></th>
              <th className='th' style={{padding:"10px"}}><span style={{marginLeft:"20px"}}> 	Category</span> </th>
             
       
       
              <th style={{padding:"10px",marginLeft:"905px"  }} > <span style={{marginLeft:"670px"  }}>Action </span></th>
    
            </tr>
          </thead>
         
          <tbody>
            <tr className='walk in rab'>
              <td></td>
              <td style={{padding:"20px"}}>  	 </td>
            
              <td style={{padding:"20px" }}><span  style={{marginLeft:"700px"}} >  </span><span className='eye' >  </span> </td>
 
            
 
            </tr>
           
           
           
          </tbody>
          
        </Table>
        </div>
        </div>
          )}
        </div>
      
    </div>
     </>
  )
}

export default Categories
