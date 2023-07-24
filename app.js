import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import About from "./pages/About.jsx";

import Analytics from "./pages/Analytics.jsx";
import Component from "./pages/Component.jsx";
import Product from "./pages/Product.jsx";
import Productlist from "./pages/Productlist.jsx";
import Header from "./pages/Header";
import Sidebar from "./coponent/Sidebar";

const app = () => {
  return (
    <Router>
      <Header>
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/Analytics" element={<Analytics />}></Route>
          <Route exact path="/product" element={<Product />}></Route>
          <Route exact path="/productlist" element={<Productlist />}></Route>
          <Route exact path="/component" element={<Component />}></Route>

        </Routes>
      </Header>
    </Router>
  );
};

export default app;



// const data =[

//   {username:"Manager", name:"Sajid", email:"miansajidgmail.com", phoneno:"03164722208", action:""},
//   {username:"Superviser", name:"Sager", email:"miansagergmail.com", phoneno:"03164722208", action:""},
//   {username:"Cashier", name:"Asad", email:"mianasadgmail.com", phoneno:"03164722208", action:""},
//   {username:"Employe", name:"Hasnain", email:"mianhasnaingmail.com", phoneno:"03164722208", action:""},

// ]

// const columns =[

//   {tittle:"username", field:"username"},
//   {tittle:"name", field:"name"},
//   {tittle:"email", field:"email"},
//   {tittle:"phoneno", field:"phoneno"},
//   {tittle:"action", field:"action"},
// ]

// data={data}
// colums={columns}
// < Table/>


// import React from 'react';
// import "./App.css";
// import Table from "./Table";

// const App = () => {
//   return(
    
//     <div >
  
    
//     <Table/>
// </div> 
   


//   );

// };

// export default App;