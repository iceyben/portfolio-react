import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Experience from "./Components/Experience";
import About from "./Components/About";
import Education from "./Components/Education";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts";
import SkillsSlider from "./Components/SkillsSlider";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" space-y-5 transform-none overflow-hidden ">
      <div className="sm:pb-5">
      <Header />
      </div>
      <div className="lg:px-20">
      <HeroSection />
      <Experience />
      <About />
      <Education />
      <SkillsSlider />
      <Services />
      <Projects />
      <div className="sm:grid sm:grid-cols-2 ">
        <Contacts />
        <Footer />
      </div>
    </div>
    </div>
  );
}

export default App;
