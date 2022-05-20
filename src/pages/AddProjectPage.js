import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";


const API_URL = "http://localhost:5005";

function AddProjectPage(props) {
    const [description, setDescription] = useState('');
    const [projectLink, setProjectLink] = useState('');
    const [features, setFeatures] = useState('');
    const [madeWith, setMadeWith] = useState('');
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
  
      const requestBody = { description, projectLink, features, madeWith };
      const storedToken = localStorage.getItem("authToken");
  
      axios
        .put(`${API_URL}/api/user/project/create`, requestBody, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((updatedUser) => { 
          navigate(`/profile/${updatedUser.data._id}`);
        })
        .catch((err) => console.log(err));
    };


    return(
<div>
        <form onSubmit={handleSubmit}>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Project Link:</label>
        <textarea
          type="text"
          name="projectLink"
          value={projectLink}
          onChange={(e) => setProjectLink(e.target.value)}
        />

        <label>Features:</label>
        <input
          type="text"
          name="features"
          value={features}
          onChange={(e) => setFeatures(e.target.value)}
        />

        <label>Made With:</label>
        <textarea
          type="text"
          name="madeWith"
          value={madeWith}
          onChange={(e) => setMadeWith(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
      <button>
      <Link to={`/edit`} className="navbar-brand">
            Edit Profile
      </Link>
      </button>
      </div>
    )

}

export default AddProjectPage;