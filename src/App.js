//import logo from './logo.svg';
//import './App.css';

import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Hero } from "./components/hero";
import { Hobbies } from "./components/hobbies";
import { Navbar } from "./components/navbar";
import { Projects } from "./components/projects";
import { Tech } from "./components/technology";

function App() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background wrapper */}
      <div className="fixed top-0 left-0 -z-10 h-full w-full bg-neutral-950">
        {/* Radial Gradient Background */}
        <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] "></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">

      </div>
      {/* Content wrapper */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Projects />
        <Hobbies />
        <Contact />
      </div>
    </div>
  );
}

export default App;
