let Card = ({title,text})=>{
    return(
        <div className="col-lg-4 col-md-12">
          <div className="white-box analytics-info">
            <h3 className="box-title">{title}</h3>
            <ul className="list-inline two-part d-flex align-items-center mb-0">
              <li>
              <i style={{paddingLeft:10,fontSize:30} } class="fa-solid fa-chart-simple"></i>
                {/* <div id="sparklinedash"> <i class="fa-solid fa-chart-line-up"></i>
                </div> */}
              </li>
              <li className="ms-auto"><span className="counter text-success">{text}</span></li>
            </ul>
          </div>
        </div>
    )
}
export default Card 