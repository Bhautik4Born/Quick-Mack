import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';

const CreateProject = () => {
    const [activeLinks, setActiveLinks] = useState([]);
  
    const handleLinkClick = (tech) => {
        console.log('Clicked:', tech);
        setActiveLinks((prevActiveLinks) =>
          prevActiveLinks.includes(tech)
            ? prevActiveLinks.filter((link) => link !== tech)
            : [...prevActiveLinks, tech]
        );
        console.log('Active Links:', activeLinks);
    };

  return (
    <div>
        {<Sidebar/>}
        <div className="asside">
          <div className='about-first'>
            <div className="row">
                <div className="col-4 mb-24">
                    <div className="bg-box-new h-auto mb-24">
                        <div className="pro-add-new">
                            <h4>Select Module</h4>
                            <Link type="button" className='btn add-new'>Add Module</Link>
                        </div>
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
                        <div className="d-flex search-project justify-content-between align-items-center">
                            <div className="filter">
                                <Link type="button" data-bs-toggle="modal" data-bs-target="#exampleModalfilter"><i className="fa-solid fa-filter"></i> Filters</Link>
                            </div>
                            <div className="form-floating small-floating">
                                <input type="text" className="form-control py-2" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Search Module</label>
                            </div>
                        </div>
                    </div>
                    <div className='all-project-table all-project-plus p-1'>
                        <div className="video-conference h-auto mb-10">
                            <div className="project-one p-0 mt-0 bg-transparent">
                                <div className="project-photo-discription">
                                    <div className="form-check plus-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label className="form-check-label video-font-size" for="flexCheckChecked"><b>Video conference with Canada Team</b></label>
                                    </div>
                                </div>
                                <div className="price-hours">
                                    <h3>$82.6</h3>
                                    <h4>30h</h4>
                                </div>
                            </div>
                            <div className='five-tech'>
                                {["Flutter", "Java", "React", "PHP", ".net"].map((tech) => (
                                    <p key={tech}>
                                    <Link
                                        to="#"
                                        className={activeLinks.includes(tech) ? 'active' : ''}
                                        onClick={() => handleLinkClick(tech)}
                                    >
                                        {tech}
                                    </Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="video-conference h-auto mb-10">
                            <div className="project-one p-0 mt-0 bg-transparent">
                                <div className="project-photo-discription">
                                    <div className="form-check plus-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label className="form-check-label video-font-size" for="flexCheckChecked"><b>Video conference with Canada Team</b></label>
                                    </div>
                                </div>
                                <div className="price-hours">
                                    <h3>$82.6</h3>
                                    <h4>30h</h4>
                                </div>
                            </div>
                            <div className='five-tech'>
                                {["Flutter", "Java", "React", "PHP", ".net"].map((tech) => (
                                    <p key={tech}>
                                    <Link
                                        to="#"
                                        className={activeLinks.includes(tech) ? 'active' : ''}
                                        onClick={() => handleLinkClick(tech)}
                                    >
                                        {tech}
                                    </Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="video-conference h-auto mb-10">
                            <div className="project-one p-0 mt-0 bg-transparent">
                                <div className="project-photo-discription">
                                    <div className="form-check plus-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label className="form-check-label video-font-size" for="flexCheckChecked"><b>Video conference with Canada Team</b></label>
                                    </div>
                                </div>
                                <div className="price-hours">
                                    <h3>$82.6</h3>
                                    <h4>30h</h4>
                                </div>
                            </div>
                            <div className='five-tech'>
                                {["Flutter", "Java", "React", "PHP", ".net"].map((tech) => (
                                    <p key={tech}>
                                    <Link
                                        to="#"
                                        className={activeLinks.includes(tech) ? 'active' : ''}
                                        onClick={() => handleLinkClick(tech)}
                                    >
                                        {tech}
                                    </Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="video-conference h-auto mb-10">
                            <div className="project-one p-0 mt-0 bg-transparent">
                                <div className="project-photo-discription">
                                    <div className="form-check plus-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label className="form-check-label video-font-size" for="flexCheckChecked"><b>Video conference with Canada Team</b></label>
                                    </div>
                                </div>
                                <div className="price-hours">
                                    <h3>$82.6</h3>
                                    <h4>30h</h4>
                                </div>
                            </div>
                            <div className='five-tech'>
                                {["Flutter", "Java", "React", "PHP", ".net"].map((tech) => (
                                    <p key={tech}>
                                    <Link
                                        to="#"
                                        className={activeLinks.includes(tech) ? 'active' : ''}
                                        onClick={() => handleLinkClick(tech)}
                                    >
                                        {tech}
                                    </Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="video-conference h-auto mb-10">
                            <div className="project-one p-0 mt-0 bg-transparent">
                                <div className="project-photo-discription">
                                    <div className="form-check plus-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label className="form-check-label video-font-size" for="flexCheckChecked"><b>Video conference with Canada Team</b></label>
                                    </div>
                                </div>
                                <div className="price-hours">
                                    <h3>$82.6</h3>
                                    <h4>30h</h4>
                                </div>
                            </div>
                            <div className='five-tech'>
                                {["Flutter", "Java", "React", "PHP", ".net"].map((tech) => (
                                    <p key={tech}>
                                    <Link
                                        to="#"
                                        className={activeLinks.includes(tech) ? 'active' : ''}
                                        onClick={() => handleLinkClick(tech)}
                                    >
                                        {tech}
                                    </Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="video-conference h-auto mb-10">
                            <div className="project-one p-0 mt-0 bg-transparent">
                                <div className="project-photo-discription">
                                    <div className="form-check plus-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label className="form-check-label video-font-size" for="flexCheckChecked"><b>Video conference with Canada Team</b></label>
                                    </div>
                                </div>
                                <div className="price-hours">
                                    <h3>$82.6</h3>
                                    <h4>30h</h4>
                                </div>
                            </div>
                            <div className='five-tech'>
                                {["Flutter", "Java", "React", "PHP", ".net"].map((tech) => (
                                    <p key={tech}>
                                    <Link
                                        to="#"
                                        className={activeLinks.includes(tech) ? 'active' : ''}
                                        onClick={() => handleLinkClick(tech)}
                                    >
                                        {tech}
                                    </Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="video-conference h-auto mb-10">
                            <div className="project-one p-0 mt-0 bg-transparent">
                                <div className="project-photo-discription">
                                    <div className="form-check plus-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label className="form-check-label video-font-size" for="flexCheckChecked"><b>Video conference with Canada Team</b></label>
                                    </div>
                                </div>
                                <div className="price-hours">
                                    <h3>$82.6</h3>
                                    <h4>30h</h4>
                                </div>
                            </div>
                            <div className='five-tech'>
                                {["Flutter", "Java", "React", "PHP", ".net"].map((tech) => (
                                    <p key={tech}>
                                    <Link
                                        to="#"
                                        className={activeLinks.includes(tech) ? 'active' : ''}
                                        onClick={() => handleLinkClick(tech)}
                                    >
                                        {tech}
                                    </Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="video-conference h-auto mb-10">
                            <div className="project-one p-0 mt-0 bg-transparent">
                                <div className="project-photo-discription">
                                    <div className="form-check plus-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label className="form-check-label video-font-size" for="flexCheckChecked"><b>Video conference with Canada Team</b></label>
                                    </div>
                                </div>
                                <div className="price-hours">
                                    <h3>$82.6</h3>
                                    <h4>30h</h4>
                                </div>
                            </div>
                            <div className='five-tech'>
                                {["Flutter", "Java", "React", "PHP", ".net"].map((tech) => (
                                    <p key={tech}>
                                    <Link
                                        to="#"
                                        className={activeLinks.includes(tech) ? 'active' : ''}
                                        onClick={() => handleLinkClick(tech)}
                                    >
                                        {tech}
                                    </Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="video-conference h-auto mb-10">
                            <div className="project-one p-0 mt-0 bg-transparent">
                                <div className="project-photo-discription">
                                    <div className="form-check plus-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label className="form-check-label video-font-size" for="flexCheckChecked"><b>Video conference with Canada Team</b></label>
                                    </div>
                                </div>
                                <div className="price-hours">
                                    <h3>$82.6</h3>
                                    <h4>30h</h4>
                                </div>
                            </div>
                            <div className='five-tech'>
                                {["Flutter", "Java", "React", "PHP", ".net"].map((tech) => (
                                    <p key={tech}>
                                    <Link
                                        to="#"
                                        className={activeLinks.includes(tech) ? 'active' : ''}
                                        onClick={() => handleLinkClick(tech)}
                                    >
                                        {tech}
                                    </Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="video-conference h-auto mb-10">
                            <div className="project-one p-0 mt-0 bg-transparent">
                                <div className="project-photo-discription">
                                    <div className="form-check plus-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label className="form-check-label video-font-size" for="flexCheckChecked"><b>Video conference with Canada Team</b></label>
                                    </div>
                                </div>
                                <div className="price-hours">
                                    <h3>$82.6</h3>
                                    <h4>30h</h4>
                                </div>
                            </div>
                            <div className='five-tech'>
                                {["Flutter", "Java", "React", "PHP", ".net"].map((tech) => (
                                    <p key={tech}>
                                    <Link
                                        to="#"
                                        className={activeLinks.includes(tech) ? 'active' : ''}
                                        onClick={() => handleLinkClick(tech)}
                                    >
                                        {tech}
                                    </Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="video-conference h-auto mb-10">
                            <div className="project-one p-0 mt-0 bg-transparent">
                                <div className="project-photo-discription">
                                    <div className="form-check plus-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label className="form-check-label video-font-size" for="flexCheckChecked"><b>Video conference with Canada Team</b></label>
                                    </div>
                                </div>
                                <div className="price-hours">
                                    <h3>$82.6</h3>
                                    <h4>30h</h4>
                                </div>
                            </div>
                            <div className='five-tech'>
                                {["Flutter", "Java", "React", "PHP", ".net"].map((tech) => (
                                    <p key={tech}>
                                    <Link
                                        to="#"
                                        className={activeLinks.includes(tech) ? 'active' : ''}
                                        onClick={() => handleLinkClick(tech)}
                                    >
                                        {tech}
                                    </Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="video-conference h-auto mb-10">
                            <div className="project-one p-0 mt-0 bg-transparent">
                                <div className="project-photo-discription">
                                    <div className="form-check plus-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label className="form-check-label video-font-size" for="flexCheckChecked"><b>Video conference with Canada Team</b></label>
                                    </div>
                                </div>
                                <div className="price-hours">
                                    <h3>$82.6</h3>
                                    <h4>30h</h4>
                                </div>
                            </div>
                            <div className='five-tech'>
                                {["Flutter", "Java", "React", "PHP", ".net"].map((tech) => (
                                    <p key={tech}>
                                    <Link
                                        to="#"
                                        className={activeLinks.includes(tech) ? 'active' : ''}
                                        onClick={() => handleLinkClick(tech)}
                                    >
                                        {tech}
                                    </Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="video-conference h-auto mb-10">
                            <div className="project-one p-0 mt-0 bg-transparent">
                                <div className="project-photo-discription">
                                    <div className="form-check plus-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label className="form-check-label video-font-size" for="flexCheckChecked"><b>Video conference with Canada Team</b></label>
                                    </div>
                                </div>
                                <div className="price-hours">
                                    <h3>$82.6</h3>
                                    <h4>30h</h4>
                                </div>
                            </div>
                            <div className='five-tech'>
                                {["Flutter", "Java", "React", "PHP", ".net"].map((tech) => (
                                    <p key={tech}>
                                    <Link
                                        to="#"
                                        className={activeLinks.includes(tech) ? 'active' : ''}
                                        onClick={() => handleLinkClick(tech)}
                                    >
                                        {tech}
                                    </Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="video-conference h-auto mb-10">
                            <div className="project-one p-0 mt-0 bg-transparent">
                                <div className="project-photo-discription">
                                    <div className="form-check plus-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label className="form-check-label video-font-size" for="flexCheckChecked"><b>Video conference with Canada Team</b></label>
                                    </div>
                                </div>
                                <div className="price-hours">
                                    <h3>$82.6</h3>
                                    <h4>30h</h4>
                                </div>
                            </div>
                            <div className='five-tech'>
                                {["Flutter", "Java", "React", "PHP", ".net"].map((tech) => (
                                    <p key={tech}>
                                    <Link
                                        to="#"
                                        className={activeLinks.includes(tech) ? 'active' : ''}
                                        onClick={() => handleLinkClick(tech)}
                                    >
                                        {tech}
                                    </Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="video-conference h-auto mb-10">
                            <div className="project-one p-0 mt-0 bg-transparent">
                                <div className="project-photo-discription">
                                    <div className="form-check plus-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label className="form-check-label video-font-size" for="flexCheckChecked"><b>Video conference with Canada Team</b></label>
                                    </div>
                                </div>
                                <div className="price-hours">
                                    <h3>$82.6</h3>
                                    <h4>30h</h4>
                                </div>
                            </div>
                            <div className='five-tech'>
                                {["Flutter", "Java", "React", "PHP", ".net"].map((tech) => (
                                    <p key={tech}>
                                    <Link
                                        to="#"
                                        className={activeLinks.includes(tech) ? 'active' : ''}
                                        onClick={() => handleLinkClick(tech)}
                                    >
                                        {tech}
                                    </Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="video-conference h-auto mb-10">
                            <div className="project-one p-0 mt-0 bg-transparent">
                                <div className="project-photo-discription">
                                    <div className="form-check plus-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label className="form-check-label video-font-size" for="flexCheckChecked"><b>Video conference with Canada Team</b></label>
                                    </div>
                                </div>
                                <div className="price-hours">
                                    <h3>$82.6</h3>
                                    <h4>30h</h4>
                                </div>
                            </div>
                            <div className='five-tech'>
                                {["Flutter", "Java", "React", "PHP", ".net"].map((tech) => (
                                    <p key={tech}>
                                    <Link
                                        to="#"
                                        className={activeLinks.includes(tech) ? 'active' : ''}
                                        onClick={() => handleLinkClick(tech)}
                                    >
                                        {tech}
                                    </Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="video-conference h-auto mb-10">
                            <div className="project-one p-0 mt-0 bg-transparent">
                                <div className="project-photo-discription">
                                    <div className="form-check plus-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label className="form-check-label video-font-size" for="flexCheckChecked"><b>Video conference with Canada Team</b></label>
                                    </div>
                                </div>
                                <div className="price-hours">
                                    <h3>$82.6</h3>
                                    <h4>30h</h4>
                                </div>
                            </div>
                            <div className='five-tech'>
                                {["Flutter", "Java", "React", "PHP", ".net"].map((tech) => (
                                    <p key={tech}>
                                    <Link
                                        to="#"
                                        className={activeLinks.includes(tech) ? 'active' : ''}
                                        onClick={() => handleLinkClick(tech)}
                                    >
                                        {tech}
                                    </Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="video-conference h-auto mb-10">
                            <div className="project-one p-0 mt-0 bg-transparent">
                                <div className="project-photo-discription">
                                    <div className="form-check plus-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label className="form-check-label video-font-size" for="flexCheckChecked"><b>Video conference with Canada Team</b></label>
                                    </div>
                                </div>
                                <div className="price-hours">
                                    <h3>$82.6</h3>
                                    <h4>30h</h4>
                                </div>
                            </div>
                            <div className='five-tech'>
                                {["Flutter", "Java", "React", "PHP", ".net"].map((tech) => (
                                    <p key={tech}>
                                    <Link
                                        to="#"
                                        className={activeLinks.includes(tech) ? 'active' : ''}
                                        onClick={() => handleLinkClick(tech)}
                                    >
                                        {tech}
                                    </Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="video-conference h-auto mb-10">
                            <div className="project-one p-0 mt-0 bg-transparent">
                                <div className="project-photo-discription">
                                    <div className="form-check plus-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label className="form-check-label video-font-size" for="flexCheckChecked"><b>Video conference with Canada Team</b></label>
                                    </div>
                                </div>
                                <div className="price-hours">
                                    <h3>$82.6</h3>
                                    <h4>30h</h4>
                                </div>
                            </div>
                            <div className='five-tech'>
                                {["Flutter", "Java", "React", "PHP", ".net"].map((tech) => (
                                    <p key={tech}>
                                    <Link
                                        to="#"
                                        className={activeLinks.includes(tech) ? 'active' : ''}
                                        onClick={() => handleLinkClick(tech)}
                                    >
                                        {tech}
                                    </Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="video-conference h-auto mb-10">
                            <div className="project-one p-0 mt-0 bg-transparent">
                                <div className="project-photo-discription">
                                    <div className="form-check plus-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label className="form-check-label video-font-size" for="flexCheckChecked"><b>Video conference with Canada Team</b></label>
                                    </div>
                                </div>
                                <div className="price-hours">
                                    <h3>$82.6</h3>
                                    <h4>30h</h4>
                                </div>
                            </div>
                            <div className='five-tech'>
                                {["Flutter", "Java", "React", "PHP", ".net"].map((tech) => (
                                    <p key={tech}>
                                    <Link
                                        to="#"
                                        className={activeLinks.includes(tech) ? 'active' : ''}
                                        onClick={() => handleLinkClick(tech)}
                                    >
                                        {tech}
                                    </Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="video-conference h-auto mb-10">
                            <div className="project-one p-0 mt-0 bg-transparent">
                                <div className="project-photo-discription">
                                    <div className="form-check plus-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label className="form-check-label video-font-size" for="flexCheckChecked"><b>Video conference with Canada Team</b></label>
                                    </div>
                                </div>
                                <div className="price-hours">
                                    <h3>$82.6</h3>
                                    <h4>30h</h4>
                                </div>
                            </div>
                            <div className='five-tech'>
                                {["Flutter", "Java", "React", "PHP", ".net"].map((tech) => (
                                    <p key={tech}>
                                    <Link
                                        to="#"
                                        className={activeLinks.includes(tech) ? 'active' : ''}
                                        onClick={() => handleLinkClick(tech)}
                                    >
                                        {tech}
                                    </Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="video-conference h-auto mb-10">
                            <div className="project-one p-0 mt-0 bg-transparent">
                                <div className="project-photo-discription">
                                    <div className="form-check plus-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label className="form-check-label video-font-size" for="flexCheckChecked"><b>Video conference with Canada Team</b></label>
                                    </div>
                                </div>
                                <div className="price-hours">
                                    <h3>$82.6</h3>
                                    <h4>30h</h4>
                                </div>
                            </div>
                            <div className='five-tech'>
                                {["Flutter", "Java", "React", "PHP", ".net"].map((tech) => (
                                    <p key={tech}>
                                    <Link
                                        to="#"
                                        className={activeLinks.includes(tech) ? 'active' : ''}
                                        onClick={() => handleLinkClick(tech)}
                                    >
                                        {tech}
                                    </Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="video-conference h-auto mb-10">
                            <div className="project-one p-0 mt-0 bg-transparent">
                                <div className="project-photo-discription">
                                    <div className="form-check plus-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label className="form-check-label video-font-size" for="flexCheckChecked"><b>Video conference with Canada Team</b></label>
                                    </div>
                                </div>
                                <div className="price-hours">
                                    <h3>$82.6</h3>
                                    <h4>30h</h4>
                                </div>
                            </div>
                            <div className='five-tech'>
                                {["Flutter", "Java", "React", "PHP", ".net"].map((tech) => (
                                    <p key={tech}>
                                    <Link
                                        to="#"
                                        className={activeLinks.includes(tech) ? 'active' : ''}
                                        onClick={() => handleLinkClick(tech)}
                                    >
                                        {tech}
                                    </Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="video-conference h-auto mb-10">
                            <div className="project-one p-0 mt-0 bg-transparent">
                                <div className="project-photo-discription">
                                    <div className="form-check plus-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label className="form-check-label video-font-size" for="flexCheckChecked"><b>Video conference with Canada Team</b></label>
                                    </div>
                                </div>
                                <div className="price-hours">
                                    <h3>$82.6</h3>
                                    <h4>30h</h4>
                                </div>
                            </div>
                            <div className='five-tech'>
                                {["Flutter", "Java", "React", "PHP", ".net"].map((tech) => (
                                    <p key={tech}>
                                    <Link
                                        to="#"
                                        className={activeLinks.includes(tech) ? 'active' : ''}
                                        onClick={() => handleLinkClick(tech)}
                                    >
                                        {tech}
                                    </Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="video-conference h-auto mb-10">
                            <div className="project-one p-0 mt-0 bg-transparent">
                                <div className="project-photo-discription">
                                    <div className="form-check plus-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                        <label className="form-check-label video-font-size" for="flexCheckChecked"><b>Video conference with Canada Team</b></label>
                                    </div>
                                </div>
                                <div className="price-hours">
                                    <h3>$82.6</h3>
                                    <h4>30h</h4>
                                </div>
                            </div>
                            <div className='five-tech'>
                                {["Flutter", "Java", "React", "PHP", ".net"].map((tech) => (
                                    <p key={tech}>
                                    <Link
                                        to="#"
                                        className={activeLinks.includes(tech) ? 'active' : ''}
                                        onClick={() => handleLinkClick(tech)}
                                    >
                                        {tech}
                                    </Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8 mb-24">
                    <div className="bg-box-new h-auto">
                        <div className='search-project quotation my-1'>
                            <h5 className='me-2'>Quotation :</h5>
                            <div className="form-floating small-floating me-2">
                                <input type="text" className="form-control py-2" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Clint Name</label>
                            </div>
                            <div className="form-floating small-floating me-2">
                                <input type="text" className="form-control py-2" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Project Name</label>
                            </div>
                            <div className="form-check form-switch me-2">
                                <label className="form-check-label" for="flexSwitchCheckDefault">Base on Hours</label>
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                            </div>
                        </div>
                        <table className="table tablee mt-3 table-scroll small-first-col">
                            <thead>
                                <tr className='bg-temp'>
                                    <th scope="col">No</th>
                                    <th scope="col">Module</th>
                                    <th scope="col">No Of Hours</th>
                                    <th scope="col">Prize</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody className='all-project-table body-half-screen'>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td>Login</td>
                                    <td>5</td>
                                    <td>$ 50</td>
                                    <td>
                                        <div className="icon-up-del justify-content-center">
                                            <Link to={"#"}><i className="fa-solid fa-trash me-0"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr className='last-tr-project'>
                                    <th></th>
                                    <td><b>Net Subtotal :</b></td>
                                    <td>500</td>
                                    <td>$ 5000</td>
                                    <td>
                                        <div className="save-next">
                                            <Link to={"#"}>Save & next</Link>
                                        </div>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
          </div>
          {<Footer/>}
        </div>
    </div>
  )
}

export default CreateProject


