import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "./context/auth.context";
import axios from "axios";

import Homepage from "./pages/Homepage";
import ArticleListPage from "./pages/ArticleListPage";
import ProfilePage from "./pages/ProfilePage";
import ErrorPage from "./pages/ErrorPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import UserEditPage from "./pages/UserEditPage";

const API_URL = "http://localhost:5005";

function App(props) {
  const [userInfo, setUserInfo] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    // getUsersInfo();
    axios
      .get(`${API_URL}/api/user/${user._id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setUserInfo(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/article" element={<ArticleListPage />} />
        <Route path="/profile" element={<ProfilePage userInfo={userInfo} />} />
        <Route
          path="/edit"
          element={
            <IsPrivate>
              {" "}
              <UserEditPage userInfo={userInfo} />{" "}
            </IsPrivate>
          }
        />
        {/* NEED TO CREATE: 
-ARTICLE DETAILS PAGE (public view)
-ARTICLE EDIT PAGE    (IsPrivate)
-PROFILE EDIT PAGE    (IsPrivate) DONE 
*/}
        <Route
          path="/signup"
          element={
            <IsAnon>
              {" "}
              <SignupPage />{" "}
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              {" "}
              <LoginPage />{" "}
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
