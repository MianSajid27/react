import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate, Link } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { Location } from "react-router-dom";
const Create = (props) => {

  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [casher, setCasher] = useState("");
  const [sajid, setSajid] = useState("");
  const [active, setactive] = useState(false);
  const [login, setlogin] = useState(false);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  // function handleClick() {
  //   navigate("/User");
  // }

  // const navtopage = () => {
  //   navigate("/User");
  // };

  const SetUser = () => {
    setLoader(true);
    toast("Add user Succesfully!")
    let data = {
      first_name: name,
      last_name: last,
      email: email,
      contact_no: phone,
      status: active ? 1 : 0,
      role_id: 2,
      allow_login: login ? 1 : 0,
      access_all_locations: "access_all_locations",
    };
    fetch(
      "https://pos-dev.myignite.online/connector/api/create-business-user",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImIyMjYxNDUwNTllOTc4YmMwMDJkZDU4N2M2MGVkZWU2MjZlNzgwMmQ3ZjQxMzM5Mzk3YTkzNGIyNGRmNjhmN2U4NTE5MDU5MWEwOTIxOWY1In0.eyJhdWQiOiIzNSIsImp0aSI6ImIyMjYxNDUwNTllOTc4YmMwMDJkZDU4N2M2MGVkZWU2MjZlNzgwMmQ3ZjQxMzM5Mzk3YTkzNGIyNGRmNjhmN2U4NTE5MDU5MWEwOTIxOWY1IiwiaWF0IjoxNjgzNTQ0MDI5LCJuYmYiOjE2ODM1NDQwMjksImV4cCI6MTcxNTE2NjQyOSwic3ViIjoiMTUxOCIsInNjb3BlcyI6W119.Z6Mu5ednnVvqma1pc3CACEMx4Fp2tJFmRnxGN6_oU3MpJjItGtiZdyOIvFV508UHlSWUnn4wXwdBTOUF3HaeWjGp1JBr_BdZ6gsYFjAkbmgW8mUM0xGdpe4IJiNwQTs3SF1QC6B93JrPc7Mnmh6a_OvknAGW-1btWIZ2KUr_41PMT-AGDyzouPL4ojanWghDyzBTK1G-SI4cKMabHAyUrvoj3EmT1V4VmGzNjZoXxYyk_lku1vsnHIamSNGhgTjSrOOEW9AX_vpfRWXDWURQsrJ5W4x5ofI0P3i_m1oU8wYQFhNUhY13NpXglstB9TytHWtjkb-Kx1uUDclpbSCUouSXNO3ihXjqRZlcuyDsufH7d8iBJ_6MksEeHBTbczLt0fLDQmzajga1SPjCW1ILJuVKHm6wANiugBYKKZOa-RvDyrPdwfgy2S1hYI8GPFTMw-nMx9GPoX7TbcavpQ0kxfpLzMaIXOjW2_GlHROoq9AlfJiLczbCMHJut9xus9CqcjdUlySnwX2yin-6ZwGcLuiKRnmBWGOwSj8Es7ehVNZz32QejiLX3cTgrGKqldC7WVEmVcFwNsZjn79z-ShOvTeVjmRAc-K_2OD_LWPNoERPAPx-EjxgDEr3o5DWvAP8ed-vLJ9Nio2491VLMqpu2W8HGCu8Wuu7uNp1vWfzapo",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    ).then((result) => {
      console.log(result);

      if (result.status ==200) {
        setLoader(false);
    navigate("/User");

        // toast("User Add Succesfully!");
      } else {
        setLoader(false);
      }
      // alert(toast)

      
    });
  };
  console.log(active);
  console.log(login);
  return (
    <div className="ground">
      <h5 className="crea newr">
        {" "}
        <span style={{ color: "black" }} className="newr">
          {" "}
          Create New User{" "}
        </span>
      </h5>

      <div className="d-flex  col-sm col-lg rcreate">
        <div className=" ">
          <h5 style={{ marginTop: "50px" }} className="hif">
            {" "}
            <label className="hifg">Information </label>
          </h5>
          <h6 style={{ marginLeft: "30px" }} className="  her  ">
            {" "}
            <label className="rhr">
              Add your customer information and create{" "}
            </label>
            <br />
            <label className="rhr">a new customer from here </label>
            <br />
          </h6>
        </div>
        <div className="card back  carre  ">
          <div className="">
            <h6
              style={{ marginTop: "30px", marginLeft: "30px" }}
              className="name"
            >
              First Name
            </h6>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              name="name"
              className="put  int"
            ></input>
            <h6
              style={{ marginTop: "15px", marginLeft: "30px" }}
              className="name"
            >
              Last Name
            </h6>
            <input
              value={last}
              onChange={(e) => {
                setLast(e.target.value);
              }}
              name="last"
              className="put  int"
            ></input>
            <h6
              style={{ marginTop: "15px", marginLeft: "30px" }}
              className="name"
            >
              Email
            </h6>
            <input
      
              value={email}  
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="email"
              className="put  int"
            ></input>
            <h6
              style={{ marginTop: "15px", marginLeft: "30px" }}
              className="name"
            >
              Phone
            </h6>
            <input
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              name="phone"
              className="put  int"
            ></input>
            <h6
              style={{ marginTop: "15px", marginLeft: "30px" }}
              className="name"
            >
              Is Active?
            </h6>
            <td className="name">
              <label
                style={{ marginLeft: "30px", marginBottom: "40px" }}
                class="switch"
              >
                <input
                  value={active}
                  onClick={(e) => {
                    setactive(!active);
                  }}
                  name="active"
                  type="checkbox"
                />
                <span class="slider round"></span>
              </label>
            </td>
          </div>
        </div>
      </div>
      <div className="d-flex col-sm col-lg rcreate">
        <div>
          <h5 style={{ marginTop: "50px", marginLeft: "30px" }} className="hif">
            <label className="hifg">Information </label>
          </h5>
          <h6 style={{ marginLeft: "30px" }} className="  her">
            <label className="rhr">Roles and Permision </label>
          </h6>
        </div>
        <div className="card back carre ">
          <div className="">
            <h6
              style={{ marginTop: "30px", marginLeft: "30px" }}
              className="name"
            >
              Allow Login
            </h6>
            <td>
              <label style={{ marginLeft: "30px" }} class="switch">
                <input
                  value={login}
                  onClick={(e) => {
                    setlogin(!login);
                  }}
                  name="active"
                  type="checkbox"
                />
                <span class="slider round"></span>
              </label>
            </td>
            <h6
              style={{ marginTop: "15px", marginLeft: "30px" }}
              className="name"
            >
              Role
            </h6>
            <select
              value={casher}
              onChange={(e) => {
                setCasher(e.target.value);
              }}
              name="Casher"
              style={{ paddingRight: "30px" }}
              class=" put int"
            >
              <option></option>
              <option>Cashier</option>
              <option>Manager</option>
            </select>

            <h6
              style={{ marginTop: "15px", marginLeft: "30px" }}
              className="name"
            >
              Location
            </h6>
            <select
              value={sajid}
              onChange={(e) => {
                setSajid(e.target.value);
              }}
              name="sajid"
              style={{ marginBottom: "40px", textDecoration: "none" }}
              class=" put int "
              placeholder="select"
            >
              <option></option>
              <option>Sajid</option>
            </select>
          </div>
        </div>
      </div>

      <button className="adus" onClick={SetUser}>
        <label className="radus">
          {loader ? <i class="fa fa-circle-o-notch fa-spin"></i> : "Add user"}
          

          <ToastContainer />

         
        </label>
      </button>
    </div>
  );
};

export default Create;
