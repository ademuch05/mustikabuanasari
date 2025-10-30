const GaleriSlider = ({ data, className }) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div className="flex flex-nowrap overflow-auto lg:overflow-hidden lg:w-full gap-6 pb-2">
        {data.map((item, index) => (
          <div className="rounded-xl overflow-hidden min-w-[250px] lg:min-w-[200px] max-w-[400px] " key={index}>
            <img src={item.photo} alt="" className="w-full aspect-4/5 object-cover rounded-xl transition duration-500 hover:scale-110" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GaleriSlider;
