import { TOUR } from "../assets";
import GaleriSlider from "../components/GaleriSlider";

const Tour = () => {
  return (
    <section id="tour" className="px-6 md:px-16 py-15 ">
      <div className="flex flex-col items-center max-w-[1140px] mx-auto">
        <h2 className="text-xl lg:text-2xl text-gold-500 text-center">TOUR</h2>

        <GaleriSlider data={TOUR} className={"mt-10"} />
      </div>
    </section>
  );
};

export default Tour;
