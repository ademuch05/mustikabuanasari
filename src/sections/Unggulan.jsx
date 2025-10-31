import { UNGGULAN } from "../assets";
import GaleriSlider from "../components/GaleriSlider";

const Unggulan = () => {
  return (
    <section id="unggulan" className="px-6 md:px-16 py-15 ">
      <div className="flex flex-col items-center max-w-[1140px] mx-auto">
        <h2 className="text-2xl text-center text-gold-500 font-bold">UNGGULAN</h2>

        <GaleriSlider data={UNGGULAN} className={"mt-5 md:mt-10"} />
      </div>
    </section>
  );
};

export default Unggulan;
