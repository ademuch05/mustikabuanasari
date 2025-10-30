import { GALERI } from "../assets";

const Galeri = () => {
  const PAGINGGALERI = GALERI.slice(0, 12);
  return (
    <section id="galeri" className="px-6 md:px-16 py-15">
      <div className="mx-auto max-w-[1140px]">
        <h2 className="text-center text-xl">GALERI</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3  ">
          {PAGINGGALERI.map((data, index) => (
            <div className="rounded-xl overflow-hidden" key={index}>
              <img src={data.photo} alt="" className="aspect-3/2 object-cover rounded-xl hover:scale-110 transition-discrete duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeri;
