import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Module = () => {
  return (
    <div>
        {<Sidebar/>}
        <div className="asside">
            <div className='about-first'>
                <div className="row">
                    <div className="col-12 mb-24">
                        <div className="bg-box">
                            <div className="pro-add-new px-0">
                                <p>Module <span>6</span></p>
                                <Link type="button" className='btn add-new' data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-solid fa-plus"></i> Add New</Link>
                            </div>
                            {/* <!-- Add Modal --> */}
                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Add Module</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="user-details">
                                            <form>
                                                <div className="form-floating mb-4 mt-2">
                                                    <select className="form-select form-control" id="floatingSelectGrid" aria-label="Floating label select example">
                                                        <option selected>Select Technology</option>
                                                        <option value="1">Select Technology</option>
                                                        <option value="2">Select Technology</option>
                                                        <option value="3">Select Technology</option>
                                                    </select>
                                                    <label for="floatingSelectGrid">Select Technology</label>
                                                </div>
                                                <div className="form-floating mb-4">
                                                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                                    <label for="floatingInput">Module</label>
                                                </div>
                                                <div className="form-floating mb-4">
                                                    <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                                    <label for="floatingInput">No of hours</label>
                                                </div>
                                                <div className="form-floating mb-4">
                                                    <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                                    <label for="floatingInput">Prize</label>
                                                </div>
                                                <div className="upload-reset-btn mb-0 justify-content-center pt-2">
                                                    <button className='btn btn-upload' data-bs-dismiss="modal">Save changes</button>
                                                    <button className='btn btn-reset me-0' data-bs-dismiss="modal">Cancel</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--End Add Modal --> */}
                            {/* <!-- Edit Modal --> */}
                            <div className="modal fade" id="exampleModaledit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Edit Module</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="user-details">
                                            <form>
                                                <div className="form-floating mb-4 mt-2">
                                                    <select className="form-select form-control" id="floatingSelectGrid" aria-label="Floating label select example">
                                                        <option selected>Select Technology</option>
                                                        <option value="1">Select Technology</option>
                                                        <option value="2">Select Technology</option>
                                                        <option value="3">Select Technology</option>
                                                    </select>
                                                    <label for="floatingSelectGrid">Select Technology</label>
                                                </div>
                                                <div className="form-floating mb-4">
                                                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                                    <label for="floatingInput">Module</label>
                                                </div>
                                                <div className="form-floating mb-4">
                                                    <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                                    <label for="floatingInput">No of hours</label>
                                                </div>
                                                <div className="form-floating mb-4">
                                                    <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                                    <label for="floatingInput">Prize</label>
                                                </div>
                                                <div className="upload-reset-btn mb-0 justify-content-center pt-2">
                                                    <button className='btn btn-upload' data-bs-dismiss="modal">Save changes</button>
                                                    <button className='btn btn-reset me-0' data-bs-dismiss="modal">Cancel</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--End Edit Modal --> */}
                            {/* <!-- Filter Modal --> */}
                            <div className="modal fade" id="exampleModalfilter" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-sm">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Apply Filter</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="user-details">
                                            <div className="form-check mb-3">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" for="flexCheckDefault">Native Android</label>
                                            </div>
                                            <div className="form-check mb-3">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                                <label className="form-check-label" for="flexCheckChecked">Native Android</label>
                                            </div>
                                            <div className="upload-reset-btn mb-0 justify-content-center pt-2">
                                                <button className='btn btn-reset' data-bs-dismiss="modal">Cancel</button>
                                                <button className='btn btn-upload me-0' data-bs-dismiss="modal">Apply Filter</button>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--End Filter Modal --> */}
                            <div className="row mb-3 justify-content-between align-items-center">
                                <div className='col-4'>
                                    <div className="filter">
                                        <Link type="button" data-bs-toggle="modal" data-bs-target="#exampleModalfilter"><i className="fa-solid fa-filter"></i> Filters</Link>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-floating small-floating">
                                        <input type="text" className="form-control py-2" id="floatingInput" placeholder="name@example.com"/>
                                        <label for="floatingInput">Search</label>
                                    </div>
                                </div>
                            </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Module</th>
                                        <th scope="col">Technology</th>
                                        <th scope="col">No of Hours</th>
                                        <th scope="col">Prize</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td className='td-technology'>Login</td>
                                        <td>Native Android</td>
                                        <td>5</td>
                                        <td>$ 50</td>
                                        <td>
                                            <div className='icon-up-del'>
                                                <Link type="button" data-bs-toggle="modal" data-bs-target="#exampleModaledit"><i className="fa-solid fa-pen"></i></Link>
                                                <Link to={'#'}><i className="fa-solid fa-trash"></i></Link>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td className='td-technology'>Register</td>
                                        <td>Native Android</td>
                                        <td>5</td>
                                        <td>$ 50</td>
                                        <td>
                                            <div className='icon-up-del'>
                                                <Link type="button" data-bs-toggle="modal" data-bs-target="#exampleModaledit"><i className="fa-solid fa-pen"></i></Link>
                                                <Link to={'#'}><i className="fa-solid fa-trash"></i></Link>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td className='td-technology'>OTP Verification</td>
                                        <td>Native Android</td>
                                        <td>5</td>
                                        <td>$ 50</td>
                                        <td>
                                            <div className='icon-up-del'>
                                                <Link type="button" data-bs-toggle="modal" data-bs-target="#exampleModaledit"><i className="fa-solid fa-pen"></i></Link>
                                                <Link to={'#'}><i className="fa-solid fa-trash"></i></Link>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td className='td-technology'>Home Adds Banner Slider</td>
                                        <td>Native Android</td>
                                        <td>5</td>
                                        <td>$ 50</td>
                                        <td>
                                            <div className='icon-up-del'>
                                                <Link type="button" data-bs-toggle="modal" data-bs-target="#exampleModaledit"><i className="fa-solid fa-pen"></i></Link>
                                                <Link to={'#'}><i className="fa-solid fa-trash"></i></Link>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td className='td-technology'>Profile Details</td>
                                        <td>Native Android</td>
                                        <td>5</td>
                                        <td>$ 50</td>
                                        <td>
                                            <div className='icon-up-del'>
                                                <Link type="button" data-bs-toggle="modal" data-bs-target="#exampleModaledit"><i className="fa-solid fa-pen"></i></Link>
                                                <Link to={'#'}><i className="fa-solid fa-trash"></i></Link>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td className='td-technology'>Show Product</td>
                                        <td>Native Android</td>
                                        <td>5</td>
                                        <td>$ 50</td>
                                        <td>
                                            <div className='icon-up-del'>
                                                <Link type="button" data-bs-toggle="modal" data-bs-target="#exampleModaledit"><i className="fa-solid fa-pen"></i></Link>
                                                <Link to={'#'}><i className="fa-solid fa-trash"></i></Link>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="pro-add-new px-0 mb-0 pt-3">
                                <p>1 - 6 of 6</p>
                                <nav aria-label="...">
                                    <ul className="pagination pagination-sm mb-0">
                                        <li className="page-item active" aria-current="page">
                                        <span className="page-link">1</span>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {<Footer/>}
        </div>
    </div>
  )
}

export default Module