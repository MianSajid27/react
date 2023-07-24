import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import User from "./pages/User.jsx";
import Customer from "./pages/Customer.jsx";
import Component from "./pages/Component.jsx";
import Catalog from "./pages/Catalog.jsx";
import Channel from "./pages/Channel.jsx";
import Header from "./pages/Header";
import Mobile from "./pages/Mobile.jsx";
import Detuser from "./pages/Detuser";
import Paylink from "./pages/Paylink";
import { RxDashboard } from "react-icons/rx";
import Roles from "./pages/Roles";
import Product from "./pages/Product.jsx";
import Variation from "./pages/Variation";
import Man from "./image/Man.svg";
import Brand from "./pages/Brand";
import Unit from "./pages/Unit";
import Categories from "./pages/Categories";
import Stock from "./pages/Stock";
import Sidebar from "./coponent/Sidebar";
import Sales from "./pages/Sales";
import Invocies from "./pages/Invocies";
import Credit from "./pages/Credit ";
import Marketing from "./pages/Marketing";
import Coupons from "./pages/Coupons";
import Abondoned from "./pages/Abondoned";
import Store from "./pages/Store";
import Import from "./pages/Import";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Nav from "react-bootstrap/Nav";
import { GiUsaFlag } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
import Create from "./pages/Create";
import Getuser from "./pages/Getuser";
import Rolescreate from "./pages/Rolescreate";
import EditRole from "./pages/EditRole";
import AddCategories from "./pages/AddCategories";
import Addcustomer from "./pages/Addcustomer";
import Editcustomer from "./pages/Editcustomer";
import Plugin from "./pages/Plugin";
import Plugins from "./pages/Plugins";
import Array from "./pages/Array";
import POS from "./pages/POS ";
import Payment from "./pages/Payment";
import Billing from "./pages/Billing";
import Prps from "./pages/Prps.jsx";
import Business from "./pages/Business";
import Location from "./pages/Location";
import Layout from "./pages/Layout";
import CreatLayout from "./pages/CreatLayout";
import Supplier from "./pages/Supplier";
import Purchase from "./pages/Purchase";
import Summary from "./pages/Summary"
import Salecategory from "./pages/Salecategory"
import Salling from "./pages/Salling" 
import Salesummary from "./pages/Salesummary";
import Saleemployee from "./pages/Saleemployee";
import Stocksale from "./pages/Stocksale";


const app = () => {
  return (
    <>


      <div>
        <Router>
          <Header>
            <Routes>
              <Route exact path="/" element={<Dashboard />}></Route>
              <Route exact path="/Dashboard" element={<Dashboard />}></Route>
              <Route exact path="/User" element={<User />}></Route>
              <Route exact path="/Roles" element={<Roles />}></Route>
              <Route exact path="/Product" element={<Product />}></Route>
              <Route exact path="/Customer" element={<Customer />}></Route>
              <Route exact path="/Component" element={<Component />}></Route>
              <Route exact path="/Catalog" element={<Catalog />}></Route>
              <Route exact path="/Channel" element={<Channel />}></Route>
              <Route exact path="/Mobile" element={<Mobile />}></Route>
              <Route exact path="/Detuser" element={<Detuser />}></Route>
              <Route exact path="/Paylink" element={<Paylink />}></Route>
              <Route exact path="/Variation" element={<Variation />}></Route>
              <Route exact path="/Brand" element={<Brand />}></Route>
              <Route exact path="/Unit" element={<Unit />}></Route>
              <Route exact path="/Categories" element={<Categories />}></Route>
              <Route exact path="/Stock" element={<Stock />}></Route>
              <Route exact path="/Sales" element={<Sales />}></Route>
              <Route exact path="/Invocies" element={<Invocies />}></Route>
              <Route exact path="/Credit" element={<Credit />}></Route>
              <Route exact path="/Marketing" element={<Marketing />}></Route>
              <Route exact path="/Coupons" element={<Coupons />}></Route>
              <Route exact path="/Abondoned" element={<Abondoned />}></Route>
              <Route exact path="/Store" element={<Store />}></Route>
              <Route exact path="/Import" element={<Import />}></Route>
              <Route exact path="/Create" element={<Create />}></Route>
              <Route exact path="/Getuser" element={<Getuser />}></Route>
              <Route
                exact
                path="/Rolescreate"
                element={<Rolescreate />}
              ></Route>
              <Route exact path="/EditRole" element={<EditRole />}></Route>
              <Route
                exact
                path="/AddCategories"
                element={<AddCategories />}
              ></Route>
              <Route
                exact
                path="/Addcustomer"
                element={<Addcustomer />}
              ></Route>
              <Route
                exact
                path="/Editcustomer"
                element={<Editcustomer />}
              ></Route>
              <Route exact path="/Plugin" element={<Plugin />}></Route>
              <Route exact path="/Plugins" element={<Plugins />}></Route>
              <Route exact path="/POS" element={<POS />}></Route>
              <Route exact path="/Payment" element={<Payment />}></Route>
              <Route exact path="/Billing" element={<Billing />}></Route>
              <Route exact path="/Prps" element={<Prps />}></Route>
              <Route exact path="/Business" element={<Business />}></Route>
              <Route exact path="/Location" element={<Location />}></Route>
              <Route exact path="/Layout" element={<Layout />}></Route>
              <Route exact path="/Supplier" element={<Supplier/>}></Route>
              <Route exact path="/Purchase" element={<Purchase/>}></Route>
              <Route exact path="/Summary" element={<Summary/>}></Route>
              <Route exact path="/Salecategory" element={<Salecategory/>}></Route>
              <Route exact path="/Salling" element={<Salling/>}></Route>
              <Route exact path="/Salesummary" element={<Salesummary/>}></Route>
              <Route exact path="/Saleemployee" element={<Saleemployee/>}></Route>
              <Route exact path="/Stocksale" element={<Stocksale/>}></Route>
              <Route
                exact
                path="/CreatLayout"
                element={<CreatLayout />}
              ></Route>
            </Routes>
          </Header>
        </Router>
      </div>
    </>
  );
};

export default app;



// import React from 'react'
// import Evote from './Evote'
// import Website from './Website'
// const App = () => {
//   return (
//     <div>
//       {/* <Evote/> */}
//       <Website/>+
//     </div>
//   )
// }

// export default App;
