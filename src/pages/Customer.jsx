import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import ClipLoader from "react-spinners/ClipLoader";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { BsEye } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
const Customer = () => {
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

      <div className="background ">
      {Loading ? (
          <div className="App"
            
          >
            <ClipLoader color={"#000000"} size={50} />
          </div>
              ) : (
          <div >
            <div>
              <Table>
                <div className="card77 col-sm">
                  <tr className="customer row d-flex ">
                    <div className=" col-sm   ">
                      <span className="cus  rpr ">
                        {" "}
                        <th
                          style={{
                            paddingTop: "30px",
                            position: "absolute",
                            marginLeft: "30px",
                          }}
                        >
                          Customers
                        </th>{" "}
                      </span>
                    </div>
                    <div className="col-sm ">
                      <span className="place rpl " style={{ padding: "14px" }}>
                        {" "}
                        <th
                          className=""
                          style={{ paddingTop: "40px", paddingBottom: "40px" }}
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
                          <button className="add  rbtn">
                            {" "}
                            <span className="plus rbt ">
                              <BsPlus size={"25px"} />
                            </span>
                            <Link
                              style={{ textDecoration: "none", color: "white" }}
                              to="/Addcustomer"
                            >
                              {" "}
                              Add customer
                            </Link>
                          </button>
                        </th>
                      </span>
                    </div>
                  </tr>
                </div>
              </Table>
            </div>

            <div style={{ marginLeft: "30px" }} className=" card6 col-sm">
              <Table>
                <thead>
                  <tr className="th1 rab">
                    <th className="th" style={{ padding: "10px" }}>
                      Customers
                    </th>
                    <th className="em" style={{ padding: "10px" }}>
                      Email
                    </th>
                    
                    <span className="reg" style={{ padding: "10px" }}>
                      {" "}
                      <th className="reg" style={{}}>
                        {" "}
                        Registration Date
                      </th>
                    </span>
                    <td></td>
                
                     <br />
                    <th style={{ padding: "10px" }}>Action</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="walk in rab">
                    <td style={{ padding: "20px" }}> Walk-In Customer </td>
                    <td></td>

                    <td style={{ padding: "20px" }}> 2023-02-20 15:20:15</td>
                    <td></td>
                    <th></th>

                    <td style={{ padding: "20px" }}>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to="/Editcustomer"
                      >
                        {" "}
                        <FiEdit />{" "}
                      </Link>
                      <span className="bs">
                        <BsEye />{" "}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Customer;
