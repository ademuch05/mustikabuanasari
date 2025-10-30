import { useState } from "react";
import logo from "../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" bg-black px-6 md:px-16 py-3 sticky top-0 z-10">
      <div className="max-w-[1140px] mx-auto flex justify-between items-center relative">
        <div className="flex items-center gap-4">
          <img src={logo} alt="" className="w-8" />
          <h3 className="">MUSTIKA BUANA SARI</h3>
        </div>
        <FiMenu className="text-2xl lg:hidden cursor-pointer" onClick={() => setIsOpen(true)} />
        <div
          className={`fixed lg:static flex flex-col lg:flex-row items-center py-20 lg:py-0 gap-10 text-sm w-screen h-screen lg:w-auto lg:h-auto top-0 left-0 bg-neutral-300 lg:bg-transparent text-dark lg:text-white transition-all duration-300 ${
            isOpen ? "" : "translate-x-full lg:translate-x-0"
          }`}
        >
          <a href="#beranda" className="" onClick={() => setIsOpen(false)}>
            BERANDA
          </a>
          <a href="#unggulan" className="" onClick={() => setIsOpen(false)}>
            UNGGULAN
          </a>
          <a href="#sekolah" className="" onClick={() => setIsOpen(false)}>
            SEKOLAH
          </a>
          <a href="#tour" className="" onClick={() => setIsOpen(false)}>
            TOUR
          </a>
          <a href="#galeri" className="" onClick={() => setIsOpen(false)}>
            GALERI
          </a>
          <a href="#kontak" className="" onClick={() => setIsOpen(false)}>
            KONTAK
          </a>
          <IoClose className="absolute right-9 md:right-18 top-4 text-3xl cursor-pointer lg:hidden" onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
