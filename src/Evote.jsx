import React,{useState} from "react";
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


import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "./App.css";
const Evote = () => {
  const [show, setshow] = useState(true);
  
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
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <button className="bynow"> By now</button>
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
              <button className="lithobutton2">Demos</button>
              <button className="lithobutton3">Features</button>
              <button className="lithobutton3">Documentation</button>
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
            Let your creativity shine and start building your
          </p>
          <p className="litopara3"> website today and impress your visitors.</p>
        </div>

        <div
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

      <div className="d-flex">
        <div>
          <img
            className="img1"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-react-landing-page-icon-01.webp"
          />
        </div>
        <div>
          <p style={{ width: "100px" }} className="imgpara">
            {" "}
            Power elite <br /> author
          </p>
        </div>
        <div>
          <img
            className="img1"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-react-landing-page-icon-02.webp"
          />
        </div>
        <div>
          <p style={{ width: "130px" }} className="imgpara">
            {" "}
            Build on latest <br /> react hooks
          </p>
        </div>
        <div>
          <img
            className="img1"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-react-landing-page-icon-03.webp"
          />
        </div>
        <div>
          <p style={{ width: "130px" }} className="imgpara">
            {" "}
            Build on latest <br /> react hooks
          </p>
        </div>
        <div>
          <img
            className="img1"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-react-landing-page-icon-04.webp"
          />
        </div>
        <div>
          <p style={{ width: "130px" }} className="imgpara">
            {" "}
            Tailwind css
            <br /> framwork
          </p>
        </div>
      </div>

      <div>
        <hr style={{ marginTop: "120px" }}></hr>

        <h6 className="litoparar2">
          {" "}
          TRULY <label style={{ color: "#f287b4" }}> MULTIPURPOSE </label>
        </h6>

        <h1 className="head1">37+ stunning</h1>
        <h1 className="head2">and unique</h1>
        <h1 className="head3">demos</h1>
      </div>

      <div className="d-flex" style={{ background: "#f9fafc" }}>
        <h6 className="all">All</h6>
        <h6 className="alll">CORPORATE</h6>
        <h6 className="alll">SPECIALIZED</h6>
        <h6 className="alll">PORTFOLIO</h6>
        <h6 className="alll">E-COMMERCE</h6>
        <h6 className="alll">BLOG</h6>
      </div>

      <div className="d-flex" style={{ background: "#f9fafc" }}>
        <button style={{ background: "none", border: "none" }}>
          <img
            className="hovimg"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-startup.webp"
          />
          <h6 className="Startup">Startup</h6>
          <h6 className="Business">Business,Finance,Agencey</h6>
        </button>
        <button style={{ background: "none", border: "none" }}>
          <img
            className="hovimg2"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-yoga-meditation.webp"
          />
          <h6 className="Startup2">Yoga Meditation</h6>
          <h6 className="Business2">Fitness,spiritual,classes</h6>
        </button>
        <button style={{ background: "none", border: "none" }}>
          <img
            className="hovimg2"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-restaurant.webp"
          />
          <h6 className="Startup2">Restaurant</h6>
          <h6 className="Business2">Drink,Food ,Cafe</h6>
        </button>
      </div>
      <div className="d-flex" style={{ background: "#f9fafc" }}>
        <button style={{ background: "none", border: "none" }}>
          <img
            className="hovimgg"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-marketing-agency.webp"
          />
          <h6 className="Startup">Marketing </h6>
          <h6 className="Business">Business,Finance,Agencey</h6>
        </button>
        <button style={{ background: "none", border: "none" }}>
          <img
            className="hovimgg2"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-architecture.webp"
          />
          <h6 className="Startup2">Architeture</h6>
          <h6 className="Business2">Planing,Interioir,land</h6>
        </button>
        <button style={{ background: "none", border: "none" }}>
          <img
            className="hovimgg2"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-design-agency.webp"
          />
          <h6 className="Startup2">Design Agency</h6>
          <h6 className="Business2">Graphing,Development ,Branding</h6>
        </button>
      </div>
      <div
        className="d-flex"
        style={{ background: "#f9fafc", paddingBottom: "150px" }}
      >
        <button style={{ background: "none", border: "none" }}>
          <img
            className="hovimgg"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-gym-fitness.webp"
          />
          <h6 className="Startup">Gym Fitness </h6>
          <h6 className="Business">Sport,Diet,Crossfit</h6>
        </button>
        <button style={{ background: "none", border: "none" }}>
          <img
            className="hovimgg2"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-branding-agency.webp"
          />
          <h6 className="Startup2">Branding</h6>
          <h6 className="Business2">Services,Advertising,Seo</h6>
        </button>
        <button style={{ background: "none", border: "none" }}>
          <img
            className="hovimgg2"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-interior-design.webp"
          />
          <h6 className="Startup2">Interior Design</h6>
          <h6 className="Business2">Deciour,Furniture ,Architeture</h6>
        </button>
      </div>

      <div className="d-flex">
        <div>
          <h6 className="litopararas">
            POWERFUL{" "}
            <label style={{ color: "#f287b4" }}> MINIMAL DESIGNS</label>
          </h6>
          <h1 style={{ marginTop: "25px" }} className="perfect">
            Perfect pre-built
            <br></br> inner pages
          </h1>
          <h6 className="Ready">225+ Readymade template blocks</h6>
          <h6 style={{ width: "300px" }} className=" Choose">
            {" "}
            <label style={{ marginBottom: "15px" }}>
              {" "}
              Choose the most suitable template the
            </label>
            <br /> great collection of beautiful templates.
          </h6>
          <hr style={{ marginLeft: "100px" }}></hr>
          <h6 style={{ marginTop: "30px" }} className="Ready">
            20+ premium in-built inner pages
          </h6>
          <h6 className=" Choose">
            {" "}
            <label style={{ marginBottom: "15px" }}>
              Create your website in minutes by using
            </label>
            <br /> readymade inner pages and save time.
          </h6>

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
          {/* <img  src='https://lithoreact.themezaa.com/assets/img/webp/litho-inner-page-slider-05.webp'/> */}
        </div>
      </div>
      <div>
        <h6 className="litopararaa">
          POWERFUL <label style={{ color: "#f287b4" }}> MINIMAL DESIGNS </label>
        </h6>
        <h1 style={{ marginTop: "20px" }} className="lighter">
          {" "}
          The lighter and
          <br /> faster litho react
          <br /> template
        </h1>

        <img
          style={{ width: "1349px", marginTop: "70px", marginBottom: "140px" }}
          src="https://lithoreact.themezaa.com/assets/img/webp/litho-react-landing-page-img-01.webp"
        />
        <hr></hr>
      </div>

      <div>
        <h2 className="for"> Everything for a </h2>
        <h1 className="great">great portfolio</h1>

        <img
          style={{ width: "1349px", marginTop: "70px" }}
          src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-portfolio-01.webp"
        />
      </div>

      <div className="d-flex bavk">
        <div>
          <label className="rx">
            <RxDashboard />{" "}
          </label>
        </div>
        <div>
          <p className="imgparar">
            Adjustable <br /> column
          </p>
        </div>
        <div>
          <label className="rxx">
            <BsHandThumbsUp />
          </label>
        </div>
        <div>
          <p className="imgparar">
            {" "}
            Attractive <br /> hover styles
          </p>
        </div>
        <div>
          <label className="rxx">
            <BsBoxSeam />
          </label>
        </div>
        <div>
          <p className="imgparar">
            {" "}
            Advanced <br /> single project
          </p>
        </div>
        <div>
          <label className="rxx">
            <SlNote />
          </label>
        </div>
        <div>
          <p className="imgparar">
            Custom <br /> content blocks
          </p>
        </div>
      </div>

      <div>
        <Carousel autoPlay showIndicators={false } showThumbs={false} className="">
          <div>
            <img
              style={{ height: "800px" }}
              src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-blog-post-layout-04.webp"
            />
          </div>
          <div>
            <img
              style={{ height: "800px" }}
              src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-blog-post-layout-01.webp"
            />
          </div>
          <div>
            <img
              style={{ height: "800px" }}
              src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-blog-post-layout-03.webp"
            />
          </div>
        </Carousel>
      </div>

      <div className="d-flex">
        <div>
          <h6 className="litopower">
            FRAMER{" "}
            <label style={{ color: "#f287b4" }}> MOTION FOR ANIMATION </label>
          </h6>
          <h1 className="perfect">
            Production ready
            <br></br> animation library<br></br> for react.
          </h1>

          <h6 style={{ width: "370px", marginTop: "60px" }} className=" Choose">
            {" "}
            <label style={{ marginBottom: "15px", fontSize: "17px" }}>
              {" "}
              Framer Motion is a simple powerful, an open
            </label>
            <br />
            <label style={{ marginBottom: "15px", fontSize: "17px" }}>
              {" "}
              source, production-ready library for React that's
            </label>
            <br />{" "}
            <label style={{ marginBottom: "15px", fontSize: "17px" }}>
              {" "}
              designed for all with developers with amazing
            </label>
            <br />
            <label style={{ marginBottom: "15px", fontSize: "17px" }}>
              animations and interactions.
            </label>
          </h6>

          <button style={{ marginTop: "20px" }} className="exol">
            {" "}
            DISCOVER MORE
          </button>
        </div>
        <div style={{ overflow: "hidden" }}>
          <img
            style={{
              width: "1062px",
              marginTop: "50px",
              height: "670px",
              marginLeft: "130px",
              overflow: "none",
            }}
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
      <div className="d-flex">
        <button style={{ background: "none", border: "none" }}>
          <img
            className="hovimggg"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-react-landing-page-icon-05.webp"
          />
          <h6 className="Startupp">
            Bootstrap 5<br />
            Framework{" "}
          </h6>
        </button>
        <button style={{ background: "none", border: "none" }}>
          <img
            className="hovimgggg"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-react-landing-page-icon-06.webp"
          />
          <h6 className="Startuppp">
            Atropos
            <br />
            JavaScript{" "}
          </h6>
        </button>
        <button style={{ background: "none", border: "none" }}>
          <img
            className="hovimgggg"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-icon-03.webp"
          />
          <h6 className="Startuppp">
            Google Web
            <br />
            Fonts{" "}
          </h6>
        </button>
        <button style={{ background: "none", border: "none" }}>
          <img
            className="hovimgggg"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-icon-04.webp"
          />
          <h6 className="Startuppp">
            Google Web
            <br />
            Fonts{" "}
          </h6>
        </button>

        <button style={{ background: "none", border: "none" }}>
          <img
            className="hovimgggg"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-react-landing-page-icon-07.webp"
          />
          <h6 className="Startuppp">
            Formik Form
            <br />
            Validation{" "}
          </h6>
        </button>
      </div>
      {/* style={{paddingBottom:"15rem"}} */}
      <div className="d-flex   ">
        <button style={{ background: "none", border: "none" }}>
          <img
            className="hovimgbot"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-react-landing-page-icon-08.webp"
          />
          <h6 className="Startupp">
            Parallax
            <br />
            Effect{" "}
          </h6>
        </button>
        <button style={{ background: "none", border: "none" }}>
          <img
            className="hovimgbott"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-icon-07.webp"
          />
          <h6 className="Startuppp">
            Isotope
            <br />
            Filtering{" "}
          </h6>
        </button>
        <button style={{ background: "none", border: "none" }}>
          <img
            className="hovimgbottt"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-icon-08.webp"
          />
          <h6 className="Startuppp">
            Swiper
            <br />
            Touch Slider
          </h6>
        </button>
        <button style={{ background: "none", border: "none" }}>
          <img
            className="hovimgbottt"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-react-landing-page-icon-10.webp"
          />
          <h6 className="Startuppp">
            Framer
            <br />
            Motion{" "}
          </h6>
        </button>

        <button style={{ background: "none", border: "none" }}>
          <img
            className="hovimgbotttt"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-icon-10.webp"
          />
          <h6 className="Startuppp">
            Magnific
            <br />
            Popup{" "}
          </h6>
        </button>
      </div>
      <div className="d-flex">
        <hr>
        <img
          style={{ marginTop: "100px", marginBottom: "100px" }}
          className="oh"
          src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-img-04.webp"
        />
        </hr >
      </div>
      <h6 className="litopararblog">
        {" "}
        BLOGGING <label style={{ color: "#f287b4" }}> EXPERIENCE</label>
      </h6>
      <h1 className="lighter">
        Perfect choice for
        <br /> blog and news
      </h1>
      <img
        style={{ width: "1349px", marginTop: "120px" }}
        src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-blog-01.webp"
      />

      <div>
        <div>
          <h1 className="CREATE ">
            CREATE STUNNING{" "}
            <label style={{ color: "black", textDecoration: "underline" }}>
              BLOG TODAY!
            </label>
          </h1>
          <Carousel autoPlay showIndicators={false } showThumbs={false} 
            style={{ marginTop: "70px", background: "#f5f7fb" }}
            className=""
          >
            <div>
              <img
                style={{ height: "700px" }}
                src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-blog-post-layout-01.webp"
              />
            </div>
            <div>
              <img
                style={{ height: "700px" }}
                src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-blog-post-layout-02.webp"
              />
            </div>
            <div>
              <img
                style={{ height: "700px" }}
                src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-blog-post-layout-05.webp"
              />
            </div>
          </Carousel>
        </div>
        {/* <h1 className='ecommerce'> ecommerce</h1> */}
      </div>
      <div
        style={{ fontSize: "210px", marginLeft: "100px", fontWeight: "bold" }}
      >
        ecommerce
      </div>
      <div className="d-flex">
        <div>
          <h6 className="litopower">
            ECOMMERCE <label style={{ color: "#f287b4" }}> READY </label>
          </h6>
          <h1 style={{ width: "300px" }} className="perfect">
            Compatible for
            <br></br> any eCommerce<br></br> platform
          </h1>

          <h6 style={{ width: "300px" }} className=" Choossen">
            {" "}
            <label style={{ marginBottom: "10px" }}>
              {" "}
              Present your products by grabbing
            </label>
            <br />
            <label style={{ marginBottom: "10px" }}>
              {" "}
              public attention boost reve with Litho.
            </label>
            <br />{" "}
            <label style={{ marginBottom: "10px" }}>
              Kick start your eCommerce site using
            </label>
            <br />
            modern looking eCommerce designs.
          </h6>

          <button className="exoll"> DISCOVER DEMO</button>
        </div>
        <div style={{ overflow: "hidden" }}>
          <img
            style={{
              width: "1159px",
              marginTop: "120px",
              height: "548px",
              marginLeft: "80px",
            }}
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-img-05.webp"
          />
        </div>
      </div>

      <div className="d-flex">
        <div>
          <img
            className="cart"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-img-06.webp"
          />
          <h6 style={{ marginLeft: "140px", marginTop: "20px" }}>
            Appealing <br></br> hover style
          </h6>
        </div>
        <div>
          <img
            className="cart2"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-img-07.webp"
          />
          <h6 style={{ marginLeft: "190px", marginTop: "20px" }}>
            Detailed
            <br /> filtering
          </h6>
        </div>
        <div>
          <img
            className="cart3"
            src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-img-08.webp"
          />
          <h6 style={{ marginLeft: "190px", marginTop: "20px" }}>
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
            style={{
              marginLeft: "190px",
              marginTop: "20px",
              marginBottom: "140px",
            }}
          >
            {" "}
            Attractive <br />
            gallery
          </h6>
        </div>
      </div>

      <div style={{ background: "#232428" }} className="d-flex">
        <div>
          <img
            style={{ height: "690px", background: "black" }}
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

          <h6 className=" Choosse">
            {" "}
            <label style={{ marginBottom: "15px" }}>
              {" "}
              Present your products online by grabbing
            </label>
            <br />{" "}
            <label style={{ marginBottom: "15px" }}>
              {" "}
              public attention and boost revenue with Litho.
            </label>
            <br />
            <label style={{ marginBottom: "15px" }}>
              Kick start your eCommerce site using
            </label>
            <br />
            <label style={{ marginBottom: "15px" }}>
              modern looking eCommerce designs.
            </label>
            <br />
            <label style={{ marginBottom: "15px" }}>efficient way.</label>
          </h6>

          <button className="exolll"> DISCOVER DEMO</button>
        </div>
      </div>

      <div className="d-flex"></div>
      <div>
        <div style={{ background: "#f7f7fb" }} className="d-flex">
          <div>
            <h6 className="litoparfor">
              FORMIK FOR{" "}
              <label style={{ color: "#f287b4" }}> FORM VALIDATION </label>
            </h6>
            <h1 className="perfect">
              Formik is third party
              <br></br> react form library.
            </h1>

            <h6 className=" Chooseen">
              {" "}
              <label style={{ marginBottom: "15px" }}>
                {" "}
                Formik is the world's most popular open source form
              </label>
              <br />{" "}
              <label style={{ marginBottom: "15px" }}>
                library for React. It comes with battle-tested solutions{" "}
              </label>
              <br />{" "}
              <label style={{ marginBottom: "15px" }}>
                input validation, formatting, masking, arrays, and error
              </label>
              <br />
              handling.
            </h6>

            <button className="exol" style={{ marginBottom: "150px" }}>
              {" "}
              DISCOVER MORE
            </button>
          </div>

          <div>
            <img
              style={{ width: "800px", marginTop: "150px", marginLeft: "50px" }}
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
        <div className="d-flex">
          <div
            style={{
              marginLeft: "100px",
              border: "none",
              marginBottom: "20px",
              marginTop: "60px",
            }}
            className="card homver"
          >
            <label
              style={{
                marginLeft: "70px",
                marginRight: "70px",
                marginTop: "40px",
                fontSize: "25px",
                marginBottom: "20px",
                color: "#b9beca",
              }}
            >
              <MdDashboard />{" "}
            </label>

            <h6
              style={{
                marginLeft: "40px",
                marginRight: "20px",
                fontSize: "16px",
                marginBottom: "40px",
              }}
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
                marginLeft: "70px",
                marginRight: "70px",
                marginTop: "40px",
                fontSize: "25px",
                marginBottom: "20px",
                color: "#b9beca",
              }}
            >
              <HiOutlineBellAlert />{" "}
            </label>

            <h6
              style={{
                marginLeft: "40px",
                marginRight: "20px",
                fontSize: "16px",
                marginBottom: "40px",
              }}
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
              style={{
                marginLeft: "70px",
                marginRight: "70px",
                marginTop: "40px",
                fontSize: "25px",
                marginBottom: "20px",
                color: "#b9beca",
              }}
            >
              <GiPlayButton />{" "}
            </label>

            <h6
              style={{
                marginLeft: "50px",
                marginRight: "20px",
                fontSize: "16px",
                marginBottom: "40px",
              }}
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
              style={{
                marginLeft: "70px",
                marginRight: "70px",
                marginTop: "40px",
                fontSize: "25px",
                marginBottom: "20px",
                color: "#b9beca",
              }}
            >
              <BiMessageAlt />{" "}
            </label>

            <h6
              style={{
                marginLeft: "40px",
                marginRight: "20px",
                fontSize: "16px",
                marginBottom: "40px",
              }}
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
              style={{
                marginLeft: "70px",
                marginRight: "70px",
                marginTop: "40px",
                fontSize: "25px",
                marginBottom: "20px",
                color: "#b9beca",
              }}
            >
              <BsFillArrowRightCircleFill />{" "}
            </label>

            <h6
              style={{
                marginLeft: "40px",
                marginRight: "20px",
                fontSize: "16px",
                marginBottom: "40px",
              }}
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
              style={{
                marginLeft: "70px",
                marginRight: "70px",
                marginTop: "40px",
                fontSize: "25px",
                marginBottom: "20px",
                color: "#b9beca",
              }}
            >
              <CgCarousel />{" "}
            </label>

            <h6
              style={{
                marginLeft: "50px",
                marginRight: "20px",
                fontSize: "16px",
                marginBottom: "40px",
              }}
            >
              Carousel
            </h6>
          </div>
        </div>
        <div className="d-flex">
          <div
            style={{
              marginLeft: "100px",
              border: "none",
              marginBottom: "100px",
            }}
            className="card homver "
          >
            <label
              style={{
                marginLeft: "70px",
                marginRight: "70px",
                marginTop: "40px",
                fontSize: "25px",
                marginBottom: "20px",
                color: "#b9beca",
              }}
            >
              <CiClock2 />{" "}
            </label>

            <h6
              style={{
                marginLeft: "40px",
                marginRight: "20px",
                fontSize: "16px",
                marginBottom: "40px",
              }}
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
            className="card homver "
          >
            <label
              style={{
                marginLeft: "70px",
                marginRight: "70px",
                marginTop: "40px",
                fontSize: "25px",
                marginBottom: "20px",
                color: "#b9beca",
              }}
            >
              <RiAccountCircleFill />{" "}
            </label>

            <h6
              style={{
                marginLeft: "60px",
                marginRight: "20px",
                fontSize: "15px",
                marginBottom: "40px",
              }}
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
                marginLeft: "70px",
                marginRight: "70px",
                marginTop: "40px",
                fontSize: "25px",
                marginBottom: "20px",
                color: "#b9beca",
              }}
            >
              <GiPlayButton />{" "}
            </label>

            <h6
              style={{
                marginLeft: "40px",
                marginRight: "20px",
                fontSize: "16px",
                marginBottom: "40px",
              }}
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
                marginLeft: "70px",
                marginRight: "70px",
                marginTop: "40px",
                fontSize: "25px",
                marginBottom: "20px",
                color: "#b9beca",
              }}
            >
              <BiMessageAlt />{" "}
            </label>

            <h6
              style={{
                marginLeft: "40px",
                marginRight: "20px",
                fontSize: "16px",
                marginBottom: "40px",
              }}
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
                marginLeft: "70px",
                marginRight: "70px",
                marginTop: "40px",
                fontSize: "25px",
                marginBottom: "20px",
                color: "#b9beca",
              }}
            >
              <BsFillArrowRightCircleFill />{" "}
            </label>

            <h6
              style={{
                marginLeft: "40px",
                marginRight: "20px",
                fontSize: "16px",
                marginBottom: "40px",
              }}
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
                marginLeft: "70px",
                marginRight: "70px",
                marginTop: "40px",
                fontSize: "25px",
                marginBottom: "20px",
                color: "#b9beca",
              }}
            >
              <AiOutlineQuestionCircle />{" "}
            </label>

            <h6
              style={{
                marginLeft: "50px",
                marginRight: "20px",
                fontSize: "16px",
                marginBottom: "40px",
              }}
            >
              Carousel
            </h6>
          </div>
        </div>
      </div>

      <div>
        {/* <Carousel style={{marginTop:"70px",background:"#f5f7fb"}} className='' >
                <div >
                    <img style={{height:"1000px"}}   src="https://lithoreact.themezaa.com/assets/img/webp/litho-templates-library-02.webp" />
                    
                </div>
                <div>
                    <img style={{height:"700px"}} src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-blog-post-layout-02.webp" />
                   
                </div>
                <div>
                    <img style={{height:"700px"}} src="https://lithoreact.themezaa.com/assets/img/webp/litho-demo-blog-post-layout-05.webp" />
               
                </div>
            </Carousel> */}
      </div>
      <div>
        <h1 className="Trusted">
          <label style={{ fontWeight: "bold" }}> 45,000 </label>+ Trusted
          customers
        </h1>
        {/* <img style={{}} src='https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-img-13.webp' /> */}

        <div className="d-flex">
          {/* <div style={{ backgroundImage:`url(${'https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-img-13.webp'})`,width:"100px"}} > </div>  */}
          <div className="bannercard">
            <img
              style={{}}
              src="https://lithoreact.themezaa.com/assets/img/webp/litho-landing-page-img-13.webp"
            />
            <div className="bannertext">
              <h1 style={{ width: "400px" }} className="perfect">
                Thousands of
                <br></br>happy customers
              </h1>

              <h6
                style={{
                  fontSize: "25px",
                  color: "#828282",
                  marginBottom: "10px",
                }}
                className=" Chooseen"
              >
                {" "}
                Trusted and experienced
              </h6>

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
              <div className="d-flex">
                <button className="bsfi">
                  {" "}
                  <BsFillArrowLeftCircleFill   />{" "}
                </button>

                <button className="bsfii">
                  {" "}
                  <BsFillArrowRightCircleFill  onClick={() => setshow(!show)} />
                </button>
              </div>
            </div>
          </div>
          {show ? (
          <div className="d-flex">
            <div
              style={{
                marginTop: "60px",
                height: "300px",
                marginLeft: "180px",
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
            ) : null}
          
        </div>
      </div>

      <div style={{ background: "black" }} className="d-flex">
        <div className="line-icon-Business-Man">
          {/* <img src={Business}/>  */}
          <RiAccountBoxLine
            style={{
              marginLeft: "240px",
              color: "white",
              marginTop: "150px",
              fontSize: "60px",
            }}
          />
          <h5 style={{ marginLeft: "180px", color: "white" }}>
            {" "}
            How can we help you?
          </h5>
          <h6
            style={{
              marginLeft: "210px",
              color: "#828282",
              marginBottom: "150px",
              textDecoration: "underline",
            }}
          >
            GET SUPPORT NOW
          </h6>
        </div>
        <div>
          <MdOutlineSwitchAccount
            style={{
              marginLeft: "240px",
              color: "white",
              marginTop: "150px",
              fontSize: "60px",
            }}
          />
          <h4 style={{ marginLeft: "150px", color: "white" }}>
            {" "}
            Detailed documentation
          </h4>
          <h6
            style={{
              marginLeft: "170px",
              color: "#828282",
              marginBottom: "150px",
              textDecoration: "underline",
            }}
          >
            ONLINE DOCUMENTATION
          </h6>
        </div>
        <div>
          <FaMandalorian
            style={{
              marginLeft: "240px",
              color: "white",
              marginTop: "150px",
              fontSize: "60px",
            }}
          />
          <h4 style={{ marginLeft: "150px", color: "white" }}>
            Looking for customization?
          </h4>
          <h6
            style={{
              marginLeft: "170px",
              color: "#828282",
              marginBottom: "150px",
              textDecoration: "underline",
            }}
          >
            ODESCRIBE YOUR PROJECT
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Evote;
