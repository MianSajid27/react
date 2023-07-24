import React from "react";

const Plugins = (props) => {
  console.log(props);

  return (
    <>
      <hr class="new1"></hr>
      <div className="d-flex  col-sm col-lg rcreate">
        <div className=" ">
          <p
            style={{
              marginTop: "40px",
              fontSize: "17px",
              fontWeight: "700",
              color: "#4b556c",
            }}
            className="hif"
          >
            <label className="hifg title"> {props.title}</label>
          </p>
          <h6
            style={{ marginLeft: "30px", fontWeight: "420" }}
            className="  her  "
          >
            {" "}
            <label className="rhr"></label>
          </h6>
        </div>
        <div style={{ marginTop: "20px" }} className="card back  carre  plugres ">
          <div className="">
            <div className="d-flex">
              <img className="plug1" src={props.imgsrc} />
              <div>
                <h3 className="google">{props.head} </h3>
                <p className="measure">{props.para}</p>
                <p className="measure">{props.par}</p>
                <button className="install">{props.btn}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plugins;
