import { Eye, ArrowLeftRight } from 'lucide-react';
const products = [
    {
        name: 'Curve',
        category: 'Chairs',
        price: 320,
        rating: 4.5,
        image: '/images/curve.jpg',
    },
    {
        name: 'Can',
        category: 'Sofas',
        price: 2100,
        isNew: true,
        image: '/images/can.jpg',
    },
    {
        name: 'Belt',
        category: 'Armchairs',
        price: 680,
        colorOptions: ['#D1CCC0', '#DBDAD7', '#44403C'],
        image: '/images/belt.jpg',
    },
    {
        name: 'Ciro LR',
        category: 'Tables',
        price: 449,
        rating: 5,
        image: '/images/ciro.jpg',
    },
    {
        name: 'Soft Edge',
        category: 'Chairs',
        price: 440,
        colorOptions: ['#000000', '#D1CCC0', '#991B1B'],
        image: '/images/soft-edge.jpg',
    },
    {
        name: 'Palissade',
        category: 'Sofas',
        price: 1890,
        rating: 4.5,
        image: '/images/palissade.jpg',
    },
    {
        name: 'Bitta',
        category: 'Tables',
        price: 1519,
        originalPrice: 1688,
        discount: 10,
        image: '/images/bitta.jpg',
    },
    {
        name: 'Albert',
        category: 'Armchairs',
        price: 1600,
        image: '/images/albert.jpg',
    },
    {
        name: 'Navona',
        category: 'Sofas',
        price: 1669,
        originalPrice: 1950,
        discount: 10,
        image: '/images/navona.jpg',
    },
    {
        name: 'Aruda',
        category: 'Tables',
        price: 699,
        rating: 4.5,
        image: '/images/aruda.jpg',
    },
];

const WeeklyBestsellers = () => {
    return (
        <section className="py-12 px-4 max-w-screen-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Weekly bestsellers</h2>

            {/* Filters */}
            <div className="flex items-center gap-6 mb-8 text-gray-700 font-medium ml-240">
                {['All', 'Chairs', 'Sofas', 'Armchairs', 'Tables'].map((filter, index) => (
                    <button key={index}
                        className={`pb-1 border-b-2 ${filter === 'All' ? 'border-orange-500 text-black' : 'border-transparent hover:border-gray-300'
                            }`}>
                        {filter}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {products.map((product, idx) => (
                    <div
                        key={idx}
                        className="relative group bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                    >
                        {/* NEW or DISCOUNT TAG */}
                        {product.isNew && (
                            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full z-10">
                                NEW
                            </span>
                        )}
                        {product.discount && (
                            <span className="absolute top-2 left-2 bg-orange-200 text-orange-700 text-xs px-2 py-0.5 rounded-full z-10">
                                -{product.discount}%
                            </span>
                        )}

                        {/* Wishlist icon */}
                        <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500 z-10">
                            ♥
                        </button>

                        {/* IMAGE */}
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-36 object-contain mb-4"
                        />

                        {/* NAME & CATEGORY */}
                        <h3 className="font-semibold text-lg">{product.name}</h3>
                        <p className="text-sm text-gray-500">{product.category}</p>

                        {/* COLOR OPTIONS */}
                        {product.colorOptions && (
                            <div className="flex items-center gap-2 mt-2">
                                {product.colorOptions.map((color, i) => (
                                    <span
                                        key={i}
                                        className="w-3 h-3 rounded-full border border-gray-300"
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                        )}

                        {/* PRICE */}
                        <div className="mt-2">
                            {product.originalPrice ? (
                                <div className="flex gap-2 items-center">
                                    <span className="line-through text-gray-400 text-sm">${product.originalPrice.toFixed(2)}</span>
                                    <span className="text-orange-600 font-semibold">${product.price.toFixed(2)}</span>
                                </div>
                            ) : (
                                <span className="text-orange-600 font-semibold">${product.price.toFixed(2)}</span>
                            )}
                        </div>

                        {/* RATING */}
                        {product.rating && (
                            <div className="text-sm mt-1 text-yellow-500 flex items-center gap-0.5">
                                {product.rating} <span>⭐</span>
                            </div>
                        )}

                        {/* --- HOVER ACTIONS BELOW PRICE --- */}
                        <div className="mt-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                            <div className="flex items-center justify-between">
                                <button className="bg-orange-500 text-white text-sm px-4 py-2 rounded-full shadow hover:bg-orange-600 transition">
                                    Add to Cart
                                </button>
                                <div className="flex gap-3 ml-4">
                                    <button title="Quick View" className="text-gray-500 hover:text-black transition">
                                        <Eye size={20} />
                                    </button>
                                    <button title="Compare" className="text-gray-500 hover:text-black transition">
                                        <ArrowLeftRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                ))}
            </div>
        </section>
    );
};

export default WeeklyBestsellers;
