import React from 'react';
import "./App.css";
const Login = () => {

    return (
        <div className="div1" >
            
           
            <div className="div4">
            <from action="" >
            <h1 className="div3" >
                LOGIN FORM

            </h1>
            
                <div className="div2">
                <label htmlFor="name">  Name</label>
                <input type="name" class="from-control text" placeholder="NAME"/>
                </div>
                <div className="div2">
                    <label htmlFor="password">Password</label>
                    <input type="name" class="from-control text" placeholder="Password"/>
                </div>
                <div className="div2">
                    <label htmlFor="email">Email</label>
                    <input type="name" class="from-control text" placeholder="Email"/>
                </div>

                <div className="div2">
                    <label htmlFor="address">Address</label>
                    <input type="name" class="from-control text" placeholder="Address"/>
                </div>


                <button className="d1" type="submit">
                    Submit
                </button>
                <br/>
              
               
            </from>
            </div>
        </div>

    );


};
export default Login;