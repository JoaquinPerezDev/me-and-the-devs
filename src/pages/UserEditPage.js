// src/pages/SignupPage.js

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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
  const handleImageUrl = (e) => setImageUrl(e.target.value);
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
      .post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate("/login");
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
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  );
}

export default UserEditPage;
