import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Getuser = () => {
  const location = useLocation();
  // console.log(location.state)

  // const  = () => toast("Wow so easy!");
  const [data, setData] = useState([]);
  const [name, setFirstName] = useState("");
  const [last, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [casher, setCasher] = useState("");
  const [sajid, setSajid] = useState("");
  const [active, setactive] = useState(false);
  const [login, setlogin] = useState(false);
  const [loader, setLoader] = useState(false);
  const [Loading, setLoading] = useState(true);
const navigate = useNavigate();
const navtopage =()=>{
  navigate('/User')
 
}

  const UpdateUser = () => {
   toast("User Update Succesfully!")
    setLoader(true);
    let data = {
      user_id: location.state.id,
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
      "https://pos-dev.myignite.online/connector/api/update-business-user",
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
      console.log("result", result);

      if (result.status ==200) {
        setLoader(false);
    navigate("/User");

      
      } else {
        setLoader(false);
      }
   
    });
  };
  console.log(active);
  console.log(login);

  useEffect((id) => {
    fetch(
      `https://pos-dev.myignite.online/connector/api/user/${location.state.id}`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImIyMjYxNDUwNTllOTc4YmMwMDJkZDU4N2M2MGVkZWU2MjZlNzgwMmQ3ZjQxMzM5Mzk3YTkzNGIyNGRmNjhmN2U4NTE5MDU5MWEwOTIxOWY1In0.eyJhdWQiOiIzNSIsImp0aSI6ImIyMjYxNDUwNTllOTc4YmMwMDJkZDU4N2M2MGVkZWU2MjZlNzgwMmQ3ZjQxMzM5Mzk3YTkzNGIyNGRmNjhmN2U4NTE5MDU5MWEwOTIxOWY1IiwiaWF0IjoxNjgzNTQ0MDI5LCJuYmYiOjE2ODM1NDQwMjksImV4cCI6MTcxNTE2NjQyOSwic3ViIjoiMTUxOCIsInNjb3BlcyI6W119.Z6Mu5ednnVvqma1pc3CACEMx4Fp2tJFmRnxGN6_oU3MpJjItGtiZdyOIvFV508UHlSWUnn4wXwdBTOUF3HaeWjGp1JBr_BdZ6gsYFjAkbmgW8mUM0xGdpe4IJiNwQTs3SF1QC6B93JrPc7Mnmh6a_OvknAGW-1btWIZ2KUr_41PMT-AGDyzouPL4ojanWghDyzBTK1G-SI4cKMabHAyUrvoj3EmT1V4VmGzNjZoXxYyk_lku1vsnHIamSNGhgTjSrOOEW9AX_vpfRWXDWURQsrJ5W4x5ofI0P3i_m1oU8wYQFhNUhY13NpXglstB9TytHWtjkb-Kx1uUDclpbSCUouSXNO3ihXjqRZlcuyDsufH7d8iBJ_6MksEeHBTbczLt0fLDQmzajga1SPjCW1ILJuVKHm6wANiugBYKKZOa-RvDyrPdwfgy2S1hYI8GPFTMw-nMx9GPoX7TbcavpQ0kxfpLzMaIXOjW2_GlHROoq9AlfJiLczbCMHJut9xus9CqcjdUlySnwX2yin-6ZwGcLuiKRnmBWGOwSj8Es7ehVNZz32QejiLX3cTgrGKqldC7WVEmVcFwNsZjn79z-ShOvTeVjmRAc-K_2OD_LWPNoERPAPx-EjxgDEr3o5DWvAP8ed-vLJ9Nio2491VLMqpu2W8HGCu8Wuu7uNp1vWfzapo ",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    ).then((result) => {
      result.json().then((response) => {
        console.log("result", response);
        // setData(resp.data);
        // console.log("result", resp);
        setFirstName(response.data[0].first_name);
        setLastName(response.data[0].last_name);
        setEmail(response.data[0].email);
        setPhone(response.data[0].contact_no);

        setactive(response.data[0].status === "active" ? true : false);
        setlogin(response.data[0].allow_login === 0 ? false : true);
        setLoading(false);
      });
    });
  }, []);
  console.log(active);
  console.log(login);
  return (
    <div>
      <div className="ground">
      {Loading ? (
          <div className="App"
            
          >
            <ClipLoader color={"#000000"} size={100} />
          </div>
        ) : (

        <div> 
        <h5 className="crea newr">
          {" "}
          <span style={{ color: "black" }} className="newr">
            {" "}
            Edit User{" "}
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
                  setFirstName(e.target.value);
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
                  setLastName(e.target.value);
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
              <td>
                <div class="form-check form-switch">
                  <input
                    onClick={() => {
                      setactive(!active);
                    }}
                    style={{
                      marginLeft: "1px",
                      fontSize: "25px",
                      marginBottom: "20px",
                    }}
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    value={active}
                    checked={active}
                  />
                  <label
                    class="form-check-label"
                    for="flexSwitchCheckChecked"
                  ></label>
                </div>
              </td>
            </div>
          </div>
        </div>
        <div className="d-flex col-sm col-lg rcreate">
          <div>
            <h5
              style={{ marginTop: "50px", marginLeft: "30px" }}
              className="hif"
            >
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
                <div class="form-check form-switch">
                  <input
                    onClick={() => {
                      setlogin(!login);
                    }}
                    style={{
                      marginLeft: "1px",
                      fontSize: "25px",
                      marginBottom: "20px",
                    }}
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    value={login}
                    checked={login}
                  />
                  <label
                    class="form-check-label"
                    for="flexSwitchCheckChecked"
                  ></label>
                </div>
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
        <button className="adus" onClick={UpdateUser}>
        <label className="radus">
          {loader ?  <i  class="fa fa-circle-o-notch fa-spin" > </i> : "UpdateUser"  }
       
        <ToastContainer />
        </label>
      </button>
     
      </div>
       )}
      </div>
    </div>
  );
};

export default Getuser;
