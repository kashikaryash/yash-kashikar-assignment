import { Search, ShoppingCart, User, Phone, Shuffle, Heart } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <header className="w-full bg-white text-sm border-b border-gray-200 pl-10 ">
      {/* Top Bar */}
      <div className="bg-gray-50 w-full p-2">
        <div className="max-w-screen-2xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <a href="#" className="text-gray-600 hover:text-black">{t("giftCards")}</a>
            <a href="#" className="text-gray-600 hover:text-black">{t("showrooms")}</a>
            <a href="#" className="text-gray-600 hover:text-black">{t("aboutUs")}</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 text-gray-600 text-sm">
              <Phone className="w-6 h-6 text-gray-500" />
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

      {/* Logo + Search */}
      <div className="w-full bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 py-4 flex items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/images/logo.jpg"
              alt="Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Search Bar */}
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder={t("search_products") || "Search for products"}
              className="w-full py-2 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-150"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Actions: Compare | Wishlist | Login | Cart */}
          <div className="flex items-center gap-4 text-gray-600 text-sm">

            {/* Compare Products */}
            <button className="hover:text-orange-500 flex items-center gap-1">
              <Shuffle className="w-6 h-6" />
            </button>

            {/* Wishlist */}
            <button className="hover:text-orange-500 flex items-center gap-1">
              <Heart className="w-6 h-6" />
              <span className="hidden sm:inline">{t("wishlist") || "Wishlist"}</span>
            </button>

            {/* Login/Register */}
            <a href="#" className="hover:text-black flex items-center gap-1">
              <User className="w-6 h-6" />
              <span className="hidden sm:inline">{t("loginRegister")}</span>
            </a>

            {/* Shopping Cart */}
            <div className="relative">
              <button className="bg-black text-white px-3 py-1.5 rounded-full flex items-center gap-2 hover:bg-gray-800 transition text-sm">
                <ShoppingCart className="w-6 h-6" />
                <span>$0.00</span>
              </button>
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">0</span>
            </div>

          </div>

        </div>
      </div>


      {/* Categories Nav */}
      <nav className="w-full">
        <div className="max-w-screen-2xl px-4 py-3 flex items-center justify-between overflow-x-auto">

          {/* Categories */}
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

          {/* Free Shipping Banner */}
          <div className="bg-blue-100 text-blue-800 text-xs sm:text-sm px-4 py-1 rounded-md whitespace-nowrap ml-4">
            {t("freeShipping") || "Free shipping for all orders of $1,300"}
          </div>

        </div>
      </nav>

    </header>
  );
}
