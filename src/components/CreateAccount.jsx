import React from "react";
import "../../src/components/CreateAccount.css";


const CreateAccount = () => {
    return (
        <>
            <div className="container">
                <div className="loginpage">
                    <div className="login">
                        <h1>Register</h1>
                        <p>Please fill in the fields below: </p>
                        </div>
                        <div>
                            <input type="text" placeholder="First name" style={{width:"400px",height:"40px"}}/>
                        </div>
                        <div>
                        <input type="text" placeholder="Last name" style={{width:"400px",height:"40px"}}/>
                        </div>
                        <div>
                            <input type="text" placeholder="Email" style={{width:"400px",height:"40px"}}/>
                        </div>
                        <div>
                        <input type="text" placeholder="Password" style={{width:"400px",height:"40px"}}/>
                        </div>
                <div><button style={{width:"400px",height:"40px" , backgroundColor: "rgb(56, 182, 227)", color:"white" , borderRadius:"18px" ,}}>CREATE ACCOUNT</button></div>
                <div>
                    <span>Already have an account? </span>
                    <span><a href="">Login</a></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateAccount;