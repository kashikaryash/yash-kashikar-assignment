import { FiHeart } from "react-icons/fi";
import { Eye, ArrowLeftRight } from "lucide-react";

export default function FurnitureCollection() {
  const products = [
    {
      name: "Frames Upholstered",
      category: "Chairs",
      price: "$399.00",
      image: "/images/products/chairs.jpg",
    },
    {
      name: "Skygarden",
      category: "Lighting",
      price: "$780.00",
      image: "/images/products/skygarden.jpg",
    },
    {
      name: "Mags",
      category: "Sofas",
      price: "$3,620.00",
      image: "/images/products/sofa.jpg",
    },
  ];

  return (
    <section className="bg-[#f9f7f3] px-4 sm:px-8 py-16">
      <div className="max-w-screen-xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-2">Furniture collection of the week</h2>
          <p className="text-gray-500 text-base">The most popular products from the collection</p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          {/* Product Cards Section */}
          <div className="col-span-3">
            <div className="flex gap-6 overflow-x-auto pb-2">
              {products.map((item, i) => (
                <div
                  key={i}
                  className="min-w-[270px] bg-white rounded-2xl shadow-sm hover:shadow-md transition p-5 flex flex-col justify-between"
                  style={{ height: '420px' }} 
                >
                  <div className="flex justify-end mb-3">
                    <button className="text-gray-400 hover:text-red-500">
                      <FiHeart size={18} />
                    </button>
                  </div>

                  <div className="flex-grow flex items-center justify-center mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-36 object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <div className="text-base font-semibold text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.category}</div>
                    <div className="text-[#f97316] font-bold mt-2">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full h-[460px] rounded-2xl overflow-hidden shadow-md">
            <img
              src="/images/products/interior.jpg"
              alt="Interior"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-[45%] left-[20%] w-7 h-7 bg-white rounded-full flex items-center justify-center transition hover:scale-110 shadow-md">
              <span className="w-2.5 h-2.5 bg-gray-700 rounded-full" />
            </span>
            <span className="absolute top-[72%] left-[74%] w-7 h-7 bg-white rounded-full flex items-center justify-center transition hover:scale-110 shadow-md">
              <span className="w-2.5 h-2.5 bg-gray-700 rounded-full" />
            </span>
            <span className="absolute top-[65%] left-[30%] w-7 h-7 bg-white rounded-full flex items-center justify-center transition hover:scale-110 shadow-md">
              <span className="w-2.5 h-2.5 bg-gray-700 rounded-full" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
