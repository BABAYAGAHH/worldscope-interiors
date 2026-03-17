import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppFloatButton from "./components/WhatsAppFloatButton";
import Home from "./pages/Home";
import About from "./pages/About";
import InteriorDecoration from "./pages/InteriorDecoration";
import CleaningServices from "./pages/CleaningServices";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-text">
      <ScrollToTop />
      <Navbar />
      <main className="pt-24 sm:pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/interior-decoration" element={<InteriorDecoration />} />
          <Route path="/cleaning-services" element={<CleaningServices />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </div>
  );
}

export default App;
