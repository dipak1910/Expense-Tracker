import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from './Card';
import Footer from './Footer';
import Header from './Header';
import Pagetitle from './Pagetitle';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Sidebar from './Sidebar';
import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from './db';
import { renderHook } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';


let ViewIncome = () => {
    let [data, setData] = useState([])
    let navigate = useNavigate();
    
    useEffect(() => {
        getData()
    }, [])



    

    let deleteIncome = async (id) => {
        let docref = doc(db, 'income', id)
        await deleteDoc(docref)
        toast.error('Data Deleted',
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
    };

    let getData = async ()=>{
        let collectionref = collection(db,"income")
        let q = query(collectionref,where("userid","==", auth.currentUser.uid))
        let snapShot = await getDocs(q)
        snapShot.docs.forEach((doc)=>{
            
            // data.push(doc.data())
            setData((data)=>[...data,{...doc.data(),docid:doc.id}])
        })
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
                        <div className="col-md-12 col-lg-12 col-sm-12">
                            <div className="white-box">
                                <div className="d-md-flex mb-3">
                                    <h3 className="box-title mb-0">Income</h3>
                                    <div className="col-md-3 col-sm-4 col-xs-6 ms-auto">

                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table no-wrap">
                                        <thead>
                                            <tr>
                                                <th className="border-top-0">#Id</th>
                                                <th className="border-top-0">Amount</th>
                                                <th className="border-top-0">Source</th>
                                                <th className="border-top-0">Date</th>
                                                <th className="border-top-0">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data && data.map((income) => (
                                                <tr>
                                                    <td>{income.no}</td>
                                                    <td className="txt-oflo">{income.amt}</td>
                                                    <td>{income.src}</td>
                                                    <td className="txt-oflo">{income.dt}</td>
                                                    <td><span className="text-success"><i onClick={()=>{navigate("/editincome/"+income.docid)}} class="fa-solid fa-pen-to-square"></i> <i onClick={() => { deleteIncome(income.id) }} class="fa-solid fa-trash"></i></span></td>
                                                </tr>
                                            ))}

                                            {/* <tr>
                                                <td>2</td>
                                                <td className="txt-oflo">300</td>
                                                <td>Work Payment</td>
                                                <td className="txt-oflo">April 19, 2021</td>
                                                <td><span className="text-success"><i class="fa-solid fa-pen-to-square" ></i> <i class="fa-solid fa-trash"></i></span></td>
                                            </tr> */}
                                            {/* <tr>
                                                <td>3</td>
                                                <td className="txt-oflo">1000</td>
                                                <td>Trading</td>
                                                <td className="txt-oflo">April 19, 2021</td>
                                                <td><span className="text-success"><i class="fa-solid fa-pen-to-square"></i> <i class="fa-solid fa-trash"></i></span></td>
                                            </tr> */}


                                        </tbody>
                                    </table>
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
export default ViewIncome