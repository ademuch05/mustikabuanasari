import border from "../assets/landing/border.svg";
import logo from "../assets/logo.png";
import { SOSMED } from "../assets";

const Footer = () => {
  return (
    <>
      <footer className="bg-black pt-10 pb-4 px-6 md:px-16 mt-15">
        <div className=" flex flex-col items-center md:flex-row gap-10 max-w-[1140px] mx-auto">
          <div className="flex-1 flex items-center gap-4">
            <img src={logo} alt="" className="w-15" />
            <div className="">
              <h3 className="">MUSTIKA BUANA SARI</h3>
              <p className="text-xs">Copyrights © 2025 Mustika Buana Sari.</p>
              <p className="text-xs">
                Develop by{" "}
                <a href="https://amdev05.vercel.app" target="_blank" className="text-sky-300">
                  Amdev
                </a>
                .
              </p>
            </div>
          </div>
          <div className="flex-1 flex items-center md:justify-end  gap-4 ">
            {SOSMED.map((data) => (
              <a href={data.link} key={data.name} className="bg-gold-500 text-dark p-2 text-xl rounded-lg h-fit">
                {data.logo}
              </a>
            ))}
          </div>
        </div>
      </footer>
      <div className="h-14 bg-black">
        <img src={border} alt="" className="h-full object-cover rotate-180" />
      </div>
    </>
  );
};

export default Footer;
