import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar';
import Footer from './Footer';
import Header from './Header';
import Pagetitle from './Pagetitle';
import { addDoc, collection, updateDoc } from 'firebase/firestore';
import { db } from './db';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { async } from '@firebase/util';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditIncome = () => {
    let [no, setNo] = useState("")
    let [amt, setAmt] = useState("")
    let [src, setSrc] = useState("")
    let [dt, setDt] = useState("")

    let params = useParams()
    console.log(params.docid)

    let updateIncome = async () => {

        const docRef = doc(db, "income", params.docid);
        await updateDoc(docRef, { "no": no, "amt": amt, "src": src, "dt": dt })
        toast.success('Income Updated',
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

    useEffect(() => {
        getSingleIncome()
    }, [])


    let getSingleIncome = async () => {
        const docRef = doc(db, "income", params.docid);
        const docSnap = await getDoc(docRef);

        console.log(docSnap.data())
        setNo(docSnap.data().no)
        setAmt(docSnap.data().amt)
        setSrc(docSnap.data().src)
        setDt(docSnap.data().dt)
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
                    <div className="row">
                        <div className="col-lg-8 col-xlg-12 col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <form className="form-horizontal form-material">
                                        <div className="form-group mb-4">
                                            <label htmlFor="example-email" className="col-md-12 p-0">Income ID</label>
                                            <div className="col-md-12 border-bottom p-0">
                                                <input onChange={(e) => setNo(e.target.value)
                                                } type="text" placeholder="1" className="form-control p-0 border-0" name="example-email" id="example-email" defaultValue={no} />
                                            </div>
                                        </div>
                                        <div className="form-group mb-4">
                                            <label className="col-md-12 p-0">Amount</label>
                                            <div className="col-md-12 border-bottom p-0">
                                                <input onChange={(e) => setAmt(e.target.value)} type="text" placeholder="300" className="form-control p-0 border-0" defaultValue={amt} />
                                            </div>
                                        </div>
                                        <div className="form-group mb-4">
                                            <label className="col-md-12 p-0">Source</label>
                                            <div className="col-md-12 border-bottom p-0">
                                                <input onChange={(e) => setSrc(e.target.value)} type="text" placeholder="Purchase Fruits" className="form-control p-0 border-0" defaultValue={src} />
                                            </div>
                                        </div>
                                        <div className="form-group mb-4">
                                            <label className="col-md-12 p-0">Date</label>
                                            <div className="col-md-12 border-bottom p-0">
                                                {/* <input type="date" onChange={(e)=>setDt(e.target.value)}  className="form-control p-0 border-0" /> */}
                                                <input onChange={(e) => setDt(e.target.value)} type="text" placeholder="dd/mm/yyyy" className="form-control p-0 border-0" defaultValue={dt} />
                                            </div>
                                        </div>

                                        <div className="form-group mb-4">
                                            <div className="col-sm-12">
                                                <button type='button' className="btn btn-success" onClick={updateIncome}>Update Income</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <Footer />


        </div>
    )
}
export default EditIncome