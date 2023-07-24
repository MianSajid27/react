import Reac,{useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table';
import { BsPlus } from "react-icons/bs";
import { FiEdit } from "react-icons/fi"; 
import { BsEye } from "react-icons/bs";  
import { BsSearch } from "react-icons/bs"; 
import ClipLoader from "react-spinners/ClipLoader";
const Unit = () => {
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
                      style={{
                        paddingTop: "30px",
                        // position: "absolute",
                      paddingLeft:"20px"
                      }}
                    >
                      Unit
                    </th>{" "}
                  </span>
                </div>
                <div className="col-sm ">
                  <span className=" uni rpl " style={{ padding: "14px" }}>
                    {" "}
                    <th
                      className=""
                      style={{ paddingTop: "40px", paddingBottom: "33px" }}
                    >
                      {" "}
                      <BsSearch />
                      <input
                        className="brho rpl "
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
                      <button className="ad  rbtnn">
                        {" "}
                        <span className="plus rbt ">
                          <BsPlus size={"25px"} />
                        </span>
                        Add unit
                      </button>
                    </th>
                  </span>
                </div>
               
              </tr>
          {/* <tr className="customer">
          <span  className='cus'> <th >Unit</th>  </span> 
          <span  className='uni'style={{padding:"14px"}}  >  <th>  < BsSearch/><input className='brho'  placeholder= '  Type your quary and enter press'/></th></span>
          <span >  <th> <button className='ad'>    <span className='plus' ><BsPlus size={"30px"} /></span>Add Unit</button></th></span>
           
          </tr> */}
          </div>
       
        
        
      </Table>
   
       
    </div>
    <div style={{marginLeft:"30px"}} className=" card6 col-sm col-lg">

<Table >

      <thead >
     

        <tr className="th1 rab">
          <th className='th' style={{padding:"10px"}}>Price/Unit</th>
         
          <th className='' style={{padding:"10px" }}> <span style={{marginLeft:"100px"}}> Short </span></th> 
          <th className='' > <span style={{marginLeft:"300px"}}> 	Allow </span> </th>
    
        
         
           <th style={{padding:"10px"}} >
            <span > Action</span>  </th>

        </tr>
      </thead>
     
      <tbody>
        <tr className='walk in rab'>
          <td style={{padding:"20px"}}>  Pieces  </td>
          <td style={{padding:"20px"}}>	<span style={{marginLeft:"100px"}}> Pc(s)</span>	</td>
        
         <td style={{padding:"20px"}}>	
<span style={{marginLeft:"300px"}} > 0	 </span></td>
          <td style={{padding:"20px"}}> <span style={{marginLeft:""}} > <FiEdit/></span> </td>

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

export default Unit
