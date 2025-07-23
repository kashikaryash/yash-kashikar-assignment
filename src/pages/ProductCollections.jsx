const collections = {
    column1: [
        { type: "image", src: "/images/collections/green-living.jpg" },
        { type: "image", src: "/images/collections/bed-side.jpg" },
    ],
    column2: [
        { type: "image", src: "/images/collections/orange-sofa.jpg" },
        {
            type: "text",
            title: "GLADØM",
            description:
                "The new common language will be more simple and regular than the existing languages",
        },
    ],
    column3: [
        { type: "video", src: "/images/collections/cups.mp4" },
        { type: "image", src: "/images/collections/bedroom.jpg" },
    ],
    column4: [
        {
            type: "text",
            title: "HÄLLAN",
            description:
                "The new common language will be more simple and regular than the existing languages",
        },
        { type: "image", src: "/images/collections/kitchen-light.jpg" },
    ],
    column5: [
        { type: "image", src: "/images/collections/black-chair.jpg" },
        { type: "image", src: "/images/collections/kids-room.jpg" },
    ],
};

const ProductCollections = () => {
    return (
        <section className="bg-[#FAF9F6] py-16 px-4 w-full">
            <div className="text-center mb-12 w-full">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    Product collections
                </h2>
                <p className="text-gray-500">
                    Explore product collections from our vendors
                </p>
            </div>

            <div className="w-full flex justify-center">
                <div className="w-full flex flex-col sm:flex-row gap-6 overflow-x-auto px-2">
                    {Object.values(collections).map((column, colIdx) => (
                        <div key={colIdx} className="flex flex-col gap-6 w-full sm:w-1/5">
                            {column.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="overflow-hidden rounded-xl bg-white shadow hover:shadow-md transition-all duration-300"
                                >
                                    {item.type === "image" && (
                                        <img
                                            src={item.src}
                                            alt={`Collection ${idx}`}
                                            className="w-full h-auto object-cover"
                                        />
                                    )}

                                    {item.type === "video" && (
                                        <video
                                            src={item.src}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-auto object-cover"
                                        />
                                    )}

                                    {item.type === "text" && (
                                        <div className="bg-[#e0e7e9] p-6 min-h-[200px] flex flex-col justify-center text-left">
                                            <h3 className="text-2xl font-bold mb-2 text-gray-800">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                {item.description}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCollections;
