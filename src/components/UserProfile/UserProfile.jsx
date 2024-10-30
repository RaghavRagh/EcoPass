import { useState } from "react";
import "./UserProfile.scss";

import ProfileBanner from "../../assets/profile-banner.jpg";
import ProfilePic from "../../assets/avatar.png";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({});
  const [profileDetails, setProfileDetails] = useState({
    name: "Ravi Bhaskar",
    email: "ravi.bhaskar@gmail.com",
    phone: "+91 7903 258 352",
    address: "123 Main Street, City, Country",
    password: "",
    profileImage: ProfilePic,
  });
  const [originalProfileDetails, setOriginalProfileDetails] = useState({
    ...profileDetails,
  });
  const [passwordVisible, setPasswordVisible] = useState(false); // For password visibility toggle

  // Handle input changes when editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileDetails({ ...profileDetails, [name]: value });
  };

  // Handle profile image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileDetails({ ...profileDetails, profileImage: reader.result });
      };
      reader.readAsDataURL(file); // Convert image to base64
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Validate form inputs including password
  const validateForm = () => {
    const newErrors = {};

    if (!profileDetails.name.trim()) {
      newErrors.name = "Name is required.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(profileDetails.email)) {
      newErrors.email = "Invalid email format.";
    }

    const phonePattern = /^[0-9-\s]+$/;
    if (!phonePattern.test(profileDetails.phone)) {
      newErrors.phone =
        "Phone number can only contain numbers, spaces, or dashes.";
    }

    if (!profileDetails.address.trim()) {
      newErrors.address = "Address is required.";
    }

    // Password validation: minimum 8 characters, including letters and numbers
    if (!profileDetails.password || profileDetails.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    } else if (
      !/[A-Za-z]/.test(profileDetails.password) ||
      !/[0-9]/.test(profileDetails.password)
    ) {
      newErrors.password = "Password must contain both letters and numbers.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle entering edit mode and storing the original details
  const handleEditClick = () => {
    setOriginalProfileDetails({ ...profileDetails }); // Store original profile details
    setIsEditing(true);
  };

  // Handle saving the updated profile
  const handleSave = () => {
    if (validateForm()) {
      // Add your save logic here (e.g., API call)
      setIsEditing(false); // Toggle back to view mode after saving
    }
  };

  // Cancel edit mode and revert changes
  const handleCancel = () => {
    setProfileDetails({ ...originalProfileDetails }); // Revert to original details
    setIsEditing(false); // Toggle back to view mode
    setErrors({});
  };

  return (
    <div className="user-profile-modern">
      <div className="profile-header">
        <div className="profile-cover">
          <img
            className="cover-image"
            src={ProfileBanner}
            alt="Profile Cover"
          />
        </div>
        <div className="profile-picture">
          <img src={profileDetails.profileImage} alt="Profile" />
        </div>
        <div className="profile-info">
          {!isEditing && (
            <>
              <h2>{profileDetails.name}</h2>
              <button onClick={handleEditClick} className="edit-button">
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>

      <div className="profile-body">
        <div className="profile-card">
          <h3>Profile Details</h3>
          {!isEditing ? (
            <ul className="profile-details">
              <li>
                <span>Name:</span> {profileDetails.name}
              </li>
              <li>
                <span>Email:</span> {profileDetails.email}
              </li>
              <li>
                <span>Phone:</span> {profileDetails.phone}
              </li>
              <li>
                <span>Address:</span> {profileDetails.address}
              </li>
              {/* Password should not be displayed in view mode */}
            </ul>
          ) : (
            <div className="edit-details-form">
              {/* Edit Profile Name */}
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={profileDetails.name}
                  onChange={handleInputChange}
                />
                {errors.name && <p className="error-message">{errors.name}</p>}
              </div>

              {/* Edit Profile Image */}
              <div className="form-group">
                <label>Profile Picture:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="upload-image-input"
                />
              </div>

              {/* Edit Email */}
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={profileDetails.email}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <p className="error-message">{errors.email}</p>
                )}
              </div>

              {/* Edit Phone */}
              <div className="form-group">
                <label>Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={profileDetails.phone}
                  onChange={handleInputChange}
                />
                {errors.phone && (
                  <p className="error-message">{errors.phone}</p>
                )}
              </div>

              {/* Edit Address */}
              <div className="form-group">
                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  value={profileDetails.address}
                  onChange={handleInputChange}
                />
                {errors.address && (
                  <p className="error-message">{errors.address}</p>
                )}
              </div>

              {/* Edit Password */}
              <div className="form-group">
                <label>Password:</label>
                <div className="input-form-group">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    className="form-control"
                    value={profileDetails.password}
                    onChange={handleInputChange}
                  />
                  <span className="input-group-text ms-2">
                    <i
                      type="button"
                      className={
                        passwordVisible ? "bi bi-eye-slash" : "bi bi-eye"
                      }
                      onClick={togglePasswordVisibility}
                      style={{ cursor: "pointer" }}
                    ></i>
                  </span>
                </div>
                {errors.password && (
                  <p className="error-message">{errors.password}</p>
                )}
              </div>

              {/* Save and Cancel buttons */}
              <div className="edit-actions">
                <button onClick={handleSave} className="btn btn-success">
                  Save
                </button>
                <button onClick={handleCancel} className="btn btn-danger">
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default UserProfile;
