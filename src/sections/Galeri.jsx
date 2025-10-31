import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { GALERI } from "../assets";

const Galeri = () => {
  const PAGINGGALERI = GALERI.slice(0, 12);
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi (ms)
      once: true, // animasi hanya jalan sekali
      offset: 100, // jarak sebelum muncul
    });
  }, []);

  return (
    <section id="galeri" className="px-6 md:px-16 py-15">
      <div className="mx-auto max-w-[1140px]">
        <h2 className="text-center  text-2xl text-gold-500">GALERI</h2>
        <div className="mt-7 md:mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3  ">
          {PAGINGGALERI.map((data, index) => (
            <div className="rounded-xl overflow-hidden group transition-all duration-500 hover:scale-105 border-2 border-gold-600 cursor-pointer" key={index} data-aos="fade-up">
              <img src={data.photo} alt="" className="aspect-3/2 object-cover group-hover:scale-110 transition-discrete duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeri;
