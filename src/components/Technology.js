import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Membership = () => {
  return (
    <div>
        {<Sidebar/>}
        <div className="asside">
            <div className='about-first'>
                <div className="row">
                    <div className="col-12 mb-24">
                        <div className="bg-box">
                            <div className="pro-add-new px-0">
                                <p>Technology <span>6</span></p>
                                <Link type="button" className='btn add-new' data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-solid fa-plus"></i> Add New</Link>
                            </div>
                            {/* <!-- Add Modal --> */}
                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Add Technology</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="user-details">
                                        <form>
                                            <div className="form-floating mb-4 mt-2">
                                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                                <label for="floatingInput">Technology</label>
                                            </div>
                                            <div className="form-floating mb-4">
                                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                                <label for="floatingInput">Per Hours Rate</label>
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
                                        <h5 className="modal-title" id="exampleModalLabel">Edit Technology</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="user-details">
                                        <form>
                                            <div className="form-floating mb-4 mt-2">
                                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                                <label for="floatingInput">Technology</label>
                                            </div>
                                            <div className="form-floating mb-4">
                                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                                <label for="floatingInput">Per Hours Rate</label>
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
                            <div className="">
                                <div className="p-0 d-flex justify-content-end">
                                    <div className="form-floating small-floating mb-3 text-end">
                                        <input type="text" className="form-control py-2" id="floatingInput" placeholder="name@example.com"/>
                                        <label for="floatingInput">Search</label>
                                    </div>
                                </div>
                            </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Technology</th>
                                        <th scope="col">Per Hours Rate</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td className='td-technology'>Native Android</td>
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
                                        <td className='td-technology'>Core PHP</td>
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
                                        <td className='td-technology'>Flutter</td>
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
                                        <td className='td-technology'>Phonepay</td>
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
                                        <td className='td-technology'>Swiggy</td>
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
                                        <td className='td-technology'>Tinder</td>
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

export default Membership