import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import user from "../Image/user.png";
import axios from "axios";
import config from "./config";
import Cookies from "js-cookie";

const About = () => {
    const { baseURL } = config;
    const [userId, setUserId] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve userId from cookie when the component mounts
        const userIdFromCookie = Cookies.get("userId");
        if (userIdFromCookie) {
            setUserId(userIdFromCookie);
        } else {
            // Redirect to the home page if userId is not found in cookies
            navigate("/");
        }
    }, [navigate]);

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        organizations: "",
        mobile_number: "",
        address: "",
        state: "",
        zip: "",
        country: "USA",
        language: "English",
        timezone: "(GMT-11:00) International Date Line West",
        currency: "USD",
    });

    const [apiResponse, setApiResponse] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userId_2 = document.cookie.replace(
                /(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,
                "$1"
            );
            const response = await axios.post(
                `${baseURL}api/ProfileUpdate/updateUser`, // Fixed concatenation
                { user_id: userId_2, ...formData }
            );

            // Handling API response
            setApiResponse(response.data.message || "Unknown response");
            if (response.data.message === "User details updated successfully") {
                alert("Data Sotre SUcessfully..!");
            } else if (response.data.message === "All fields are required.") {
                alert("OOPs Some Mistake");
            }
        } catch (error) {
            console.error("Error:", error);
            setApiResponse("Error occurred during the API call");
        }
    };

    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const userId_2 = document.cookie.replace(
            /(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,
            "$1"
        );
        // Fetch the user_id from cookies or wherever you store it
        const userIdFromCookies = userId_2; // Replace this with your method to get the user_id from cookies

        // Make the API call
        axios
            .post(`${baseURL}api/UserDetail/getUserByID`, {
                user_id: userIdFromCookies,
            })
            .then((response) => {
                setUserDetails(response.data.user);
            })
            .catch((error) => {
                console.error("Error fetching user details:", error);
                // Handle errors, show error message, etc.
            });
    }, [navigate]);

    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

        // Display the selected image
        const reader = new FileReader();
        reader.onload = () => {
            setSelectedImage(reader.result);
        };
        reader.readAsDataURL(selectedFile);
    };

    // const handleImageRemove = () => {
    //   // Remove the selected image and show the image input again
    //   setSelectedImage(null);
    // };

    // upload imge code
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const fileSelectedHandler = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        // Preview image
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setPreviewUrl(reader.result);
            }
        };
        reader.readAsDataURL(file);
    };

    const fileUploadHandler = async () => {
        try {
            if (!selectedFile) {
                console.log('Please select a file.');
                return;
            }

            const formData = new FormData();
            formData.append('user_id', '1'); // Replace with your user ID
            formData.append('image', selectedFile);

            const response = await fetch('https://quickmake.graphiglow.in/api/ProfileImageUpdate/updateProfileImage', {
                method: 'POST',
                body: formData,
                headers: {
                    // Add any necessary headers (e.g., authorization token)
                },
            });

            if (!response.ok) {
                throw new Error('Upload failed.');
            }

            console.log('Image uploaded successfully.');
            // Add logic to handle success (e.g., update user profile picture in UI)
        } catch (error) {
            console.error('Error uploading image:', error.message);
        }
    };

    return (
        <div>
            {<Sidebar />}
            <div className="asside">
                <div className="about-first">
                    <div className="row">
                        <div className="col-12 mb-24">
                            <div className="bg-box">
                                <div className="account-details">
                                    <div className="about-page">
                                        <h5>Account Details</h5>
                                        <p>User id is :- {userId}</p>
                                    </div>
                                    <form>
                                        <div className="upload-img">
                                            <div className="show-img">
                                                <div style={{ display: "grid" }}>
                                                    {!selectedImage && (
                                                        <div>
                                                            <input
                                                                type="file"
                                                                style={{ display: "none" }}
                                                                ref={fileInputRef}
                                                                onChange={handleFileChange}
                                                            />
                                                            <img
                                                                src={user}
                                                                alt="User"
                                                                onClick={handleImageClick}
                                                                style={{ cursor: "pointer" }}
                                                            />
                                                        </div>
                                                    )}

                                                    {selectedImage && (
                                                        <div>
                                                            <img
                                                                src={selectedImage}
                                                                alt="Selected"
                                                                style={{ maxWidth: "100%", maxHeight: "400px" }}
                                                            />
                                                            {/* <button onClick={handleImageRemove}>
                                Remove Image
                              </button> */}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div>
                                                <input type="file" onChange={fileSelectedHandler} />
                                                {previewUrl && (
                                                    <div>
                                                        <img src={previewUrl} alt="Preview" style={{ width: '200px', height: '200px' }} />
                                                    </div>
                                                )}
                                                <button onClick={fileUploadHandler}>Upload</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <div className="user-details">
                                    <form className="row" onSubmit={handleSubmit}>
                                        {userDetails ? (
                                            <div className="form-floating lable-col col-md-6 mb-4">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="floatingInput"
                                                    placeholder="name@example.com"
                                                    name="first_name"
                                                    onChange={handleChange}
                                                    // value={userDetails.first_name}
                                                    defaultValue={userDetails.first_name}
                                                    required
                                                />
                                                <label htmlFor="floatingInput">First Name</label>
                                            </div>
                                        ) : (
                                            <p></p>
                                        )}
                                        {userDetails ? (
                                            <div className="form-floating lable-col col-md-6 mb-4">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="floatingInput"
                                                    placeholder="name@example.com"
                                                    name="last_name"
                                                    onChange={handleChange}
                                                    defaultValue={userDetails.last_name}
                                                    required
                                                />
                                                <label for="floatingInput">Last Name</label>
                                            </div>
                                        ) : (
                                            <p></p>
                                        )}

                                        {userDetails ? (
                                            <div className="form-floating lable-col col-md-6 mb-4">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="floatingInput"
                                                    placeholder="name@example.com"
                                                    name="email"
                                                    onChange={handleChange}
                                                    defaultValue={userDetails.email}
                                                    readOnly
                                                />
                                                <label for="floatingInput">E-mail</label>
                                            </div>
                                        ) : (
                                            <p></p>
                                        )}

                                        {userDetails ? (
                                            <div className="form-floating lable-col col-md-6 mb-4">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="floatingInput"
                                                    placeholder="name@example.com"
                                                    name="organizations"
                                                    onChange={handleChange}
                                                    defaultValue={userDetails.organizations}
                                                    required
                                                />
                                                <label for="floatingInput">Organization</label>
                                            </div>
                                        ) : (
                                            <p></p>
                                        )}

                                        {userDetails ? (
                                            <div className="form-floating lable-col col-md-6 mb-4">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="floatingInput"
                                                    placeholder="name@example.com"
                                                    name="mobile_number"
                                                    onChange={handleChange}
                                                    defaultValue={userDetails.mobile_number}
                                                    readOnly
                                                />
                                                <label for="floatingInput">Phone Number</label>
                                            </div>
                                        ) : (
                                            <p></p>
                                        )}

                                        {userDetails ? (
                                            <div className="form-floating lable-col col-md-6 mb-4">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="floatingInput"
                                                    placeholder="name@example.com"
                                                    name="address"
                                                    onChange={handleChange}
                                                    defaultValue={userDetails.address}
                                                    required
                                                />
                                                <label for="floatingInput">Address</label>
                                            </div>
                                        ) : (
                                            <p></p>
                                        )}

                                        {userDetails ? (
                                            <div className="form-floating lable-col col-md-6 mb-4">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="floatingInput"
                                                    placeholder="name@example.com"
                                                    name="state"
                                                    onChange={handleChange}
                                                    defaultValue={userDetails.state}
                                                    required
                                                />
                                                <label for="floatingInput">State</label>
                                            </div>
                                        ) : (
                                            <p></p>
                                        )}

                                        {userDetails ? (
                                            <div className="form-floating lable-col col-md-6 mb-4">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="floatingInput"
                                                    placeholder="name@example.com"
                                                    name="zip"
                                                    onChange={handleChange}
                                                    defaultValue={userDetails.zip}
                                                    required
                                                />
                                                <label for="floatingInput">Zip Code</label>
                                            </div>
                                        ) : (
                                            <p></p>
                                        )}

                                        {userDetails ? (
                                            <div className="form-floating lable-col col-md-6 mb-4">
                                                <input
                                                    className="form-select form-control"
                                                    id="floatingSelectGrid"
                                                    aria-label="Floating label select example"
                                                    name="country"
                                                    onChange={handleChange}
                                                    defaultValue={userDetails.country}
                                                    required
                                                >
                                                    {/* <option selected>USA</option>
                        <option value="1">USA</option>
                        <option value="2">USA</option>
                        <option value="3">USA</option> */}
                                                </input>
                                                <label for="floatingSelectGrid">Country</label>
                                            </div>
                                        ) : (
                                            <p></p>
                                        )}

                                        {userDetails ? (
                                            <div className="form-floating lable-col col-md-6 mb-4">
                                                <select
                                                    className="form-select form-control"
                                                    id="floatingSelectGrid"
                                                    aria-label="Floating label select example"
                                                    name="language"
                                                    onChange={handleChange}
                                                    defaultValue={userDetails.language}
                                                    required
                                                >
                                                    <option selected>English</option>
                                                    <option value="1">English</option>
                                                    <option value="2">Hindi</option>
                                                    <option value="3">Gujrati</option>
                                                </select>
                                                <label for="floatingSelectGrid">Language</label>
                                            </div>
                                        ) : (
                                            <p></p>
                                        )}
                                        {userDetails ? (
                                            <div className="form-floating lable-col col-md-6 mb-4">
                                                <select
                                                    className="form-select form-control"
                                                    id="floatingSelectGrid"
                                                    aria-label="Floating label select example"
                                                    name="timezone"
                                                    onChange={handleChange}
                                                    defaultValue={userDetails.timezone}
                                                    required
                                                >
                                                    <option selected>
                                                        (GMT-11:00) International Date Line West
                                                    </option>
                                                    <option value="1">
                                                        (GMT-11:00) International Date Line West
                                                    </option>
                                                    <option value="2">
                                                        (GMT-11:00) International Date Line West
                                                    </option>
                                                    <option value="3">
                                                        (GMT-11:00) International Date Line West
                                                    </option>
                                                </select>
                                                <label for="floatingSelectGrid">Timezone</label>
                                            </div>
                                        ) : (
                                            <p></p>
                                        )}
                                        {userDetails ? (
                                            <div className="form-floating lable-col col-md-6 mb-4">
                                                <select
                                                    className="form-select form-control"
                                                    id="floatingSelectGrid"
                                                    aria-label="Floating label select example"
                                                    name="currency"
                                                    onChange={handleChange}
                                                    value={userDetails.currency}
                                                    required
                                                >
                                                    {/* <option selected>USD</option> */}
                                                    <option selected value="1">
                                                        INR
                                                    </option>
                                                    <option value="2">USD</option>
                                                    {/* <option value="3">USD</option> */}
                                                </select>
                                                <label for="floatingSelectGrid">Currency</label>
                                            </div>
                                        ) : (
                                            <p></p>
                                        )}
                                        <div className="upload-reset-btn mb-0">
                                            <button className="btn btn-upload">Save changes</button>
                                            <button className="btn btn-reset">Reset</button>
                                        </div>
                                        {apiResponse && (
                                            <div className="mt-3">
                                                <p style={{ color: "red", display: "none" }}>
                                                    {apiResponse}
                                                </p>
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {<Footer />}
            </div>
        </div>
    );
};

export default About;