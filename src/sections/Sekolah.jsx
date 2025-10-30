import { SEKOLAH } from "../assets";
import GaleriSlider from "../components/GaleriSlider";

const Sekolah = () => {
  return (
    <section id="sekolah" className="px-6 md:px-16 py-15 ">
      <div className="flex flex-col items-center max-w-[1140px] mx-auto">
        <h2 className="text-xl text-center">SEKOLAH</h2>

        <GaleriSlider data={SEKOLAH} className={"mt-10"} />
      </div>
    </section>
  );
};

export default Sekolah;
