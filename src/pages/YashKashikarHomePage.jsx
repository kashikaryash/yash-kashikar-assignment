import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CategoriesSection from '../components/Categories';
import BrandShowcase from '../components/BrandShowCase';
import FurnitureCollection from '../components/FurnitureCollection';
import FurnitureTips from '../components/FurnitureTips';
import Footer from '../components/Footer';
import LatestArticles from '../components/LatestArticles';
import ProductHeroSlider from '../ProductHeroSlider';
import WeeklyBestsellers from '../WeeklyBestsellers';
import ProductCollections from './ProductCollections';

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
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen w-full flex flex-col">
            <Navbar />

            <main className="flex-grow w-full flex-col max-w-screen-2xl mx-auto px-4 py-6">
                <ProductHeroSlider />
                <CategoriesSection />
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
            <button className="fixed bottom-6 left-6 z-50 bg-black text-white px-5 py-2 rounded-full shadow-lg hover:bg-[#00B207] transition-all">
                Buy Woodmart
            </button>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 bg-black text-white p-3 rounded-full shadow-lg hover:bg-[#00B207] transition-all"
                    aria-label="Scroll to Top"
                >
                    ↑
                </button>
            )}
        </div>
    );
};

export default YashKashikarHomePage;
