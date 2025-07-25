const categories = [
  { name: "Chairs", image: "/images/chairs.jpg", subtitle: "12 products" },
  { name: "Tables", image: "/images/tables.jpg", subtitle: "10 products" },
  { name: "Sofas", image: "/images/sofas.jpg", subtitle: "8 products" },
  { name: "Armchairs", image: "/images/armchairs.jpg", subtitle: "14 products" },
  { name: "Beds", image: "/images/beds.jpg", subtitle: "9 products" },
  { name: "Storage", image: "/images/storage.jpg", subtitle: "11 products" },
  { name: "Textiles", image: "/images/textiles.jpg", subtitle: "6 products" },
  { name: "Lighting", image: "/images/lighting.jpg", subtitle: "16 products" },
  { name: "Toys", image: "/images/toys.jpg", subtitle: "7 products" },
  { name: "Decor", image: "/images/decor.jpg", subtitle: "13 products" },
];

export default function CategoriesSection() {
  return (
    <section className="px-4 py-16 bg-[#FAF9F6]">
      <div className="max-w-screen-2xl mx-auto mb-10">
        <h2 className="text-3xl font-bold mb-2 text-left">Our categories</h2>
        <p className="text-gray-500 text-left">Lots of new products and product collections</p>
      </div>

      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="relative w-full aspect-square group overflow-hidden rounded-full shadow-sm"
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/50 transition-all duration-500 pointer-events-none rounded-full" />

              {/* Text content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                <div className="bg-white text-black px-4 py-1.5 rounded-full font-semibold text-sm shadow transition duration-300">
                  {cat.name}
                </div>
                {cat.subtitle && (
                  <div className="text-white text-xs mt-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {cat.subtitle}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
