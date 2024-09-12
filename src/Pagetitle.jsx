import React from "react";
let Pagetitle = () =>{
    return(
        <div className="page-breadcrumb  bg-white">
      <div className="row align-items-center">
        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
          <h4 className="page-title">Dashboard</h4>
        </div>
        <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
          <div className="d-md-flex">
            <ol className="breadcrumb ms-auto">
              <li><a href="#" className="fw-normal">Dashboard</a></li>
            </ol>
          
          </div>
        </div>
      </div>
   
    </div>
    )
}

export default Pagetitle