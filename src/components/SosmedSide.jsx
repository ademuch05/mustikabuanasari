import { useState } from "react";
import { SOSMED } from "../assets";

const SosmedSide = () => {
  const [isShow, setIsShow] = useState(null);
  function showName(index) {
    setIsShow(() => index);
  }

  return (
    <div className="hidden lg:flex flex-col gap-6">
      {SOSMED.map((data, index) => (
        <a href={data.link} target="_blank" className="relative flex gap-2 cursor-pointer" key={data.name} onMouseEnter={() => showName(index)} onMouseLeave={() => setIsShow(null)}>
          <p
            className={`flex-1   h-12 leading-11  rounded-l-lg text-end text-sm text-nowrap absolute right-12 transition-discrete  overflow-hidden transform origin-right text-gold-500 ${
              isShow == index ? "max-w-52 px-6 border-2  border-gold-500 bg-dark/90 duration-300" : "max-w-0 duration-100"
            }`}
          >
            {data.username}
          </p>
          <div className={`text-xl border-2 border-gold-500  p-3  box-border transition-all duration-300 ${isShow == index ? "bg-gold-500 text-dark rounded-r-lg" : "text-gold-500 rounded-lg "}`}>
            {data.logo}
          </div>
        </a>
      ))}
    </div>
  );
};

export default SosmedSide;
