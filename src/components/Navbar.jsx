import logo from "../assets/russel.jpg"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{x:100, opacity:0}}
      animate={{x:0, opacity:1}}
      transition={{duration:1, delay:1.2}}
      className="mb-20 flex items-center justify-between py-6"
    >
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-12 rounded-3xl border-3" src={logo} alt="logo"/>
      </div>
      <div className="m-8 flex items-center gap-4 text-2xl">
        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/russel-havana-99017336a/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          <FaLinkedin/>
        </a>
        
        {/* GitHub */}
        <a 
          href="https://github.com/russhengan" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors duration-300"
        >
          <FaGithub />
        </a>
        
        {/* Facebook */}
        <a 
          href="https://www.facebook.com/russhavana24" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors duration-300"
        >
          <FaFacebook />
        </a>
        
        {/* Instagram */}
        <a 
          href="https://www.instagram.com/yorusswtf/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-colors duration-300"
        >
          <FaInstagram/>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar