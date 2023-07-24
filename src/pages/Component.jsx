import React, { useEffect,useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import Ignite from "../image/Ignite.webp";
import { BsBox } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GoNote } from "react-icons/go";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoPizzaSharp } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import ClipLoader from "react-spinners/ClipLoader";
const Component = () => {
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
  const [show, setshow] = useState(false);
  const [sh, setsh] = useState(false);
  const [so, setso] = useState(false);
  const [how, sethow] = useState(false);
  const [wo, setwo] = useState(false);
  return (
    <div className="dfdsfdsf">
      <div className=" cloiiuuu ">
      {Loading ? (
          <div className="App"
            
          >
            <ClipLoader color={"#000000"} size={50} />
          </div>
        ) : (
        <div> 
        <h5
          className=" marpl "
          style={{
            paddingTop: "150px",
            paddingLeft: "30px",
            paddingBottom: "25px",
          }}
        >
          Marketplace
        </h5>

        <div className="card cadre  ">
          <div className="">
            <img className="igite " src={Ignite} />
          </div>

          <h5 className=" welp  ">Welcome to Ignite Marketplace</h5>

          <div className="paraa">
            <p style={{ marginLeft: "30px" }} className=" mt-1 pre    ">
              <span className="paraa">
                {" "}
                Ignite Marketplace is a platform designed to shoppers in order
                to provide them with an enjoyable shopping
              </span>
              <br />
              <span className="paraa">
                {" "}
                experience, enabling them to between and track of orders and
                access a selective range of the most unique products
              </span>
              <br />
              <span className="paraa"> from Zid Merchants.</span>
            </p>
          </div>

          <hr className="mx-4 hrr" />
          <div className="d-flex dire ">
            <div className="">
              <label className="bbx">
                <BsBox />
              </label>
              <p style={{ marginLeft: "45px" }}>
                Additional Sales
                <br />
                <label style={{ marginLeft: "40px" }}>Channel </label>
              </p>
            </div>
            <div className="col-sm">
              <label className="bbx">
                <HiOutlineUserGroup />
              </label>
              <p style={{ marginLeft: "40px" }}>
                Reaching a new <br />
                custo segment
              </p>
            </div>
            <div className="col-sm">
              <label className="bbxx">
                <GoNote />
              </label>
              <p style={{ marginLeft: "40px" }}>
                Manage and <br />
                control store
                <br />
                and Ignite
                <br />
                Marketplace
              </p>
            </div>
            <div className="col-sm">
              <label className="bb">
                <GoNote />
              </label>
              <p style={{ marginLeft: "25px" }}>Order Tracking</p>
            </div>
            <div className="col-sm">
              <label className="bb">
                <MdOutlineDashboardCustomize />
              </label>
              <p style={{ marginLeft: "25px" }}>
                Discover unique
                <br />
                products from
                <br />
                Ignite merchants
              </p>
            </div>
            <div className="col-sm">
              <label className="bb">
                <IoPizzaSharp />
              </label>
              <p style={{ marginLeft: "10px" }}>
                Unique shopping
                <br />
                experience
                <br />
              </p>
            </div>
          </div>
          <div className="col-sm dire ">
            <label className="bbx">
              <AiOutlineDollar />
            </label>
            <p style={{ marginLeft: "45px", marginBottom: "30px" }}>
              Competitive fees
              <br />
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "20px",
            marginLeft: "30px",
            marginRight: "30px",
            border: "none",
          }}
          className="card cadre "
        >
          <div className="d-flex row">
            <div className="col-sm ">
              <h5
                className="fre"
                style={{
                  marginTop: "40px",
                  marginLeft: "30px",
                  marginBottom: "20px",
                }}
              >
                Frequently Asked Questions
              </h5>
            </div>
            <div></div>
            <div className="col-sm">
              <button className="igni" onClick={() => setshow(!show)}>
                Is Ignite marketplace responsible for shopping and deliver?
                <label className="Dr" onClick={() => setshow(!show)}>
                  {" "}
                  {show ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                </label>
              </button>
              {show ? (
                <p
                  style={{
                    marginLeft: "30px",
                    fontSize: "20px",
                    marginRight: "30px",
                    background: "#f3f4f6",
                    fontSize: "17px",
                    fontWeight: "500",
                    color: "#1d333e",
                    paddingTop: "5px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                  }}
                >
                  No, Ignite Marketplace will show the same shipping options
                  activated on your store.
                </p>
              ) : null}
            </div>
            <div className="col-sm">
              <button
                style={{ marginTop: "15px" }}
                className="igni"
                onClick={() => setsh(!sh)}
              >
                Is it necessary to specify and separate invoentry for
                marketplace ?
                <label className="Dr1" onClick={() => setsh(!sh)}>
                  {" "}
                  {sh ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                </label>
              </button>

              {sh ? (
                <p
                  style={{
                    marginLeft: "30px",
                    fontSize: "20px",
                    marginRight: "30px",
                    background: "#f3f4f6",
                    fontSize: "17px",
                    fontWeight: "500",
                    color: "#1d333e",
                    paddingTop: "5px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                  }}
                >
                  No, Ignite Marketplace will shoe activated products using the
                  same quantity and price is on your store.
                </p>
              ) : null}
            </div>
            <div className="col-sm">
              <button
                style={{ marginTop: "15px" }}
                className="igni"
                onClick={() => setso(!so)}
              >
                Where will i receive ordr coming for ignite marketplace
                <label className="Dr2" onClick={() => setso(!so)}>
                  {" "}
                  {so ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                </label>
              </button>
              {so ? (
                <p
                  style={{
                    marginLeft: "30px",
                    fontSize: "20px",
                    marginRight: "30px",
                    background: "#f3f4f6",
                    fontSize: "17px",
                    fontWeight: "500",
                    color: "#1d333e",
                    paddingTop: "5px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                  }}
                >
                  All orders will be shown under the order page on the merchant
                  dashboard with indication for the order source
                  <br />
                  whither the order is from the store or Ignite Marketplace.
                </p>
              ) : null}
            </div>
            <div className="col-sm">
              <button
                style={{ marginTop: "15px" }}
                className="igni"
                onClick={() => sethow(!how)}
              >
                Is there any subcribtion fee for listing my product on ignite
                marketplace ?
                <label className="Dr3" onClick={() => sethow(!how)}>
                  {" "}
                  {how ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                </label>
              </button>
              {how ? (
                <p
                  style={{
                    marginLeft: "30px",
                    fontSize: "20px",
                    marginRight: "30px",
                    background: "#f3f4f6",
                    fontSize: "17px",
                    fontWeight: "500",
                    color: "#1d333e",
                    paddingTop: "5px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                  }}
                >
                  No, there is no subscription fee. Ignite Marketplace will
                  charge a percentage from sales on Ignite Marketplace, the
                  <br />
                  percentage is shown on the contract.
                </p>
              ) : null}
            </div>
            <div className="col-sm">
              <button
                style={{ marginTop: "15px", marginBottom: "20px" }}
                className="igni"
                onClick={() => setwo(!wo)}
              >
                Are there any marketing plane for ignite marketplace platform?
                <label className="Dr4" onClick={() => setwo(!wo)}>
                  {" "}
                  {wo ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                </label>
              </button>
              {wo ? (
                <p
                  style={{
                    marginLeft: "30px",
                    fontSize: "20px",
                    marginRight: "30px",
                    background: "#f3f4f6",
                    fontSize: "17px",
                    fontWeight: "500",
                    color: "#1d333e",
                    paddingTop: "5px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    // margintop: "0px",
                  }}
                >
                  Yes, Ignite Marketplace platform will include marketing plans
                  all over the year for Ignite Marketplace and products
                  <br />
                  listed on it.
                </p>
              ) : null}
            </div>
          </div>
        </div>
        <div
          style={{ marginTop: "20px", marginLeft: "30px", border: "none" }}
          className="card  cadre"
        >
          <h5
            className="marse"
            style={{
              marginLeft: "40px",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            Ignite Marketplace Settings and customization
          </h5>
        </div>
        </div>
     )}
        {/* style={{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"}} */}
        {/* style={{ marginLeft: "40px", fontSize: "17px",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center" }} */}
      </div>
    </div>
  );
};
export default Component;
