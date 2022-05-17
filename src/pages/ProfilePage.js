import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";

function ProfilePage(props) {
    const [userInfo, setUserInfo] = useState([]);
    // const [email, setEmail] = useState("");
    // const [name, setName] = useState("");
    // const [currentRole, setCurrentRole] = useState("");
    // const [aboutMe, setAboutMe] = useState("");
    // const [contactInfo, setContactInfo] = useState("");  
    // const [skill, setSkill] = useState("");
    // const [languages, setLanguages] = useState("");
    // const [interests, setInterests] = useState("");
    // const [experience, setExperience] = useState("");
    // const [education, setEducation] = useState("");
    // const [imageUrl, setImageUrl] = useState("");
    // const [project, setProject] = useState("");
    // const [links, setLinks] = useState("");
    // THESE ARE FOR SETTING EACH PROFILE SECTION'S DISPLAYED INFO
    const { userId } = useParams();

    // We set this effect will run only once, after the initial render
    // by setting the empty dependency array - []
    useEffect(() => {
      // getUsersInfo();
      axios
        .get(`${API_URL}/api/user/${userId}`)
        .then((response) => setUserInfo(response.data))
        .catch((error) => console.log(error));
    }, [userId] );

  return (
    <div>
      <h1>The "Me" in Me & The Devs</h1>
      {/* USER's PUBLIC PROFILE VIEW PAGE */}

    {/* 
    1) Created this page to be able to view a selected user's profile
    page. In this page, you will get information about the user:
    profile banner with prof pic, name, mini-about me section and 
    currently working at X place or Y project.
    
    2) This page will also include sections for the user to display 
    his skills, prev exp, prev edu, recent project, linx to socials
    
     */}

     {/*  PRELIMINARY STRUCTURE ORDER TOP-TO-BOTTOM FOR USER PROFILE PAGE*/}

     {/* 
     <>
     NAVBAR 
     
     TITLE "${USER._ID}"
     PROFILE PICTURE IN THE CENTER 

     <H1> THE DETAILS </H1> 
     <H3>SUB SECTION BELOW TITLE GIVING BRIEF OVERVIEW OF THE SECTION</H3>
     **EACH OF THE NEXT 5 SECTIONS WILL HAVE THIS SAME REPEATABLE DESIGN WITH 1 CARD**
     
      <CARD BODY> UNORDERED LIST: {
        NAME
        WHERE YOU'RE BASED
        CURRENT ROLE            (((THESE SECTIONS WILL BE LINKED TO 
        CURRENT PROJECT            ITS CORRESPONDING PHYSICAL SECTION 
        SMALL ABOUT ME              ON THE PAGE)))
        SOCIAL MEDIA
        CONTACT INFORMATION
      }
      </ CARD BODY>

      <H1> THE SKILLS </H1> 
      <H3>SUB SECTION BELOW TITLE GIVING BRIEF OVERVIEW OF THE SECTION</H3>

      <CARD BODY> UNORDERED LIST: {
        -10 SKILLS YOU'RE ALWAYS 
         LOOKING FORWARD TO EXERCISING
        -LANGUAGES
        -INTERESTS              
      }
      </ CARD BODY>

    <H1> THE EXPERIENCE </H1> 
    <H3>SUB SECTION BELOW TITLE GIVING BRIEF OVERVIEW OF THE SECTION</H3>

      <CARD BODY> UNORDERED LIST: {
        -EDUCATION 
        -EXPERIENCE              
      }
      </ CARD BODY>

    <H1> THE PROJECTS </H1> 
    <H3>SUB SECTION BELOW TITLE GIVING BRIEF OVERVIEW OF THE SECTION</H3>

      3 HORIZONTAL CARDS LIKE GIFT CARDS EXAMPLE https://react-bootstrap.github.io/components/cards/
      <CARD BODY>  
      <IMAGE>PROJECT PHOTO</IMAGE> 
      <H1>PROJECT TITLE</H1>
      <P>PROJECT DETAILS</P>
      </ CARD BODY>

    <H1> THE LINKS </H1> 
    <H3>SUB SECTION BELOW TITLE GIVING BRIEF OVERVIEW OF THE SECTION</H3>

      <CARD BODY>  
      IN ORDER OF MOST FREQUENTEDLY USED
      UNORDERED LIST
      -GITHUB
      -LINKEDIN
      -MEDIUM
      -DEV
      -TWITTER
      </ CARD BODY>

          <H1> THE CONTENT </H1> 
    <H3>SUB SECTION BELOW TITLE GIVING BRIEF OVERVIEW OF THE SECTION</H3>

      4 SQUARE CARDS LIKE GIFT CARDS EXAMPLE https://react-bootstrap.github.io/components/cards/
      <CARD BODY>  
      IN ORDER OF MOST FREQUENTEDLY PUBLISHED, A PLUS IF IT CAN BE ORDERED BY MOST VIEWED/REACTED TO
      </ CARD BODY>

    <H1> ACTIVITY FEED </H1> 
    <H3>SUB SECTION BELOW TITLE GIVING BRIEF OVERVIEW OF THE SECTION</H3>

      3 HORIZONTAL CARDS LIKE GIFT CARDS EXAMPLE https://react-bootstrap.github.io/components/cards/
      <CARD BODY>  
        BANNER STYLE CARDS SIMILAR TO LINKEDIN NOTIS FOR COMMENT POSTS ETC
      </ CARD BODY>


      <NAVBAR />
     </>
     */}
    </div>
  );
}

export default ProfilePage;
