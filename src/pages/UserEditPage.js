// src/pages/SignupPage.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import service from "../api/service";

const API_URL = "http://localhost:5005";

function UserEditPage(props) {
  const [email, setEmail] = useState("");
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
  const [project, setProject] = useState("");
  const [links, setLinks] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
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

    service
        .uploadImage(uploadData)
        .then(response => {
            setImageUrl(response.fileUrl);
        })
        .catch(err => console.log("error while uploading the file: ", err));

    };

  const handleProject = (e) => setProject(e.target.value);
  const handleLinks = (e) => setLinks(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      email,
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
      project,
      links,
    };

    axios
      .post(`${API_URL}/auth/edit`, requestBody)
      .then((response) => {
        navigate("/");
      })
      .catch((err) => {
        const errorDescription = err.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="SignupPage">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label>Current Role:</label>
        <input
          type="text"
          name="currentRole"
          value={currentRole}
          onChange={handleCurrentRole}
        />

        <label>About Me:</label>
        <input
          type="text"
          name="aboutMe"
          value={aboutMe}
          onChange={handleAboutMe}
        />
{/* CONTINUE ADDING EDIT FIELDS ON FORM TO FINISH USER EDIT PAGE ON FRONT ENT
 */}
        <label>Contact Info:</label>
        <input
          type="text"
          name="contactInfo"
          value={contactInfo}
          onChange={handleContactInfo}
        />

        <label>Skills:</label>
        <input
          type="text"
          name="skill"
          value={skill}
          onChange={handleSkill}
        />

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

        <label>Project:</label>
        <input
          type="text"
          name="project"
          value={project}
          onChange={handleProject}
        />

        <label>Your Links:</label>
        <input
          type="text"
          name="password"
          value={links}
          onChange={handleLinks}
        />

        <input type="file" onChange={(e) => handleFileUpload(e)}/>

        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

    </div>
  );
}

export default UserEditPage;
