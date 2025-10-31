import logo from "../assets/logo.png";
import border from "../assets/landing/border.svg";
import hero from "../assets/landing/hero.svg";

import { SOSMED } from "../assets/index";
import SosmedSide from "../components/SosmedSide";

const Hero = () => {
  return (
    <section className="flex flex-col min-h-dvh" id="beranda">
      {/* TOP BORDER */}
      <div className="w-full h-14 overflow-hidden">
        <img src={border} alt="" className="h-full xl:w-full object-cover object-center  " />
      </div>

      <div className="flex-1 lg:flex lg:items-center  py-15 px-6 md:px-16 ">
        {/* HERO */}
        <div className="lg:flex-1 flex flex-col md:flex-row gap-15 xl:max-w-[1140px]  xl:mx-auto">
          <div className="md:flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
            <img src={logo} alt="" className="w-24 lg:w-[180px]" />
            <h1 className="text-2xl lg:text-4xl mt-7 lg:mt-9 lg:text-left">MUSTIKA BUANA SARI</h1>
            <p className="lg:text-xl lg:mt-5 max-w-xs mt-1">Sanggar seni dan kreator dakwah wayang golek oleh Hazir Lukman Muharom</p>
            <a href="#unggulan" className="bg-gold-500 text-dark hidden lg:block mt-14 px-6 py-2 rounded-lg transition-colors hover:bg-gold-300">
              Selengkapnya
            </a>
          </div>
          <div className="md:flex-1  flex">
            <img src={hero} alt="" className="w-[260px] lg:w-[400px] mx-auto transition duration-500 hover:scale-110" />
            <SosmedSide />
          </div>
          {/* LINKS SIDE */}
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-4 mt-15 lg:hidden">
          {SOSMED.map((data) => (
            <a href={data.link} target="_blank" className="flex items-center bg-gold-500 w-full text-dark py-3 px-4 rounded-lg" key={data.name}>
              <i className="text-2xl">{data.logo}</i>
              <p className="flex-1 text-center">{data.name}</p>
            </a>
          ))}
        </div>
      </div>

      {/* BOTTOM BORDER */}
      <div className="h-14 overflow-hidden">
        <img src={border} alt="" className="h-full xl:w-full object-cover object-center rotate-180" />
      </div>
    </section>
  );
};

export default Hero;
