const GaleriSlider = ({ data, className }) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div className="flex flex-nowrap overflow-auto lg:overflow-x-hidden lg:w-full gap-6 py-3">
        {data.map((item, index) => (
          <div
            className="group hover:-translate-y-3 backdrop-blur-sm hover:shadow-lg hover:shadow-gold-700/80 rounded-xl overflow-hidden min-w-[250px] lg:min-w-[200px] max-w-[400px]  transition duration-500 cursor-pointer"
            key={index}
          >
            <img src={item.photo} alt="" className="w-full aspect-4/5 object-cover rounded-xl transition duration-500 group-hover:scale-110" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GaleriSlider;
