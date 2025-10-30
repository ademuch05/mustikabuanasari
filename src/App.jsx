import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Galeri from "./sections/Galeri";
import Hero from "./sections/Hero";
import Sekolah from "./sections/Sekolah";
import Tour from "./sections/Tour";
import Unggulan from "./sections/Unggulan";

function App() {
  return (
    <>
      <Hero />
      <Navbar />
      <Unggulan />
      <Sekolah />
      <Tour />
      <Galeri />
      <Footer />
    </>
  );
}

export default App;
