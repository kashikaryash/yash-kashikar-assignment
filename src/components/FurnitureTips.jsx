import { useState } from "react";
import { PlayCircle, X } from "lucide-react";

export default function FurnitureTips() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="bg-[#fdfaf5] px-4 sm:px-8 py-16">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10 items-center relative">

        {/* Left - Chair */}
        <div className="relative">
          <img
            src="/images/furniture/chair-main.jpg"
            alt="Chair"
            className="relative z-10 w-full max-w-[400px] mx-auto"
          />
          {/* Decorative background shapes */}
          <div className="absolute left-0 bottom-[-30px] w-[300px] h-[200px] bg-[#e7e1d9] rounded-full z-0 rotate-12 blur-sm" />
          <div className="absolute left-[30px] bottom-[-40px] w-16 h-16 rounded-full bg-[#b6a493] opacity-50 blur-sm" />
        </div>

        {/* Right - Content */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Rules for choosing furniture</h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            <strong className="text-black">
              Whether living on your own or with a family, your living room is an important space.
            </strong>{" "}
            This room is where your family spends time together, and it is the room most of your guests will spend
            the majority of their time in...
          </p>

          {/* Bullet points */}
          <ul className="space-y-3 text-sm sm:text-base text-gray-800">
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 bg-[#f97316] rounded-full" />
              Choose items in a single color scheme and style
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 bg-[#f97316] rounded-full" />
              Consider the area of the room
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 bg-[#f97316] rounded-full" />
              Do not buy unnecessary pieces of furniture
            </li>
          </ul>

          {/* Video Preview Area */}
          <div className="relative mt-10 rounded-[60px] overflow-hidden shadow-lg max-w-lg">
            <img
              src="/images/furniture/preview.jpg"
              alt="Furniture Collection"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0  flex flex-col justify-center items-center text-white px-6">
              <p className="text-sm mb-1">How choose furniture</p>
              <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-4">SØLREM furniture collection</h3>
              <button
                className="flex items-center gap-2 text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
                onClick={() => setShowVideo(true)}
              >
                <PlayCircle size={20} /> Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative bg-black rounded-xl overflow-hidden w-full max-w-3xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/XHOmBV4js_E?autoplay=1"
              title="SØLREM Furniture Collection"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              className="absolute top-3 right-3 text-white bg-black bg-opacity-60 p-1 rounded-full hover:bg-opacity-90"
              onClick={() => setShowVideo(false)}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
