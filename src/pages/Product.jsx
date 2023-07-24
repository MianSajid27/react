import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { BsPlus } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import ClipLoader from "react-spinners/ClipLoader";
import { AiOutlineArrowDown } from "react-icons/ai";
const Product = () => {
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://dummyjson.com/products").then((result) => {
      result.json().then((resp) => {
        // console.warn("result",resp)
        setData(resp.products);
        console.warn("result", data);
        setLoading(false);
      });
      
    });
  }, []);
  console.warn(data);

  return (
    <>
      <div className="background">
      {Loading ? (
          <div className="App"
            
          >
            <ClipLoader color={"#000000"} size={50} />
          </div>
        ) : (
        <div> 
        <div>
          <Table>
            <div className="card7  col-sm col-lg   " style={{ marginTop: "" }}>
              <tr className="Product row d-flex ">
                <div className=" col-sm   ">
                  <span className="pro  rpr ">
                    {" "}
                    <th
                      style={{
                        paddingTop: "30px",
                        position: "absolute",
                        marginLeft: "30px",
                      }}
                    >
                      Products
                    </th>{" "}
                  </span>
                </div>
                <div className="col-sm ">
                  <span className="pl rpl " style={{ padding: "14px" }}>
                    {" "}
                    <th
                      className=""
                      style={{ paddingTop: "70px", paddingBottom: "45px" }}
                    >
                      {" "}
                      <BsSearch />
                      <input 
                        className="hol rpl "
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
                      <button style={{marginTop:"55px"}} className="addd  rbtn">
                        {" "}
                        <span className="plu rbt ">
                          <BsPlus size={"25px"} />
                        </span>
                        Add Product
                      </button>
                    </th>
                  </span>
                </div>
                <div className="col-sm ">
                  <span>
                    {" "}
                    <th>
                      {" "}
                      <button className="filter rflt">
                        Filter
                        <button className="arr rfl">
                          {" "}
                          <AiOutlineArrowDown />{" "}
                        </button>
                      </button>
                    </th>
                  </span>
                </div>
              </tr>
            </div>
          </Table>
        </div>
        <div
          style={{ marginLeft: "30px", marginRight: "10px" }}
          className="tab2 card11 col-sm col-lg  "
        >
          <Table>
            <thead>
              <tr className="th1 rtab">
                <th>Id</th>
                <th>title</th>
                <th> Brand</th>
                <th>Category</th>
                <th>Rating</th>
                <th>Stock</th>
                <th>Price </th>
                <th>Discription</th>
                <th>Discount </th>
                <th>
                  {" "}
                  <span style={{ marginLeft: "120px" }}>Thumbnail </span>
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (
                <tr className="riy walk in rtab">
                  <td style={{ padding: "20px" }}>
                    <img style={{ width: "30px" }} src="" /> {item.id}
                  </td>
                  <td style={{ padding: "20px" }}> {item.title}</td>
                  <td style={{ padding: "20px" }}>{item.brand}</td>
                  <td style={{ padding: "20px" }}>{item.category}</td>
                  <td style={{ padding: "20px" }}>{item.rating}</td>
                  <td style={{ padding: "20px" }}>{item.stock}</td>
                  <td style={{ padding: "20px" }}>{item.price}</td>
                  <td style={{ padding: "20px" }}>{item.description}</td>
                  <td style={{ padding: "20px" }}>{item.discountPercentage}</td>
                  <td style={{ padding: "20px" }}>{item.thumbnail}</td>

                  {/* <td></td>
            <td></td>
            <td></td>
            <td style={{padding:"20px"}}>Pc(s)</td>
            <td style={{padding:"20px"}}>IS-OP-SKU</td>
            <td style={{padding:"20px"}}>0</td>
           <td style={{padding:"20px"}} ><button style={{borderRadius:"30px",fontSize:"14px",paddingLeft:"0.75rem",paddingRight:"0.75rem" ,color:"white",background:"black",border:"none",paddingBottom:"2px"}}>Inactive</button></td>
            <td style={{padding:"20px"}}><label style={{fontSize:"10px"}} class="switch">
  <input   type="checkbox"/>
  <span  class="slider round"></span>
</label></td>
            <td style={{padding:"15px"}}><button className='Action'>Action</button></td> */}
                </tr>
              ))}

              {/* <tr className="riy  walk in">
          <td><img style={{width:"45px",borderRadius:"5px" }} src={Default}/></td>
           
            <td style={{padding:"20px"}}>test product</td>
            <td></td>
            <td></td>
            <td></td>
            <td style={{padding:"20px"}}>Pc(s)</td>
            <td style={{padding:"20px"}}>123</td>
            <td style={{padding:"20px"}}>100ریال </td>
            <td style={{padding:"20px"}}><button style={{borderRadius:"30px",fontSize:"14px",paddingLeft:"0.75rem",paddingRight:"0.75rem" ,color:"white",background:"black",border:"none",paddingBottom:"2px"}}>Inactive</button></td>
            <td style={{padding:"20px"}}><label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label></td>
            <td style={{padding:"15px"}}><button className='Action'>Action</button></td>
            
          </tr>
          <tr className="riy  walk in">
           
          <td ><img style={{width:"45px",borderRadius:"5px"}} src={Default}/></td>
            <td style={{padding:"20px"}}>axe</td>
            <td></td>
            <td></td>
            <td style={{padding:"20px"}}>new text</td>
            <td style={{padding:"20px"}}>Pc(s)</td>
            <td style={{padding:"20px"}}>474447</td>
            <td style={{padding:"20px"}}>100ریال </td>
            <td style={{padding:"20px"}}><button style={{borderRadius:"30px",fontSize:"14px",paddingLeft:"0.75rem",paddingRight:"0.75rem" ,color:"white",background:"black",border:"none",paddingBottom:"2px"}}>Inactive</button></td>
            <td style={{padding:"20px"}}><label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label></td>
            <td style={{padding:"15px"}}><button className='Action'>Action</button></td>
          </tr>
          <tr className="riy  walk in">
           
          <td><img style={{width:"45px",borderRadius:"5px"}} src={Default}/></td>
            <td style={{padding:"20px"}}>ok</td>
            <td></td>
            <td></td>
            <td style={{padding:"20px"}}>GST</td>
            <td style={{padding:"20px"}}>Pc(s)</td>
            <td style={{padding:"20px"}}>534</td>
            <td style={{padding:"20px"}}>5.8ریال </td>
            <td style={{padding:"20px"}}><button style={{borderRadius:"30px",fontSize:"14px",paddingLeft:"0.75rem",paddingRight:"0.75rem" ,color:"white",background:"black",border:"none",paddingBottom:"2px"}}>Inactive</button></td>
            <td style={{padding:"20px"}}><label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label></td>
            <td style={{padding:"15px"}}><button className='Action'>Action</button></td>
          </tr>
          <tr className="riy  walk in">
            
          <td><img style={{width:"45px",borderRadius:"5px"}} src={Default}/></td>
            <td style={{padding:"20px"}}>new product</td>
            <td style={{padding:"20px"}}>infinix</td>
            <td ></td>
            <td></td>
            <td style={{padding:"20px"}}>Pc(s)</td>
            <td style={{padding:"20px"}}>1122</td>
            <td style={{padding:"20px"}}>150ریال </td>
            <td style={{padding:"20px"}}><button style={{borderRadius:"30px",fontSize:"14px",paddingLeft:"0.75rem",paddingRight:"0.75rem" ,color:"white",background:"black",border:"none",border:"none",paddingBottom:"2px"}}>Inactive</button></td>
            <td style={{padding:"20px"}}><label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label></td>
            <td style={{padding:"15px"}}><button className='Action'>Action</button></td>
          </tr>
          <tr className="riy  walk in" >
           
          <td><img style={{width:"45px",borderRadius:"5px"}} src=''/></td>
            <td style={{padding:"20px"}}>value product</td>
            <td></td>
            <td></td>
            <td style={{padding:"20px"}}>new text</td>
            <td style={{padding:"20px"}}>Pc(s)</td>
            <td style={{padding:"20px"}}>1212</td>
            <td style={{padding:"20px"}}>230ریال </td>
            <td style={{padding:"20px"}}><button style={{borderRadius:"30px",fontSize:"14px",paddingLeft:"0.75rem", paddingRight:"0.75rem" ,color:"white",background:"black",border:"none",paddingBottom:"2px"}}>Inactive</button></td>
            <td style={{padding:"20px"}}><label style={{fontSize:""}} class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label></td>
            <td style={{padding:"15px"}}><button className='Action'>Action</button></td>
          </tr>
          <tr className="riy  walk in" >
           
          <td><img style={{width:"45px",borderRadius:"5px"}} src={Default}/></td>
            <td style={{padding:"20px"}}>Ice Frame</td>
            <td style={{padding:"20px"}}>Nike </td>
            <td style={{padding:"20px"}}>Shoe</td>
            <td style={{padding:"20px"}}>Vat</td>
            <td style={{padding:"20px"}}>Pc(s)</td>
            <td style={{padding:"20px"}}>56566554</td>
            <td style={{padding:"20px"}}>90ریال </td>
            <td style={{padding:"20px"}}><button style={{borderRadius:"30px",fontSize:"14px",paddingLeft:"0.75rem",paddingRight:"0.75rem" ,color:"white",background:"black",border:"none",paddingBottom:"2px"}}>Inactive</button></td>
            <td style={{padding:"20px"}}><label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label></td>
            <td style={{padding:"15px"}}><button className='Action'>Action</button></td>
          </tr>
          <tr className="riy  walk in" >
           
          <td><img style={{width:"45px",borderRadius:"5px"}} src={Default}/></td>
            <td style={{padding:"20px"}}>War</td>
            <td></td>
            <td></td>
            <td style={{padding:"20px"}}>with texl</td>
            <td style={{padding:"20px"}}>Pc(s)</td>
            <td style={{padding:"20px"}}>1998</td>
            <td></td>
            <td style={{padding:"20px"}}><button style={{borderRadius:"30px",fontSize:"14px",paddingLeft:"0.75rem",paddingRight:"0.75rem" ,color:"white",background:"black",border:"none",paddingBottom:"2px"}}>Inactive</button></td>
            <td style={{padding:"20px"}}><label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label></td>
            <td style={{padding:"15px"}}><button className='Action'>Action</button></td>
          </tr>
          <tr className="riy  walk in" >
           
          <td><img style={{width:"45px",borderRadius:"5px"}} src={Default}/></td>
            <td style={{padding:"20px"}}>Test</td>
            <td></td>
            <td></td>
            <td style={{padding:"20px"}}>Vat</td>
            <td style={{padding:"20px"}}>Pc(s)</td>
            <td style={{padding:"20px"}}>asdfas</td>
            <td></td>
            <td style={{padding:"20px"}}><button style={{borderRadius:"30px",fontSize:"14px",paddingLeft:"0.75rem",paddingRight:"0.75rem" ,color:"white",background:"black",border:"none",paddingBottom:"2px"}}>Inactive</button></td>
            <td style={{padding:"20px"}}><label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label></td>
            <td style={{padding:"15px"}}><button className='Action'>Action</button></td>
          </tr>
          <tr className="riy  walk in" >
           
          <td><img style={{width:"45px",borderRadius:"5px"}} src={Default}/></td>
            <td style={{padding:"20px"}}>HR Ways</td>
            <td style={{padding:"20px"}}>Nike</td>
            <td style={{padding:"20px"}}>Shoes</td>
            <td style={{padding:"20px"}}>Vat</td>
            <td style={{padding:"20px"}}>Pc(s)</td>
            <td style={{padding:"20px"}}>67676744</td>
            <td style={{padding:"20px"}}>165ریال </td>
            <td style={{padding:"20px"}}><button style={{borderRadius:"30px",fontSize:"14px",paddingLeft:"0.75rem",paddingRight:"0.75rem" ,color:"white",background:"black",border:"none",paddingBottom:"2px"}}>Inactive</button></td>
            <td style={{padding:"20px"}}><label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label></td>
            <td style={{padding:"15px"}}><button className='Action'>Action</button></td>
          </tr>  */}
            </tbody>
          </Table>
        </div>
        </div>
           )}
      </div>
    </>
  );
};

export default Product;
