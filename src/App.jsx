import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import Nav from "./header/nav";
import Home from "./header/home";
import AboutUs from "./header/about_us";
import Services from "./header/services";
import Projects from "./header/project";
import Team from "./header/team";
import Test from "./header/test";
import Contact from "./header/contact";
import Footer from "./footer/last";

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.replace("/", "") || "home";
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToSection />
      <Nav />

      <Routes>
        <Route
          path="*"
          element={
            <>
              <div id="home"><Home /></div>
              <div id="about"><AboutUs /></div>
              <div id="services"><Services /></div>
              <div id="projects"><Projects /></div>
              <div id="team"><Team /></div>
              <div id="testimonials"><Test /></div>
              <div id="contact"><Contact /></div>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
