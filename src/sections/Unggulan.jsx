import { UNGGULAN } from "../assets";
import GaleriSlider from "../components/GaleriSlider";

const Unggulan = () => {
  return (
    <section id="unggulan" className="px-6 md:px-16 py-15 ">
      <div className="flex flex-col items-center max-w-[1140px] mx-auto">
        <h2 className="text-xl text-center">UNGGULAN</h2>

        <GaleriSlider data={UNGGULAN} className={"mt-10"} />
      </div>
    </section>
  );
};

export default Unggulan;
