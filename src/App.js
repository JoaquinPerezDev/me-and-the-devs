import "./App.css";
import { Routes, Route } from "react-router-dom";

import Homepage from './pages/Homepage';
import ArticleListPage from './pages/ArticleListPage';
import ProfileViewPage from './pages/ProfileViewPage';
import AboutPage from './pages/Aboutpage';
import ErrorPage from './pages/ErrorPage';
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Navbar from './components/Navbar';
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";


function App() {
  return (
    <div className="App">
    <Navbar />

    <Routes>
    <Route path="/" element={ <Homepage />} />
    <Route path="/article" element={ <ArticleListPage />} />
    <Route path="/about" element={ <IsPrivate> <AboutPage /> </IsPrivate> } />
    <Route path="/profile" element={ <ProfileViewPage />} />
{/* NEED TO CREATE: 
-ARTICLE DETAILS PAGE (public view)
-ARTICLE EDIT PAGE    (IsPrivate)
-PROFILE EDIT PAGE    (IsPrivate)
*/}
    <Route path="/signup" element={ <IsAnon> <SignupPage /> </IsAnon>} />
    <Route path="/login" element={ <IsAnon> <LoginPage /> </IsAnon>} />

    </Routes>
    </div>
  );
}

export default App;
