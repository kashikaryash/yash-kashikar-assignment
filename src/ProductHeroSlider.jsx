import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const sliderData = [
  {
    id: 1,
    title: 'Sectional fabric sofa',
    author: 'Ramón Esteve',
    price: '$3620',
    image: '/images/slider-2.jpg',
    avatar: '/images/ramon.jpg', // optional: replace with actual avatar if you want
    category: 'sofas',
  },
  {
    id: 2,
    title: 'Terracotta vase',
    author: 'Courtney Henry',
    price: '$182',
    image: '/images/slider-3.jpg',
    avatar: '/images/courtney.jpg',
    category: 'decor',
  },
  {
    id: 3,
    title: 'Upholstered chair',
    author: 'Esther Howard',
    price: '$468',
    image: '/images/slider-1.jpg',
    avatar: '/images/esther.jpg',
    category: 'chair',
  },
];

const ProductHeroSlider = () => {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-[700px]"
      >
        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-black/0 flex items-center px-16">
                <div className="text-black max-w-xl space-y-4">
                  <p className="text-sm font-medium flex items-center gap-2">
                    <span className="inline-block w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center">
                      🛋️
                    </span>
                    Discover more products in the{' '}
                    <span className="underline text-orange-500">{item.category}</span> category
                  </p>
                  <h2 className="text-4xl font-bold leading-snug">
                    {item.title} <br /> by{' '}
                    <span className="inline-flex items-center gap-2">
                      <img
                        src={item.avatar}
                        alt={item.author}
                        className="w-8 h-8 rounded-full"
                      />
                      {item.author}
                    </span>
                  </h2>
                  <div className="flex items-center gap-4 mt-4">
                    <button className="bg-white text-black px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-100">
                      Shop Now
                    </button>
                    <span className="text-xl font-semibold">{item.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductHeroSlider;
