import {FaFacebookF,FaTwitter,FaInstagram,FaYoutube} from "react-icons/fa";
const payments= ["visa", "mastercard", "paypal", "amex", "electron"]
export default function Footer() {
    const usefulLinks = ["About Us", "Contact Us", "Showrooms", "Blog", "Gift Cards"];
    const categories1 = ["Chair", "Tables", "Sofas", "Armchairs", "Beds"];
    const categories2 = ["Storage", "Textiles", "Lighting", "Toys", "Decor"];

    return (
        <footer className="bg-[#0f0f0f] text-gray-300">
            <div className="max-w-screen-xl mx-auto py-15 grid gap-10 md:grid-cols-4">
                <div>
                    <img src="/images/logo.jpg" alt="woodmart" className="h-15 mb-8" />
                    <h4 className="text-lg font-semibold text-white mb-4">Useful links</h4>
                    <ul className="space-y-3 text-sm">
                        {usefulLinks.map((l) => (
                            <li key={l} className="hover:text-white cursor-pointer">
                                {l}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:col-span-2 mt-22">
                    <h4 className="text-lg font-semibold text-white mb-4">Categories</h4>
                    <div className="grid grid-cols-2 gap-x-12 text-sm">
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

                <div className="space-y-8">
                    <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold text-white">Subscribe us:</h4>
                        <div className="flex items-center gap-4 text-xl ml-4 mb-4">
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
                            <img src="/images/badges/google-play.jpg" alt="Google Play" className="h-11 w-auto" />
                            <img src="/images/badges/app-store.png" alt="App Store" className="h-11 w-auto"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-[#1f1f1f]">
                <div className="max-w-screen-xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400 text-center">
                        <span className="font-semibold text-white">WOODMART</span> © 2025 CREATED BY{" "}
                        <span className="font-semibold">XTEMOS STUDIO</span>. PREMIUM E-COMMERCE SOLUTIONS.
                    </p>

                    <div className="flex gap-3">
                        {payments.map((p) => (<img key={p} src={`/images/payments/${p}.png`}alt={p}className="h-6"/>))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
