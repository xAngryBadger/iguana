import FloatingNav from "./components/FloatingNav";
import HeroSection from "./components/HeroSection";
import MenuCarousel from "./components/MenuCarousel";
import AboutParallax from "./components/AboutParallax";
import GallerySection from "./components/GallerySection";
import ReservationSection from "./components/ReservationSection";
import FooterSection from "./components/FooterSection";

export default function App() {
  return (
    <>
      <FloatingNav />
      <main>
        <HeroSection />
        <MenuCarousel />
        <AboutParallax />
        <GallerySection />
        <ReservationSection />
      </main>
      <FooterSection />
    </>
  );
}
