import React, { useRef, useState } from "react";
import { Swiperbutton } from "./Swiperbutton";

import { RxDashboard } from "react-icons/rx";
import { BsHandThumbsUp } from "react-icons/bs";
import { BsBoxSeam } from "react-icons/bs";
import { SlNote } from "react-icons/sl";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { GiPlayButton } from "react-icons/gi";
import { BiMessageAlt } from "react-icons/bi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { CgCarousel } from "react-icons/cg";
import { CiClock2 } from "react-icons/ci";
import { RiAccountCircleFill } from "react-icons/ri";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { RiAccountBoxLine } from "react-icons/ri";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { FaMandalorian } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

import "./App.css";
const Website = () => {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-black"
        style={{ position: "fixed", zIndex: 999 }}
      >
        <a
          class="navbar-brand"
          href="#"
          style={{
            color: "white",
            marginLeft: "30px",
            fontSize: "20px",
            fontWeight: "650",
          }}
        >
          envato<label style={{ color: "#70993c" }}> market</label>{" "}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon  toglerer"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <button className="bynow "> By now</button>
          </div>
        </div>
      </nav>

      <div
        style={{
          backgroundImage: `url(${"https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-banner-img-01.webp"})`,
          height: "650px",
        }}
      >
        <div className="maimletho">
          <div className="maimletho1">
            <div style={{ marginTop: "60px" }} className="d-flex  ">
              <button className="lithobutton1">
                <img src="https://lithoreact.themezaa.com/assets/img/webp/logo-gradient-sky-blue-dark-pink.webp" />{" "}
              </button>
              <button
                className="lithobutton22"
                style={{
                  borderLeftStyle: " solid",
                  borderColor: "#c7c7ca",
                  height: "27px",
                }}
              >
                {" "}
              </button>
              <button className="lithobutton2">DEMOS</button>
              <button className="lithobutton3">FEATURES</button>
              <button className="lithobutton3">DOCUMENTATION</button>
            </div>
          </div>

          <div style={{ paddingTop: "50px" }} className="maimletho2">
            <img
              className="lethoimg1"
              src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-img-01.webp"
            />
          </div>
        </div>

        <div style={{ paddingTop: "60px" }} className="d-flex">
          <button className="lithobutton4 ">
            {" "}
            <label className=""> PURCHASELETHO</label>{" "}
          </button>
          <br />
        </div>
        <div>
          <div className="d-flex">
            <hr className="hrline"></hr>
            <h6 className="litopara">
              {" "}
              TRULY <label style={{ color: "#f287b4" }}> HANDCRAFTED </label>
            </h6>{" "}
          </div>
          <h1 className="lithohea">Create anything</h1>
          <h1 className="lithohea2">that you can imagine</h1>
          <p className="litopara2">
            {" "}
            Let your creativity shine and start building 
          </p>
          <p className="litopara3"> website today and impress your visitors.</p>
        </div>

        <div
        className="gren"
          style={{
            backgroundImage: `url(${"https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-img-02.webp"})`,
            width: "200px",
            height: "300px",
          }}
        >
          <div className="d-flex">
            <button className="butticon">
              <AiOutlineArrowRight />
            </button>

            <button className="explbutt"> EXPLORE </button>
            <button className="buttdemo"> DEMOS</button>
          </div>
        </div>
      </div>
{/* |<div></div> */}
      <div className="d-flex dlex">
        <div className="d-flex">
          <img
            className="img1"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-react-landing-page-icon-01.webp"
          />
           <p  className="imgpara power">
            {" "}
            Power elite <br /> author
          </p>
        </div>
        <div>
         
        </div>
        <div className="d-flex">
          <img
            className="img1 image"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-react-landing-page-icon-02.webp"
          />
          <p style={{ width: "130px" }} className="imgpara powerr">
            {" "}
            Build on latest <br /> react hooks
          </p>
        </div>
        <div>
          
        </div>
        <div className="d-flex">
          <img
            className="img1 image"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-react-landing-page-icon-03.webp"
          />
          <p style={{ width: "130px" }} className="imgpara  powerr">
            {" "}
            Build on latest <br /> react hooks
          </p>
        </div>
        <div>
          
        </div>
        <div className="d-flex">
          <img
            className="img1 image "
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-react-landing-page-icon-04.webp"
          />
          <p style={{ width: "130px" }} className="imgpara powerr">
            {" "}
            Tailwind css
            <br /> framwork
          </p>
        </div>
        <div>
          
        </div>
      </div>

      <div style={{ background: "#fcfdfe" }}>
        <hr style={{ marginTop: "120px" }}></hr>
        <div>
          <h6 className="litoparar2">
            {" "}
            TRULY{" "}
            <label style={{ color: "#f287b4" }}>
              {" "}
              <label style={{ color: "#bc64d4" }}> MULTI</label>PURPOSE{" "}
            </label>
          </h6>

          <h3 className="head1">
            37+ stunning <br /> and unique <br /> demos{" "}
          </h3>
        </div>
        {/* <h3 className="head2">and unique</h3>
        <h3 className="head3">demos</h3> */}
      </div>

      <div className="d-flex dlex " style={{ background: "#fcfdfe" }}>
        <h6 className="all">All</h6>
        <h6 className="alll">CORPORATE</h6>
        <h6 className="alll">SPECIALIZED</h6>
        <h6 className="alll">PORTFOLIO</h6>
        <h6 className="alll">E-COMMERCE</h6>
        <h6 className="alll">BLOG</h6>
      </div>

      <div className="d-flex dlex" style={{ background: "#fcfdfe" }}>
        <div className="hogver">
          <button className="" style={{ background: "none", border: "none" }}>
            <img
              className="hovimg"
              src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-startup.webp"
            />
            <h6 className="Startup">Startup</h6>
            <h6 className="Business">Business,Finance,Agencey</h6>
          </button>
        </div>
        <div className="hogver">
          <button style={{ background: "none", border: "none" }}>
            <img
              className="hovimg2"
              src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-yoga-meditation.webp"
            />
            <h6 className="Startup2">Yoga Meditation</h6>
            <h6 className="Business2">Fitness,spiritual,classes</h6>
          </button>
        </div>
        <div className="hogver">
          <button style={{ background: "none", border: "none" }}>
            <img
              className="hovimg22"
              src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-restaurant.webp"
            />
            <h6 className="Startup2">Restaurant</h6>
            <h6 className="Business2">Drink,Food ,Cafe</h6>
          </button>
        </div>
      </div>
      <div className="d-flex dlex" style={{ background: "#fcfdfe" }}>
        <div className="hogver">
          <button style={{ background: "none", border: "none" }}>
            <img
              className="hovimgg"
              src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-marketing-agency.webp"
            />
            <h6 className="Startup">Marketing </h6>
            <h6 className="Business">Business,Finance,Agencey</h6>
          </button>
        </div>
        <div className=" hogver">
          <button style={{ background: "none", border: "none" }}>
            <img
              className="hovimgg2"
              src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-architecture.webp"
            />
            <h6 className="Startup2">Architeture</h6>
            <h6 className="Business2">Planing,Interioir,land</h6>
          </button>
        </div>
        <div className="hogver">
          <button style={{ background: "none", border: "none" }}>
            <img
              className="hovimgg22"
              src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-design-agency.webp"
            />
            <h6 className="Startup2">Design Agency</h6>
            <h6 className="Business2">Graphing,Development ,Branding</h6>
          </button>
        </div>
      </div>
      <div
        className="d-flex dlex"
        style={{ background: "#fcfdfe", paddingBottom: "150px" }}
      >
        <div className="hogver">
          <button style={{ background: "none", border: "none" }}>
            <img
              className="hovimgg"
              src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-gym-fitness.webp"
            />
            <h6 className="Startup">Gym Fitness </h6>
            <h6 className="Business">Sport,Diet,Crossfit</h6>
          </button>
        </div>
        <div className="hogver">
          <button style={{ background: "none", border: "none" }}>
            <img
              className="hovimgg2"
              src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-branding-agency.webp"
            />
            <h6 className="Startup2">Branding</h6>
            <h6 className="Business2">Services,Advertising,Seo</h6>
          </button>
        </div>
        <div className="hogver">
          <button style={{ background: "none", border: "none" }}>
            <img
              className="hovimgg22"
              src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-interior-design.webp"
            />
            <h6 className="Startup2">Interior Design</h6>
            <h6 className="Business2">Deciour,Furniture ,Architeture</h6>
          </button>
        </div>
      </div>

      <div className="d-flex dlex">
        <div>
          <h6 className="litopararas">
            POWERFUL{" "}
            <label style={{ color: "#f287b4" }}>
              <label style={{ color: "#bc64d4" }}> MINI</label>MAL DESIGNS
            </label>
          </h6>
          <h4  className="perfect built">
            Perfect pre-built
            <br></br> inner pages
          </h4>
          <span style={{ marginTop: "50px" }} className="Ready">
            225+ Readymade template blocks
          </span>
          <p style={{ width: "300px" }} className=" Choose">
            {" "}
            <label style={{ marginBottom: "15px" }}>
              {" "}
              Choose the most suitable template the
            </label>
            <br /> great collection of beautiful templates.
          </p>
          <hr style={{ marginLeft: "100px" }}></hr>
          <span style={{ marginTop: "30px" }} className="Ready">
            20+ premium in-built inner pages
          </span>
          <p className=" Choose">
            {" "}
            <label style={{ marginBottom: "15px" }}>
              Create your website in minutes by using
            </label>
            <br /> readymade inner pages and save time.
          </p>

          <button className="exol"> EXPLORE NOW</button>
        </div>

        <div>
          <MDBCarousel>
            <MDBCarouselItem
              style={{ overflow: "hidden" }}
              className="srolllimag "
              itemId={1}
              src="https://lithoreact.themezaa.com/assets/img/webp/litho-inner-page-slider-05.webp"
              alt="..."
            />
            <MDBCarouselItem
              style={{ overflow: "hidden" }}
              className="  srolllimag d-block "
              itemId={2}
              src="https://lithoreact.themezaa.com/assets/img/webp/litho-inner-page-slider-01.webp"
              alt="..."
            />
            <MDBCarouselItem
              style={{ overflow: "hidden" }}
              className=" srolllimag d-block"
              itemId={3}
              src="https://lithoreact.themezaa.com/assets/img/webp/litho-inner-page-slider-04.webp"
              alt="..."
            />
          </MDBCarousel>
        </div>
      </div>
      <div>
        <h6 className="litopararaa">
          POWERFUL{" "}
          <label style={{ color: "#f287b4" }}>
            {" "}
            <label style={{ color: "#bc64d4" }}> MINI</label>MAL DESIGNS{" "}
          </label>
        </h6>
        <h4 style={{ marginTop: "20px" }} className="lighter">
          {" "}
          The lighter and
          <br /> faster litho react
          <br /> template
        </h4>

        <img
          className="imagefull"
          src="https://lithoreact.themezaa.com/assets/img/webp/litho-react-landing-page-img-01.webp"
        />
        <hr></hr>
      </div>

      <div>
        <h2 className="for"> Everything for a </h2>
        <h4 className="great">great portfolio</h4>

        <img
         className="imagefull2"
          src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-portfolio-01.webp"
        />
      </div>

      <div className="d-flex dlex bavk">
        <div className="d-flex">
          <label className="rx">
            <RxDashboard />{" "}
          </label>
          <p className="imgparar ">
            Adjustable <br /> column
          </p>
        </div>
        <div>
          
        </div>
        <div className="d-flex">
          <label className="rxx">
            <BsHandThumbsUp />
          </label>
          <p className="imgparar parres">
            {" "}
            Attractive <br /> hover styles
          </p>
        </div>
        <div>
          
        </div>
        <div className="d-flex">
          <label className="rxx">
            <BsBoxSeam />
          </label>
          <p className="imgparar parres">
            {" "}
            Advanced <br /> single project
          </p>
        </div>
        <div>
          
        </div>
        <div className="d-flex">
          <label className="rxx">
            <SlNote />
          </label>
          <p className="imgparar parres">
            Custom <br /> content blocks
          </p>
        </div>
        <div>
         
        </div>
      </div>

      <div>
        <Carousel
          autoPlay
          showIndicators={false}
          showArrows={false}
          showThumbs={false}
          className=""
        >
          <div>
            <img
              style={{}}
              src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-blog-post-layout-04.webp"
            />
          </div>
          <div>
            <img
              style={{}}
              src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-blog-post-layout-01.webp"
            />
          </div>
          <div>
            <img
              style={{}}
              src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-blog-post-layout-03.webp"
            />
          </div>
        </Carousel>
      </div>

      <div className="d-flex dlex">
        <div>
          <h6 className="litopower">
            FRAMER{" "}
            <label style={{ color: "#f287b4" }}> MOTION FOR ANIMATION </label>
          </h6>
          <h5 className="perfect">
            Production ready
            <br></br> animation library<br></br> for react.
          </h5>

          <p style={{ width: "370px", marginTop: "60px" }} className=" Choose">
            {" "}
            <label style={{ marginBottom: "10px", fontSize: "16px" }}>
              {" "}
              Framer Motion is a simple powerful, an open
            </label>
            <br />
            <label style={{ marginBottom: "10x", fontSize: "16px" }}>
              {" "}
              source, production-ready library for React that's
            </label>
            <br />{" "}
            <label style={{ marginBottom: "10px", fontSize: "16px" }}>
              {" "}
              designed for all with developers with amazing
            </label>
            <br />
            <label style={{ marginBottom: "10px", fontSize: "16px" }}>
              animations and interactions.
            </label>
          </p>

          <button style={{ marginTop: "20px" }} className="exol">
            {" "}
            DISCOVER MORE
          </button>
        </div>
        <div style={{ overflow: "hidden" }}>
          <img
            className="tv"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-react-landing-page-img-03.webp"
          />
        </div>
      </div>
      <div>
        <h6 className="litopararcor">
          CORE <label style={{ color: "#f287b4" }}> FEATURES</label>
        </h6>
        <h1 className="lighter">
          {" "}
          Get access to
          <br /> exclusive features
        </h1>
      </div>
      <div className="d-flex dlex ">
        <div
        
          className="home bootstraps"
        >
          <img
           
            className="carousel caroimg  "
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-react-landing-page-icon-05.webp"
          />
          <h6
        
            className=" bootstrapspara">
            Bootstrap 5<br />
            Framework{" "}
          </h6>
        </div>
        <div style={{ marginLeft: "50px", marginTop: "60px" }} className="home">
          <img
            
            className="carousel caroimg  "
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-react-landing-page-icon-06.webp"
          />
          <h6  className="java">
            Atropos
            <br />
            JavaScript{" "}
          </h6>
        </div>
        <div style={{ marginLeft: "50px", marginTop: "60px" }} className="home">
          <img
           
            className=" carousel caroimg  "
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-icon-03.webp"
          />
          <h6  className="java">
            Google Web
            <br />
            Fonts{" "}
          </h6>
        </div>
        <div style={{ marginLeft: "50px", marginTop: "60px" }} className="home">
          <img
           
            className=" carousel caroimg "
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-icon-04.webp"
          />
          <h6
           
            className="higer java "
          >
            Instagram
            <br />
            Feed{" "}
          </h6>
        </div>
        <div style={{ marginLeft: "50px", marginTop: "60px" }} className="home">
          <img
           
            className="carousel caroimg "
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-react-landing-page-icon-07.webp"
          />
          <h6  className="java">
            Formik Form
            <br />
            Validation{" "}
          </h6>
        </div>
      </div>
      {/* style={{paddingBottom:"15rem"}} */}
      <div className="d-flex dlex     ">
        <div  className="home parallex">
          <img
          
            className=" carousel paro  "
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-react-landing-page-icon-08.webp"
          />
          <h6  className="java2">
            Parallax
            <br />
            Effect{" "}
          </h6>
        </div>
        <div  className="home isotop">
          <img
            
            className=" imgiso "
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-icon-07.webp"
          />
          <h6 style={{ marginLeft: "50px", paddingTop: "40px" }} className="">
            Isotope
            <br />
            Validation{" "}
          </h6>
        </div>
        <div  className="home isotop">
          <img
            
            className=" imgiso "
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-icon-08.webp"
          />
          <h6 style={{ marginLeft: "50px", paddingTop: "40px" }} className="">
            Formik Form
            <br />
            Filtering{" "}
          </h6>
        </div>
        <div  className="home farmer">
          <img
            style={{
              paddingLeft: "70px",
              paddingRight: "50px",
              paddingTop: "50px",
            }}
            className="  "
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-react-landing-page-icon-10.webp"
          />
          <h6 style={{ marginLeft: "90px", paddingTop: "40px" }} className="">
            Framer
            <br />
            Motion{" "}
          </h6>
        </div>
        <div  className="home isotop">
          <img
            
            className="imgiso  "
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-icon-10.webp"
          />
          <h6 style={{ marginLeft: "50px", paddingTop: "40px" }} className="">
            Magnific
            <br />
            Popup{" "}
          </h6>
        </div>
      </div>
      <div className="d-flex ">
        <img
    
          className="  oh "
          src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-img-04.webp"
        />
      </div>
      <hr style={{ marginTop: "190px" }} />

      <h6 style={{ marginTop: "170px" }} className="litopararblog">
        {" "}
        BLOGGING <label style={{ color: "#f287b4" }}> EXPERIENCE</label>
      </h6>
      <h1 className="lighter">
        Perfect choice for
        <br /> blog and news
      </h1>
      <img
       className="imagefull3"
        src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-blog-01.webp"
      />

      <div>
        <div style={{ backgroundColor: "#f4f5f9" }}>
          <h1>
            <h2
            className="crestuning"
           
            >
              {" "}
        <label className="">CREATE STUNNING </label>      {" "}
              <label
                style={{
                  color: "black",
                  textDecoration: "underline",
                  fontWeight: "650",
                }}
              >
                BLOG TODAY!{" "}
              </label>
            </h2>
            <Carousel
              autoPlay
              showIndicators={false}
              showThumbs={false}
              style={{ marginTop: "70px", background: "#f5f7fb" }}
              className=""
            >
              <div>
                <img src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-blog-post-layout-01.webp" />
              </div>
              <div>
                <img
                  style={{}}
                  src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-blog-post-layout-02.webp"
                />
              </div>
              <div>
                <img
                  style={{}}
                  src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-blog-post-layout-05.webp"
                />
              </div>
            </Carousel>
          </h1>
        </div>
      </div>
      <span
className="ecromice"
      >
     <label className="ecromicee" > ecommerce</label>   
      </span>
      <div className="d-flex dlex">
        <div>
          <h6 className="litopowered">
            ECOMMERCE <label style={{ color: "#f287b4" }}> READY </label>
          </h6>
          <h2 style={{ width: "300px" }} className="perfect">
            Compatible for
            <br></br> any eCommerce<br></br> platform
          </h2>

          <p style={{ width: "330px" }} className=" Choossen parares">
            {" "}
            <label style={{ marginBottom: "10px" }}>
              {" "}
              Present your products online by grabbing
            </label>
            <br />
            <label style={{ marginBottom: "10px" }}>
              {" "}
              public attention and boost revenue with Litho.
            </label>
            <br />{" "}
            <label style={{ marginBottom: "10px" }}>
              Kick start your eCommerce site using
            </label>
            <br />
            modern looking eCommerce designs.
          </p>

          <button className="exol damo"> DISCOVER DEMO</button>
        </div>
        <div style={{ overflow: "hidden" }}>
          <img
           className="imageman"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-img-05.webp"
          />
        </div>
      </div>

      <div className="d-flex dlex">
        <div>
          <img
            className="cart"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-img-06.webp"
          />
          <h6 className="cartpara">
            Appealing <br></br> hover style
          </h6>
        </div>
        <div>
          <img
            className="cart2"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-img-07.webp"
          />
          <h6 className="cartpara">
            Detailed
            <br /> filtering
          </h6>
        </div>
        <div>
          <img
            className="cart3"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-img-08.webp"
          />
          <h6 className="cartpara">
            {" "}
            Modern
            <br /> mini cart
          </h6>
        </div>
        <div>
          <img
            className="cart4"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-img-09.webp"
          />
          <h6
         className="cartpara"
            style={{
             
              marginBottom: "140px",
            }}
          >
            {" "}
            Attractive <br />
            gallery
          </h6>
        </div>
      </div>

      <div style={{ background: "#232428" }} className="d-flex dlex">
        <div>
          <img
           className="imgblack"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-react-landing-page-img-04.webp"
          />
        </div>
        <div>
          <h6 className="litoEcorm">
            REACT ROUTER{" "}
            <label style={{ color: "#f287b4" }}> FOR EASY ROUTING </label>
          </h6>
          <h1 className="React">
            React router is a<br></br>standard library for<br></br> routing in
            react.
          </h1>

          <p className=" Choosse">
            {" "}
            <label style={{ marginBottom: "15px" }}>
              {" "}
              React Router is the most widely used React routing
            </label>
            <br />{" "}
            <label style={{ marginBottom: "15px" }}>
              {" "}
              library. It provides a powerful and flexible routing
            </label>
            <br />
            <label style={{ marginBottom: "15px" }}>
              solution for React applications, allowing developers
            </label>
            <br />
            <label style={{ marginBottom: "15px" }}>
              to manage client-side routing in a declarative and
            </label>
            <br />
            <label style={{ marginBottom: "15px" }}>efficient way.</label>
          </p>

          <button className="exolll damo0"> DISCOVER DEMO</button>
        </div>
      </div>

      <div className="d-flex "></div>
      <div>
        <div style={{ background: "#f7f7fb" }} className="d-flex dlex">
          <div>
            <h6 className="litoparfor fori">
              FORMIK FOR{" "}
              <label style={{ color: "#f287b4" }}> FORM VALIDATION </label>
            </h6>
            <h1 className="perfect formik ">
              <label className="perfeet" > Formik is third party
              <br></br> react form library.</label>
            </h1>

            <p style={{ width: "390px" }} className=" Chooseen">
              {" "}
              <label style={{ marginBottom: "10px" }}>
                {" "}
                Formik is the world's most popular open source form
              </label>
              <br />{" "}
              <label style={{ marginBottom: "10px" }}>
                library for React. It comes with battle-tested solutions{" "}
              </label>
              <br />{" "}
              <label style={{ marginBottom: "10px" }}>
                input validation, formatting, masking, arrays, and error
              </label>
              <br />
              handling.
            </p>

            <button className="exol" >
              {" "}
              DISCOVER MORE
            </button>
          </div>

          <div>
            <img style={{ marginBottom: "150px" }}
           className="imghand"
              src="https://lithoreact.themezaa.com/assets/img/webp/litho-react-landing-page-img-06.webp"
            />
          </div>
        </div>

        {/* <div  style={{ backgroundImage:`url(${'https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-img-13.webp'})`,width:"100px",height:"100px"}} > */}
        {/* </div> */}
      </div>
      <div style={{ background: "#f4f5f9", paddingTop: "120px" }}>
        <h6 className="litopararblog">
          {" "}
          ELEMENTS <label style={{ color: "#f287b4" }}> AND FEATURES</label>
        </h6>
        <h1 className="lighter">
          Power up your pages
          <br /> with these elements
        </h1>
        <div className="d-flex dlex ">
          <div
            style={{border:"none"}}
            className="card homver carrd"
          >
            <label
              style={{
               
                marginRight: "70px",
                marginTop: "40px",
                fontSize: "25px",
                marginBottom: "20px",
                color: "#b9beca",
              }}
              className="Amimation"
            > 
              <MdDashboard />{" "}
            </label>

            <h6
             className="animatpara"
            >
              Animations
            </h6>
          </div>

          <div
            style={{
              marginLeft: "30px",
              border: "none",
              marginBottom: "20px",
              marginTop: "60px",
            }}
            className="card homver "
          >
            <label
              style={{
             
                marginRight: "70px",
                marginTop: "40px",
                fontSize: "25px",
                marginBottom: "20px",
                color: "#b9beca",
              }}
              className="Amimation"
            >
              <HiOutlineBellAlert />{" "}
            </label>

            <h6
              className="animatpara"
            >
              Alert Boxes
            </h6>
          </div>
          <div
            style={{
              marginLeft: "30px",
              border: "none",
              marginBottom: "20px",
              marginTop: "60px",
            }}
            className="card homver "
          >
            <label
             className="button"
            >
              <GiPlayButton />{" "}
            </label>

            <h6
             className="buttonpara"
            >
              Buttons
            </h6>
          </div>
          <div
            style={{
              marginLeft: "30px",
              border: "none",
              marginBottom: "20px",
              marginTop: "60px",
            }}
            className="card homver "
          >
            <label
                className="button"
            >
              <BiMessageAlt />{" "}
            </label>

            <h6
               className="animatpara"
            >
              Blockquotes
            </h6>
          </div>
          <div
            style={{
              marginLeft: "30px",
              border: "none",
              marginBottom: "20px",
              marginTop: "60px",
            }}
            className="card homver "
          >
            <label
               className="button"
            >
              <BsFillArrowRightCircleFill />{" "}
            </label>

            <h6
             className="animatpara"
            >
              Call To Action
            </h6>
          </div>
          <div
            style={{
              marginLeft: "30px",
              border: "none",
              marginBottom: "20px",
              marginTop: "60px",
            }}
            className="card homver "
          >
            <label
                className="button"
            >
              <CgCarousel />{" "}
            </label>

            <h6
              className="buttonpara"
            >
              Carousel
            </h6>
          </div>
        </div>
        <div className="d-flex dlex">
          <div
          style={{border:"none"}}
            className="card homver carrdd "
          >
            <label
              style={{
             
                marginRight: "70px",
                marginTop: "40px",
                fontSize: "25px",
                marginBottom: "20px",
                color: "#b9beca",
              }}
              className="Amimation"
            >
              <CiClock2 />{" "}
            </label>

            <h6
             className="buttonpara"
            >
              Pie Charts
            </h6>
          </div>

          <div
            style={{
              marginLeft: "30px",
              border: "none",
              marginBottom: "100px",
            }}
            className="card homver  "
          >
            <label
              style={{
               
                marginRight: "70px",
                marginTop: "40px",
                fontSize: "25px",
                marginBottom: "20px",
                color: "#b9beca",
              }}
               className="Amimation"
            >
              <RiAccountCircleFill />{" "}
            </label>

            <h6
             className="client"
            >
              Clients
            </h6>
          </div>
          <div
            style={{
              marginLeft: "30px",
              border: "none",
              marginBottom: "100px",
            }}
            className="card homver "
          >
            <label
              style={{
               
                marginRight: "70px",
                marginTop: "40px",
                fontSize: "25px",
                marginBottom: "20px",
                color: "#b9beca",
              }}
              className="Amimation"
            >
              <GiPlayButton />{" "}
            </label>

            <h6
             className="grid"
            >
              Column Grids
            </h6>
          </div>
          <div
            style={{
              marginLeft: "30px",
              border: "none",
              marginBottom: "100px",
            }}
            className="card homver "
          >
            <label
              style={{
            
                marginRight: "70px",
                marginTop: "40px",
                fontSize: "25px",
                marginBottom: "20px",
                color: "#b9beca",
              }}
              className="Amimation"
            >
              <BiMessageAlt />{" "}
            </label>

            <h6
            className="grid"
            >
              Newsletter
            </h6>
          </div>
          <div
            style={{
              marginLeft: "30px",
              border: "none",
              marginBottom: "100px",
            }}
            className="card homver "
          >
            <label
              style={{
              
                marginRight: "70px",
                marginTop: "40px",
                fontSize: "25px",
                marginBottom: "20px",
                color: "#b9beca",
              }}
              className="Amimation"
            >
              <BsFillArrowRightCircleFill />{" "}
            </label>

            <h6
             className="grid"
            >
              Call To Action
            </h6>
          </div>
          <div
            style={{
              marginLeft: "30px",
              border: "none",
              marginBottom: "100px",
            }}
            className="card homver "
          >
            <label
              style={{
              
                marginRight: "70px",
                marginTop: "40px",
                fontSize: "25px",
                marginBottom: "20px",
                color: "#b9beca",
              }}
              className="Amimation"
            >
              <AiOutlineQuestionCircle />{" "}
            </label>

            <h6
              className="grid"
            >
              Carousel
            </h6>
          </div>
        </div>
      </div>
      <div style={{ background: "#e1e2e9" }}>
        <h6 style={{ paddingTop: "170px" }} className="litopararblog">
          {" "}
          OUTSTANDING{" "}
          <label style={{ color: "#f287b4" }}> TEMPLATE LIBRARY</label>
        </h6>
        <h2 style={{ paddingBottom: "70px" }} className="lighter">
          Handcrafted and pixel perfect
          <br />
          templates for your website
        </h2>
        <div>
          <Carousel
            autoPlay
            showIndicators={false}
            showThumbs={false}
            showArrows={false}
            style={{ paddingTop: "70px", background: "" }}
            className=""
          >
            <div>
              <img
                style={{}}
                src="https://lithoreact.themezaa.com/assets/img/webp/litho-templates-library-02.webp"
              />
            </div>
            <div>
              <img
                style={{}}
                src="https://lithoreact.themezaa.com/assets/img/webp/litho-templates-library-07.webp"
              />
            </div>
          </Carousel>
        </div>
      </div>

      <div>
        <h2 className="Trusted">
          <span style={{ fontWeight: "650" }}> 45,000 </span>+ Trusted customers
        </h2>
        {/* <img style={{}} src='https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-img-13.webp' /> */}

        <div className="d-flex ">
          {/* <div style={{ backgroundImage:`url(${'https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-img-13.webp'})`,width:"100px"}} > </div>  */}
          <div className="bannercard ">
            <img
              style={{}}
              className="flower"
              src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-img-13.webp"
            />
            <div className="bannertext">
              <h2 style={{ width: "400px" }} className="perfectt">
                Thousands of
                <br></br>
                <span style={{ fontWeight: "600", marginBottom: "10px" }}>
                  {" "}
                  happy customers
                </span>
              </h2>

              <h3
                style={{
                  fontSize: "1.8rem",
                  color: "#828282",
                  marginBottom: "10px",
                  fontWeight: "300",
                
                }}
                className=" Chooseen"
              >
                {" "}
                <span className="trust">Trusted and experienced </span>
              </h3>

              <h3
                style={{
                  marginLeft: "120px",
                  color: "#89af44",
                  paddingBottom: "",
                  textDecoration: "underline",
                }}
              >
                Power elite author
              </h3>
              <div className="">
          
                <button className="bsfi">
                  {" "}
                  <BsFillArrowLeftCircleFill   />{" "}
                </button>

                <button className="bsfii">
                  {" "}
                  <BsFillArrowRightCircleFill   />
                </button>
              </div>
            </div>
          </div>

          <Swiper
            spaceBetween={30}
            // slidesPerVeiw="auto"
            // centeredSlides={true}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            autoplay={false}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="d-flex">
                <div
                  style={{
                    marginTop: "60px",
                    height: "300px",
                    // marginLeft: "330px",
                  }}
                  className="card swiperr swipe"
                >
                  <div className="d-flex">
                    <img
                      style={{
                        marginTop: "30px",
                        borderRadius: "50px",
                        marginLeft: "30px",
                      }}
                      src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-img-12.webp"
                    />
                    <div
                      style={{
                        marginTop: "35px",
                        marginLeft: "20px",
                        marginRight: "90px",
                      }}
                    >
                      <CiStar style={{ color: "yellow" }} />
                      <CiStar style={{ color: "yellow" }} />
                      <CiStar style={{ color: "yellow" }} />
                      <CiStar style={{ color: "yellow" }} />
                      <CiStar style={{ color: "yellow" }} />
                      <br />
                      <h6 style={{ marginTop: "10px" }}>Chandal Winston</h6>
                    </div>
                  </div>
                  <p
                    style={{
                      marginLeft: "30px",
                      marginRight: "30px",
                      marginTop: "40px",
                    }}
                  >
                    Formik is the world's most popular open
                    <br />
                    It comes with battle-tested solutions for
                    <br />
                    It comes with world's most popular for
                    <br />
                  </p>
                </div>

                <div
                  style={{
                    marginTop: "60px",
                    height: "300px",
                    marginLeft: "30px",
                    marginBottom: "150px",
                  }}
                  className="card"
                >
                  <div className="d-flex">
                    <img
                      style={{
                        marginTop: "30px",
                        borderRadius: "50px",
                        marginLeft: "30px",
                      }}
                      src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-img-12.webp"
                    />
                    <div
                      style={{
                        marginTop: "35px",
                        marginLeft: "20px",
                        marginRight: "90px",
                      }}
                    >
                      <CiStar style={{ color: "yellow" }} />
                      <CiStar style={{ color: "yellow" }} />
                      <CiStar style={{ color: "yellow" }} />
                      <CiStar style={{ color: "yellow" }} />
                      <CiStar style={{ color: "yellow" }} />
                      <br />
                      <h6 style={{ marginTop: "10px" }}> Studio Jas</h6>
                    </div>
                  </div>
                  <p
                    style={{
                      marginLeft: "30px",
                      marginRight: "30px",
                      marginTop: "40px",
                    }}
                  >
                    Formik is the world's most popular open
                    <br />
                    It comes with battle-tested solutions for
                    <br />
                    It comes with world's most popular for
                    <br />
                  </p>
                </div>
              </div>
              {/* <Swiperbutton/> */}
            </SwiperSlide>
          
            <SwiperSlide>
              {" "}
              <div className="d-flex">
                <div
                  style={{
                    marginTop: "60px",
                    height: "300px",
                    marginLeft: "330px",
                  }}
                  className="card"
                >
                  <div className="d-flex">
                    <img
                      style={{
                        marginTop: "30px",
                        borderRadius: "50px",
                        marginLeft: "30px",
                      }}
                      src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-img-12.webp"
                    />
                    <div
                      style={{
                        marginTop: "35px",
                        marginLeft: "20px",
                        marginRight: "90px",
                      }}
                    >
                      <CiStar style={{ color: "yellow" }} />
                      <CiStar style={{ color: "yellow" }} />
                      <CiStar style={{ color: "yellow" }} />
                      <CiStar style={{ color: "yellow" }} />
                      <CiStar style={{ color: "yellow" }} />
                      <br />
                      <h6 style={{ marginTop: "10px" }}>Adrone Theme</h6>
                    </div>
                  </div>
                  <p
                    style={{
                      marginLeft: "30px",
                      marginRight: "30px",
                      marginTop: "40px",
                    }}
                  >
                    Formik is the world's most popular open
                    <br />
                    It comes with battle-tested solutions for
                    <br />
                    It comes with world's most popular for
                    <br />
                  </p>
                </div>

                <div
                  style={{
                    marginTop: "60px",
                    height: "300px",
                    marginLeft: "30px",
                    marginBottom: "150px",
                  }}
                  className="card"
                >
                  <div className="d-flex">
                    <img
                      style={{
                        marginTop: "30px",
                        borderRadius: "50px",
                        marginLeft: "30px",
                      }}
                      src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-img-12.webp"
                    />
                    <div
                      style={{
                        marginTop: "35px",
                        marginLeft: "20px",
                        marginRight: "90px",
                      }}
                    >
                      <CiStar style={{ color: "yellow" }} />
                      <CiStar style={{ color: "yellow" }} />
                      <CiStar style={{ color: "yellow" }} />
                      <CiStar style={{ color: "yellow" }} />
                      <CiStar style={{ color: "yellow" }} />
                      <br />
                      <h6 style={{ marginTop: "10px" }}> BEN AVW</h6>
                    </div>
                  </div>
                  <p
                    style={{
                      marginLeft: "30px",
                      marginRight: "30px",
                      marginTop: "40px",
                    }}
                  >
                    Formik is the world's most popular open
                    <br />
                    It comes with battle-tested solutions for
                    <br />
                    It comes with world's most popular for
                    <br />
                  </p>
                </div>
              </div>
              {/* <Swiperbutton/> */}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="d-flex">
                <div
                  style={{
                    marginTop: "60px",
                    height: "300px",
                    marginLeft: "330px",
                  }}
                  className="card"
                >
                  <div className="d-flex">
                    <img
                      style={{
                        marginTop: "30px",
                        borderRadius: "50px",
                        marginLeft: "30px",
                      }}
                      src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-img-12.webp"
                    />
                    <div
                      style={{
                        marginTop: "35px",
                        marginLeft: "20px",
                        marginRight: "90px",
                      }}
                    >
                      <CiStar style={{ color: "yellow" }} />
                      <CiStar style={{ color: "yellow" }} />
                      <CiStar style={{ color: "yellow" }} />
                      <CiStar style={{ color: "yellow" }} />
                      <CiStar style={{ color: "yellow" }} />
                      <br />
                      <h6 style={{ marginTop: "10px" }}>BEN AVW</h6>
                    </div>
                  </div>
                  <p
                    style={{
                      marginLeft: "30px",
                      marginRight: "30px",
                      marginTop: "40px",
                    }}
                  >
                    Formik is the world's most popular open
                    <br />
                    It comes with battle-tested solutions for
                    <br />
                    It comes with world's most popular for
                    <br />
                  </p>
                </div>

                <div
                  style={{
                    marginTop: "60px",
                    height: "300px",
                    marginLeft: "30px",
                    marginBottom: "150px",
                  }}
                  className="card"
                >
                  <div className="d-flex">
                    <img
                      style={{
                        marginTop: "30px",
                        borderRadius: "50px",
                        marginLeft: "30px",
                      }}
                      src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-img-12.webp"
                    />
                    <div
                      style={{
                        marginTop: "35px",
                        marginLeft: "20px",
                        marginRight: "90px",
                      }}
                    >
                      <CiStar style={{ color: "yellow" }} />
                      <CiStar style={{ color: "yellow" }} />
                      <CiStar style={{ color: "yellow" }} />
                      <CiStar style={{ color: "yellow" }} />
                      <CiStar style={{ color: "yellow" }} />
                      <br />
                      <h6 style={{ marginTop: "10px" }}>Chandal Winston </h6>
                    </div>
                  </div>
                  <p
                    style={{
                      marginLeft: "30px",
                      marginRight: "30px",
                      marginTop: "40px",
                    }}
                  >
                    Formik is the world's most popular open
                    <br />
                    It comes with battle-tested solutions for
                    <br />
                    It comes with world's most popular for
                    <br />
                  </p>
                </div>
              </div>
              {/* <Swiperbutton/> */}
            </SwiperSlide>
         
          </Swiper>
        </div>
        {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

<SwiperSlide> hello</SwiperSlide>
      </Swiper> */}
      </div>

      <div style={{ background: "black" }} className="d-flex dlex">
        <div className="line-icon-Business-Man">
       <label><RiAccountBoxLine
            className="businessicon"
          /> </label>
          <h5 className="documentio" >
            {" "}
            How can we help you?
          </h5>
          {/* <h5 className="canano" >
        How can we help you?
     
          </h5 > */}
          <h6
           className="get"
          >
            GET SUPPORT NOW
          </h6>
        </div>
        <div>
        <label className="md">  <MdOutlineSwitchAccount
                  className="businessicon busioc"
          /></label> 
          <h5 className="documention" >
            {" "}
            Detailed documentation
          </h5>
          <h6
           className="online"
          >
            ONLINE DOCUMENTATION
          </h6>
        </div>
        <div>
          <FaMandalorian
               className="businessicon"
          />
          <h5 className="documention" >
            Looking for customization?
          </h5>
          <h6
           className="online"
          >
            ODESCRIBE YOUR PROJECT
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Website;
