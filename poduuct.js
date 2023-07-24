import React from 'react';
import "./App.css";
const Login = () => {

    return (
        <div >
            <h1 className="div3">
                LOGIN FORM

            </h1>
            <div className="div4">

            
            <from action="" >
                <div className="div1">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" />
                </div>
                <div className="div2">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" placeholder="Password" />
                </div>

                <button className="d1" type="submit">
                    Submit
                </button>
               
            </from>
            </div>
        </div>

    );


};
export default Login;