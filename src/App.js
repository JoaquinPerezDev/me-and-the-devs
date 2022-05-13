import "./App.css";
import { Routes, Route } from "react-router-dom";

import Homepage from './pages/Homepage';
import ArticlePage from './pages/ArticlePage';
import ProfilePage from './pages/Profilepage';
import AboutPage from './pages/Aboutpage';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
    <Navbar />

    <Routes>
    <Route path="/" element={ <Homepage />} />
    <Route path="/article" element={ <ArticlePage />} />
    <Route path="/about" element={ <AboutPage />} />
    <Route path="/profile" element={ <ProfilePage />} />

    </Routes>
    </div>
  );
}

export default App;
