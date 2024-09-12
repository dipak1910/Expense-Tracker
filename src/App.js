import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Card from './Card';
import Footer from './Footer';
import Header from './Header';
import Pagetitle from './Pagetitle';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import ViewExpense from './ViewExpense';
import ViewIncome from './ViewIncome';
import AddIncome from './AddIncome';
import AddExpense from './AddExpense';
import { Link, Route, Routes } from 'react-router-dom';
import EditExpense from './EditExpense';
import EditIncome from './EditIncome';

function App() {
  return (
    <div className="App">

      {/* <EditExpense/> */}
      {/* <EditIncome/> */}

      {/* <Login />  */}

      {/* <Register /> */}

      {/* <Home /> */}



      {/* <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full" data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full"> */}



        {/* <Header /> */}

        {/* <Sidebar /> */}

        {/* <div className="page-wrapper"> */}

          {/* <Pagetitle />  */}

          {/* <Home /> */}

          {/* <Footer /> */}

        {/* </div> */}

      {/* </div> */}

      {/* <ViewExpense /> */}

      {/* <ViewIncome /> */}

      {/* <AddIncome /> */}

      {/* <AddExpense /> */}

     <Routes>
     <Route path='/' element={ <Login/>}/>
     <Route path='/Addincome' element={<AddIncome/>}/>
     <Route path='/Addexpense' element={<AddExpense/>}/>
     <Route path='/Viewincome' element={<ViewIncome/>}/>
     <Route path='/Viewexpense' element={<ViewExpense/>}/>
     <Route path='/Editexpense/:docid' element={<EditExpense/>} />
     <Route path='/Editincome/:docid' element={<EditIncome/>} />
     <Route path='/Home' element={<Home/>}/>
     <Route path='/Register' element={<Register />}/>

      </Routes>
  


    </div>


  );
}

export default App;
