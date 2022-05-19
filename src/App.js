import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";


import Homepage from "./pages/Homepage";
import ArticleListPage from "./pages/ArticleListPage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import UserEditPage from "./pages/UserEditPage";
import ArticleDetailsPage from "./pages/ArticleDetailsPage";
import ArticleEditPage from "./pages/ArticleEditPage";


function App() {



  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<ArticleListPage />} />
        <Route path="/articles/:articleId" element={<ArticleDetailsPage />} />
        <Route path="/articles/edit/:articleId" element={ <IsPrivate><ArticleEditPage /></IsPrivate>} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
        <Route
          path="/edit"
          element={
            <IsPrivate>
              {" "}
              <UserEditPage />{" "}
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
