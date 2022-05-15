import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

function AboutPage() {
//   const [userInfo, setUserInfo] = useState([]);

//   const getUsersInfo = () => {
//     axios
//       .get(`${API_URL}/api/about`)
//       .then((response) => setUserInfo(response.data))
//       .catch((error) => console.log(error));
//   };

//   // We set this effect will run only once, after the initial render
//   // by setting the empty dependency array - []
//   useEffect(() => {
//     getUsersInfo();
//   }, [] );
// THE ABOVE CODE NEEDS TO BE REPURPOSED TO FETCH THE CURRENT USER'S PROFILE INFORMATION
// SO THAT THE USER CAN UPDATE THEIR PUBLIC PROFILE PAGE


        return (
            <div>
            <h1>The "Me" in Me & The Devs</h1>
    
            {/* Page to be able to modify your profile */}
    
    
            </div>
        )



}

export default AboutPage;