// const white ="white";
// const [bg, setBg] = useState(white);


// const bgchange = () => {
//     let newBg  = 'yellow';
//      setBg(newBg);

//     // console.log("clicked")
// };

// const bgback = () => {
//     setBg(white);

// };
// onClick={bgchange} onDoubleClick ={bgback} style={{backgroundColor : bg}}

import React  from "react"

const practice = () => {
return (


      <nav class="sidebar card py-2 mb-4">
<ul class="nav flex-column" id="nav_accordion"> 


<li class="nav-item">
<a class="nav-link" href="#"> Link name </a>
</li>
<li class="nav-item has-submenu">
<a class="nav-link" href="#"> Submenu links <i class="bi small bi-caret-down-fill"></i> </a>
<ul class="submenu collapse">
    <li><a class="nav-link" href="#">Submenu item 1 </a></li>
    <li><a class="nav-link" href="#">Submenu item 2 </a></li>
    <li><a class="nav-link" href="#">Submenu item 3 </a> </li>
</ul>
</li>
<li class="nav-item">
<a class="nav-link" href="#"> More menus <i class="bi small bi-caret-down-fill"></i> </a>
<ul class="submenu collapse">
    <li><a class="nav-link" href="#">Submenu item 4 </a></li>
    <li><a class="nav-link" href="#">Submenu item 5 </a></li>
    <li><a class="nav-link" href="#">Submenu item 6 </a></li>
    <li><a class="nav-link" href="#">Submenu item 7 </a></li>
</ul>
</li>
<li class="nav-item ">
<a class="nav-link" href="#"> Another submenus </a>
<ul class="submenu collapse">
    <li><a class="nav-link" href="#">Submenu item 8 </a></li>
    <li><a class="nav-link" href="#">Submenu item 9 </a></li>
    <li><a class="nav-link" href="#">Submenu item 10 </a></li>
    <li><a class="nav-link" href="#">Submenu item 11 </a></li>
</ul>
</li>
<li class="nav-item">
<a class="nav-link" href="#"> Demo link </a>
</li>
<li class="nav-item">
<a class="nav-link" href="#"> Menu item </a>
</li>
<li class="nav-item">
<a class="nav-link" href="#"> Something </a>
</li>
<li class="nav-item">
<a class="nav-link" href="#"> Other link </a>
</li>
 </ul>
</nav> 

);

};

export default practice;



<Router>
//    <Header>
//     <Routes>
//        <Route exact path="/" element={<Dashboard />}></Route>
//        <Route exact path="/Dashboard" element={<Dashboard />}></Route>
//        <Route exact path="/About" element={<About />}></Route>
//        <Route exact path="/Analytics" element={<Analytics />}></Route>
//        <Route exact path="/Product" element={<Product />}></Route>
//       <Route exact path="/Productlist" element={<Productlist />}></Route>
//        <Route exact path="/Component" element={<Component />}></Route>
//        <Route exact path="/User" element={<User />}></Route>
//        <Route exact path="/Detuser" element={<Detuser />}></Route>
//      </Routes>
//    </Header>
// </Router>
