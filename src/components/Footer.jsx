import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f2027] via-[#2c5364] to-[#1c1c1c] text-white py-10 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] opacity-10 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-3">Contact</h3>
            <p className="text-sm leading-relaxed">
              Email:{" "}
              <a
                href="mailto:your.email@example.com"
                className="underline hover:text-[#fffaeb]"
              >
                krishanukabir@gmail.com
              </a>
              <br />
              Location: Dhaka, Bangladesh
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-3">Follow Me</h3>
            <div className="flex space-x-4 text-xl">
              <a
                href="https://github.com/Krishanu-Kabir-Sparsha"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#fffaeb]"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/krishanu-kabir/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#fffaeb]"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/krishanukabir.sparsha/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#fffaeb]"
              >
                <FaFacebook />
              </a>
              <a href="mailto:krishanukabir@gmail.com" className="hover:text-[#fffaeb]">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Quick Links or Logo */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <ul className="text-sm leading-relaxed">
              {/* <li>
                <a href="#projects" className="hover:text-[#fffaeb]">
                  Projects
                </a>
              </li> */}
              <li>
                <a href="#about" className="hover:text-[#fffaeb]">
                  About Me
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#fffaeb]">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/cv.pdf"
                  download="Krishanu_Kabir_Resume.pdf"
                  className="hover:text-[#fffaeb]"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center md:text-left z-10">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Krishanu Kabir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
