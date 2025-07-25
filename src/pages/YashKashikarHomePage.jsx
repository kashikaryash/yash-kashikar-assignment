import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CategoriesSection from '../components/Categories';
import BrandShowcase from '../components/BrandShowCase';
import FurnitureCollection from '../components/FurnitureCollection';
import FurnitureTips from '../components/FurnitureTips';
import Footer from '../components/Footer';
import LatestArticles from '../components/LatestArticles';
import ProductHeroSlider from '../components/ProductHeroSlider';
import WeeklyBestsellers from '../components/WeeklyBestsellers';
import ProductCollections from './ProductCollections';
import DemosButton from '../components/DemosButton';
import { ChevronUp } from 'lucide-react';

const YashKashikarHomePage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const startY = window.scrollY;
    const duration = 500;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY * (1 - progress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className="scroll-smooth min-h-screen w-full flex flex-col bg-[#FAF9F6] text-gray-900">
      <Navbar />
      <ProductHeroSlider />
      <CategoriesSection />

      <main className="flex-grow w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <WeeklyBestsellers />
        <BrandShowcase />
        <ProductCollections />
        <FurnitureCollection />
        <FurnitureTips />
        <LatestArticles />
        <Outlet />
      </main>

      <Footer />

      {/* Buy Woodmart Button */}
      <button
        className="fixed bottom-20 left-4 sm:left-6 md:left-8 lg:left-12 z-50 bg-black text-white px-4 py-2 text-sm md:text-base rounded-full shadow-lg hover:bg-[#00B207] transition-all flex items-center gap-2"
      >
        <img src="/images/buyproduct.png" alt="Cart" className="w-4 h-4 md:w-5 md:h-5" />
        <span className="hidden xs:inline">Buy Woodmart</span>
      </button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-4 sm:right-6 z-50 bg-white text-black p-2 sm:p-3 rounded-full shadow-lg transition-all"
          aria-label="Scroll to Top"
        >
          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}

      <DemosButton />
    </div>
  );
};

export default YashKashikarHomePage;