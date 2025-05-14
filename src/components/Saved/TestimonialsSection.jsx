import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const reviews = [
  {
    id: 1,
    name: "Robin Ayala Doe",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
  },
  {
    id: 2,
    name: "John De marli",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
  },
  {
    id: 3,
    name: "Rowhan Smith",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
  },
  {
    id: 5,
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
  },
  {
    id: 6,
    name: "Emma Wilson",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
  },
]

const ReviewCard = ({ name, image, text }) => (
  <div className="text-center bg-white p-6 rounded-xl h-full flex flex-col">
    <div className="w-24 h-24 mx-auto mb-6">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover rounded-full"
      />
    </div>
    <div className="flex justify-center mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-blue-600 text-lg">★</span>
      ))}
    </div>
    <h3 className="font-semibold text-xl mb-4">{name}</h3>
    <p className="text-gray-600 leading-relaxed">{text}</p>
  </div>
)

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 px-8 max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        What our happy client say
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Things that make it the best place to start trading
      </p>
    </div>

    <div className="relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="md:mb-12"
      >
        {reviews.map(item => (
          <SwiperSlide key={item.id} className="h-full md:py-10 py-6">
            <ReviewCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-10 mt-10">
        <button className="swiper-button-prev-custom w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-500 hover:text-white transition">
          <BsChevronLeft className="w-6 h-6" />
        </button>
        <button className="swiper-button-next-custom w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-500 hover:text-white transition">
          <BsChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  </section>
)

export default TestimonialsSection
  