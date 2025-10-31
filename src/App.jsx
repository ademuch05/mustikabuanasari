import { useEffect, useState } from "react";

import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Galeri from "./sections/Galeri";
import Hero from "./sections/Hero";
import Sekolah from "./sections/Sekolah";
import Tour from "./sections/Tour";
import Unggulan from "./sections/Unggulan";

function App() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    if (hasLoaded) {
      setLoading(false);
      setVisible(true); // langsung tampil tanpa loader
      return;
    }

    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
      sessionStorage.setItem("hasLoaded", "true");

      // tambahkan delay kecil supaya konten muncul smooth
      setTimeout(() => setVisible(true), 100);
    }, 2000); // durasi loader

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}

      {!loading && (
        <main className={`transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
          <Hero />
          <Navbar />
          <Unggulan />
          <Sekolah />
          <Tour />
          <Galeri />
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;
