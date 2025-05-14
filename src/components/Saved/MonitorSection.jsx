import 'swiper/css';
import 'swiper/css/navigation';
import monitorCardBg from '../assets/monitor-card.webp';

const MonitorSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left side - Content */}
        <div className="w-full md:w-1/2">
          <span className="text-emerald-500 font-semibold">
            MONITOR
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6 md:w-4/5">
            Introducing best mobile carousels
          </h2>
          <p className="text-gray-600 mb-8 md:w-4/5">
            Before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.
          </p>
          <a 
            href="#" 
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            Learn more about monitoring
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
        </div>

        {/* Right side - Swiper with background */}
        <div className="w-full md:w-1/2 relative">
          <div className="p-4">
            <img 
              src={monitorCardBg}
              alt="Dashboard statistics"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MonitorSection
