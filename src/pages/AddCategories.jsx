import React, { useState } from "react";
import { BsCloudArrowUp } from "react-icons/bs";

const AddCategories = () => {
  const [show, setshow] = useState(false);
  return (
    <div>
      <div className="cloi">
        <h5 className="crea newr">
          <span style={{ color: "black" }} className="newr">
            Create New Category
          </span>
        </h5>

        <div className="d-flex  col-sm col-lg rcreate">
          <div className=" ">
            <h5 style={{ marginTop: "50px" }} className="hif">
              <label className="hifg">Description </label>
            </h5>
            <h6 style={{ marginLeft: "30px" }} className="  her  ">
              {" "}
              <label className="rhr">Add New Category Description</label>
            </h6>
          </div>
          <div className="card back  carre  ">
            <div className="">
              <h6
                style={{ marginTop: "30px", marginLeft: "30px" }}
                className="name"
              >
                Name
              </h6>
              <input name="name" className="put  int"></input>
              <h6
                style={{ marginTop: "15px", marginLeft: "30px" }}
                className="name"
              >
                Category Code
              </h6>
              <input name="last" className="put  int"></input>

              <h6
                style={{ marginTop: "15px", marginLeft: "30px" }}
                className="name"
              >
                Description
              </h6>
              <div class="form-group">
                <textarea
                  style={{ marginBottom: "60px" }}
                  class="form-control put  int"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              {/* <input
              
              name="phone"
              className="put  int"
            ></input> */}
            </div>
          </div>
        </div>
        <div className="d-flex col-sm col-lg rcreate">
          <div>
            <h5
              style={{ marginTop: "50px", marginLeft: "30px" }}
              className="hif"
            >
              <label className="hifg ">Sub Category </label>
            </h5>
            <h6 style={{ marginLeft: "30px" }} className="  her">
              <label className="rhr"> </label>
            </h6>
          </div>
          <div className="card back carre ">
            <div className="">
              <h6
                style={{ marginTop: "30px", marginLeft: "30px" }}
                className="name"
              >
                Add Sub Category
              </h6>
              <td>
                <label
                  style={{ marginLeft: "30px", marginBottom: "50px" }}
                  class="switch"
                >
                  <input
                    onClick={() => setshow(!show)}
                    name="active"
                    type="checkbox"
                  />
                  <span class="slider round"></span>
                </label>
                {show ? (
                  <div>
                    <h6 style={{ marginLeft: "30px" }} className="name">
                      Category
                    </h6>
                    <select
                      name="sajid"
                      style={{ marginBottom: "40px", textDecoration: "none" }}
                      class=" put int form-select "
                      placeholder="select"
                    >
                      <option></option>
                      <option>NO OPTION</option>
                    </select>
                  </div>
                ) : null}
              </td>
            </div>
          </div>
        </div>
        <hr class="new1"></hr>
        <div className="d-flex col-sm col-lg rcreate">
          <div>
            <h5
              style={{ marginTop: "50px", marginLeft: "30px" }}
              className="hif"
            >
              <label className="hifg  ">Category Image </label>
            </h5>
            <h6 style={{ marginLeft: "30px" }} className="  her">
              <label className="rhr">Upload category image </label>
            </h6>
          </div>
          <div className="card back carre ">
            <div>
              <input id="file" type="file" placeholder="czdfghjkl" />
              {/* <button   className='buttoncati'> <label style={{fontSize:"40px"}}><BsCloudArrowUp/>   </label><br/>Upload an image <span style={{color:"#968f98"}}> or drag and drop <br/>
PNG, JPG </span></button>   */}
            </div>
          </div>
        </div>
        <hr class="new1"></hr>
        <button className="cati"> Add Catrgories</button>
      </div>
    </div>
  );
};

export default AddCategories;
