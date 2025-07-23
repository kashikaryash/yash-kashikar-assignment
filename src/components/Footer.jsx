    import {
        FaFacebookF,
        FaTwitter,
        FaInstagram,
        FaYoutube,
    } from "react-icons/fa";

    export default function Footer() {
        const usefulLinks = ["About Us", "Contact Us", "Showrooms", "Blog", "Gift Cards"];
        const categories1 = ["Chair", "Tables", "Sofas", "Armchairs", "Beds"];
        const categories2 = ["Storage", "Textiles", "Lighting", "Toys", "Decor"];

        return (
            <footer className="bg-[#0f0f0f] text-gray-300">
                <div className="max-w-screen-xl mx-auto px-6 py-16 grid gap-10 lg:grid-cols-4">

                    <div>
                        <img src="/images/logo.jpg" alt="woodmart" className="h-10 mb-6" />
                    </div>

                    <div className="col-span-2 grid grid-cols-2 gap-8">
                        {/* Useful links */}
                        {/* Column 1: Logo + Useful Links */}
                        <div>

                            <div className="mt-10">
                                <h4 className="text-lg font-semibold text-white mb-4">Useful links</h4>
                                <ul className="space-y-3 text-sm">
                                    {usefulLinks.map((l) => (
                                        <li key={l} className="hover:text-white cursor-pointer">
                                            {l}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Column 2: Categories */}
                        <div className="col-span-1 mt-10">
                            <h4 className="text-lg font-semibold text-white mb-4">Categories</h4>
                            <div className="grid grid-cols-2 gap-x-8 text-sm">
                                <ul className="space-y-3">
                                    {categories1.map((c) => (
                                        <li key={c} className="hover:text-white cursor-pointer">
                                            {c}
                                        </li>
                                    ))}
                                </ul>
                                <ul className="space-y-3">
                                    {categories2.map((c) => (
                                        <li key={c} className="hover:text-white cursor-pointer">
                                            {c}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="space-y-8">
                        {/* Social */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Subscribe us:</h4>
                            <div className="flex items-center gap-4 text-xl">
                                <a href="#" className="hover:text-white"><FaFacebookF /></a>
                                <a href="#" className="hover:text-white"><FaTwitter /></a>
                                <a href="#" className="hover:text-white"><FaInstagram /></a>
                                <a href="#" className="hover:text-white"><FaYoutube /></a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-white mb-2">Download App on Mobile:</h4>
                            <p className="text-sm mb-4">15% discount on your first purchase</p>
                            <div className="flex gap-4">
                                <img
                                    src="/images/badges/google-play.jpg"
                                    alt="Google Play"
                                    className="h-11 w-auto"
                                />
                                <img
                                    src="/images/badges/app-store.png"
                                    alt="App Store"
                                    className="h-11 w-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom strip */}
                <div className="border-t border-[#1f1f1f]">
                    <div className="max-w-screen-xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-400">

                            <span className="font-semibold text-white">WOODMART</span> © 2025 created by{' '}
                            <span className="font-semibold">XTEMOS STUDIO</span>. Premium e-commerce solutions.


                        </p>

                        {/* Payment icons */}
                        <div className="flex gap-3">
                            {["visa", "mastercard", "paypal", "amex"].map((p) => (
                                <img
                                    key={p}
                                    src={`/images/payments/${p}.png`}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = `/images/payments/${p}.png`;
                                    }}
                                    alt={p}
                                    className="h-6"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
