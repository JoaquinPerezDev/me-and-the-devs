import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";



const API_URL = "http://localhost:5005";

function AddLinkPage(props) {
    const [gitHub, setGitHub] = useState('');
    const [linkedIn, setLinkedIn] = useState('');
    const [dev, setDev] = useState('');
    const [medium, setMedium] = useState('');
    const [twitter, setTwitter] = useState('');

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const handleGitHub = (e) => setGitHub(e.target.value);
    const handleLinkedIn = (e) => setLinkedIn(e.target.value);
    const handleDev = (e) => setDev(e.target.value);
    const handleMedium = (e) => setMedium(e.target.value);
    const handleTwitter = (e) => setTwitter(e.target.value);

    const handleSubmit = (e) => {
      e.preventDefault();
  
      const requestBody = { gitHub, linkedIn, dev, medium, twitter };
      const storedToken = localStorage.getItem("authToken");
  
      axios
        .put(`${API_URL}/api/user/link/create`, requestBody, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((updatedUser) => { 
          navigate(`/profile/${updatedUser.data._id}`);
        })
        .catch((err) => console.log(err));
    };

    useEffect(() => {
      // getUsersInfo();
      axios
        .get(`${API_URL}/api/user/${user._id}`)
        .then((response) => {
          const userData = response.data;
          setGitHub(userData.link.gitHub)
          setLinkedIn(userData.link.linkedIn)
          setDev(userData.link.dev)
          setMedium(userData.link.medium)
          setTwitter(userData.link.twitter)
          console.log(userData)

        })
        .catch((error) => console.log(error));
    }, [user]);

    return(
      <div>
        <form onSubmit={handleSubmit}>
        <div>
        <label>Github:</label>
        <input
          type="text"
          name="github"
          value={gitHub}
          onChange={handleGitHub}
        />

        <label>LinkedIn:</label>
        <input
          type="text"
          name="linkedin"
          value={linkedIn}
          onChange={handleLinkedIn}
        />
        <label>Dev:</label>
        <input
          type="text"
          name="dev"
          value={dev}
          onChange={handleDev}
        />
        <label>Medium:</label>
        <input
          type="text"
          name="medium"
          value={medium}
          onChange={handleMedium}
        />
        <label>Twitter:</label>
        <input
          type="text"
          name="twitter"
          value={twitter}
          onChange={handleTwitter}
        />
        </div>
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

export default AddLinkPage;