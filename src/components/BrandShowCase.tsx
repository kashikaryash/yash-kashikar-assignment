const brands = [
  {
    name: "Elitis",
    location: "Talosa / France",
    image: "/images/brands/elitis.jpg",
    logo: "/images/logos/elitis-logo.png"
  },
  {
    name: "Hay",
    location: "Barcelona / Spain",
    image: "/images/brands/hay.jpg",
    logo: "/images/logos/hay-logo.png"
  },
  {
    name: "Kettal",
    location: "Barcelona / Spain",
    image: "/images/brands/kettal.jpg",
    logo: "/images/logos/kettal-logo.png"
  },
  {
    name: "Llardo",
    location: "Valencia / Spain",
    image: "/images/brands/lladro.jpg",
    logo: "/images/logos/lladro-logo.png"
  },
  {
    name: "Poliform",
    location: "Como / Italy",
    image: "/images/brands/poliform.jpg",
    logo: "/images/logos/poliform-logo.png"
  },
];


export default function BrandShowcase() {
    return (
        <section className="px-4 sm:px-8 py-12 bg-[#FAF9F6]">
            <div className="max-w-screen-xl mx-auto mb-8">
                <h2 className="text-3xl font-bold text-left mb-2">Shopping by brands</h2>
                <p className="text-gray-500 text-left">
                    Discover lots products from popular brands
                </p>
            </div>

            <div className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {brands.map((brand) => (
                    <div
                        key={brand.name}
                        className="relative rounded-xl overflow-hidden shadow-sm group cursor-pointer"
                    >
                        {/* Image */}
                        <img
                            src={brand.image}
                            alt={brand.name}
                            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                        />

                        {/* Overlay (semi-transparent black on hover) */}
                        <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 z-10"></div>

                        {/* Content (text + logo) */}
                        <div className="absolute inset-0 flex flex-col justify-start items-start p-4 z-20 text-white">
                            <img
                                src={brand.logo}
                                alt={`${brand.name} logo`}
                                className="w-10 h-10 rounded-full bg-white p-1 mb-2"
                            />
                            <div className="font-semibold text-lg">{brand.name}</div>
                            <div className="text-sm opacity-90">{brand.location}</div>
                        </div>
                    </div>

                ))}
            </div>
        </section>
    );
}
