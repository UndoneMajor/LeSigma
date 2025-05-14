import scheduleImage from '../assets/stats.webp'

const ScheduleSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        <div className="w-full md:w-1/2">
          <img 
            src={scheduleImage} 
            alt="Statistics dashboard" 
            className="w-full h-auto"
          />
        </div>

        <div className="w-full md:w-1/2">
          <span className="text-orange-500 font-semibold">
            SCHEDULE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6">
            Streamline Your Business <br />
            With Smart Scheduling Solutions
          </h2>
          <p className="text-gray-600 mb-8">
            Take control of your time and boost productivity with our intelligent scheduling system. Automate appointments, manage team availability, and deliver exceptional customer experiences through seamless calendar management.
          </p>
          <a 
            href="#" 
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            Explore scheduling features
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
      </div>
    </section>
  )
}

export default ScheduleSection
