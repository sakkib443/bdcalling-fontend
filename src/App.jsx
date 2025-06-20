import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Page/Home/Home";
import Root from "./Layout/Root";
import Course from "./Page/Courses/Course";
import Events from "./Page/Events/Events";
import About from "./Page/About/About";
import Contact from "./Page/Contact/Contact";
import LoginPage from "./Page/Auth/LoginPage";
import RegisterPage from "./Page/Auth/RegisterPage";
import SingleCourse from "./Page/Single Course/SingleCourse";
import OurTeam from "./Page/Our Team/OurTeam";
import Certification from "./Page/Certification/Certification";
import OfferModal from "./Components/OfferModel";
import Seminar from "./Page/Seminar/Seminar";
import SuccessStory from "./Page/Success Story/SuccessStory";
import Mentors from "./Page/Mentors/Mentors";

function App() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("bdc_session_seen_offer");

    if (!hasSeenPopup && location.pathname === "/") {
      const timer = setTimeout(() => {
        setShowModal(true);
        sessionStorage.setItem("bdc_session_seen_offer", "true");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <>
      {showModal && <OfferModal onClose={() => setShowModal(false)} />}

      <div className={showModal && location.pathname === "/" ? "" : ""}>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="courses" element={<Course />} />
            <Route path="events" element={<Seminar></Seminar>} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<RegisterPage />} />
            <Route path="/courses/:id" element={<SingleCourse />} />
            <Route path="team" element={<OurTeam />} />
            <Route path="certification" element={<Certification />} />
            <Route path="success-story" element={<SuccessStory />} />
            <Route path="mentors" element={<Mentors></Mentors>} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
