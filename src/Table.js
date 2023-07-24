import React from 'react';
import Table from 'react-bootstrap/Table';
import { FiEdit } from "react-icons/fi";  
import { AiOutlineEyeInvisible } from "react-icons/ai";  
import "./App.css";
const table = () => {
return (
<div>
<div className="tab2 card">

<Table >

      <thead >
     

        <tr className="th1">
          <th>Username</th>
          <th>Name</th>
          <th> Email</th>
          <th>Phone no</th>
          <th>Action</th>

        </tr>
      </thead>
     
      <tbody>
        <tr>
          <td>Manager</td>
          <td>Sajid</td>
          <td>Miansager@gmail.com</td>
          <td>+92 03164722208</td>
          <td><FiEdit/> <AiOutlineEyeInvisible/></td>
        </tr>
        <tr>
          <td>Superviser</td>
          <td>Asad</td>
          <td>Mianasad@gmail.com</td>
          <td>+92 0320964722208</td>
          <td><FiEdit/></td>
        </tr>
        <tr>
          <td>Cashier</td>
          <td >hasnain</td>
          <td>Mianhasnain@gmail.com</td>
          <td>+92 03104356789</td>
          <td><FiEdit/></td>
        </tr>
        <tr>
          <td>Employes</td>
          <td >Arslan</td>
          <td>Mianarslan@gmail.com</td>
          <td>+92 03019763280</td>
          <td><FiEdit/></td>
        </tr>
       
       
      </tbody>
      
    </Table>
    </div>
    </div>



);


};
export default table;