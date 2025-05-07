
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Mohammed Abubakar</h3>
            <p className="text-gray-400 mt-2">Software Developer</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/mohdabubakar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-primary p-3 rounded-full transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:abubakarsiddiqh1@gmail.com"
              className="bg-gray-800 hover:bg-primary p-3 rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="#"
              className="bg-gray-800 hover:bg-primary p-3 rounded-full transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Mohammed Abubakar. All rights reserved.
          </p>
          
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
