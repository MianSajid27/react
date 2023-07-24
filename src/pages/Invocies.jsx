import React from 'react'
import Table from 'react-bootstrap/Table';
import { BsPlus } from "react-icons/bs";
import { BsSearch } from "react-icons/bs"; 

import { AiOutlineArrowDown } from "react-icons/ai"; 
const Invocies = () => {
  return (
    <div className='bg'>
        <div >
    
      
    <Table >
    
         
         
    <div className='card7'> 
            <tr className="Product">
            <span  className='pro'> <th >Invoice</th>  </span> 
            <span  className='p'style={{padding:"14px"}}  >  <th>  < BsSearch/><input className='ho'  placeholder= '  Type your quary and enter press'/></th></span>
            <span >  <th> <button className='ain'>    <span className='plus' ><BsPlus size={"30px"} /></span>Add Invocie</button></th></span>
            <span>  <th> <button className='filterr'>Filter</button></th></span>
            <span>  <th> <button className='arrr'> <AiOutlineArrowDown/> </button></th></span>
            </tr>
            </div>
         
          
          
        </Table>
     
         
      </div>


      <div style={{marginLeft:"10px",marginRight:"10px"}} className='card8'>
<Table>


<thead >
       
  
       <tr className="Th2">
         <th >Customer Name</th>
         <th>Date</th>
         <th> Invoice No</th>
         <th>	Payment Status</th>
         <th>Payment Method</th>
         <th>Total Amount</th>
         <th>Total Paid</th>
         <th>Shipping Status</th>
         <th>Order source</th>
         <th>Total Item</th>
         <th>Status</th>
         <th> <span style={{marginLeft:""}}>Actions </span></th>
       </tr>
     </thead>
     <tbody>
<tr>

  <td>rehan nadeem</td>
  <td> 	2023-03-29 13:51:33</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>

     </tbody>
</Table>

      </div>
      
    </div>
  )
}

export default Invocies
