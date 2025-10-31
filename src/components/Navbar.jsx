import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const sections = ["beranda", "unggulan", "sekolah", "tur", "galeri", "kontak"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && scrollY >= section.offsetTop - 100) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className=" bg-black px-6 md:px-16 py-3 sticky top-0 z-10">
      <div className="max-w-[1140px] mx-auto flex justify-between items-center relative">
        <a href="" className="flex items-center gap-4">
          <img src={logo} alt="" className="w-8" />
          <h3 className="">MUSTIKA BUANA SARI</h3>
        </a>
        <FiMenu className="text-2xl lg:hidden cursor-pointer" onClick={() => setIsOpen(true)} />
        <nav
          className={`fixed lg:static flex flex-col lg:flex-row items-center py-20 lg:py-0 gap-10 text-sm w-screen h-screen lg:w-auto lg:h-auto top-0 left-0 bg-neutral-300 lg:bg-transparent text-dark lg:text-white transition-all duration-300 ${
            isOpen ? "" : "translate-x-full lg:translate-x-0"
          }`}
        >
          {sections.map((data, index) => (
            <a href={`#${data}`} key={index} className={`transition hover:text-gold-300 ${activeSection === data ? "text-gold-500" : ""}`} onClick={() => setIsOpen(false)}>
              {data.toUpperCase()}
            </a>
          ))}

          <IoClose className="absolute right-9 md:right-18 top-4 text-3xl cursor-pointer lg:hidden" onClick={() => setIsOpen(false)} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
