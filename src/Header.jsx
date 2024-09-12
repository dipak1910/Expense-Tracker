let Header = () => {
  return (
    <header className="topbar" data-navbarbg="skin5">
      <nav className="navbar top-navbar navbar-expand-md navbar-dark">
        <div className="navbar-header" data-logobg="skin6">

          <a className="navbar-brand" href="dashboard.html">

            <b className="logo-icon">

              <img src={require("./images/logo.png")} width="100%" alt="homepage" />
            </b>


          </a>

          {/* <a className="nav-toggler waves-effect waves-light text-dark d-block d-md-none" href="javascript:void(0)"><i className="ti-menu ti-close" /></a> */}
        </div>

        <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">

          <ul className="navbar-nav ms-auto d-flex align-items-center">



            <li>
              <a className="profile-pic" href="#">

                <span className="text-white font-medium">Welcome, User</span></a>
            </li>

          </ul>
        </div>
        
      </nav>
    </header>
  )
}
export default Header