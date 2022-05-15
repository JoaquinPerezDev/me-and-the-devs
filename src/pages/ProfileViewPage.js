import { useState, useEffect } from "react";

function ProfileViewPage() {
  const [profile, setProfile] = useState([]);
 
  // This effect will run only once on initial render.
  // To do it we set the dependency array empty [].
  // useEffect(() => {
  //   setProfile();
  // }, []);
 
  return (
    <div>
      <h2>My Profile</h2>
      {/* {profile.map((profile) => {
        return (
          <div key={profile.id} className="project">
            <h3>{profile.name}</h3>
            <img src="" alt="profile">{profile.imageUrl}</img> */}
          {/* </div>
        );
    })} */}
    {/* 
    1) Created this page to be able to view a selected user's profile
    page. In this page, you will get information about the user:
    profile banner with prof pic, name, mini-about me section and 
    currently working at X place or Y project.
    
    2) This page will also include sections for the user to display 
    his skills, prev exp, prev edu, recent project, linx to socials
    
     */}
    </div>
  );
}
 
export default ProfileViewPage;