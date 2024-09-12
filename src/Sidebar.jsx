import { Link } from "react-router-dom"

let Sidebar = () => {
    return (
        <aside className="left-sidebar mt-4" data-sidebarbg="skin6">
            {/* Sidebar scroll*/}
            <div className="scroll-sidebar">
                {/* Sidebar navigation*/}
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        {/* User Profile*/}
                        <li className="sidebar-item pt-2">
                            <Link className="sidebar-link waves-effect waves-dark sidebar-link"  to ="/Home" aria-expanded="false">
                            <i class="fa-solid fa-square-poll-vertical"></i>
                                <span className="hide-menu">Dashboard</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link waves-effect waves-dark sidebar-link" to ="/Addincome" aria-expanded="false">
                            <i class="fa-solid fa-circle-plus"></i>
                                <span className="hide-menu"> Add Income</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link waves-effect waves-dark sidebar-link" to ="/Addexpense" aria-expanded="false">
                            <i class="fa-solid fa-circle-minus"></i>
                                <span className="hide-menu">Add Expense</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link waves-effect waves-dark sidebar-link" to ="/Viewincome" aria-expanded="false">
                            <i class="fa-solid fa-table-list"></i>
                                <span className="hide-menu">View Income</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link waves-effect waves-dark sidebar-link" to ="/Viewexpense" aria-expanded="false">
                            <i class="fa-solid fa-table-list"></i>
                                <span className="hide-menu">View Expense</span>
                            </Link>
                        </li>
                        <li className="sidebar-item"> 
                            <Link className="sidebar-link waves-effect waves-dark sidebar-link" to ="/" aria-expanded="false">
                            <i class="fa-solid fa-right-from-bracket"></i>
                                <span className="hide-menu ">Log Out</span>
                            </Link>
                        </li>
                        {/* <li className="sidebar-item">
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="404.html" aria-expanded="false">
                                <i className="fa fa-info-circle" aria-hidden="true" />
                                <span className="hide-menu">Error 404</span>
                            </a>
                        </li> */}
                        {/* <li className="text-center p-20 upgrade-btn">
                            <a href="https://www.wrappixel.com/templates/ampleadmin/" className="btn d-grid btn-danger text-white" target="_blank">
                                Upgrade to Pro</a>
                        </li> */}
                    </ul>
                </nav>
                {/* End Sidebar navigation */}
            </div>
            {/* End Sidebar scroll*/}
        </aside>
    )
}
export default Sidebar