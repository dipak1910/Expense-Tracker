import React, { useEffect, useState } from 'react'
import Card from './Card';
import Footer from './Footer';
import Header from './Header';
import Pagetitle from './Pagetitle';
import Login from './Login';
import Register from './Register';
import Sidebar from './Sidebar';
import { collection, getDoc, getDocs } from 'firebase/firestore';
import { db } from './db';

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2';


import { useImmer } from "use-immer";

let Home = () => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: '',
        },
    },
};

const labels = ['', '', '', '', '', '', ''];

const [data, updateData] = useImmer({
    labels,
    datasets: [
        {
            label: 'Expense',
            data: [],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Income',
            data: [],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
})

  let [totalexpense,setTotalexpense] = useState(0)
  let[totalincome,setTotalincome] = useState(0) 
  let[totalsavings,setTotalsavings] = useState(0)

  let [incomepoints, setIncomepoints] = useState([])
  let [expensepoints, setExpensepoints] = useState([])

  useEffect( ()=>{
     calc()
  },[])

  async function calc(){
     await getExpenses()
     await getIncomes()
     await getSavings()

     updateData(draft => {
      draft.datasets[0].data = expensepoints
      draft.datasets[1].data = incomepoints
  });
}
  let getExpenses = async()=>{

    let collectionref = collection(db,"expense")
    let snapShot = await getDocs(collectionref)
    snapShot.docs.forEach((doc)=>{
      
      expensepoints.push(Number( doc.data().amt))
      setTotalexpense(totalexpense = totalexpense + Number(doc.data().amt))
    })
  }

    let getIncomes = async()=>{

      let collectionref = collection(db,"income")
      let snapShot = await getDocs(collectionref)
      snapShot.docs.forEach((doc)=>{
        
        incomepoints.push(Number( doc.data().amt))
        setTotalincome(totalincome = totalincome + Number(doc.data().amt))
      })
  
  }

  let getSavings = async()=>{

    // let collectionref = collection(db,"saving")
    // let snapShot = await getDocs(collectionref)
    // snapShot.docs.forEach((doc)=>{
    //   setTotalsavings(totalsavings = totalincome - totalexpense)
    // })

    setTotalsavings(totalincome-totalexpense)

}

  return (
    <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full" data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">



      <Header />

      <Sidebar />

      <div className="page-wrapper">

        <Pagetitle />

        <div className="container-fluid">
         
          <div className="row justify-content-center">
            <Card title="Total Expense" text={totalexpense}/>
            <Card title="Total Income" text={totalincome}/>
            <Card title="Total Saving" text={totalsavings} />

          </div>
          

          
          <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                            <div className="white-box">
                                <h3 className="box-title">EXPENSE V/S INCOME CURVE</h3>
                                {/* <div className="d-md-flex">
                                    <ul className="list-inline d-flex ms-auto">
                                        
                                       
                                    </ul>
                                </div> */}
                                <div style={{ height: 505 }}>
                                    <Line redraw={true} options={options} data={data && data} />
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



export default Home  