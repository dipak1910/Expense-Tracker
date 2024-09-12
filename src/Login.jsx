import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "./db";
import { Link, useNavigate } from "react-router-dom";
import logo from "./images/logo.png"

let Login = () => {

    let [email,setEmail] = useState("")
    let [pwd,setPwd] = useState("")

    let navigate=useNavigate()

    let login = async () => {
        let usercredentials  = await signInWithEmailAndPassword (auth,email,pwd)
        navigate("/Home")
    } 
    return (
        <div className="container-fluid">

            <div className="row d-flex justify-content-center align-items-center" style={{height:'100vh'}}>


                <div className="col-lg-4 col-xlg-4 col-md-12">
                    <div className="card">
                        <div className="card-body">
                        <div className="app-brand justify-content-center">                 
                      <span className="app-brand-logo demo ">
                        <img
                          src={logo}
                          alt=""
                          srcset=""
                          className="img-fluid "
                        />
                      </span>
                    
                  </div>
                  <h4 className="mb-2 mt-5">Welcome to Expense Tracker!👋</h4>
                  
                            <form className="form-horizontal form-material">
                                {/* <div className="form-group mb-4">
                                    <label className="col-md-12 p-0">Full Name</label>
                                    <div className="col-md-12 border-bottom p-0">
                                        <input type="text" placeholder="Johnathan Doe" className="form-control p-0 border-0" /> </div>
                                </div> */}
                                <div className="form-group mb-4">
                                    <label htmlFor="example-email" className="col-md-12 p-0">Email</label>
                                    <div className="col-md-12 border-bottom p-0">
                                        <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter Your Email" className="form-control p-0 border-0" name="example-email" id="example-email" />
                                    </div>
                                </div>
                                <div className="form-group mb-4">
                                    <label className="col-md-12 p-0">Password</label>
                                    <div className="col-md-12 border-bottom p-0">
                                        <input onChange={(e)=>setPwd(e.target.value)} type="password" placeholder="Enter Your Password" className="form-control p-0 border-0" />
                                    </div>
                                </div>
                                
                                
                                <div className="form-group mb-4" >
                                    <div className="col-sm-12">
                                        <button type="button" className="btn btn-success" onClick={login}>Login</button>
                                    </div>
                                </div>

                                <div className="form-group mb-4">
                                    <p>Not have an account? <Link to="/Register">Register</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default Login