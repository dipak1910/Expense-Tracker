import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "./db";
import { useNavigate } from "react-router-dom";
import logo from "./images/logo.png"
let Register = () => {

    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [pwd, setPwd] = useState("")

    let navigate = useNavigate()

    let register = async () => {
        let usercredentials = await createUserWithEmailAndPassword(auth, email, pwd)


        navigate("/")
    }
    return (
        <div className="container-fluid">

            <div className="row d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
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
                                <div className="form-group mb-4">
                                    <label className="col-md-12 p-0">Full Name</label>
                                    <div className="col-md-12 border-bottom p-0">
                                        <input type="text" placeholder="Enter Your Full Name" className="form-control p-0 border-0" /> </div>
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="example-email" className="col-md-12 p-0">Email</label>
                                    <div className="col-md-12 border-bottom p-0">
                                        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Your Email" className="form-control p-0 border-0" name="example-email" id="example-email" />
                                    </div>
                                </div>
                                <div className="form-group mb-4">
                                    <label className="col-md-12 p-0">Password</label>
                                    <div className="col-md-12 border-bottom p-0">
                                        <input onChange={(e) => setPwd(e.target.value)} type="password" placeholder="Enter Your Password" className="form-control p-0 border-0" />
                                    </div>
                                </div>

                                <div className="form-group mb-4">
                                    <div className="col-sm-12">
                                        <button type="button" className="btn btn-success" onClick={register} >Register</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default Register