import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import asd from "../assets/logoadsfad.jpg";

export const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center">
        {/* Style the image */}
        <img 
          className="m-2 h-16 w-16 rounded-full object-cover" 
          src={asd} 
          alt="logo" 
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white-600">
       <a href="https://www.linkedin.com/in/dheeraj-kumar-b4a298229/" target="new"><FaLinkedin className="hover:text-blue-700 cursor-pointer" /></a> 
        <a href="https://www.instagram.com/dheeraj_1019/" target="new"><FaFacebook className="hover:text-blue-500 cursor-pointer" /></a>
        <a href="https://github.com/dheeraj1019" target="new"><FaGithub className="hover:text-gray-800 cursor-pointer" /></a>
        <a href="https://www.instagram.com/dheeraj_1019/" target="new"><FaInstagram className="hover:text-pink-500 cursor-pointer" /></a>
      </div>
    </nav>
  );
};
