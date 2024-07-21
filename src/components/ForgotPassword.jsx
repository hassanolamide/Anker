import React from "react";
import "../../src/components/ForgotPassword.css";


const ForgotPassword = () => {
    return (
        <>
            <div className="container">
                <div className="loginpage">
                    <div className="login">
                        <h1>Recover Password</h1>
                        <p>Please enter your e-mail and password </p>
                        </div> 
                        <div>
                            <input type="text" placeholder="Email" style={{width:"400px",height:"40px"}}/>
                        </div>
                <div><button style={{width:"400px",height:"40px" , backgroundColor: "rgb(56, 182, 227)", color:"white" , borderRadius:"18px"}}>Login</button></div>
                <div>
                    <span>Remember your password </span>
                    <span><a href="">Back to Login</a></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword;