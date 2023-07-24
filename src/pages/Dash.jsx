import React  from "react";

const Dash = (props) => {
  return (
    <div>
          <div className="d-flex">
          <button className="d-flex button1">
            <div>
              <label className="FaT">{props.iccon}</label>
            </div>
            <div>
              <label className="daspara">
                {" "}
                {props.paragraph}
                <br />
                <label className="daspara1">{props.paragrap}</label>{" "}
              </label>
            </div>
            <div>
              <label className="Arow">{props.arrow} </label>
            </div>
          </button>
        </div>
        
    </div>

    
  );
}
export default Dash;
