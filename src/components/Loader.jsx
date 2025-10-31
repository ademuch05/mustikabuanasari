import logo from "../assets/logo.png";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-dark/95 z-50 flex justify-center items-center backdrop-blur-xs">
      <img src={logo} alt="" className="w-14 h-14 animate-pulse" />
    </div>
  );
};

export default Loader;
