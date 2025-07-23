import { useState } from "react";
import { FaShareAlt, FaRegCommentDots } from "react-icons/fa";

const articles = [
  {
    image: "/images/blogs/blog-1.jpg", // Replace with actual paths
    category: "Decoration",
    date: "26 May 2023",
    title: "In the heart of Valencia",
    description:
      "As an alternative theory, (and because Latin scholars do this sort of thing) someone tracked down a ...",
  },
  {
    image: "/images/blogs/blog-2.jpg",
    category: "Furniture",
    date: "09 May 2023",
    title: "Ethimo mountain style",
    description:
      "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typeset...",
  },
  {
    image: "/images/blogs/blog-3.jpg",
    category: "Wooden accessories",
    date: "30 Apr 2023",
    title: "For clear thinking",
    description:
      "The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-tr...",
  },
  {
    image: "/images/blogs/blog-4.jpg",
    category: "Design trends",
    date: "18 Apr 2023",
    title: "The clean series",
    description:
      "So when is it okay to use lorem ipsum? First, lorem ipsum works well for staging. It’s like the prop...",
  },
];
const text = `
    Furniture manufacturers, as well as manufacturers of other home goods, are full of amazing offers: 
    we often come across both standard mass-produced products and unique creations – furniture from 
    professional craftsmen, which will be appreciated by true connoisseurs of beauty. We have selected 
    for you the best models from modern craftsmen who managed to ingeniously combine elegance, quality 
    and practicality in each product unit. Our assortment includes products from proven companies. Who 
    for many years of continuous joint work did not give reason to doubt their reliability and honesty. 
    All of them guarantee the high quality of their products, excellent operational characteristics, 
    attractive appearance of the products, a long period of use of the furniture, as well as safety.
  `;
const LatestArticles = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Latest articles</h2>
        <button className="border border-gray-300 px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition">
          Visit the Blog →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col justify-between">
            <div className="relative">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute bottom-2 left-3 flex items-center gap-2 text-white text-xs">
                <img
                  src="/images/blogs/avatar.png"
                  alt="Author"
                  className="w-6 h-6 rounded-full border"
                />
                <span className="text-sm">Mr. Mackay</span>
              </div>
              <div className="absolute bottom-2 right-3 flex items-center gap-3 text-white text-sm">
                <FaShareAlt />
                <div className="flex items-center gap-1">
                  <FaRegCommentDots />
                  <span className="text-xs bg-white text-black rounded-full px-1">0</span>
                </div>
              </div>
            </div>

            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">
                {article.category} / {article.date}
              </p>
              <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                {article.description}
              </p>
              <a href="#" className="text-orange-500 font-medium text-sm hover:underline">
                Continue reading
              </a>
            </div>
          </div>
        ))}
      </div>
      <section className="max-w-screen-xl mx-auto px-4 py-16 bg-[#FAF9F6] text-gray-700">
  <div className="space-y-8 max-w-5xl">
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        Online store with a wide selection of furniture and decor
      </h2>
      <p className="text-base leading-relaxed text-gray-600">
        Furniture is an invariable attribute of any room. It is they who give it the right atmosphere, making the space cozy and comfortable, creating favorable conditions for productive work or helping to relax after a hard day. More and more often, customers want to place an order in an online store, when you can sit down at the computer in your free time, arrange the furniture in the photo and calmly buy the furniture you like. The online store has a large catalog of furniture: both home and office furniture are available.
      </p>
    </div>

    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        Furniture production is a modern form of art
      </h2>
      <div className="text-gray-600 text-base leading-relaxed">
      <p>
        {expanded ? text : `${text.substring(0, 300)}...`}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 text-[black] font-medium hover:underline transition"
      >
        {expanded ? 'Read less' : 'Read more'}
      </button>
    </div>
    </div>
  </div>
</section>

    </section>
    
  );
  
};

export default LatestArticles;
