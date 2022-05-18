// src/pages/SignupPage.js

import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import uploadImage from "../api/service";

const API_URL = "http://localhost:5005";

function UserEditPage(props) {
  const [name, setName] = useState("");
  const [currentRole, setCurrentRole] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [skill, setSkill] = useState("");
  const [languages, setLanguages] = useState("");
  const [interests, setInterests] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  // const [project, setProject] = useState("");
  // const [links, setLinks] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleCurrentRole = (e) => setCurrentRole(e.target.value);
  const handleAboutMe = (e) => setAboutMe(e.target.value);
  const handleContactInfo = (e) => setContactInfo(e.target.value);
  const handleSkill = (e) => setSkill(e.target.value);
  const handleLanguages = (e) => setLanguages(e.target.value);
  const handleInterests = (e) => setInterests(e.target.value);
  const handleExperience = (e) => setExperience(e.target.value);
  const handleEducation = (e) => setEducation(e.target.value);
  const handleFileUpload = (e) => {
    const uploadData = new FormData();

    uploadData.append("imageUrl", e.target.files[0]);

    uploadImage(uploadData)
      .then((response) => {
        setImageUrl(response.fileUrl);
      })
      .catch((err) => console.log("error while uploading the file: ", err));
  };

  // const handleProject = (e) => setProject(e.target.value);
  // const handleLinks = (e) => setLinks(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      name,
      currentRole,
      aboutMe,
      contactInfo,
      skill,
      languages,
      interests,
      experience,
      education,
      imageUrl,
      // project,
      // links,
    };

    axios
      .put(`${API_URL}/api/user/${user._id}/edit`, requestBody)
      .then((response) => {
        navigate(`/profile/${user._id}`);
      })
      .catch((err) => {
        const errorDescription = err.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    // getUsersInfo();
    axios
      .get(`${API_URL}/api/user/${user._id}`)
      .then((response) => {
        const userData = response.data;
        console.log(userData)
        setName(userData.name);
        setCurrentRole(userData.currentRole);
        setAboutMe(userData.aboutMe);
        setContactInfo(userData.contactInfo);
        setSkill(userData.skill);
        setLanguages(userData.languages);
        setInterests(userData.interests);
        setExperience(userData.experience);
        setEducation(userData.education);
        setImageUrl(userData.imageUrl);
        // setProject(userData.project);
        // setLinks(userData.links);
      })
      .catch((error) => console.log(error));
  }, [user]);

  return (
    <div className=" container">
      <h1>Edit Your Profile</h1>

      <form onSubmit={handleSignupSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <div>
          <label htmlFor="exampleDataList" className="form-label">
            Current Role:
          </label>
          <input
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type to search..."
            name="currentRole"
            value={currentRole}
            onChange={handleCurrentRole}
          />
          <datalist id="datalistOptions">
            <option value="Full Stack Dev" />
            <option value="Front End Dev" />
            <option value="Back End Dev" />
            <option value="UI/UX Designer" />
          </datalist>
        </div>

        <label>About Me:</label>
        <input
          type="text"
          name="aboutMe"
          value={aboutMe}
          onChange={handleAboutMe}
        />

        <label>Contact Info:</label>
        <input
          type="text"
          name="contactInfo"
          value={contactInfo}
          onChange={handleContactInfo}
        />

        <label>Skills:</label>
        <input type="text" name="skill" value={skill} onChange={handleSkill} />

        <label>Languages:</label>
        <input
          type="text"
          name="languages"
          value={languages}
          onChange={handleLanguages}
        />

        <label>Interests:</label>
        <input
          type="text"
          name="password"
          value={interests}
          onChange={handleInterests}
        />

        <label>Experience:</label>
        <input
          type="text"
          name="experience"
          value={experience}
          onChange={handleExperience}
        />

        <label>Education:</label>
        <input
          type="text"
          name="education"
          value={education}
          onChange={handleEducation}
        />

        {/* <label>Project:</label>
        <input
          type="text"
          name="project"
          value={project}
          onChange={handleProject}
        />
        break these down to each element and create an input for each

        <label>Your Links:</label>
        <input
          type="text"
          name="password"
          value={links}
          onChange={handleLinks}
        /> */}

        <div className="mb-3 container">
          <label htmlFor="formFileSm" className="form-label" />
          <input
            id="formFileSm"
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => handleFileUpload(e)}
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Update Your Information</button>
      </form>
    </div>
  );
}

export default UserEditPage;
