import React , { useEffect, useState }from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import user from '../Image/user.png';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const [userId, setUserId] = useState('');
    const navigate = useNavigate();
  
    useEffect(() => {
      // Retrieve userId from cookie when the component mounts
      const userIdFromCookie = Cookies.get('userId');
      if (userIdFromCookie) {
        setUserId(userIdFromCookie);
      }else {
        // Redirect to the home page if userId is not found in cookies
        navigate('/Dashboard');
      }
    }, [navigate]);

    return (
        <div>
            {/* nav fixx */}
            <div className='sidebar'>
                <div className="sidebar-logo">
                    <Link to={"/Dashboard"}><img src={logo}/></Link>
                </div>
                <div className="overflow-y">
                    <div className="sidebar-link">
                        <ul>
                            <li className={location.pathname === '/Dashboard' ? 'active' : ''}><NavLink to={"/Dashboard"}><i className="fa-solid fa-house"></i>Dashboard</NavLink></li>
                            <li className={location.pathname === '/About' ? 'active' : ''}><NavLink to={"/About"}><i className="fa-solid fa-user"></i>Account Settings</NavLink></li>
                        </ul>
                    </div>
                    <div className="page-line">
                        <hr /><span>Pages</span>
                    </div>
                    <div className="sidebar-link">
                        <ul>
                            <li className={location.pathname === '/Technology' ? 'active' : ''}><NavLink to={"/Technology"}><i className="fa-solid fa-code"></i>Technology</NavLink></li>
                            <li className={location.pathname === '/Module' ? 'active' : ''}><NavLink to={"/Module"}><i className="fa-solid fa-puzzle-piece"></i>Module</NavLink></li>
                            <li className={location.pathname === '/Project' ? 'active' : ''}><NavLink to={"/Project"}><i className="fa-solid fa-rocket"></i>Project</NavLink></li>
                        </ul>
                    </div>
                    <div className="page-line">
                        <hr /><span>useful links</span>
                    </div>
                    <div className="sidebar-link">
                        <ul>
                            <li className={location.pathname === '/' ? 'active' : ''}><NavLink to={"#"}><i className="fa-regular fa-credit-card"></i>Terms and Conditions</NavLink></li>
                            <li className={location.pathname === '/' ? 'active' : ''}><NavLink to={"#"}><i className="fa-regular fa-eye"></i>Privacy Policy</NavLink></li>
                            <li className={location.pathname === '/' ? 'active' : ''}><NavLink to={"#"}><i className="fa-regular fa-credit-card"></i>Refund Policy</NavLink></li>
                            <li className={location.pathname === '/' ? 'active' : ''}><NavLink to={"/logout"}><i className="fa-regular fa-credit-card"></i>Logout</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="pro-btn">
                    <Link to={"/Membership"} type="submit" className="btn btn-pro">Upgrade to Pro</Link>
                </div>
            </div>
            <div className='fixx'>
                <nav className="top-header navbar navbar-expand-lg sticky-top navbar-light">
                    <div className="py-2 container-fluid">
                        <div className="form-group has-search">
                            <span className="fa fa-search form-control-feedback"></span>
                            <input type="text" className="form-control border-0" placeholder="Search"/>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse navheight justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav navbarbottom mb-lg-0 align-items-lg-center">
                                <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1">
                                    <Link className="nav-link hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                        <NavLink className="nav-link bell" aria-current="page" to={"#"} ><i className="fa-regular fa-bell"></i></NavLink>
                                    </Link>
                                    <ul className="dropdown-menu dropdown-menu-end py-0" data-bs-popper="static">
                                        <li className="dropdown-menu-header border-bottom">
                                            <div className="dropdown-header d-flex align-items-center py-3">
                                                <h5 className="text-body mb-0 me-auto">Notification</h5>
                                                <Link to={"#"} className="dropdown-notifications-all text-body" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Mark all as read" data-bs-original-title="Mark all as read"><i class="fa-regular fa-envelope-open"></i></Link>
                                            </div>
                                        </li>
                                        <li className="dropdown-notifications-list scrollable-container ps ps--active-y">
                                            <ul className="list-group list-group-flush all-project-table">
                                                <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 me-3">
                                                            <div className="avatar">
                                                                <img src={user} className="w-px-40 h-auto rounded-circle"/>
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-1">Congratulation Lettie 🎉</h6>
                                                            <p className="mb-0">Won the monthly best seller gold badge</p>
                                                            <small className="text-muted">1h ago</small>
                                                        </div>
                                                        <div className="flex-shrink-0 dropdown-notifications-actions">
                                                            <Link to={"#"} className="dropdown-notifications-read"><span className="badge badge-dot"></span></Link>
                                                            <Link to={"#"} className="dropdown-notifications-archive"><span className="bx bx-x"></span></Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                                    <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar">
                                                            <img src={user} className="w-px-40 h-auto rounded-circle"/>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-1">Charles Franklin</h6>
                                                        <p className="mb-0">Accepted your connection</p>
                                                        <small className="text-muted">12hr ago</small>
                                                    </div>
                                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                                        <Link to={"#"} className="dropdown-notifications-read"><span className="badge badge-dot"></span></Link>
                                                        <Link to={"#"} className="dropdown-notifications-archive"><span className="bx bx-x"></span></Link>
                                                    </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                                    <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar">
                                                            <img src={user} className="w-px-40 h-auto rounded-circle"/>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-1">New Message ✉️</h6>
                                                        <p className="mb-0">You have new message from Natalie</p>
                                                        <small className="text-muted">1h ago</small>
                                                    </div>
                                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                                        <Link to={"#"} className="dropdown-notifications-read"><span className="badge badge-dot"></span></Link>
                                                        <Link to={"#"} className="dropdown-notifications-archive"><span className="bx bx-x"></span></Link>
                                                    </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                                    <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar">
                                                            <img src={user} className="w-px-40 h-auto rounded-circle"/>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-1">Whoo! You have new order 🛒 </h6>
                                                        <p className="mb-0">ACME Inc. made new order $1,154</p>
                                                        <small className="text-muted">1 day ago</small>
                                                    </div>
                                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                                        <Link to={"#"} className="dropdown-notifications-read"><span className="badge badge-dot"></span></Link>
                                                        <Link to={"#"} className="dropdown-notifications-archive"><span className="bx bx-x"></span></Link>
                                                    </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                                    <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar">
                                                            <img src={user} className="w-px-40 h-auto rounded-circle"/>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-1">Application has been approved 🚀 </h6>
                                                        <p className="mb-0">Your ABC project application has been approved.</p>
                                                        <small className="text-muted">2 days ago</small>
                                                    </div>
                                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                                        <Link to={"#"} className="dropdown-notifications-read"><span className="badge badge-dot"></span></Link>
                                                        <Link to={"#"} className="dropdown-notifications-archive"><span className="bx bx-x"></span></Link>
                                                    </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                                    <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar">
                                                            <img src={user} className="w-px-40 h-auto rounded-circle"/>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-1">Monthly report is generated</h6>
                                                        <p className="mb-0">July monthly financial report is generated </p>
                                                        <small className="text-muted">3 days ago</small>
                                                    </div>
                                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                                        <Link to={"#"} className="dropdown-notifications-read"><span className="badge badge-dot"></span></Link>
                                                        <Link to={"#"} className="dropdown-notifications-archive"><span className="bx bx-x"></span></Link>
                                                    </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                                    <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar">
                                                            <img src={user} className="w-px-40 h-auto rounded-circle"/>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-1">Send connection request</h6>
                                                        <p className="mb-0">Peter sent you connection request</p>
                                                        <small className="text-muted">4 days ago</small>
                                                    </div>
                                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                                        <Link to={"#"} className="dropdown-notifications-read"><span className="badge badge-dot"></span></Link>
                                                        <Link to={"#"} className="dropdown-notifications-archive"><span className="bx bx-x"></span></Link>
                                                    </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                                    <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar">
                                                            <img src={user} className="w-px-40 h-auto rounded-circle"/>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-1">New message from Jane</h6>
                                                        <p className="mb-0">Your have new message from Jane</p>
                                                        <small className="text-muted">5 days ago</small>
                                                    </div>
                                                    <div className="flex-shrink-0 dropdown-notifications-actions">
                                                        <Link to={"#"} className="dropdown-notifications-read"><span className="badge badge-dot"></span></Link>
                                                        <Link to={"#"} className="dropdown-notifications-archive"><span className="bx bx-x"></span></Link>
                                                    </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 me-3">
                                                            <div className="avatar">
                                                                <img src={user} className="w-px-40 h-auto rounded-circle"/>
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-1">CPU is running high</h6>
                                                            <p className="mb-0">CPU Utilization Percent is currently at 88.63%,</p>
                                                            <small className="text-muted">5 days ago</small>
                                                        </div>
                                                        <div className="flex-shrink-0 dropdown-notifications-actions">
                                                            <Link to={"#"} className="dropdown-notifications-read"><span className="badge badge-dot"></span></Link>
                                                            <Link to={"#"} className="dropdown-notifications-archive"><span className="bx bx-x"></span></Link>
                                                        </div>
                                                    </div>
                                                </li>   
                                            </ul>
                                        </li>
                                        <li className="dropdown-menu-footer border-top p-3">
                                            <button className="btn add-new text-uppercase w-100">view all notifications</button>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="navbar-user position-relative border-0 bg-transparent">
                                        <img src={user} />
                                        <span className="position-absolute bottom-0 start-100 translate-middle p-1 bg-light-green border border-light rounded-circle">
                                            <span className="visually-hidden">New alerts</span>
                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;
