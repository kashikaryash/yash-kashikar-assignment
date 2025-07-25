import {
  Search,
  ShoppingCart,
  User,
  Phone,
  Shuffle,
  Heart,
} from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { t } = useTranslation();

  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("categories");

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setScrolled(currentY > 100);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className="w-full text-sm relative z-50">
      {/* Top Bar */}
      <div className="bg-[#FAF9F6] border-b border-gray-200 hidden md:block">
        <div className="max-w-screen-2xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <a href="#" className="text-gray-600 hover:text-black">{t("giftCards")}</a>
            <a href="#" className="text-gray-600 hover:text-black">{t("showrooms")}</a>
            <a href="#" className="text-gray-600 hover:text-black">{t("aboutUs")}</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 text-gray-600 text-sm">
              <Phone className="w-5 h-5 text-gray-500" />
              <span>{t("contactNumber")}</span>
              <span className="hidden sm:inline">| {t("contactExpert")}</span>
              <div className="flex -space-x-2 overflow-hidden">
                <img className="h-6 w-6 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/1.jpg" alt="Expert 1" />
                <img className="h-6 w-6 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/men/2.jpg" alt="Expert 2" />
                <img className="h-6 w-6 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/3.jpg" alt="Expert 3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`w-full transition-all duration-300 ${scrolled ? "fixed top-0 shadow-md bg-white" : "relative"} ${showNav ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="max-w-screen-2xl mx-auto px-4 flex items-center justify-between py-2 md:py-4 bg-[#FAF9F6]">
          {/* Hamburger Icon */}
          <button className="md:hidden text-2xl" onClick={() => setMobileMenuOpen(true)}>
            &#9776;
          </button>

          {/* Logo */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <img
              src="/images/logo.jpg"
              alt="Logo"
              className={`transition-all duration-300 ${scrolled ? "h-8" : "h-10"} w-auto`}
            />
          </div>

          {/* Desktop Search + Icons */}
          <div className="hidden md:flex items-center gap-4 flex-1 ml-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search for products"
                className="w-full py-2 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <button className="hover:text-orange-500 flex items-center gap-1">
              <Shuffle className="w-6 h-6" />
            </button>
            <button className="hover:text-orange-500 flex items-center gap-1">
              <Heart className="w-6 h-6" />
              <span className="hidden sm:inline">Wishlist</span>
            </button>
            <a href="#" className="hover:text-black flex items-center gap-1">
              <User className="w-6 h-6" />
              <span className="hidden sm:inline">Login / Register</span>
            </a>

            <div className="relative">
              <button className="bg-black text-white px-3 py-1.5 rounded-full flex items-center gap-2 hover:bg-gray-800 transition text-sm">
                <ShoppingCart className="w-6 h-6" />
                <span>$0.00</span>
              </button>
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                0
              </span>
            </div>
          </div>

          {/* Mobile Cart Icon */}
          <div className="md:hidden relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">0</span>
          </div>
        </div>

        {/* Categories Bar (Desktop) */}
        <nav className="hidden md:block border-t border-gray-200 bg-[#FAF9F6]">
          <div className="max-w-screen-2xl px-4 py-3 flex items-center justify-between overflow-x-auto">
            <div className="flex gap-6 text-gray-600 text-sm whitespace-nowrap">
              <a href="#" className="flex items-center gap-1 hover:text-black">🪑 {t("chairs")}</a>
              <a href="#" className="flex items-center gap-1 hover:text-black">🍽 {t("tables")}</a>
              <a href="#" className="flex items-center gap-1 hover:text-black">🛋️ {t("sofas")}</a>
              <a href="#" className="flex items-center gap-1 hover:text-black">🪑 {t("armchairs")}</a>
              <a href="#" className="flex items-center gap-1 hover:text-black">🛏 {t("beds")}</a>
              <a href="#" className="flex items-center gap-1 hover:text-black">📦 {t("storage")}</a>
              <a href="#" className="flex items-center gap-1 hover:text-black">🧺 {t("textiles")}</a>
              <a href="#" className="flex items-center gap-1 hover:text-black">💡 {t("lighting")}</a>
              <a href="#" className="flex items-center gap-1 hover:text-black">🧸 {t("toys")}</a>
              <a href="#" className="flex items-center gap-1 hover:text-black">🪞 {t("decor")}</a>
            </div>

            <div className="bg-blue-100 text-blue-800 text-xs sm:text-sm px-4 py-1 rounded-md whitespace-nowrap ml-4">
              {t("freeShipping") || "Free shipping for all orders of $1,300"}
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4 overflow-y-auto transition-all duration-300">
          {/* Close */}
          <button className="text-2xl mb-4" onClick={() => setMobileMenuOpen(false)}>
            &times;
          </button>

          {/* Tabs */}
          <div className="flex justify-around border-b mb-4">
            <button
              className={`w-1/2 py-2 font-semibold ${activeTab === "categories" ? "border-b-2 border-orange-500" : "text-gray-500"}`}
              onClick={() => setActiveTab("categories")}
            >
              Categories
            </button>
            <button
              className={`w-1/2 py-2 font-semibold ${activeTab === "menu" ? "border-b-2 border-orange-500" : "text-gray-500"}`}
              onClick={() => setActiveTab("menu")}
            >
              Menu
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "categories" ? (
            <ul className="space-y-4 text-gray-700">
              <li>🪑 Chairs</li>
              <li>🍽 Tables</li>
              <li>🛋️ Sofas</li>
              <li>🪑 Armchairs</li>
              <li>🛏 Beds</li>
              <li>📦 Storage</li>
              <li>🧺 Textiles</li>
              <li>💡 Lighting</li>
              <li>🧸 Toys</li>
              <li>🪞 Decor</li>
            </ul>
          ) : (
            <ul className="space-y-4 text-gray-700">
              <li>Home</li>
              <li>Demos</li>
              <li>Blog</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Showrooms</li>
              <li>Gift Cards</li>
            </ul>
          )}
        </div>
      )}
    </header>
  );
}
