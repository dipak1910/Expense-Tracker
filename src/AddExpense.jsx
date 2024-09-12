import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from './Card';
import Footer from './Footer';
import Header from './Header';
import Pagetitle from './Pagetitle';
import Login from './Login';
import Register from './Register';
import Sidebar from './Sidebar';
import ViewExpense from './ViewExpense';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from './db';


let AddExpense = () => {

    let [no, setNo] = useState("")
    let [amt, setAmt] = useState("")
    let [src, setSrc] = useState("")
    let [dt, setDT] = useState("")

    let addexpense = async () => {
        // console.log(id,amt,src,dt)

        let colref = collection(db, "expense")

        await addDoc(colref, { "no": no, "amt": amt, "src": src, "dt": dt, "userid":auth.currentUser.uid })
        toast.success('Expense Saved', 
        {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }

    return (
        <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full" data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <Header />

            <Sidebar />

            <div className="page-wrapper">

                <Pagetitle />

                <div className="container-fluid">

                    <div className="row " style={{ height: '100vh' }}>


                        <div className="col-lg-8 col-xlg-8 col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <form className="form-horizontal form-material">

                                        <div className="form-group mb-4">
                                            <label htmlFor="" className="col-md-12 p-0">Expense ID</label>
                                            <div className="col-md-12 border-bottom p-0">
                                                <input onChange={(e) => setNo(e.target.value)} type="text" placeholder='Enter ID' className="form-control p-0 border-0" name="example-email" id="example-email" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-4">
                                            <label className="col-md-12 p-0">Amount</label>
                                            <div className="col-md-12 border-bottom p-0">
                                                <input onChange={(e) => setAmt(e.target.value)} type="number" placeholder='Enter Amount' className="form-control p-0 border-0" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-4">
                                            <label className="col-md-12 p-0">Source</label>
                                            <div className="col-md-12 border-bottom p-0">
                                                <input onChange={(e) => setSrc(e.target.value)} type="text" placeholder='Enter Source' className="form-control p-0 border-0" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-4">
                                            <label className="col-md-12 p-0">Date</label>
                                            <div className="col-md-12 border-bottom p-0">
                                                <input onChange={(e) => setDT(e.target.value)} type="text" placeholder='dd/mm/yyyy' className="form-control p-0 border-0" />
                                            </div>
                                        </div>

                                        <div className="form-group mb-4">
                                            <div className="col-sm-12">
                                                <button type='button' className="btn btn-success" onClick={addexpense}>Add Expense</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default AddExpense